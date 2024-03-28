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

userSchema.post('save', function (doc, next) {
    console.log('new user was created & saved', doc);
    next();
  });

userSchema.pre('save', function (next) {
    console.log('user about to be created & saved', this);
    next();
});
  

const User = mongoose.model('User',userSchema);
export default User;