import User from "../../models/user.js";

async function addUser(email,username,password,interest){
    const newIdentity = {
        email:email,
        username:username,
        password:password,
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
    const identity={
        username:username,
        password:password
    }
    const fetchedUser = await User.findOne(identity);
    return fetchedUser;
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

export default{
    addUser,deleteUser,readOne,readAll,updateUser
}