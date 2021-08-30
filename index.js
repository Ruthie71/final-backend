import 'dotenv/config.js';
import express from "express";
import aiRouter from "./routes/aiRouter.js";
import userRouter from "./routes/userRouter.js";
import profilesRouter from "./routes/profilesRouter.js";
import personalSkillsRouter from "./routes/personalSkillsRouter.js";
import techSkillsRouter from "./routes/techSkillsRouter.js";
import languagesRouter from "./routes/languagesRouter.js";
import errorHandler from "./middlewares/errorHandler.js"
import './db/mongooseClient.js';
import uploadHandler from './middlewares/uploadHandler.js';
import uploadResponse from './middlewares/uploadResponse.js';
import verifyToken from './middlewares/verifyToken.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // needed to access body from req
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);
app.use('/user', userRouter);
app.use('/profiles', profilesRouter);
app.use('/personalskills', personalSkillsRouter);
app.use('/techskills', techSkillsRouter);
app.use('/languages', languagesRouter);
app.post('/image-upload', verifyToken, uploadHandler.single('image'), uploadResponse);
app.use('/ai', aiRouter);
app.use("/", (req, res) => res.send("Welcome to the CV API"));
app.use(errorHandler)
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);


