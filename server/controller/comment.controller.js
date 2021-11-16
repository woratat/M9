import service from "../service";

const { postCommentService, getCommentService, deleteCommentService } = service.comment;

const postCommentController = async (req, res) => {
  const content = req.body;

  try {
    const newComment = await postCommentService(content);

    if (newComment.error) {
      return res.status(400).json({
        message: newComment.message,
      });
    } else {
      return res.status(200).json({
        message: newComment.message,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getCommentController = async (req, res) => {
  const content = {
    postID: req.query.postID,
  }
  try {
    const comments = await getCommentService(content);

    return res.status(200).json(comments);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const deleteCommentController = async (req, res) => {
  const content = {
    commentID: req.query.commentID,
  }
  try {
    const comments = await deleteCommentService(content);

    return res.status(200).json(comments);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

export { postCommentController, getCommentController, deleteCommentController };
