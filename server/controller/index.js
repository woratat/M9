import { LoginBasicController, createAccountController } from "./account.controller";
import { uploadFiles } from "./post.controller";

const controller = {
  account: { LoginBasicController, createAccountController },
  post: { uploadFiles },
};

export default controller;
