import dotenv from "dotenv";
dotenv.config({ path: './.env' });
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";



mongoose.set('debug', true); // Enable debug mode

mongoose.connect
(
    "mongodb+srv://daniel:daniel%401@daniel.s5l6kgo.mongodb.net/?retryWrites=true&w=majority&appName=daniel",
)
.then(() => {
    console.log("MongoDB database is connected.");
})
.catch(err => {
    console.error("MongoDB connection error:", err.message);
});

const app = express();

app.use(express.json());


app.listen(3100, () => {
    console.log("The Server is running!");
});

app.use('/api/user', userRoute);
app.use('/api/auth',authRoute);

app.use((err,req,res,next)=>{
   const statuscode= err.statuscode || 500;
   const message = err.message || "Interbal Server Issue";
   res.status(statuscode).json({
      success:false,
      statuscode,
      message,
   })
})