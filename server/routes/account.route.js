import { Router } from "express";
import passport from "passport";
import controller from "../controller";

const {
  LoginBasicController,
  createAccountController,
  loginJWTController,
  getUserAccountController,
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
route.post("/register", createAccountController);

export default route;
