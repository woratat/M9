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
      const putLike = await post.increment('like', {by: 1, where: {post_id: content.postID}});
      return resolve(putLike);
    } catch (error) {
      return reject(error);
    }
  });
}

const putUnlikeDB = async (content) => {
  return new Promise(async (resolve, reject) => {
    try {
      const putUnlike = await post.decrement('like', {by: 1, where: {post_id: content.postID}});
      return resolve(putUnlike);
    } catch (error) {
      return reject(error);
    }
  });
}

export { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB };
