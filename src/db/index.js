import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

export const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MONG0DB CONNECTED");
  } catch (err) {
    console.log("Some Error occured in DB connection", err);
    process.exit(1);
  }
};
