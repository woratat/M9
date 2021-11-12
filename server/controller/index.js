import { LoginBasicController, createAccountController, loginJWTController } from "./account.controller";
import { uploadFiles } from "./post.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController },
  post: { uploadFiles },
};

export default controller;
