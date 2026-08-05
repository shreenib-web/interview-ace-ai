function QuestionCard({ question }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4 flex flex-wrap gap-3">
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
          {question.category}
        </span>
        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-slate-300">
          {question.difficulty}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-white">{question.title}</h2>
    </div>
  );
}

export default QuestionCard;
