import blogCrud from "../Utils/Crud/blogCrud.js";

async function readBlog_post(req,res){
    const {blogTitle,author,category,content}=req.body;
    const property={
        title:blogTitle,
        author:author,
        category:category,
        content:content
    }
    const blog = await blogCrud.readOne(property);
    res.status(201).json({ blog: blog.id });
    res.locals.blog = blog;
    return;
}

export default readBlog_post;