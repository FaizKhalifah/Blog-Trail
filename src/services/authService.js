import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import user from "../models/user.js";
import { error } from "console";

async function loginUser(username,password){
    let identity={
        userName:username
    }
    const currentUser = await user.findOne(identity);
    if(currentUser==null){
        throw new error("User tidak ditemukan");
    }
    identity={
        userName:username,
        password:password
    }
    const statusPassword =await user.findOne(identity);
    if(statusPassword==null){
        throw new error("Password yang dimasukkan salah");
    }
    return jwt.sign(
        {userId:currentUser._id,},
        config.secret,
        {expiresIn:'1h'});
};

async function registerUser(username,password,interest){
    const newUser= new user({
        userName:username,
        password:password,
        interest:interest,
        blogs:[]
    })
    await newUser.save();
    return;
}

export default{
    loginUser,registerUser
}