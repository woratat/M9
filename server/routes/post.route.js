import { Router } from "express";
import passport from "passport";
import controller from "../controller";

//middleware 
import upload from "../middleware/upload";

const { uploadFiles } = controller.post;

const route = Router();
route.get(
  "/post",
  upload.single("file"), 
  uploadFiles
);

export default route;
