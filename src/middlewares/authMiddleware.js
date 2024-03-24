import { verifyToken } from '../utils/jwtUtils.js';

async function authenticateToken(req,res,next){
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try{
        const decoded = await verifyToken(token);
        req.user = decoded;
        next();
    }catch(err){
        res.status(403).json({ message: 'Invalid token' });
    }
};

export default{
    authenticateToken
} 