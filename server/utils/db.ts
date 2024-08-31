import mongoose from "mongoose";
require("dotenv").config();
const dbUrl:string = process.env.DB_URL || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl).then((data: any) => {
      console.log(`Database connected to host: ${data.connection.host}`);
    });
  } catch (err) {
    console.error(err.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
