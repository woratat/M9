import { Router } from "express";
import passport from "passport";
import controller from "../controller";

import upload from "../middleware/upload";
// const { LoginBasicController } = controller.account;

const route = Router();
route.get(
  "/post",
  upload.single("file"), 
  uploadController.uploadFiles
);

export default route;
