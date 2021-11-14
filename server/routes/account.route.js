import { Router } from "express";
import passport from "passport";
import controller from "../controller";

const {
  LoginBasicController,
  createAccountController,
  loginJWTController,
  getUserAccountController,
  getAllAccountController
} = controller.account;

const route = Router();
route.get(
  "/login",
  passport.authenticate("basic", { session: false }),
  LoginBasicController
);
route.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  loginJWTController
);
route.get("/id", getUserAccountController);
route.get("/all", getAllAccountController);
route.post("/register", createAccountController);

export default route;
