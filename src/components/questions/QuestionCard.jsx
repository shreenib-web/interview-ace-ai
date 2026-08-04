function QuestionCard({ question }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

      <div className="flex justify-between">

        <h2 className="text-xl font-semibold text-white">
          {question.title}
        </h2>

        <button className="text-yellow-400">
          ⭐
        </button>

      </div>

      <div className="flex gap-3 mt-4">

        <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm">
          {question.category}
        </span>

        <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
          {question.difficulty}
        </span>

      </div>

      <button className="mt-6 bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600">
        View Answer
      </button>

    </div>
  );
}

export default QuestionCard;