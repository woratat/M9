import helper from "../helper";
import lodash from "lodash";

const { postImageDB } = helper.post;
const postImageService = async (message, image) => {
  try {
    if (lodash.isEmpty(message) || lodash.isEmpty(image)) {
      return {
        error: true,
        message: "Please fill in caption or select an image.",
      };
    } else {
      const content = { message, image, uri };
      const content = await postImageDB(content);
      return {
        error: false,
        message: "Post success!",
        data: content,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export { postImageService };
