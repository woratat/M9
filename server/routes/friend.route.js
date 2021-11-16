import { Router } from "express";
import controller from "../controller";

const { addFriendController, getRequestController } = controller.friend;

const route = Router();

route.post("/add", addFriendController);

route.get("/add", getRequestController)

export default route;
