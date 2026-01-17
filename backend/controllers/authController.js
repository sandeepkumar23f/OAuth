import { connection } from "../config/dbconfig.js";
import { MongoClient } from "mongodb";
export const SignUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const db = await connection();
    const collection = db.collection("users");

    await collection.insertOne({ email, password });

    return res.status(201).json({
      success: true,
      message: "You have successfully signed up",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Signup failed",
      error: error.message,
    });
  }
};

export const Login = async (req, res) => {
  try{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    const db = await connection();
    const collection = await db.collection("users");
    const result = await collection.findOne({email,password})
    if(result){
        res.status(200).json({
            success: true,
            message: "User found and login succ"
        })
    }
  } catch(err){
    console.error("error during logining")
  }
};
