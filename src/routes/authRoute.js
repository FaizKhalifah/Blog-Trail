import express from 'express';
import  loginController from '../controllers/authController.js';
import  registerController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/login', loginController); 
authRouter.post('/register', registerController);

authRouter.get('/dashboard', authenticateToken, (req, res) => {
    res.sendFile('dashboard.html', { root: './src/views/dashboard' });
});

export default authRouter;