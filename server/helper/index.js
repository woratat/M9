import { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB } from "./account.helper";
import { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB } from "./post.helper";
import { getLocationDB, postLocationDB } from "./location.helper";

const helper = {
  account: { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB },
  post: { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB },
  locations: { getLocationDB, postLocationDB},
};

export default helper;

//ใช้โดย service เท่านั้น
