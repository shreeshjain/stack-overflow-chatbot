import express from 'express'
import cors from 'cors'
import userRoutes from './routes/users.js'
import userQuestions from './routes/Questions.js'
import userAnswers from './routes/Answers.js'
import dotenv from "dotenv"
import connectDB from './connectMongoDb.js'
import chatbotRoutes from "./routes/chatbot.js"
import otpRoutes from "./routes/otp.js"


dotenv.config();
connectDB();

const app =express();
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes)
app.use('/questions', userQuestions)
app.use('/answer', userAnswers)
app.use("/chatbot" , chatbotRoutes)
app.use("/otp" , otpRoutes)

const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });