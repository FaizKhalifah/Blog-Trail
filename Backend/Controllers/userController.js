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


