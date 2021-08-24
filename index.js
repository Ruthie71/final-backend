import 'dotenv/config.js';
import express from "express";
import userRouter from "./routes/userRouter.js";
import profilesRouter from "./routes/profilesRouter.js";
import personalSkillsRouter from "./routes/personalSkillsRouter.js";
import techSkillsRouter from "./routes/techSkillsRouter.js";
import languagesRouter from "./routes/languagesRouter.js";
import errorHandler from "./middlewares/errorHandler.js"
import './db/mongooseClient.js';


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // needed to access body from req
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  next();
});
app.use('/user', userRouter);
app.use('/profiles', profilesRouter);
app.use('/personalskills', personalSkillsRouter);
app.use('/techskills', techSkillsRouter);
app.use('/languages', languagesRouter);
app.use("/", (req, res) => res.send("Welcome to the CV API"));
app.use(errorHandler)
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);


