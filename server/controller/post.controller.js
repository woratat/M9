import fs from "fs";
import service from "../service";
import path from "path";

const { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService } =
  service.post;

const uploadFiles = async (req, res) => {
  try {
    const content = {
      message: req.body.message,
      file: req.file,
      account_id: req.body.acID,
      location: req.body.location,
    };

    if (req.file == undefined) {
      console.log("File not found.");
      return res.status(400).json({ message: req.post.message });
    } else {
      var encoding = "base64";
      var data = fs
        .readFileSync(
          path.join(
            path.resolve("./") +
              "\\resources\\assets\\uploads\\" +
              req.file.filename
          )
        )
        .toString(encoding);
      var uri = data;
      content.uri = uri;
      content.imageName = req.file.filename;

      const timeElapsed = Date.now();
      const today = new Date(timeElapsed).toUTCString();
      const newDate = today.split(' ').slice(0, 5).join(' ');
      content.date = newDate;

      const newPost = await postImageService(content);

      if (newPost.error) {
        return res.status(400).json({
          message: newPost.message,
        });
      } else {
        return res.status(200).json({
          message: newPost.message,
          content: newPost.data,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const updateLike = async (req, res) => {
  try {
    const content = {
      like: 1,
      postID: req.body.postID,
    };

    const newLike = await putLikeService(content);

    return res.status(200).json({
      like: content.like,
      postID: content.postID,
    });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const updateUnlike = async (req, res) => {
  try {
    const content = {
      like: 1,
      postID: req.body.postID,
    };

    const newLike = await putUnlikeService(content);
    return res.status(200).json({
      like: newLike,
      postID: content.postID,
    });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getLikeController = async (req, res) => {
  try {
    const content = {
      postID: req.query.postID,
    };

    const newLike = await getLikeService(content);

    return res.status(200).json({
      like: newLike.data.like
    });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getAllPostController = async (req, res) => {
  try {
    const allPost = await getAllPostService();

    return res.status(200).json({
      post: allPost,
    });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getUserPostController = async (req, res) => {
  const content = {
    account_id: req.query.id
  }
  try {
    const userPost = await getUserPostService(content);

    return res.status(200).json({
      post: userPost,
    });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

export { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController };
