function InterviewQuestion({
  answer,
  error,
  isSubmitting,
  question,
  questionNumber,
  totalQuestions,
  onAnswerChange,
  onSubmit,
}) {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-cyan-400">AI Interviewer</p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Question {questionNumber}
        </h1>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
      >
        <div className="mb-6">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-300">
              Question {questionNumber} of {totalQuestions}
            </p>
            <p className="text-sm text-slate-400">
              {Math.round(progressPercentage)}% complete
            </p>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-cyan-500 transition-all"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <h2 className="mb-6 text-xl font-semibold leading-relaxed text-white">
          {question}
        </h2>

        <textarea
          value={answer}
          onChange={(event) => onAnswerChange(event.target.value)}
          placeholder="Type your answer..."
          rows={8}
          className="min-h-48 w-full resize-y rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
        />

        {error && (
          <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !answer.trim()}
          className="mt-6 w-full rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
        >
          {isSubmitting ? "Reviewing Answer..." : "Submit Answer"}
        </button>
      </form>
    </div>
  );
}

export default InterviewQuestion;
