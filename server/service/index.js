import { LoginBasicService, createAccountService, loginJWTService, getUserAccountService } from "./account.service";
import { postImageService, getAllPostService, putLikeService, putUnlikeService } from "./post.service";
import { getLocationService, postLocationService } from "./location.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService, getUserAccountService },
  post: { postImageService, getAllPostService, putLikeService, putUnlikeService },
  locations: { getLocationService, postLocationService},
};

export default service;
