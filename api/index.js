import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

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

app.listen(3100, () => {
    console.log("The Server is running!");
});
