import mongoose from "mongoose"; //Here im importing mongoose for the database and placing a try catch error handler
import dotenv from "dotenv";//loading the .env file

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        
      });
      console.log("MongoDB Connected");
    } catch (error) {
      console.error("MongoDB Connection Failed", error);
      process.exit(1);
    }
  };  

export default connectDB;
