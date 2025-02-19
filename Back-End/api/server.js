import express from 'express';
import cors from 'cors';
import path from 'path';
import { db } from './connect.js';

const app = express();
app.use(cors());

const __dirname = path.resolve();

const PORT = 3005;


app.get('/api/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/api/artists', async (req, res) => {
  res.send(await db.collection('artists').find({}).toArray());
})
app.get('/api/songs', async (req, res) => {
  res.send(await db.collection('songs').find({}).toArray());
})

app.use(express.static(path.join(__dirname, '../Front-End/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Front-End/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅Servidor rodando na porta ${PORT}🚀`);
});
