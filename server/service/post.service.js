import helper from "../helper";
import lodash from "lodash";

const { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB, getUserPostDB, getAllLikeDB } = helper.post;

const postImageService = async (content) => {
  try {
    if (lodash.isEmpty(content.message) || lodash.isEmpty(content.uri)) {
      return {
        error: true,
        message: "Please fill in caption or select an image.",
      };
    } else {
      const postData = {
        message: content.message,
        image: content.uri,
        imageName: content.imageName,
        date: content.date,
        accountID: content.account_id,
        locationID: content.location,
      };
      const post = await postImageDB(postData);
      return {
        error: false,
        message: "Post success!",
        data: post,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getAllPostService = async () => {
  try {
    const post = await getAllPostDB();
    return {
      data: post
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getUserPostService = async (content) => {
  try {
    const post = await getUserPostDB(content);
    return {
      data: post
    }
  } catch (error) {
    throw new Error(error);
  }
};

const putLikeService = async (content) => {
  try {
    const postData = {
      like: content.like,
      postID: content.postID,
    };
    const like = await putLikeDB(postData);
    return {
      error: false,
      message: "Liked!",
      data: like,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const putUnlikeService = async (content) => {
  try {
    const postData = {
      like: content.like,
      postID: content.postID,
    };
    const unlike = await putUnlikeDB(postData);
    return {
      error: false,
      message: "Liked!",
      data: unlike,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const getLikeService = async (content) => {
  try {
    const postData = {
      postID: content.postID,
    };
    const like = await getAllLikeDB(postData);
    return {
      error: false,
      data: like,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService };
