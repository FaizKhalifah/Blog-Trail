import express from "express";
import mongoose  from "mongoose";
import router from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
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

 app.get('/dashboard',async(req,res)=>{
  res.render('dashboard');
 })
  
  app.use(router);