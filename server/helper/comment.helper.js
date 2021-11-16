import database from "../config/database";

const Comment = database.comment;

const postCommentDB= async (content) => {
  const data = {
    message: content.message,
    postID: content.post_id,
    accountID: content.accountID
  }
    return new Promise(async (resolve, reject) => {
      try {
        const postComment = await Comment.create(data);
  
        return resolve(postComment);
      } catch (error) {
        return reject(error);
      }
    });
  };

const getCommentDB = (postID) =>{
  return new Promise(async (resolve, reject)=>{
    try {
      const getComments = await Comment.findAll({where: {postID: postID}});

      return resolve(getComments);
    } catch (error) {
      return reject(error);
    }
  });
};

export { postCommentDB , getCommentDB };