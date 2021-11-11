import lodash from "lodash";

const isPassword = async (password) => {
    if (!lodash.isEmpty(password)) {
        const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
        return check.test(password);
    } else {
        return false;
    }
}

export { isPassword };

//test
//12345678-Tat