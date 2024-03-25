//package imports
import express from "express";
import dotenv from "dotenv";

//files import
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js"

//defining variables 
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

//middlewares
app.use(express.json()); //to prase(convert) incomming request with json payload to js objects
app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Example app listening on port ${PORT}`)
});