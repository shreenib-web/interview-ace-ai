function QuizCard({
  question,
  selectedAnswer,
  questionNumber,
  totalQuestions,
  isFirstQuestion,
  isLastQuestion,
  onSelectAnswer,
  onPrevious,
  onNext,
}) {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
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
        {question.question}
      </h2>

      <div className="grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;

          return (
            <button
              key={option}
              onClick={() => onSelectAnswer(option)}
              className={`rounded-lg border px-4 py-3 text-left text-white transition ${
                isSelected
                  ? "border-cyan-400 bg-cyan-500"
                  : "border-slate-700 bg-slate-800 hover:border-cyan-500 hover:bg-slate-700"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className="rounded-lg border border-slate-700 px-5 py-2 font-medium text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className="rounded-lg bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLastQuestion ? "Finish Quiz" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default QuizCard;
