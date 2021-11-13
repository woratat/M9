import { LoginBasicController, createAccountController, loginJWTController } from "./account.controller";
import { uploadFiles, updateLike, getAllPostController } from "./post.controller";
import { getLocationsController, postLocationController } from "./location.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController },
  post: { uploadFiles, updateLike, getAllPostController },
  locations: { getLocationsController, postLocationController },
};

export default controller;
