import Groq from "groq-sdk";

const defaultModel = "qwen/qwen3.6-27b";

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY?.trim();

  if (!apiKey || apiKey === "your_groq_api_key_here") {
    throw new Error("GROQ_API_KEY is not configured.");
  }

  return new Groq({
    apiKey,
  });
}

function buildPrompt({ technology, difficulty, count }) {
  return `You are an experienced technical interviewer.

Generate ${count} unique ${difficulty}-level interview questions for ${technology}.

These questions are for developer interview preparation.

Return ONLY valid JSON.

The JSON must have this structure:

{
  "questions": [
    {
      "question": "Question text",
      "answer": "Correct interview answer",
      "explanation": "Short explanation"
    }
  ]
}

Rules:
- Generate exactly ${count} questions.
- Do not duplicate questions.
- Questions must be specifically related to ${technology}.
- Match the requested difficulty.
- Questions should be useful for technical interviews.
- Answers should be accurate and interview-friendly.
- Explanations should be concise.
- Do not include markdown.
- Do not include \`\`\`json.
- Do not include any text outside the JSON.`;
}

function parseJson(content) {
  try {
    return JSON.parse(content);
  } catch {
    const match = String(content || "").match(/\{[\s\S]*\}/);

    if (!match) {
      throw new Error("AI response was not valid JSON.");
    }

    return JSON.parse(match[0]);
  }
}

export async function generateQuestions({ technology, difficulty, count }) {
  const client = getGroqClient();

  const completion = await client.chat.completions.create({
    model: process.env.GROQ_MODEL || defaultModel,
    response_format: { type: "json_object" },
    messages: [
      {
        role: "user",
        content: buildPrompt({ technology, difficulty, count }),
      },
    ],
    temperature: 0.7,
  });

  const content = completion.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("AI provider returned an empty response.");
  }

  return parseJson(content);
}
