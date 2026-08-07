import { getInterviewFeedback } from "../services/aiService.js";

const requiredFields = [
  "technology",
  "difficulty",
  "interviewType",
  "question",
  "userAnswer",
];

export async function evaluateInterviewAnswer(req, res) {
  try {
    const missingField = requiredFields.find(
      (field) => !String(req.body[field] || "").trim()
    );

    if (missingField) {
      return res.status(400).json({
        message: "Please complete all interview fields before submitting.",
      });
    }

    const feedback = await getInterviewFeedback({
      technology: req.body.technology,
      difficulty: req.body.difficulty,
      interviewType: req.body.interviewType,
      question: req.body.question,
      userAnswer: req.body.userAnswer,
    });

    return res.json({ feedback });
  } catch (error) {
    console.error("AI interview evaluation failed:", error.message);

    return res.status(500).json({
      message:
        "We could not generate AI feedback right now. Please try again soon.",
    });
  }
}
