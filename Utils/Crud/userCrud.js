import User from "../../models/user.js";

async function addUser(email,username,password,interest){
    const newIdentity = {
        email:email,
        username:username,
        password:password,
        interest:interest
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

async function fetchOne(email,username,password){
    const identity={
        email:email,
        username:username,
        password:password
    }
    const fetchedUser = await User.findOne(identity);
    return fetchedUser;
}

async function fetchAll(){
    const  AllUser = await User.find();
    return AllUser;
}

export default{
    addUser,deleteUser,fetchOne,fetchAll
}