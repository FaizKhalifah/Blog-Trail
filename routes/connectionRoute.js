import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import fetchUtils from "../Utils/fetchUtils.js";

const connectionRouter = Router();

//post Routes
connectionRouter.post('/getAllConnections',authMiddleware.checkUser,fetchUtils.fetchConnections);

export default connectionRouter;