import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import secureRoutes from './routes/secureRoutes.js';
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
const PORT = process.env.SERVER_PORT;
const app = express();
app.use(cors());

//Middlewares
app.use(express.json());

// // app.use(cors({ origin: 'localhost:5173' }));
// app.use(
//   cors({
//     origin: 'http://localhost:5173',
//   }),
// );

app.use('/auth', authRoutes);
app.use('/secure', secureRoutes);

app.get('/', (req, resp) => {
  resp.status(200).send('<h1>Server is running.</h1>');

  return;
});

// app.get('/images/:filename', (req, res) => {
//   const filename = req.params.filename;
//   const filePath = path.join(__dirname, 'uploads', filename);
//   "backend\uploads\vegetablesBackground-1746809486860.jpg"
//   res.sendFile(filePath);
// });

app.post('/upload', upload.single('productImg'), (req, resp) => {
  // resp.json(req.file);
  const filePath = req.file.path; // This is the path to the uploaded file
  console.log('****BACKEND POST upload TRIGGERED.*****');
  console.log(req.body);
  console.log(`File uploaded successfully! File path: ${filePath}`);
  resp.send(`File uploaded successfully! File path: ${filePath}`);
  return;
});

// app.listeners(5173, ()=> {console.log('Servidor rodando na porta 5173')})
app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT} `);
});
