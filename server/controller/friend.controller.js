import service from "../service";

const { addFriendService, getRequestService } = service.friend;

const addFriendController = async (req, res) => {
  const content = {
    accountID: req.body.accountID,
    accountFriendID: req.body.accountFriendID,
  };

  try {
    const addFriend = await addFriendService(content);

    if (addFriend.error) {
      return res.status(400).json({
        message: addFriend.message,
      });
    } else {
      return res.status(200).json({
        message: addFriend.message,
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};

const getRequestController = async (req, res) => {
  const content = {
    accountID: req.query.accountID,
    accountFriendID: req.query.accountFriendID,
  };

  try {
    const addFriend = await getRequestService(content);

    if (addFriend.error) {
      return res.status(400).json({
        message: addFriend.message,
      });
    } else {
      return res.status(200).json({
        message: addFriend.message,
        data: addFriend.data
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(500);
  }
};
export { addFriendController, getRequestController };
