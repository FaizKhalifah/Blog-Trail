import userCrud from "./Crud/userCrud.js";
import blogCrud from "./Crud/blogCrud.js";

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

async function fetchAllBlog(req,res){
    const blogs = await blogCrud.readAll();
    res.json({blogs});
    return;
}

export default {fetchUser,fetchBlog,fetchAllBlog}