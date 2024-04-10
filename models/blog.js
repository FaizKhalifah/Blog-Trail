import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title:String,
    authorId:String,
    category:String,
    content:String
})

const Blog = mongoose.model('blog',blogSchema);
export default Blog;