import User from "../models/user.js";
import jwt from "jsonwebtoken";


//membuat jwt
const maxAge = 60*60;
const createToken = (id) => {
  return jwt.sign({ id }, 'tokenRahasia', {
    expiresIn: maxAge
  });
};

//controller routes
async function register_get(req, res){
    res.render('register');
  }
  
  async function login_get (req, res) {
    res.render('login');
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
    const { email,username, password,interest,blogs } = req.body;
    console.log(email,username, password,interest,blogs );
    res.send("user login");
}

export default {
    register_get,register_post,login_get,login_post
}