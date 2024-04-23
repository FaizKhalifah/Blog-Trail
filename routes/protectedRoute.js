import authMiddleware from "../middlewares/authMiddleware.js";
import checkBlog from "../middlewares/blogMiddleware.js";
import express from "express";

const protectedRouter = express();

protectedRouter.get('/dashboard',authMiddleware.requireAuth,(req,res)=>{
    res.render('dashboard/dashboard');
 });
 
 protectedRouter.get('/posts',authMiddleware.requireAuth,(req,res)=>{
    res.render('posts/posts');
 })

 protectedRouter.get('/feedbacks',authMiddleware.requireAuth,(req,res)=>{
   res.render('feedbacks/feedbacks');
 })

 protectedRouter.get('/newBlog',authMiddleware.requireAuth,(req,res)=>{
   res.render('newBlog/newBlog');
})

protectedRouter.get('/readBlog',checkBlog,(req,res)=>{
   res.render('readBlog/readBlog');
})




 export default protectedRouter;