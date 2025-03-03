/**
 * Boilerplate code for starting a Node.js server with Express and MongoDB
 * Source: https://arjunsharma.hashnode.dev/boilerplate-code-for-starting-a-nodejs-server-with-express-and-mongodb
 * Adapted by: [Yolanda Mejane]
 */

const express = require('express');
const cors = require("cors");//enables cross origin sharing
const connectDB = require("./config/db"); //importing the db function with error handling
require("dotenv").config(); //imports the link for mongoDB

const app = express(); //creating the express for routers and API endpoints

connectDB();//Mongo connecting point

app.use(express.json());//this is express middleware

//Testing routes
app.get("/",(req, res) => {
    res.send('Route is working!');
});

//starting server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});