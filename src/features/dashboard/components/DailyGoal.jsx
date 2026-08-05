function DailyGoal() {
  return (
    <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
      <h2 className="text-lg font-semibold text-white mb-2">Daily Goal</h2>
      <p className="text-slate-400 mb-5">Complete 10 practice questions today.</p>

      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-slate-300">Progress</span>
        <span className="font-semibold text-cyan-400">7 / 10</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-800">
        <div className="h-full w-[70%] rounded-full bg-cyan-400" />
      </div>
    </div>
  );
}

export default DailyGoal;
