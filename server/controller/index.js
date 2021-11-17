import { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController, getUsernameController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController, deletePostController } from "./post.controller";
import { getLocationsController, postLocationController, getLocationNameController } from "./location.controller";
import { postCommentController , getCommentController, deleteCommentController } from "./comment.controller";
import { addFriendController, getRequestController  , updateRequestController} from "./friend.controller";
import { getlikeController , postLikeController , deleteLikeController , getPostlikeController} from "./like.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController, getUsernameController },
  post: { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController, deletePostController },
  locations: { getLocationsController, postLocationController, getLocationNameController },
  comment: { postCommentController , getCommentController, deleteCommentController },
  friend: { addFriendController, getRequestController  , updateRequestController},
  like: { postLikeController , getlikeController , deleteLikeController ,getPostlikeController},
};

export default controller;
