import user from "../Models/user.js";

async function addUser(name,password,interest){
    const newUser = new user({
        userName:name,
        password:password,
        interest:interest,
        blogs:[]
    })
    await newUser.save();
    return;
}

async function deleteUser(name,password){
    const identity = {
        userName:name,
        password:password
    }
    await user.deleteOne(identity);
    return;
}

async function fetchUser(name,password){
    const identity = {
        userName:name,
        password:password
    }
    const fetchedUser = await user.findOne(identity);
    return fetchedUser;
}

async function fetchAll(){
    const allUser = await user.find();
    return allUser;
}


