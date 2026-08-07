const AI_API_URL = process.env.AI_API_URL || "https://api.openai.com/v1/chat/completions";
const AI_MODEL = process.env.AI_MODEL || "gpt-4o-mini";

function extractJson(content) {
  const trimmedContent = content.trim();
  const jsonMatch = trimmedContent.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    throw new Error("AI response did not contain JSON.");
  }

  return JSON.parse(jsonMatch[0]);
}

function normalizeList(value) {
  if (Array.isArray(value)) {
    return value.map(String).filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

function normalizeFeedback(feedback) {
  const numericScore = Number(feedback.score);

  return {
    score: Number.isFinite(numericScore)
      ? Math.max(0, Math.min(10, numericScore))
      : 0,
    correctness: String(feedback.correctness || "Needs review"),
    strengths: normalizeList(feedback.strengths),
    weaknesses: normalizeList(feedback.weaknesses),
    missingConcepts: normalizeList(feedback.missingConcepts),
    improvementSuggestions: normalizeList(feedback.improvementSuggestions),
    idealAnswer: String(feedback.idealAnswer || ""),
    followUpQuestion: String(feedback.followUpQuestion || ""),
  };
}

export async function getInterviewFeedback({
  technology,
  difficulty,
  interviewType,
  question,
  userAnswer,
}) {
  if (!process.env.AI_API_KEY) {
    throw new Error("AI API key is not configured.");
  }

  const response = await fetch(AI_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.AI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: AI_MODEL,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are a senior technical interviewer. Return only valid JSON.",
        },
        {
          role: "user",
          content: `
Evaluate this mock interview answer.

Technology: ${technology}
Difficulty: ${difficulty}
Interview Type: ${interviewType}
Question: ${question}
User Answer: ${userAnswer}

Return JSON with exactly these keys:
{
  "score": number from 0 to 10,
  "correctness": "Good" | "Partially Correct" | "Incorrect",
  "strengths": string[],
  "weaknesses": string[],
  "missingConcepts": string[],
  "improvementSuggestions": string[],
  "idealAnswer": string,
  "followUpQuestion": string
}
`,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("AI provider request failed.");
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("AI provider returned an empty response.");
  }

  return normalizeFeedback(extractJson(content));
}
