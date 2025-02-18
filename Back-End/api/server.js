import express from 'express';
import cors from 'cors';
import { db } from './connect.js';

const app = express();
app.use(cors());

const PORT = 3005;


app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/artists', async (req, res) => {
  res.send(await db.collection('artists').find({}).toArray());
})
app.get('/songs', async (req, res) => {
  res.send(await db.collection('songs').find({}).toArray());
})

app.listen(PORT, () => {
  console.log(`✅Servidor rodando na porta ${PORT}🚀`);
});
