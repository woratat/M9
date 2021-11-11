import db from "../config/database";

const post = db.post;
const postImageDB = (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const postImage = await post.create(content);

      return resolve(user.dataValues);
    } catch (error) {
      return reject(error);
    }
  });
};

export { postImageDB };
