import blog from "../models/blog.js";

async function createBlog(title,author,category){
    const newBlog = new blog({
        title:title,
        author:author,
        dateCreated:new Date(),
        lastUpdated:new Date(),
        category:category
    })
    await newBlog.save();
    return;
}

export default createBlog;