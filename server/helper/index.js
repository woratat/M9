import { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB, getUserAccountDB, getAllAccountDB, getUsernameDB } from "./account.helper";
import { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB, getUserPostDB, getAllLikeDB, deletePostDB } from "./post.helper";
import { getLocationDB, postLocationDB, getLocationNameDB } from "./location.helper";
import { postCommentDB , getCommentDB } from "./comment.helper";
import { addFriendDB, getRequestDB } from "./friend.helper";

const helper = {
  account: { getAccountDetailDB, createUserAccountDB, getUserOrEmailAccountDB, getUserAccountDB, getAllAccountDB, getUsernameDB },
  post: { postImageDB, getAllPostDB, putLikeDB, putUnlikeDB, getUserPostDB, getAllLikeDB, deletePostDB },
  locations: { getLocationDB, postLocationDB, getLocationNameDB},
  comment: { postCommentDB , getCommentDB },
  friend: { addFriendDB, getRequestDB }
};

export default helper;

//ใช้โดย service เท่านั้น
