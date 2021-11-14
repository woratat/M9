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
const { postCommentController } = controller.comment;
route.use(cors(corsOption));
route.post("/post",postCommentController);

export default route;