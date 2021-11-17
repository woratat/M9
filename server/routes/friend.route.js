import { Router } from "express";
import controller from "../controller";

const { addFriendController, getRequestController , updateRequestController} = controller.friend;

const route = Router();

route.post("/add", addFriendController);

route.get("/add", getRequestController);
route.put("/update", updateRequestController);


export default route;
