import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();

//Middlewares
app.use(express.json())

app.use(cors({origin: "localhost:5173"}));




