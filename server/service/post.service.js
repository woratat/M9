import helper from "../helper";
import lodash from "lodash";

const { postImageDB } = helper.post;
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

const getPostService = async (username, password) => {
  try {
    
  } catch (error) {
    throw new Error(error);
  }
};

export { postImageService, getPostService };
