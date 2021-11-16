import helper from "../helper";
import lodash from "lodash";


const { postCommentDB , getCommentDB } = helper.comment;

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
const getCommentService = async (content) => {
  const { postID } = content;
  try {
    const comments = await getCommentDB(postID);

    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

export { postCommentService , getCommentService };
