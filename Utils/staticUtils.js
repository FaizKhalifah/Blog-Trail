import express from "express";

const staticRegister = express();
staticRegister.use(express.static('views/register'));

const staticDashboard = express();
staticDashboard.use(express.static('views/dashboard'));

const staticLogin = express();
staticLogin.use(express.static('views/login'));


export default{
    staticRegister,staticDashboard,staticLogin
}


