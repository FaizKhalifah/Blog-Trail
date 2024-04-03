import User from "../models/user.js";
import jwt from "jsonwebtoken";
import express from "express";

const app = express();
//membuat jwt
const maxAge = 60*60;
const createToken = (id) => {
  return jwt.sign({ id }, 'tokenRahasia', {
    expiresIn: maxAge
  });
};



//controller routes
async function register_get(req, res){
    res.render('register/register');
  }
  
  async function login_get (req, res) {
    res.render('login/login');
  }
  
  async function register_post (req, res) {
    const { email,username, password,interest,blogs } = req.body;

    try {
      const user = await User.create({  email,username, password,interest,blogs });
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: user._id });
    }
    catch(err) {
      console.log(err);
    }
  }
  
async function login_post (req, res)  {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      user: user._id
    });
  } catch (err) {
    res.status(400).json({});
  }

}

export default {
    register_get,register_post,login_get,login_post
}