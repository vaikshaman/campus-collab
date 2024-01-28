// Import statements
import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import from the correct file path
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from './routes/router.js'; // Import from the correct file path

// Configure dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

// Create an instance of Express
const app = express();

// Set view engine
app.set("view engine","es");

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware for parsing incoming request bodies
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

// Use router middleware
app.use(router);

// Define the port
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
