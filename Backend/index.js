import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'BackEnd')));


const port = 80;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  })

  app.get('/',async(req,res)=>{
    try{
        res.sendFile('../Frontend/Home/index.html',{root:'../'});
    }catch(err){
        res.status(404);
        console.log("Terjadi error");
    }
})

app.get('/Dashboard',async(req,res)=>{
    try{
        res.sendFile('../FrontEnd/Dashboard/index.html',{root:currentDiretory});
    }catch(err){
        res.status(404);
        console.log("Terjadi error");
    }
})