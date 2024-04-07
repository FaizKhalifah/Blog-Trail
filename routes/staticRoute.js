import staticUtils from "../Utils/staticUtils.js";
import express from "express";

const staticRouter = express();

staticRouter.use('/register',staticUtils.staticRegister);
staticRouter.use('/login',staticUtils.staticLogin);
staticRouter.use('/dashboard',staticUtils.staticDashboard);

export default staticRouter;