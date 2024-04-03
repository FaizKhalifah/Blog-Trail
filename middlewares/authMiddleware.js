import jwt from "jsonwebtoken";


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

export default requireAuth;