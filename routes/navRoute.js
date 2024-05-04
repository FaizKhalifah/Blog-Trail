import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const navRouter = Router();

navRouter.get('/writerHub',authMiddleware.requireAuth,(req,res)=>{
    res.render('writerHub/writerHub');
})

export default navRouter;