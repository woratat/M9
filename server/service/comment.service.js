import helper from "../helper";
import lodash from "lodash";
import jwt from "jsonwebtoken";

const { postCommentDB } = helper.comment;

const postCommentService = async (content) => {
  const { message } = content;
  if (lodash.isEmpty(message)) {
    return {
      error: true,
      message: "Please fill data.",
    };
  } else {
        const newContent = { ...content };
        const newComment = await postCommentDB(newContent);
        return {
          error: false,
          message: "Comment Sucsess.",
          data: newComment,
        }

    
  }
};

export { postCommentService };
