import { LoginBasicService, createAccountService, loginJWTService } from "./account.service";
import { postImageService, getAllPostService, putLikeService } from "./post.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService },
  post: { postImageService, getAllPostService, putLikeService },
};

export default service;
