import authMiddleware from "../middlewares/authMiddleware.js";
import express from "express";

const protectedRouter = express();

protectedRouter.get('/dashboard',authMiddleware.requireAuth,(req,res)=>{
    res.render('dashboard/dashboard');
 });
 
 protectedRouter.get('/posts',authMiddleware.requireAuth,(req,res)=>{
    res.render('posts/posts');
 })

 export default protectedRouter;