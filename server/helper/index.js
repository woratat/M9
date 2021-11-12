import { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB } from "./account.helper";
import { postImageDB } from "./post.helper";
import { getLocationDB } from "./location.helper";

const helper = {
  account: { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB },
  post: { postImageDB },
  locations : {getLocationDB},
};

export default helper;

//ใช้โดย service เท่านั้น
