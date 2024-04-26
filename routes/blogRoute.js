import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import fetchUtils from "../Utils/fetchUtils.js";
import addBlogController from "../controllers/addBlogController.js";
import readBlogController from "../controllers/readBlogController.js";

const blogRouter = Router();
blogRouter.post('/getBlog',authMiddleware.checkUser,fetchUtils.fetchBlog);
blogRouter.post('/addBlog',addBlogController.addBlog_post);
blogRouter.post('/readBlog',authMiddleware.checkUser);


blogRouter.get('/newBlog',authMiddleware.requireAuth,(req,res)=>{
    res.render('newBlog/newBlog');
 })
 
blogRouter.post('/readBlog',authMiddleware.checkUser,(req,res)=>{
    res.render('readBlog/readBlog');
 })

export default blogRouter;