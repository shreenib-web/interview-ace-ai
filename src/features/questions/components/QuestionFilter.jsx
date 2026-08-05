function QuestionFilter({
  category,
  setCategory,
  difficulty,
  setDifficulty,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
      >
        <option>All</option>
        <option>React</option>
        <option>JavaScript</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>Node.js</option>
      </select>

      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white"
      >
        <option>All</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

    </div>
  );
}

export default QuestionFilter;