import { LoginBasicController, createAccountController, loginJWTController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController } from "./post.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController },
  post: { uploadFiles, updateLike, getAllPostController },
};

export default controller;
