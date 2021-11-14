import { Router } from "express";
import passport from "passport";
import controller from "../controller";

//middleware 
import {uploadFile} from "../middleware/upload";

const { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController } = controller.post;

const route = Router();

route.post(
  "/post",
  uploadFile.single("file"), 
  uploadFiles
);

route.get("/post", getAllPostController);

route.get("/user", getUserPostController);

route.put("/like", updateLike);

route.put("/unlike", updateUnlike);

export default route;
