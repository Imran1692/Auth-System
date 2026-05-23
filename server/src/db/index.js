import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)

    }catch (error)
    {
        console.log("mongoose connection error",error);
        process.exit(1);
    }
}

export default connectDB