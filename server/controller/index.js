import { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController, updateUnlike } from "./post.controller";
import { getLocationsController, postLocationController } from "./location.controller";
import { postCommentController } from "./comment.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController },
  post: { uploadFiles, updateLike, getAllPostController, updateUnlike },
  locations: { getLocationsController, postLocationController },
  comment: { postCommentController },
};

export default controller;
