import mongoose, { Schema } from "mongoose";
mongoose.connect('mongodb://localhost:27017/BlogTrail');

const userSchema = new Schema({
    email:String,
    username:String,
    password:String,
    interest:Array,
    blogs:Array,
    connections:Array,
    contributions:Array
})

const User = mongoose.model('user', userSchema);
export default User;
