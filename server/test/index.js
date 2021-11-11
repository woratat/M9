import bcrypt from "bcrypt";

const saltRound = 10;
const salt = bcrypt.genSaltSync(saltRound);
const hash = bcrypt.hashSync("123", salt);

console.log(hash);
