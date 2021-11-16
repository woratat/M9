import service from "../service";

const {postlikeService , getlikeService } = service.like;

const postLikeController =  async (req,res) =>{
    const content = req.body;

  try {
    const like = await postlikeService(content);

    if (like.error) {
      return res.status(400).json({
        message: like.message,
      });
    } else {
      return res.status(200).json({
        message: like.message,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getlikeController = async (req, res) => {
    const content = {
      postID: req.query.postID,
      accountID: req.query.accountID,
    }
    try {
      const Likes = await getlikeService(content);
  
      return res.status(200).json(Likes);
    } catch (error) {
      console.log(error.message);
      return res.sendStatus(500);
    }
  };

export { postLikeController , getlikeController };