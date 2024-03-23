import jwt from 'jsonwebtoken';
import user from '../Models/user.js';

async function login(req,res){
    const {username,password}=req.body;
   
}

async function register(){

}

async function logout(){
    
}

export default{
    login,register,logout
}