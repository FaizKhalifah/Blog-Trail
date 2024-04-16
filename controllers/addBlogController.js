import userCrud from "../Utils/Crud/userCrud.js";
import blogCrud from "../Utils/Crud/blogCrud.js";
import fetchUtils from "../Utils/fetchUtils.js";

async function addBlog_post(req,res){
    const {blogTitle,category,content}=req.body;
    const user = res.locals.user;
    const fetchedUser = await userCrud.readOne(user.username,user.password);
    await blogCrud.createBlog(blogTitle,fetchedUser.username,category,content);
    await userCrud.addBlog(fetchedUser.username,fetchedUser.password,blogTitle,category,content);
    return;
}
async function getUserInfo(req,res){
    const user = res.locals.user;
    res.json({ user: user, message: 'User data retrieved successfully' });
}
export default {getUserInfo,addBlog_post};