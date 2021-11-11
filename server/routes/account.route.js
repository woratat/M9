import { Router } from "express";
import passport from "passport";
import controller from "../controller";

const { LoginBasicController, createAccountController} = controller.account;

const route = Router();
route.get(
  "/login",
  passport.authenticate("basic", { session: false }),
  LoginBasicController
);
route.post(
  "/register",
  createAccountController
);


export default route;
