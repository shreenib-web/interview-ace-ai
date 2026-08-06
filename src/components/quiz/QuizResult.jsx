function QuizResult({ totalQuestions, correctAnswers, restartQuiz }) {
  const wrongAnswers = totalQuestions - correctAnswers;
  const percentageScore = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center sm:p-8">
        <p className="text-sm font-medium text-cyan-400">Quiz Complete</p>
        <h1 className="mt-2 text-3xl font-bold text-white">Result</h1>

        <div className="mx-auto my-8 flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-500 bg-slate-800">
          <span className="text-3xl font-bold text-white">
            {percentageScore}%
          </span>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Total Questions</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {totalQuestions}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Correct Answers</p>
            <p className="mt-1 text-2xl font-bold text-green-400">
              {correctAnswers}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Wrong Answers</p>
            <p className="mt-1 text-2xl font-bold text-red-400">
              {wrongAnswers}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Percentage Score</p>
            <p className="mt-1 text-2xl font-bold text-cyan-400">
              {percentageScore}%
            </p>
          </div>
        </div>

        <button
          onClick={restartQuiz}
          className="mt-8 rounded-lg bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600"
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizResult;
