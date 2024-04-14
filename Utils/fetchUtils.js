import userCrud from "./Crud/userCrud.js";

async function fetchUser(req,res){
    const user = res.locals.user;
    const fetchedUser = await userCrud.readOne(user.username,user.password);
    res.json({fetchedUser});
    return;
}

async function fetchBlog(req,res){
    const user = res.locals.user;
    const fetchedUser = await userCrud.readOne(user.username,user.password);
    const userBlog = fetchedUser.blogs;
    res.json({userBlog});
    return;
}

export default {fetchUser,fetchBlog}