function QuestionSearch({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search questions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-cyan-400"
    />
  );
}

export default QuestionSearch;