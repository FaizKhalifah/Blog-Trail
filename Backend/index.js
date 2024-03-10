import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import getRoute from "./Routes/getRoute.js";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '../FrontEnd')));

app.use('/', getRoute);
app.use('/dashboard',getRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});