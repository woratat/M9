import helper from "../helper";
import lodash from "lodash";

const { postCommentDB, getCommentDB, deleteCommentDB } = helper.comment;

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
    };
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

const deleteCommentService = async (content) => {
  const { commentID } = content;
  try {
    if (lodash.isEmpty(commentID)) {
      return {
        error: true,
        message: "Comment id not found.",
      };
    } else {
      const delComment = await deleteCommentDB(commentID);
      return {
        error: false,
        message: "Comment has been deleted.",
        data: delComment,
      }
    }
  } catch (error) {
    throw new Error(error);
  }
};

export { postCommentService, getCommentService, deleteCommentService };
