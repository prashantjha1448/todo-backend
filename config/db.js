
const mongoose = require("mongoose")

const URI= process.env.MONGO_URI


const connectDB = async ()=>{
    try {
        await mongoose.connect(URI)
        await console.log("connect MongoDB");
    } catch (error) {
        console.log("error while connecting DB" , error);
        
    }
    
}

module.exports = connectDB