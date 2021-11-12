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

const getPostDB = (content, column) => {
  return new Promise(async (resolve, reject) => {
    try {
      const postImage = await post.findOne({ where: { [column]: content } });

      return resolve(postImage);
    } catch (error) {
      return reject(error);
    }
  });
};

export { postImageDB, getPostDB };
