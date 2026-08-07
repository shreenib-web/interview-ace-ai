function FeedbackList({ items }) {
  if (!items?.length) {
    return <p className="text-slate-400">No specific notes provided.</p>;
  }

  return (
    <ul className="grid gap-2 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InterviewFeedback({ feedback, isLastQuestion, onNext }) {
  const areasToImprove = [
    ...(feedback.weaknesses || []),
    ...(feedback.missingConcepts || []),
    ...(feedback.improvementSuggestions || []),
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-400">AI Feedback</p>
            <h1 className="mt-2 text-3xl font-bold text-white">
              Score: {feedback.score}/10
            </h1>
          </div>

          <div className="rounded-lg bg-slate-800 px-4 py-3">
            <p className="text-sm text-slate-400">Correctness</p>
            <p className="mt-1 font-semibold text-green-400">
              {feedback.correctness}
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <section className="rounded-lg bg-slate-800 p-4">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Strengths
            </h2>
            <FeedbackList items={feedback.strengths} />
          </section>

          <section className="rounded-lg bg-slate-800 p-4">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Areas to Improve
            </h2>
            <FeedbackList items={areasToImprove} />
          </section>

          <section className="rounded-lg bg-slate-800 p-4">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Suggested Answer
            </h2>
            <p className="leading-relaxed text-slate-300">
              {feedback.idealAnswer}
            </p>
          </section>

          <section className="rounded-lg bg-slate-800 p-4">
            <h2 className="mb-3 text-lg font-semibold text-white">
              Follow-up Question
            </h2>
            <p className="leading-relaxed text-slate-300">
              {feedback.followUpQuestion}
            </p>
          </section>
        </div>

        <button
          onClick={onNext}
          className="mt-8 w-full rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600 sm:w-auto"
        >
          {isLastQuestion ? "View Summary" : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default InterviewFeedback;
