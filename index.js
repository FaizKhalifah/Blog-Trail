import express from "express";
import mongoose  from "mongoose";
import router from "./routes/authRoute.js";

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
const connection ='mongodb://localhost:27017/BlogTrail';
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  app.get('/', (req, res) => res.render('index'));
  app.use(router);