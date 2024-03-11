import express from 'express';
import { join } from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(join(process.cwd(), '..','FrontEnd', 'Home', 'index.html'));
});

router.get('/dashboard', (req, res) => {
  res.sendFile(join(process.cwd(),'..', 'FrontEnd', 'Dashboard', 'index.html'));
});

export default router;

