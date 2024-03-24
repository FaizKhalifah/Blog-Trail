import monggoose from "mongoose";
import { Schema } from "mongoose";
monggoose.connect('mongodb://localhost:27017/BlogTrail');

const userSchema = new Schema({
    userName:String,
    password:String,
    interest:Array,
    blogs:Array
})

const user = monggoose.model('user',userSchema);
export default user;