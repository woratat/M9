import helper from "../helper";
import lodash from "lodash";

const { postLikeDB, getLikeDB } = helper.like;

const postlikeService = async (content) => {
  const { like, postID, accountID } = content;
  console.log(content.like,content.postID,content.accountID)
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
    const { postID } = content;
    try {
      const likes = await getLikeDB(postID);
  
      return likes;
    } catch (error) {
      throw new Error(error);
    }
  };

  export { postlikeService , getlikeService };