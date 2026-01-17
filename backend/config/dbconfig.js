import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config(); // ✅ MUST be here

const client = new MongoClient(process.env.MONGO_URI);

let db;

export const connection = async () => {
  if (!db) {
    await client.connect();
    console.log("MongoDB connected!");
    db = client.db("OAuth-Project");
  }
  return db;
};
