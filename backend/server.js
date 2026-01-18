import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors"
dotenv.config();

const port = 3000;
const app = express();
const allowedOrigin = "http://localhost:5173"
app.use(express.json());
app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}))
app.get("/", (req, res) => {
  res.send("Hello and welcome");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
