import db from "../config/database";

const account = db.account;
const getAccountDetailDB = (content, column) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await account.findOne({ where: { [column]: content } });

      return resolve(user.dataValues);
    } catch (error) {
      return reject(error);
    }
  });
};

export { getAccountDetailDB };
