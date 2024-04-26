import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import fetchUtils from "../Utils/fetchUtils.js";
import addBlogController from "../controllers/addBlogController.js";
import readBlogController from "../controllers/readBlogController.js";

const blogRouter = Router();
blogRouter.post('/getBlog',authMiddleware.checkUser,fetchUtils.fetchBlog);
blogRouter.post('/addBlog',addBlogController.addBlog_post);
blogRouter.get('/readBlog/:slug',authMiddleware.requireAuth,readBlogController.readBlogBySlug);


blogRouter.get('/newBlog',authMiddleware.requireAuth,(req,res)=>{
    res.render('newBlog/newBlog');
 })
 


export default blogRouter;