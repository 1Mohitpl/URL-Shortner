const mongoose = require("mongoose");

const connectDB = async () => {
     
    await mongoose.connect (
        "mongodb://localhost:27017/short-url"
);
};


module.exports = {connectDB};