import { useState } from "react";

function QuestionCard({ question }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

      <h2 className="text-xl font-semibold text-white">
        {question.title}
      </h2>

      <div className="flex gap-3 mt-4">
        <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm">
          {question.category}
        </span>

        <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
          {question.difficulty}
        </span>
      </div>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-6 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
      >
        {showAnswer ? "Hide Answer" : "View Answer"}
      </button>

      {showAnswer && (
        <div className="mt-5 p-4 rounded-lg bg-slate-800 text-slate-300">
          {question.answer}
        </div>
      )}
    </div>
  );
}

export default QuestionCard;