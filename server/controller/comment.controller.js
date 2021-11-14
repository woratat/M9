import service from "../service";

const { postCommentService }=service.comment;

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

export {postCommentController};