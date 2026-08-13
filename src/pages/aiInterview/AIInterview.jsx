import { useState } from "react";
import { Bot, ChevronDown, Loader2, Sparkles } from "lucide-react";

const technologies = ["React", "JavaScript", "HTML", "CSS", "Node.js", "SQL"];
const difficulties = ["Easy", "Medium", "Hard"];
const questionCounts = [5, 10];

const initialForm = {
  technology: "React",
  difficulty: "Medium",
  count: 5,
};

function SelectField({ id, label, value, options, onChange }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </span>

      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 pr-10 text-white outline-none transition focus:border-cyan-400"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </label>
  );
}

function AIInterview() {
  const [form, setForm] = useState(initialForm);
  const [questions, setQuestions] = useState([]);
  const [visibleAnswers, setVisibleAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const updateForm = (field, value) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: field === "count" ? Number(value) : value,
    }));
  };

  const toggleAnswer = (index) => {
    setVisibleAnswers((currentAnswers) => ({
      ...currentAnswers,
      [index]: !currentAnswers[index],
    }));
  };

  const generateQuestions = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError("");
    setQuestions([]);
    setVisibleAnswers({});

    try {
      const response = await fetch("http://localhost:5000/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Question generation failed.");
      }

      const data = await response.json();

      if (!data.success || !Array.isArray(data.questions)) {
        throw new Error("Invalid question response.");
      }

      setQuestions(data.questions);
    } catch (requestError) {
      console.error("AI interview question generation failed:", requestError);
      setError("Unable to generate questions right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-8">
        <p className="flex items-center gap-2 text-sm font-medium text-cyan-400">
          <Bot size={18} />
          Groq AI
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          AI Interview Question Generator
        </h1>

        <p className="mt-3 text-slate-400">
          Generate personalized interview questions using AI.
        </p>
      </div>

      <form
        onSubmit={generateQuestions}
        className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <SelectField
            id="technology"
            label="Technology"
            value={form.technology}
            options={technologies}
            onChange={(value) => updateForm("technology", value)}
          />

          <SelectField
            id="difficulty"
            label="Difficulty"
            value={form.difficulty}
            options={difficulties}
            onChange={(value) => updateForm("difficulty", value)}
          />

          <SelectField
            id="count"
            label="Number of Questions"
            value={form.count}
            options={questionCounts}
            onChange={(value) => updateForm("count", value)}
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Sparkles size={18} />
            )}
            Generate Questions
          </button>

          {isLoading && (
            <p className="text-sm text-slate-300">
              Generating AI interview questions...
            </p>
          )}
        </div>
      </form>

      {error && (
        <div className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-red-200">
          {error}
        </div>
      )}

      {questions.length > 0 && (
        <div className="mt-8 grid gap-5">
          {questions.map((item, index) => {
            const isAnswerVisible = Boolean(visibleAnswers[index]);

            return (
              <article
                key={`${item.question}-${index}`}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  Question {index + 1}
                </p>

                <h2 className="mt-3 text-xl font-semibold leading-relaxed text-white">
                  {item.question}
                </h2>

                <button
                  type="button"
                  onClick={() => toggleAnswer(index)}
                  className="mt-5 rounded-lg border border-cyan-500 px-4 py-2 font-medium text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                >
                  {isAnswerVisible ? "Hide Answer" : "Show Answer"}
                </button>

                {isAnswerVisible && (
                  <div className="mt-5 space-y-4 rounded-lg bg-slate-950 p-4 text-slate-300">
                    <div>
                      <h3 className="font-semibold text-white">Answer:</h3>
                      <p className="mt-2 leading-relaxed">{item.answer}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Explanation:
                      </h3>
                      <p className="mt-2 leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AIInterview;
