import fs from "fs";
import service from "../service";
import path from "path";

const { postImageService } = service.post;

const uploadFiles = async (req, res) => {
  try {
    const content = {
      message: req.body.message,
      file: req.file
    }

    if (req.file == undefined) {
      console.log("File not found.");
      return res.status(400).json({ message: req.post.message });
    } else {
      var encoding = "base64";
      var data = fs
        .readFileSync(
          path.join(path.resolve('./') + "\\resources\\assets\\uploads\\" + req.file.filename)
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

export { uploadFiles };
