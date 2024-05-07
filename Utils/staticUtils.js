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

const staticReadBlog = express();
staticReadBlog.use(express.static('views/readBlog'));


const staticReadOtherBlog = express();
staticReadOtherBlog.use(express.static('views/readOtherBlog'));

const staticConnections = express();
staticConnections.use(express.static('views/connections'));

const staticEditBlog= express();
staticEditBlog.use(express.static('views/editBlog'));

const staticWriterHub = express();
staticWriterHub.use(express.static('views/writerHub'));

export default{
    staticRegister,staticDashboard,staticLogin,staticPosts,staticNewBlog,staticFeedbacks,staticReadBlog,
    staticConnections,staticEditBlog,staticWriterHub,staticReadOtherBlog
}


