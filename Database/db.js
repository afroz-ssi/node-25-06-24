import mongoose from "mongoose";
import color from "colors";
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.LIVE_DB_CONNECTION_URL);
    console.log(
      `DATABASE CONNECTED SUCCESSFULLY ${mongoose.connection.host}`.bgWhite
    );
  } catch (error) {
    console.log(`Error :: ${error}`.bgRed);
  }
};

export default connectDB;
