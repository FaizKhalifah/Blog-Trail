import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import fetchUtils from "../Utils/fetchUtils.js";
import addBlogController from "../controllers/addBlogController.js";

const blogRouter = Router();
blogRouter.post('/getBlog',authMiddleware.checkUser,fetchUtils.fetchBlog);
blogRouter.post('/addBlog',addBlogController.addBlog_post);

export default blogRouter;