import { generateQuestions } from "../services/groqService.js";

const validTechnologies = new Set([
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "SQL",
]);

const validDifficulties = new Set(["Easy", "Medium", "Hard"]);
const validCounts = new Set([5, 10]);

function normalizeQuestion(question) {
  return {
    question: String(question?.question || "").trim(),
    answer: String(question?.answer || "").trim(),
    explanation: String(question?.explanation || "").trim(),
  };
}

function normalizeQuestions(questions, expectedCount) {
  if (!Array.isArray(questions)) {
    throw new Error("AI response did not include a questions array.");
  }

  const normalizedQuestions = questions.map(normalizeQuestion);
  const hasInvalidQuestion = normalizedQuestions.some(
    (question) =>
      !question.question || !question.answer || !question.explanation
  );

  if (hasInvalidQuestion || normalizedQuestions.length !== expectedCount) {
    throw new Error("AI response did not match the expected question format.");
  }

  return normalizedQuestions;
}

export async function generateInterviewQuestions(req, res) {
  try {
    const technology = String(req.body.technology || "").trim();
    const difficulty = String(req.body.difficulty || "").trim();
    const count = Number(req.body.count);

    if (!technology || !validTechnologies.has(technology)) {
      return res.status(400).json({ message: "Technology is required." });
    }

    if (!difficulty || !validDifficulties.has(difficulty)) {
      return res.status(400).json({ message: "Difficulty is required." });
    }

    if (!validCounts.has(count)) {
      return res.status(400).json({
        message: "Question count must be either 5 or 10.",
      });
    }

    const aiResponse = await generateQuestions({
      technology,
      difficulty,
      count,
    });

    return res.json({
      success: true,
      questions: normalizeQuestions(aiResponse.questions, count),
    });
  } catch (error) {
    console.error("AI question generation failed:", error.message);

    return res.status(500).json({
      message: "Unable to generate questions right now. Please try again.",
    });
  }
}
