import { Router } from "express";
import addBlogController from "../controllers/addBlogController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const blogRouter = Router();
blogRouter.post('/getBlog',addBlogController);
