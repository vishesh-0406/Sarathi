const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });


const connectDb = async() => {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sarathi';
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error("MongoDB connection Failed" , error.message);
        process.exit(1);
    }
};


module.exports = connectDb;