import helper from "../helper";
import lodash from "lodash";
import bcrypt from "bcrypt";

const { getAccountDetailDB } = helper.account;
const LoginBasicService = async (username, password) => {
    try {
        const user = await getAccountDetailDB(username, 'username');
        const checkPassword = await bcrypt.compare(password, user.password)
        if(lodash.isEmpty(user) || !checkPassword) {
            return {
                error: true,
                message: "Username and password do not match",
            }
        } else {
            return {
                error: false,
                message: "Login successful",
                data: user,
            }
        }
    } catch (error) {
        throw new Error(error)
    }
}

export {LoginBasicService};