//API Aplication programing interface
import express from  'express';
import cors from "cors";
import { db } from './connect.js';
import path from "path";

const __dirname = path.resolve()
console.log(__dirname)

const app = express();
const PORT = 3000;

app.use(cors());


app.get('/api/', (request, response) => {
    response.send("So vamos trabalhar com os endpoints '/api/artists' e '/api/songs ")
})

app.get('/api/artists', async(request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})

app.get('/api/songs', async(request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})



app.use(express.static(path.join(__dirname, '../../FrontEnd/dist')));

app.get('*', async(request, response) => {
    response.sendFile(path.join(__dirname, '../../FrontEnd/dist/index.html'));
})

app.listen(PORT, () => {
    console.log("Servidor esta escutando a porta" + PORT);
});