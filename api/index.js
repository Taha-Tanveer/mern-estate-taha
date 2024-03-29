import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routes/user.route.js";
import authrouter from "./routes/auth.route.js";
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Database connected")
}).catch((err) => {
    console.log(err.message)
})

const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Server running on port 3000 ");
});
app.use("/api/user",userrouter);
app.use("/api/auth",authrouter);


// middleware for error

app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Internal Server Error";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
    });
})