import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import fetchUtils from "../Utils/fetchUtils.js";

const blogRouter = Router();
blogRouter.post('/getBlog',authMiddleware.checkUser,fetchUtils.fetchBlog);

export default blogRouter;