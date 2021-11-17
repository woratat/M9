import { Router } from "express";
import controller from "../controller";

const { addFriendController, getRequestController , updateRequestController , deleteRequestController } = controller.friend;

const route = Router();

route.post("/add", addFriendController);

route.get("/add", getRequestController);
route.put("/update", updateRequestController);
route.delete("/delete",deleteRequestController);


export default route;
