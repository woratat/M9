import { Router } from "express";
import cors from "cors";
import controller from "../controller";

const route = Router();
const corsOption = {
  corsLocation: {
    origin: process.env.ORIGIN || "http://localhost:3000",
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  },
};
const { getLocationsController, postLocationController } = controller.locations;

route.options("/", cors(corsOption.corsLocation));
route.get("/", getLocationsController);
route.post("/post", postLocationController);

export default route;
