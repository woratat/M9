import { Router } from "express";
import passport from "passport";
import controller from "../controller";

//middleware 
import {uploadFile} from "../middleware/upload";

const { uploadFiles } = controller.post;

const route = Router();
route.post(
  "/",
  uploadFile.single("file"), 
  uploadFiles
);

export default route;
