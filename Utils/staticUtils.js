import express from "express";

const staticRegister = express();
staticRegister.use(express.static('views/register'));

const staticDashboard = express();
staticDashboard.use(express.static('views/dashboard'));

const staticLogin = express();
staticLogin.use(express.static('views/login'));

const staticPosts = express();
staticPosts.use(express.static('views/posts'));

const staticNewBlog = express();
staticNewBlog.use(express.static('views/newBlog'));

const staticFeedbacks = express();
staticFeedbacks.use(express.static('views/feedbacks'));


export default{
    staticRegister,staticDashboard,staticLogin,staticPosts,staticNewBlog,staticFeedbacks
}


