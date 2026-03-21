import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./models/connectDB";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// connectDB()      WILL BE USED FOR CONNECTING TO MONGO DB LATTER

app.get("/", (req, res) => {
    res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));