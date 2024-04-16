import jwt from "jsonwebtoken";
import express from "express";
import userCrud from "../Utils/Crud/userCrud.js";
import bcrypt from "bcrypt";

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
    const { email,username, password,interest} = req.body;

    try {
      const user = await userCrud.addUser(email,username, password,interest);
      const fetchedUser = await userCrud.readOne(username,password);
      const token = createToken(fetchedUser.id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ user: fetchedUser.id });
    }
    catch(err) {
      console.log(err);
    }
  }
  
async function login_post (req, res)  {
  const { username, password } = req.body;
  try {
    const user = await loginUser(username,password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      user: user._id
    });
  } catch (err) {
    res.status(400).json({});
  }
}


async function loginUser(username,password){
  const user = await userCrud.readOne(username,password);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect username');
};


async function logout_get(req,res){
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

export default {
    register_get,register_post,login_get,login_post,logout_get
}