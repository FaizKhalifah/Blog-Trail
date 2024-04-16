import mongoose, { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/BlogTrail');


const blogSchema = new Schema({
    title:String,
    author:String,
    category:String,
    content:String
})

const Blog = mongoose.model('blog',blogSchema);
export default Blog;