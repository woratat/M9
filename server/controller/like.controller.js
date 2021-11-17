import service from "../service";

const { postlikeService, getlikeService  , deleteLikeService , getPostLikeService } = service.like;

const postLikeController = async (req, res) => {
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
  };
  try {
    const Likes = await getlikeService(content);

    return res.status(200).json(Likes);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getPostlikeController = async (req, res) => {
  const content = {
    postID: req.query.postID,
  };
  try {
    const Likes = await getPostLikeService(content);

    return res.status(200).json(Likes);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const deleteLikeController = async (req, res) => {
  const content = {
    postID: req.query.postID,
    accountID: req.query.accountID,
  };
  try {
    const delLike = await deleteLikeService(content);

    return res.status(200).json(delLike);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};
export { postLikeController, getlikeController , deleteLikeController , getPostlikeController };
