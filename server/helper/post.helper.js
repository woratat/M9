import db from "../config/database";

const post = db.post;

const postImageDB = async (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const postImage = await post.create(content);

      return resolve(postImage);
    } catch (error) {
      return reject(error);
    }
  });
};

const getAllPostDB = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const getImage = await post.findAll();
      return resolve(getImage);
    } catch (error) {
      return reject(error);
    }
  });
};

const putLikeDB = async (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const putLike = await post.update({ like: content.like }, {where: {postID: content.postID}});
      return resolve(putLike);
    } catch (error) {
      return reject(error);
    }
  });
}

export { postImageDB, getAllPostDB, putLikeDB };
