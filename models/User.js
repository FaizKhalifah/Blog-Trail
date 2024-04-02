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



userSchema.statics.login = async function(username, password) {
    const identity = {
      username:username
    }
    const user = await this.findOne(identity);
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error('incorrect password');
    }
    throw Error('incorrect username');
  };

const User = mongoose.model('user', userSchema);
export default User;
