import { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService } from "./account.service";
import { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService } from "./post.service";
import { getLocationService, postLocationService } from "./location.service";
import { postCommentService } from "./comment.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService },
  post: { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService },
  locations: { getLocationService, postLocationService},
  comment: { postCommentService },
};

export default service;
