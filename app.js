import express, { urlencoded } from 'express';
import userRouter from './routes/userRoute.js';
import taskRouter from './routes/taskRoute.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from 'cors'


config({
    path: "./data/config.env",
});

export const app = express();
const router = express.Router();

// Using Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))


//Using Routers
app.use('/api/v1/users', userRouter)
app.use('/api/v1/task', taskRouter);

// Error Middleware
app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send("Hi this is suraj");
})


