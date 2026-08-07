import express from "express";
import { evaluateInterviewAnswer } from "../controllers/aiInterviewController.js";

const router = express.Router();

router.post("/interview", evaluateInterviewAnswer);

export default router;
