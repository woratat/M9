import { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService } from "./account.service";
import { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService, deletePostService } from "./post.service";
import { getLocationService, postLocationService, getLocationNameService } from "./location.service";
import { postCommentService , getCommentService, deleteCommentService } from "./comment.service";
import { addFriendService, getRequestService , updateRequestService , deleteRequestService} from "./friend.service";
import { postlikeService , getlikeService , deleteLikeService , getPostLikeService} from "./like.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService, getUserAccountService, getAllAccountService, getUsernameService },
  post: { postImageService, getAllPostService, putLikeService, putUnlikeService, getUserPostService, getLikeService, deletePostService },
  locations: { getLocationService, postLocationService, getLocationNameService},
  comment: { postCommentService , getCommentService, deleteCommentService },
  friend: { addFriendService, getRequestService , updateRequestService , deleteRequestService },
  like: { postlikeService , getlikeService , deleteLikeService , getPostLikeService },
};

export default service;
