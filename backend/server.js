import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT;

//Middlewares
app.use(express.json());

// app.use(cors({ origin: 'localhost:5173' }));
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.use('/auth', authRoutes);

app.get('/', (req, resp) => {
  resp.status(200).send('<h1>Server is running.</h1>');

  return;
});

// app.listeners(5173, ()=> {console.log('Servidor rodando na porta 5173')})
app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
