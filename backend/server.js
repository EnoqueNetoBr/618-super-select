import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    // Get the file extension
    const ext = path.extname(file.originalname);
    // Get the original name without the extension
    const name = path.basename(file.originalname, ext);
    // Create a unique filename using the original name, timestamp, and extension
    const uniqueName = `${name}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage: storage });

dotenv.config();

const app = express();

const PORT = process.env.SERVER_PORT;

//Middlewares
app.use(express.json());

// // app.use(cors({ origin: 'localhost:5173' }));
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//   }),
// );
app.use(cors());

app.use('/auth', authRoutes);

app.get('/', (req, resp) => {
  resp.status(200).send('<h1>Server is running.</h1>');

  return;
});

app.post('/upload', upload.single('file'), (req, resp) => {
  resp.json(req.file);
  return;
});

// app.listeners(5173, ()=> {console.log('Servidor rodando na porta 5173')})
app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
