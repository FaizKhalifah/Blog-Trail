import user from "../models/user.js";   
 
async function  addUser(username,password,interest){
    const newUser = new user({
        userName:username,
        password:password,
        interest:interest,
        blogs:[]
    })
    await newUser.save();
}

export default addUser;