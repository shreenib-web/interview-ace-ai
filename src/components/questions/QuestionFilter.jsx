function QuestionFilter() {
  return (
    <select className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white">
      <option value="">All Categories</option>
      <option value="React">React</option>
      <option value="JavaScript">JavaScript</option>
    </select>
  );
}

export default QuestionFilter;
