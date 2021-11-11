import express from "express";
import accountRoute from "./account.route";
import postRoute from "./post.route";

const route = express();
route.use("/auth", accountRoute);
route.use("/feed", postRoute);

export default route;
