import mongoose from "mongoose"


const DATABASE_URL  = process.env.DATABASE_URL as string;

const connectDB = async () => {
    const conn = await mongoose
      .connect(DATABASE_URL as string)
      .catch(err => console.log(err))
    console.log("Mongoose Connection Established")
    
    return conn
  }

  export default connectDB;