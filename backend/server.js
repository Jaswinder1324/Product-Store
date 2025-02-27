import express from "express";  
import dotenv from "dotenv";  
import { connectDB } from "./config/db.js";  
import productRoutes from "./routes/product.route.js";
//67b35c4ae85d81ac4f73732f
dotenv.config();  

const app = express();  

const PORT = process.env.PORT || 5000;
app.use(express.json()); // Middleware to parse JSON request bodies  

app.use("/v1/api",productRoutes);

// Start the server and connect to the database  
app.listen(5000, () => {   
    connectDB();   
    console.log(`Server running on http://localhost:${PORT}`);  
});