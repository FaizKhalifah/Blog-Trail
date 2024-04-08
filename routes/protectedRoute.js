import requireAuth from "../middlewares/authMiddleware.js";
import express from "express";

const protectedRouter = express();
protectedRouter.get('/dashboard',requireAuth,(req,res)=>{
    res.render('dashboard/dashboard');
 });
 
 protectedRouter.get('/posts',requireAuth,(req,res)=>{
    res.render('posts/posts');
 })

 export default protectedRouter;