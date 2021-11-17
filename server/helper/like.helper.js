import db from "../config/database";

const like = db.like;

const postLikeDB = async (content) => {
  const data = {
    like: content.like,
    postID: content.postID,
    accountID: content.accountID,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const postlike = await like.create(data);

      return resolve(postlike);
    } catch (error) {
      return reject(error);
    }
  });
};
const getLikeDB = (postID, accountID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const getLike = await like.findAll({
        where: { postID: postID, accountID: accountID },
      });

      return resolve(getLike);
    } catch (error) {
      return reject(error);
    }
  });
};

const getPostlikeDB = (postID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const getLike = await like.findAll({
        where: { postID: postID },
      });

      return resolve(getLike);
    } catch (error) {
      return reject(error);
    }
  });
};

const deleteLikeDB = (postID, accountID) => {
  return new Promise(async (resolve, reject) => {
    try {
      const deltLike = await like.destroy({
        where: { postID: postID, accountID: accountID },
      });

      return resolve(deltLike);
    } catch (error) {
      return reject(error);
    }
  });
};

export { postLikeDB, getLikeDB, getPostlikeDB , deleteLikeDB };
