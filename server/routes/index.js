import express from "express";
import accountRoute from "./account.route";
import postRoute from "./post.route";
import locationRoute from "./location.route";
import commentRoute from "./comment.route";
import friendRoute from "./friend.route";
import likeRoute from "./like.route"

const route = express();
route.use("/auth", accountRoute);
route.use("/feed", postRoute);
route.use("/locations", locationRoute);
route.use("/comment", commentRoute);
route.use("/friend", friendRoute);
route.use("/like",likeRoute)

export default route;
