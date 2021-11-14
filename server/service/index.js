import { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService } from "./account.service";
import { postImageService, getAllPostService, putLikeService, putUnlikeService } from "./post.service";
import { getLocationService, postLocationService } from "./location.service";
import { postCommentService } from "./comment.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService },
  post: { postImageService, getAllPostService, putLikeService, putUnlikeService },
  locations: { getLocationService, postLocationService},
  comment: { postCommentService },
};

export default service;
