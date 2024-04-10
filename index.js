import express from "express";
import mongoose  from "mongoose";
import cookieParser from "cookie-parser";
import process from "process";
import staticRouter from "./routes/staticRoute.js";
import authRouter from "./routes/authRoute.js";
import protectedRouter from "./routes/protectedRoute.js";
import authMiddleware from "./middlewares/authMiddleware.js"


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

app.use('*',authMiddleware.checkUser);
app.use(staticRouter);
app.use(authRouter);
app.use(protectedRouter);


