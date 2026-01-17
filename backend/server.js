import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const port = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello and welcome");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
