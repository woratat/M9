import { LoginBasicService, createAccountService } from "./account.service";
import { postImageService } from "./post.service";

const service = {
  account: { LoginBasicService, createAccountService },
  post: { postImageService },
};

export default service;
