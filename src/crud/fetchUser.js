import user from "../models/user.js";
async function fetchUser(username,password){
    const identity = {
        username:username,
        password:password
    }
    const fetchedUsername = await user.findOne(identity);
    return fetchedUsername;
}

export default fetchUser;