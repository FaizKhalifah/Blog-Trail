import { Router } from "express";
import editProfile_post from "../controllers/editProfileController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter = Router();
userRouter.post('/editProfile',editProfile_post);

userRouter.get('/dashboard',authMiddleware.requireAuth,(req,res)=>{
    res.render('dashboard/dashboard');
 });
 
userRouter.get('/posts',authMiddleware.requireAuth,(req,res)=>{
    res.render('posts/posts');
 })

userRouter.get('/feedbacks',authMiddleware.requireAuth,(req,res)=>{
   res.render('feedbacks/feedbacks');
 })

 userRouter.get('/connections',authMiddleware.requireAuth,(req,res)=>{
   res.render('connections/connections');
 })


export default userRouter;