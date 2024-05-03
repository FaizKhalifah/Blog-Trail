import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import fetchUtils from "../Utils/fetchUtils.js";
import blogController from "../controllers/blogController.js";

const blogRouter = Router();

//post routes
blogRouter.post('/getBlog',authMiddleware.checkUser,fetchUtils.fetchBlog);
blogRouter.post('/addBlog',blogController.addBlog_post);
blogRouter.post('/deleteBlog',blogController.deleteBlog_post);
blogRouter.post('/editBlog',blogController.editBlog_post);


//get routes
blogRouter.get('/readBlog/:slug',authMiddleware.requireAuth,blogController.readBlogBySlug);
blogRouter.get('/newBlog',authMiddleware.requireAuth,(req,res)=>{
    res.render('newBlog/newBlog');
 });
blogRouter.get('/editBlog/:slug',authMiddleware.requireAuth,blogController.editBlogBySlug);
 
export default blogRouter;