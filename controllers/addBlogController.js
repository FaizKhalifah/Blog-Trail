import userCrud from "../Utils/Crud/userCrud.js";
import blogCrud from "../Utils/Crud/blogCrud.js";

async function addBlog_post(req,res){
    const {blogTitle,author,category,content}=req.body;
    await blogCrud.addBlog(blogTitle,author,category,content);
    
    return;
}
async function getUserInfo(req,res){
    const user = res.locals.user;
    res.json({ user: user, message: 'User data retrieved successfully' });
}
export default {getUserInfo,addBlog_post};