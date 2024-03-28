import express from 'express';
import router from './src/routes/authRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.sendFile('./public/index.html'));

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});