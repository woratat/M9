import { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB, getUserAccountDB, getAllAccountDB } from "./account.helper";
import { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB } from "./post.helper";
import { getLocationDB, postLocationDB } from "./location.helper";
import { postCommentDB } from "./comment.helper";

const helper = {
  account: { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB, getUserAccountDB, getAllAccountDB },
  post: { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB },
  locations: { getLocationDB, postLocationDB},
  comment : { postCommentDB },
};

export default helper;

//ใช้โดย service เท่านั้น
