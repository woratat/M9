import database from "../config/database";

const Comment = database.comment;

const postCommentDB= async (content) => {
    return new Promise(async (resolve, reject) => {
      try {
        const postComment = await Comment.create(content);
  
        return resolve(postComment);
      } catch (error) {
        return reject(error);
      }
    });
  };

export { postCommentDB };