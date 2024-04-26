import blogCrud from "../Utils/Crud/blogCrud.js";

async function readBlog_post(req,res){
    const {author,blogTitle}=req.body;
    const blog = await blogCrud.readOne(blogTitle,author);
    const blogInfo = {
        title:blog.title,
        author:blog.author,
        category:blog.category,
        content:blog.content
    }
    res.status(201).json({ blog: blog.id });
    res.render('../views/readBlog/readBlog.ejs',blogInfo);
    
    return;
}

export default readBlog_post;