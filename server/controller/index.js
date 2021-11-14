import { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController, getUsernameController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController } from "./post.controller";
import { getLocationsController, postLocationController } from "./location.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController, getUserAccountController, getAllAccountController, getUsernameController },
  post: { uploadFiles, updateLike, getAllPostController, updateUnlike, getUserPostController, getLikeController },
  locations: { getLocationsController, postLocationController },
};

export default controller;
