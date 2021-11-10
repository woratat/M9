import express from "express";
import accountRoute from "./account.route";

const route = express();
route.use('/auth', accountRoute);

export default route;