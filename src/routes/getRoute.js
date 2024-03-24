import express from 'express';
import  authenticateToken  from '../middlewares/authMiddleware.js';

const getRouter = express.Router();

getRouter.get('/',(req, res) => {
    res.sendFile('index.html', { root: './public' });
});

export default getRouter;