import { Router } from "express";
import passport from "passport";
import controller from "../controller";

//middleware 
import {uploadFile} from "../middleware/upload";

const { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController, deletePostController } = controller.post;

const route = Router();

route.post(
  "/post",
  uploadFile.single("file"), 
  uploadFiles
);

route.get("/post", getAllPostController);

route.get("/user", getUserPostController);

route.get("/like", getLikeController);

route.put("/like", updateLike);

route.put("/unlike", updateUnlike);

route.delete("/post", deletePostController);

export default route;
