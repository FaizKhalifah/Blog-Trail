import Blog from "../../models/blog.js";
import User from "../../models/user.js";

async function createBlog(title,author,category,content){
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

async function readById(id){
    const blog = await Blog.findById(id);
    return blog;
}

async function readAll(){
    const  AllBlog = await Blog.find();
    return AllBlog;
}

async function editBlog(title,author,content){
    const blog = await readOne(title,author);
    await Blog.updateOne(blog,{$set:{content:content}});
    return;
}


export default{
    createBlog,deleteBlog,readOne,readById, readAll,editBlog
}

