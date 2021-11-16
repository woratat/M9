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
const { postCommentController , getCommentController, deleteCommentController } = controller.comment;
route.use(cors(corsOption));
route.post("/post", postCommentController);
route.get("/get", getCommentController);
route.delete("/delete", deleteCommentController);

export default route;