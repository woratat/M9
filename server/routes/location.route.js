import { Router } from "express";
import cors from "cors";
import controller from "../controller";


const route = Router();
const corsOption = {
    corsLocation:{
        origin: process.env.ORIGIN || 'http://localhost:3000',
        methods :['GET'],
        allowedHeaders:['Content-Type']
    }
}
const { getLocationsController }=controller.location;

route.options('/',cors(corsOption.corsLocation));
route.get("/",getLocationsController);

export default route;