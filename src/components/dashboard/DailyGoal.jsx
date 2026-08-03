function DailyGoal() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-white text-xl font-semibold">
        Today's Goal 🎯
      </h2>

      <p className="text-slate-400 mt-4">
        Solve 10 React interview questions.
      </p>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-slate-300 mb-2">
          <span>Progress</span>
          <span>6 / 10</span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-3">
          <div className="bg-cyan-400 h-3 rounded-full w-3/5"></div>
        </div>
      </div>
    </div>
  );
}

export default DailyGoal;