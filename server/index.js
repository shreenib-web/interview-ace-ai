import dotenv from "dotenv";
import express from "express";
import aiInterviewRoutes from "./routes/aiInterviewRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/ai", aiInterviewRoutes);

app.listen(PORT, () => {
  console.log(`InterviewAce API running on port ${PORT}`);
});
