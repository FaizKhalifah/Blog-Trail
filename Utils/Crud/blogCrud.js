import Blog from "../../models/blog.js";

async function addBlog(title,author,category,content){
    const newIdentity={
        title:title,
        author:author,
        category:category,
        content:content
    };
    const newBlog = new Blog(newIdentity);
    await newBlog.save();
    return;
}

async function deleteBlog(title,author){
    const identity={
        title:title,
        author:author
    }
    await Blog.deleteOne(identity);
    return;
}

async function readOne(title,author){
    const identity={
        title:title,
        author:author
    }
    const fetchedBlog = await Blog.findOne(identity);
    return fetchedBlog;
}

async function readAll(){
    const  AllBlog = await Blog.find();
    return AllBlog;
}

export default{
    addBlog,deleteBlog,readOne,readAll
}

