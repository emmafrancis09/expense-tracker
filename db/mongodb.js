import mongoose from "mongoose";

const mongodbURI = process.env.MONGOBD_URL;
if (!mongodbURI) {
  throw new Error("Error connecting to the database");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log("Using existing MongoDb connection");
    return;
  }
  try {
    await mongoose.connect(mongodbURI);
    isConnected = true;
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.error("MongoDb connection error:", error);
    throw new Error("MongoDb connection failed");
  }
}
export default connectDB;
