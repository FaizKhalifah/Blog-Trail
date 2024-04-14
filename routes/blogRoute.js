import { Router } from "express";
import getUserInfo from "../controllers/addBlogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const blogRouter = Router();
blogRouter.post('/getBlog',authMiddleware.checkUser,getUserInfo);

export default blogRouter;