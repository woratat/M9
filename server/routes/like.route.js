import { Router } from "express";
import cors from "cors";
import controller from "../controller";

const route = Router();
const corsOption = {
  corsLocation: {
    origin: process.env.ORIGIN || "http://localhost:3000",
    methods: ["POST"],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  },
};
const { postLikeController , getlikeController , deleteLikeController} = controller.like;
route.use(cors(corsOption));
route.post("/post",postLikeController);
route.get("/get",getlikeController);
route.delete("/delete",deleteLikeController);

export default route;