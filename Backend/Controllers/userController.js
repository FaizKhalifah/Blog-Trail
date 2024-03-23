import user from "../Models/user.js";

async function addUser(name,password,interest){
    const newUser = new user({
        userName:name,
        password:password,
        interest:interest,
        blogs:[]
    })
    const userAvailability = await checkUser(name,password);
    if(userAvailability==true){
        console.log("User sudah ada");
        return;
    }
    await newUser.save();
    return;
}

async function deleteUser(name,password){
    const identity = {
        userName:name,
        password:password
    }
    const userAvailability = await checkUser(name,password);
    if(userAvailability==false){
        console.log(`Tidak ada user dengan nama ${name}`);
        return;
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

async function checkUser(name,password){
    const identity={
        userName:name,
        password:password
    }
    const status = await user.findOne(identity);
    if(status!=null){
        return true;
    }else{
        return false;
    }
}

export default{
    addUser,deleteUser,fetchUser,fetchAll,checkUser
}



