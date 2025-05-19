import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Successfully connected to MongoDB!")
    } catch (error) {
        console.log("MongoDB connection failed!", error.stack);
    }
}

export default connectToDB;