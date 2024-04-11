import Blog from "../../models/blog.js";

async function addBlog(title,authorId,category,content){
    const newIdentity={
        title:title,
        authorId:authorId,
        category:category,
        content:content
    };
    const newBlog = new Blog(newIdentity);
    await newBlog.save();
    return;
}

async function deleteBlog(title,authorId){
    const identity={
        title:title,
        authorId:authorId
    }
    await Blog.deleteOne(identity);
    return;
}

async function fetchOne(title,authorId){
    const identity={
        title:title,
        authorId:authorId
    }
    const fetchedBlog = await Blog.findOne(identity);
    return fetchedBlog;
}

async function fetchAll(){
    const  AllBlog = await Blog.find();
    return AllBlog;
}

export default{
    addBlog,deleteBlog,fetchOne,fetchAll
}