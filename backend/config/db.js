//db se connect kruga
import mongoose from "mongoose";

export const connectDB = async()=>{
    //yaha pe control mongo db k paas jayega
    //bcz control mongodb k pass gya toh error aa sktqa hai
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error)
    {
        console.error(`Error : ${error.message}`);
        process.exit(1);
        //1 - error ayea hai
        //0 - thik chlega
    }
}