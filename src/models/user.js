import mongoose from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/BlogTrail');

const userSchema = new Schema({
    userName:String,
    password:String,
    interest:Array,
    blogs:Array
})

const user = mongoose.model('user',userSchema);
export default user;