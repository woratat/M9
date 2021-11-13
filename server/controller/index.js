import { LoginBasicController, createAccountController, loginJWTController, getUserAccountController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController, updateUnlike } from "./post.controller";
import { getLocationsController, postLocationController } from "./location.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController, getUserAccountController },
  post: { uploadFiles, updateLike, getAllPostController, updateUnlike },
  locations: { getLocationsController, postLocationController },
};

export default controller;
