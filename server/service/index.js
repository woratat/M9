import { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService } from "./account.service";
import { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService, deletePostService } from "./post.service";
import { getLocationService, postLocationService, getLocationNameService } from "./location.service";
import { postCommentService , getCommentService } from "./comment.service";
import { addFriendService, getRequestService } from "./friend.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService },
  post: { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService, deletePostService },
  locations: { getLocationService, postLocationService, getLocationNameService},
  comment: { postCommentService , getCommentService },
  friend: { addFriendService, getRequestService },
};

export default service;
