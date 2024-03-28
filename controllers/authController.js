import User from "../models/user.js";


async function signup_get(req, res){
    res.render('register');
  }
  
  async function login_get (req, res) {
    res.render('login');
  }
  
  async function signup_post (req, res) {
    const { username, password,interest,blogs } = req.body;

    try {
      const user = await User.create({  username, password,interest,blogs });
      res.status(201).json(user);
    }
    catch(err) {
      console.log(err);
    }
  }
  
async function login_post (req, res)  {
    const { username, password,interest,blogs } = req.body;
    console.log(username, password,interest,blogs );
    res.send("user login");
}

export default {
    signup_get,signup_post,login_get,login_post
}