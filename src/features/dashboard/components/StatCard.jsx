function StatCard({ title, value, color }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
      <p className="text-slate-400 text-sm">{title}</p>

      <h2 className={`text-3xl font-bold mt-3 ${color}`}>
        {value}
      </h2>
    </div>
  );
}

export default StatCard;