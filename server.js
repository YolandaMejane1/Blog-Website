/**
 * Boilerplate code for starting a Node.js server with Express and MongoDB
 * Source: https://arjunsharma.hashnode.dev/boilerplate-code-for-starting-a-nodejs-server-with-express-and-mongodb
 * Adapted by: [Yolanda Mejane]
 */

import express from "express";
import cors from "cors";//enables cross origin sharing
import connectDB from "./config/db.js"; //importing the db function with error handling
import dotenv from "dotenv"; //imports the link for mongoDB
import postRoutes from './routes/users.routes.js';

console.log("Current working directory:", process.cwd());

//loading .env file
dotenv.config();
console.log(process.env.MONGO_URI);

const app = express(); //creating the express for routers and API endpoints

connectDB();//Mongo connecting point
app.use(express.json());//this is express middleware
app.use(cors());

//this registers the routes with an api prefix
app.use('/api/posts', postRoutes);

//Testing routes
app.get("/",(req, res) => {
    res.send('Route is working!');
});

//starting server
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
