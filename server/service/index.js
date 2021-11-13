import { LoginBasicService, createAccountService, loginJWTService } from "./account.service";
import { postImageService, getAllPostService, putLikeService } from "./post.service";
import { getLocationService, postLocationService } from "./location.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService },
  post: { postImageService, getAllPostService, putLikeService },
  locations: { getLocationService, postLocationService},
};

export default service;
