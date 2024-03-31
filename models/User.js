import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    email:String,
    username:String,
    password:String,
    interest:Array,
    blogs:Array
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password =await bcrypt.hash(this.password,salt);
    next();
  });

const User = mongoose.model('user', userSchema);
export default User;
