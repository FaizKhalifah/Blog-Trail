import userCrud from "../Utils/Crud/userCrud.js";
import blogCrud from "../Utils/Crud/blogCrud.js";

async function addBlog_post(req,res){
    const {blogTitle,category,content}=req.body;
    const user = res.locals.user;
    const fetchedUser = await userCrud.readOne(user.username,user.password);
    await blogCrud.createBlog(blogTitle,fetchedUser.username,category,content);
    await userCrud.addBlog(fetchedUser.username,fetchedUser.password,blogTitle,category,content);
    res.status(201).json({ user: fetchedUser.id });
    return;
}

async function readBlogBySlug(req,res){
    const {slug}=req.params;
    const [title,author]=slug.split('-');
    const blog = await blogCrud.readOne(title,author);
    res.render('../views/readBlog/readBlog.ejs', { blog });
}

async function deleteBlog_post(req,res){
    const {blogTitle,author,category}=req.body;
    const user = res.locals.user;
    const fetchedUser = await userCrud.readOne(user.username,user.password);
    const blog = await blogCrud.readOne(blogTitle,author);
    await userCrud.deleteBlog(fetchedUser.username,fetchedUser.password,blogTitle,category);
    await blogCrud.deleteBlog(blogTitle,author);
    res.status(201).json({message:"Blog berhasil dihapus"});
}

async function editBlog_post(req,res){
    const {slug}=req.params;
    const [title,author]=slug.split('-');
    const blog = await blogCrud.readOne(title,author);
    res.render('../views/editBlog/editBlog.ejs', { blog });
}

export default{
    addBlog_post,readBlogBySlug,deleteBlog_post,editBlog_post
}