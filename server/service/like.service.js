import helper from "../helper";
import lodash from "lodash";

const { postLikeDB, getLikeDB , deleteLikeDB , getPostlikeDB } = helper.like;

const postlikeService = async (content) => {
  const { like, postID, accountID } = content;
  if (
    lodash.isEmpty(content.like) ||
    lodash.isEmpty(content.postID) ||
    lodash.isEmpty(content.accountID)
  ) {
    const postData = {
      like: content.like,
      postID: content.postID,
      accountID: content.accountID,
    };
    const post = await postLikeDB(postData);

    return {
      error: false,
      message: "Post success!",
      data: post,
    };
    
  } else {
    return {
      error: true,
      message: "Please fill data.",
    };
  }
};

const getlikeService = async (content) => {
    const { postID , accountID } = content;
    try {
      const likes = await getLikeDB(postID,accountID);
  
      return likes;
    } catch (error) {
      throw new Error(error);
    }
  };
const getPostLikeService = async (content) => {
  const { postID  } = content;
    try {
      const likes = await getPostlikeDB(postID);
  
      return likes;
    } catch (error) {
      throw new Error(error);
    }
}

  const deleteLikeService = async (content) => {
    const { postID, accountID } = content;
    try {
      if (lodash.isEmpty(postID) || lodash.isEmpty(accountID)) {
        return {
          error: true,
          message: "Comment id not found.",
        };
      } else {
        const delLike = await deleteLikeDB(postID, accountID);
        return {
          error: false,
          message: "Comment has been deleted.",
          data: delLike,
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  export { postlikeService , getlikeService , deleteLikeService  , getPostLikeService };