async function signUp_get(req,res){
    res.render('signUp');
}

async function signUp_post(req,res){
    const{username,password}=req.body;
    console.log(username,password);
    res.send('new register');
}

async function login_get(req,res){
    res.render('login');
}

async function login_post(req,res){
    const {username, password } = req.body;
    console.log(username, password);
    res.send('user login');
}

export default{
    signUp_get,signUp_post,login_get,login_post
}