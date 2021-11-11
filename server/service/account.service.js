import helper from "../helper";
import lodash from "lodash";
import bcrypt from "bcrypt";
import validator from "validator";

import {isPassword} from "../validation";

const { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB } =
  helper.account;

const LoginBasicService = async (username, password) => {
  try {
    const user = await getAccountDetailDB(username, "username");
    const checkPassword = await bcrypt.compare(password, user.password);
    if (lodash.isEmpty(user) || !checkPassword) {
      return {
        error: true,
        message: "Username and password do not match",
      };
    } else {
      return {
        error: false,
        message: "Login successful",
        data: user,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const loginJWTService = async (content) => {
  try {
  } catch (error) {
    throw new Error(error);
  }
};

const createAccountService = async (content) => {
  const { username, email, password } = content;

  if (
    lodash.isEmpty(username) ||
    lodash.isEmpty(email) ||
    lodash.isEmpty(password)
  ) {
    return {
      error: true,
      message: "Please fill all data.",
    };
  } else if (!validator.isEmail(email)) {
    return {
      error: true,
      message: "Please enter valid email address.",
    };
  } else if (!isPassword(password)) {
    return {
      error: true,
      message: "Error password",
    };
  } else {
    try {
      const checkUsernameOrEmail = await getUserOrEmailAccountDB(
        username,
        email
      );

      if (!lodash.isEmpty(checkUsernameOrEmail)) {
        if (checkUsernameOrEmail.username == username) {
          return {
            error: true,
            message: "Username is already in use.",
          };
        } else {
          return {
            error: true,
            message: "Email is already in use.",
          };
        }
      } else {
        const newContent = { ...content, typeAccountID: 2 };
        const newAccount = await createUserAccountDB(newContent);
        return {
          error: false,
          message: "Your account have been created.",
          data: newAccount,
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};

export { LoginBasicService, loginJWTService, createAccountService };
