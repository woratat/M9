import helper from "../helper";
import lodash from "lodash";

const { addFriendDB, getRequestDB } = helper.friend;

const addFriendService = async (content) => {
  try {
    const { accountID, accountFriendID } = content;
    if (!lodash.isEmpty(accountID) ||  !lodash.isEmpty(accountFriendID)) {
      return {
        error: true,
        message: "Error! Missing accountIDs in addFriendService.",
      };
    } else {
      const newContent = {
        status: "pending",
        accountID: accountID,
        accountFriendID: accountFriendID,
      };
      const addRequest = await addFriendDB(newContent);
      return {
        error: false,
        message: "Send add request sucsess.",
        data: addRequest,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getRequestService = async (content) => {
  try {
    const { accountID, accountFriendID } = content;
    if (lodash.isEmpty(accountID) || lodash.isEmpty(accountFriendID)) {
      return {
        error: true,
        message: "Error! Missing accountIDs in getRequestService.",
      };
    } else {
      const newContent = {
        accountID: accountID,
        accountFriendID: accountFriendID,
      };
      const getRequest = await getRequestDB(newContent);
      return {
        error: false,
        message: "Get add request sucsess.",
        data: getRequest,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export { addFriendService, getRequestService };
