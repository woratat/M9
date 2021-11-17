import db from "../config/database";
import sequelize from "sequelize";

const {Op} = sequelize;

const friend = db.friend;

const addFriendDB = (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const addRequest = await friend.create(content);
      return resolve(addRequest);
    } catch (error) {
      return reject(error);
    }
  });
};

const getRequestDB = (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const getRequest = await friend.findOne({where: {[Op.and]: [{ accountID: content.accountID }, { accountFriendID: content.accountFriendID }]}});
      return resolve(getRequest);
    } catch (error) {
      return reject(error);
    }
  });
};
const UpdateRequestDB = (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const getRequest = await friend.update({status: content.status},{where:{friendID: content.friendID}});
      return resolve(getRequest);
    } catch (error) {
      return reject(error);
    }
  });
};


export {
    addFriendDB,
    getRequestDB,
    UpdateRequestDB,
};
