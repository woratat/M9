import { LoginBasicController, createAccountController } from "./account.controller";
import { uploadFiles } from "./post.controller";
import { getLocationsController } from "./location.controller";

const controller = {
  account: { LoginBasicController, createAccountController },
  post: { uploadFiles },
  location : { getLocationsController } ,
  
};

export default controller;
