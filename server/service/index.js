import { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService } from "./account.service";
import { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService, deletePostService } from "./post.service";
import { getLocationService, postLocationService, getLocationNameService } from "./location.service";
import { postCommentService , getCommentService, deleteCommentService } from "./comment.service";
import { addFriendService, getRequestService } from "./friend.service";
import { postlikeService , getlikeService } from "./like.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService },
  post: { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService, deletePostService },
  locations: { getLocationService, postLocationService, getLocationNameService},
  comment: { postCommentService , getCommentService, deleteCommentService },
  friend: { addFriendService, getRequestService },
  like: { postlikeService , getlikeService },
};

export default service;
