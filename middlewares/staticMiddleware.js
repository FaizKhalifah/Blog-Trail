import express from "express";

const registerMiddleware = express();
registerMiddleware.use(express.static('views/register'));

const dashboardMiddleware = express();
dashboardMiddleware.use(express.static('views/dashboard'));

const loginMiddleware = express();
loginMiddleware.use(express.static('views/login'));

export { registerMiddleware, dashboardMiddleware, loginMiddleware };

export default{
    registerMiddleware,dashboardMiddleware,loginMiddleware
}


