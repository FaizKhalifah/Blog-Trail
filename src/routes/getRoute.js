import express from 'express';
import  authenticateToken  from '../middlewares/authMiddleware.js';

const getRouter = express.Router();

getRouter.get('/',(req, res) => {
    res.sendFile('index.html', { root: './public' });
});

getRouter.get('/login',(req, res) => {
    res.sendFile('login.html', { root: './src/views/Login' });
})

getRouter.get('/register',(req, res) => {
    res.sendFile('register.html', { root: './src/views/register' });
})

getRouter.get('/dashboard', authenticateToken, (req, res) => {
    res.sendFile('dashboard.html', { root: './src/views/dashboard' });
});

export default getRouter;