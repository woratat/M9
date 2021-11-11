import helper from "../helper";
import lodash from "lodash";

const { postImageDB } = helper.post;
const postImageService = async (message, image) => {
  try {
    if (lodash.isEmpty(message) || lodash.isEmpty(image)) {
      return {
        error: true,
        message: "Please fill in caption or select image.",
      };
    } else {
      const data = { message: message, image: image };
      const post = await postImageDB(data);
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

export { postImageService };
