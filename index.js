import express from 'express';
import  authenticateToken  from './src/middlewares/authMiddleware.js';
// import router from './src/routes/authRoute.js';
import getRouter from './src/routes/getRoute.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', getRouter);
// app.use('/dashboard', router);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});