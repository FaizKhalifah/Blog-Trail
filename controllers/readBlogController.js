import blogCrud from "../Utils/Crud/blogCrud.js";

async function readBlog_post(req,res){
    const {author,blogTitle}=req.body;
    const blog = await blogCrud.readOne(blogTitle,author);
    res.status(201).json({ blog: blog.id });
    return;
}

export default readBlog_post;