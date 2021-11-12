import express from "express";
import accountRoute from "./account.route";
import postRoute from "./post.route";
import locationRoute from"./location.route";

const route = express();
route.use("/auth", accountRoute);
route.use("/feed", postRoute);
route.use("/locations",locationRoute);

export default route;
