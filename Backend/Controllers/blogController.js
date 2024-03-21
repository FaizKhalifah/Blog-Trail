import blog from "../Models/blog.js";

async function createBlog(title,author,dateCreated,lastUpdated,category){
    const newBlog = new blog({
    title:title,
    author:author,
    dateCreated : dateCreated,
    lastUpdated: lastUpdated,
    category:category,
    content: ""
    })
    await newBlog.save();
    return;
}

async function deleteBlog(title,author){
    const identity={
        title:title,
        author:author
    }
    await blog.deleteOne(identity);
    return;
}