import { LoginBasicService, createAccountService, loginJWTService } from "./account.service";
import { postImageService } from "./post.service";
import { getLocationService , postLocationService } from "./location.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService },
  post: { postImageService },
  locations : { getLocationService, postLocationService },
};

export default service;
