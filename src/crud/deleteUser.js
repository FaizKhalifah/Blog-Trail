import user from "../models/user.js";     
async function deleteUser(username,password){
    const identity={
        username:username,
        password:password
    }
    await user.deleteOne(identity);
    return;
}