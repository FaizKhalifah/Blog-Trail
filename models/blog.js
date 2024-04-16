import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title:String,
    author:String,
    category:String,
    content:String
})

const Blog = mongoose.model('blog',blogSchema);
export default Blog;