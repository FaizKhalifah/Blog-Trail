import jwt from "jsonwebtoken";
import User from "../models/User.js";


const requireAuth=(req,res,next)=>{
    const token = req.cookies.jwt;

    if(token){
        jwt.verify(token,'tokenRahasia',(err,decodedToken)=>{
            if(err){
                console.error(err);
                res.redirect('/login');
            }else{
                console.log(decodedToken);
                next();
            }
        })
    }else{
        res.redirect('/login');
    }

}

const checkUser = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,'tokenRahasia', async(err,decodedToken)=>{
            if(err){
                res.locals.user=null;
                next();
            }else{
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }else {
        res.locals.user = null;
        next();
      }
}

export default {requireAuth,checkUser};