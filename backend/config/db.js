const mongoose = require('mongoose');

const connectDb = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/sarathi');
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.error("MongoDB connection Failed" , error.message);
        process.exit(1);
    }
};
module.exports = connectDb;