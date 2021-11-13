import { Router } from "express";
import passport from "passport";
import controller from "../controller";

//middleware 
import {uploadFile} from "../middleware/upload";

const { uploadFiles, updateLike, getAllPostController } = controller.post;

const route = Router();
route.post(
  "/post",
  uploadFile.single("file"), 
  uploadFiles
);
route.put("/like", updateLike);
route.get("/post", getAllPostController);

export default route;
