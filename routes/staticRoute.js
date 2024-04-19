import staticUtils from "../Utils/staticUtils.js";
import express from "express";

const staticRouter = express();

staticRouter.use('/register',staticUtils.staticRegister);
staticRouter.use('/login',staticUtils.staticLogin);
staticRouter.use('/dashboard',staticUtils.staticDashboard);
staticRouter.use('/posts',staticUtils.staticPosts);
staticRouter.use('/newBlog',staticUtils.staticNewBlog);
staticRouter.use('/feedbacks',staticUtils.staticFeedbacks);

export default staticRouter;