import { LoginBasicController, createAccountController, loginJWTController } from "./account.controller";
import { uploadFiles } from "./post.controller";
import { getLocationsController } from "./location.controller";

const controller = {
  account: { LoginBasicController, createAccountController, loginJWTController },
  post: { uploadFiles },
  location : { getLocationsController } ,
  
};

export default controller;
