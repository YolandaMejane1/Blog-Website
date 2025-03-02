const mongoose = require('mongoose'); //Here im importing mongoose for the database and placing a try catch error handler


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Failed", error);
        process.exit(1);
    }
};

module.exports = connectDB;
