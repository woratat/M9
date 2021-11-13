import fs from "fs";
import service from "../service";
import path from "path";

const { postImageService, getAllPostService, putLikeService } = service.post;
var totalLike = 0;

const uploadFiles = async (req, res) => {
  try {
    const content = {
      message: req.body.message,
      file: req.file,
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
    totalLike++;

    const content = {
      like: totalLike,
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

const getAllPostController = async (req, res) => {
  try {
    const allPost = await getAllPostService();

    return res.status(200).json({
      post: allPost
    });
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
}

export { uploadFiles, updateLike, getAllPostController };
