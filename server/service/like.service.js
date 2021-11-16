import helper from "../helper";
import lodash from "lodash";

const { postLikeDB, getLikeDB } = helper.like;

const postlikeService = async (content) => {
  const { like, postID, accountID } = content;
  if (
    lodash.isEmpty(like) ||
    lodash.isEmpty(postID) ||
    lodash.isEmpty(accountID)
  ) {
    return {
      error: true,
      message: "Please fill data.",
    };
  } else {
    const postData = {
      like: content.like,
      postID: content.post_id,
      accountID: content.accountID,
    };
    const post = await postLikeDB(postData);

    return {
      error: false,
      message: "Post success!",
      data: post,
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