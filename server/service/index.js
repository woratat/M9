import { LoginBasicService, createAccountService, loginJWTService } from "./account.service";
import { postImageService } from "./post.service";
import { getLocationService } from "./location.service";

const service = {
  account: { LoginBasicService, createAccountService, loginJWTService },
  post: { postImageService },
  lications : { getLocationService },
};

export default service;
