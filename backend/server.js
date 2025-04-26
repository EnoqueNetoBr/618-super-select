import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"


dotenv.config()

const app = express()

//Middlewares
app.use(express.json())

app.use(cors({origin: "localhost:5173"}))

app.use('/auth',authRoutes)

app.listeners(3000, ()=> {console.log('Servidor rodando na porta 3000')})






