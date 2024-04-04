import express from "express";
import mongoose  from "mongoose";
import router from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import staticUtils from "./Utils/staticUtils.js";
import requireAuth from "./middlewares/authMiddleware.js";
import process from "process";


const currentDirectory = process.cwd();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const connection ='mongodb://localhost:27017/BlogTrail';
mongoose.connect(connection)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

 app.get('/',(req,res)=>{
    res.sendFile('./public/index.html',{root:currentDirectory});
 })


app.use('/register',staticUtils.staticRegister);
app.use('/login',staticUtils.staticLogin);
app.get('/dashboard',requireAuth,(req,res)=>{
   res.render('dashboard/dashboard');
});
app.use(router);