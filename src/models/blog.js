import mongoose from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/BlogTrail');

const blogSchema=new Schema({
    title:String,
    author:String,
    dateCreated : Date,
    lastUpdated: Date,
    category:String,
    content:String
})

const blog = mongoose.model('blog',blogSchema);
export default blog;