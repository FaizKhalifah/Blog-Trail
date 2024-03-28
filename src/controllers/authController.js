import User from "../models/user.js";


async function handleErrors(err) {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
  
    // duplicate email error
    if (err.code === 11000) {
      errors.email = 'that email is already registered';
      return errors;
    }
  
    // validation errors
    if (err.message.includes('user validation failed')) {
      Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
      });
    }
  
    return errors;
  }

async function signUp_get(req,res){
    res.render('signUp');
}

async function signUp_post(req,res){
    const{username,password,interest,blogs}=req.body;
    try{
        const user = await User.create({
            username,password,interest,blogs
        })
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({ err });
    }
}

async function login_get(req,res){
    res.render('login');
}

async function login_post(req,res){
    const{username,password,interest,blogs}=req.body;
    console.log(username, password,interest,blogs);
    res.send('user login');
}

export default{
    signUp_get,signUp_post,login_get,login_post
}