import User from "../../models/user.js";
import hashFunction from "../hashUtils.js";
import checkPassword from "../checkPasswordUtils.js";
import bcrypt from "bcrypt";

async function addUser(email,username,password,interest){
    const salt = await bcrypt.genSalt();
    let hashedpassword = await bcrypt.hash(password,salt);
    const newIdentity = {
        email:email,
        username:username,
        password:hashedpassword,
        interest:interest,
        blogs:[]
    };
    const newUser = new User(newIdentity);
    await newUser.save();
    return;
}

async function deleteUser(email,username,password){
    const identity={
        email:email,
        username:username,
        password:password
    }
    await User.deleteOne(identity);
    return;
}

async function readOne(username,password){
    const user = await User.findOne({username:username});
    const userStatus = checkPassword(password,user.password);
    if(userStatus){
        const identity={
            username:username,
            password:user.password
        }
        const fetchedUser = await User.findOne(identity);
        return fetchedUser;
    }
    console.log("error");
    return; 
}

async function readAll(){
    const  AllUser = await User.find();
    return AllUser;
}

async function updateUser(currentusername,currentpassword,email,username,password,interest){
    const fetchedUser = await readOne(currentusername,currentpassword);
    const currentData = {
        username:currentusername,
        password:currentpassword
    }
    const updatedData = {
        email:email,
        username:username,
        password:password,
        interest:interest,
        blogs:fetchedUser.blogs
    }
    if(fetchedUser){
        await User.updateOne(currentData,{$set:updatedData});
        return;
    }else{
        console.log("error");
        return;
    }
}

async function addBlog(username,password,blogTitle,category,content){
    const userIdentity = {
        username:username,
        password:password
    }
    const blogIdentity={
        blogTitle:blogTitle,
        author:username,
        category:category,
        content:content
    }
    const user = await readOne(username,password);
    await User.updateOne(user,{$push:{blogs:blogIdentity}});
    return;
}

export default{
    addUser,deleteUser,readOne,readAll,updateUser,addBlog
}


