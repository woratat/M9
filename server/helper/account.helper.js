import db from "../config/database";
import sequelize from 'sequelize';

const account = db.account;
const {Op} = sequelize; 

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

const createUserAccountDB = async (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newAccount = await account.create(content);
      return resolve(newAccount);
    } catch (error) {
      return reject(error);
    }
  });
}

const getUserOrEmailAccountDB = async (username, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkAccount = await account.findOne({where:{[Op.or]:[{username: username},{email: email}] }});
      return resolve(checkAccount);
    } catch (error) {
      return reject(error);
    }
  })
}

export { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB };
