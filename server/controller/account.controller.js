import service from "../service";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import util from "util";

const readFile = util.promisify(fs.readFile);
const { createAccountService } = service.account;

const LoginBasicController = async (req, res) => {
  if (req.user.error) {
    return res.status(400).json({ message: req.user.message });
  } else {
    const { username, accountID, name } = req.user.data;
    const privateKey = await readFile(
      path.resolve("./") + "\\config\\key\\jwtRS256.key"
    );
    const token = jwt.sign({ username, accountID, name }, privateKey, {
      algorithm: "RS256",
      expiresIn: "1d",
    });
    return res.status(200).json({ token: token, username });
  }
};

const createAccountController = async (req, res) => {
  const content = req.body;

  try {
    const newAccount = await createAccountService(content);

    if (newAccount.error) {
      return res.status(400).json({
        message: newAccount.message,
      });
    } else {
      return res.status(200).json({
        message: newAccount.message,
        content: newAccount.data,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const loginJWTController = async (req, res) => {
  const { username, accountID, name } = req.user.data;
    const privateKey = await readFile(
      path.resolve("./") + "\\config\\key\\jwtRS256.key"
    );
    const token = jwt.sign({ username, accountID, name }, privateKey, {
      algorithm: "RS256",
      expiresIn: "1d",
    });
    return res.status(200).json({ token: token, username });
}

export { LoginBasicController, createAccountController, loginJWTController};
