import blogCrud from "../Utils/Crud/blogCrud.js";

async function readBlog_post(req,res){
    const {blogTitle,author}=req.body;
    const blog = await blogCrud.readOne(blogTitle,author);
    res.status(201).json({ blog: blog });
    res.render('readBlog/readBlog',{blog});
    return;
}

export default readBlog_post;