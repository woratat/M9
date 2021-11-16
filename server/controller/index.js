import { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController, getUsernameController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController, deletePostController } from "./post.controller";
import { getLocationsController, postLocationController, getLocationNameController } from "./location.controller";
import { postCommentController , getCommentController } from "./comment.controller";
import { addFriendController, getRequestController } from "./friend.controller";
import { getlikeController , postLikeController } from "./like.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController, getUsernameController },
  post: { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController, deletePostController },
  locations: { getLocationsController, postLocationController, getLocationNameController },
  comment: { postCommentController , getCommentController },
  friend: { addFriendController, getRequestController },
  like: { postLikeController , getlikeController },
};

export default controller;
