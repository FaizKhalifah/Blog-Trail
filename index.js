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

 app.get('/',async(req,res)=>{
  res.sendFile('./public/index.html',{root:currentDirectory});
 })
  
  app.get('/set-cookies', (req, res) => {
    res.cookie('newUser', false);
    res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    res.send('you got the cookies!');
  });
  app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies.newUser);
    res.json(cookies.newUser);
  });
  app.use(router);