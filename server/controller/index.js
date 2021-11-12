import { LoginBasicController, createAccountController, loginJWTController } from "./account.controller";
import { uploadFiles } from "./post.controller";
import { getLocationsController, postLocationController } from "./location.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController },
  post: { uploadFiles },
  location : { getLocationsController , postLocationController} ,
  
};

export default controller;
