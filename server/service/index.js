import { LoginBasicService, createAccountService, loginJWTService } from "./account.service";
import { postImageService } from "./post.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService },
  post: { postImageService },
};

export default service;
