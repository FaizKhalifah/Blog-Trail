import jwt from 'jsonwebtoken';
import config from '../config/config.js';

async function generateToken(payload){
    return jwt.sign(payload, config.secret, { expiresIn: '1h' });
};

async function verifyToken(token){
    return jwt.verify(token, config.secret);
};

export default{
    generateToken,verifyToken
}