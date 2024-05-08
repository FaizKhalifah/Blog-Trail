import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const navRouter = Router();

navRouter.get('/writerHub',authMiddleware.requireAuth,(req,res)=>{
    res.render('writerHub/writerHub');
})

navRouter.get('/resources',authMiddleware.requireAuth,(req,res)=>{
    res.render('resources/resources');
})
export default navRouter;