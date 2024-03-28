import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username:String,
    password:String,
    interest:Array,
    blogs:Array
})


const User = mongoose.model('user', userSchema);
export default User;
