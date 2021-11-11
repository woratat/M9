import lodash from "lodash";

const isPassword = async (password) => {
    if (!lodash.isEmpty(password)) {
        const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!_-])[A-Za-z\d!_-]{8,}$/g;
        return check.test(password);
    } else {
        return false;
    }
}

export { isPassword };