import mongoose, { trusted } from "mongoose";
import { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/BlogTrail');

const userSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:8
    },
    interest:Array,
    blogs:Array
})

const user = mongoose.model('user',userSchema);
export default user;