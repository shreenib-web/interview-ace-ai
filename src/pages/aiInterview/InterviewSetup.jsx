const technologies = ["React", "JavaScript", "HTML", "CSS", "Node.js", "SQL"];
const difficulties = ["Easy", "Medium", "Hard"];
const interviewTypes = ["Technical", "Conceptual"];

function InterviewSetup({ setup, onChange, onStart }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onStart();
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <p className="text-sm font-medium text-cyan-400">AI Interview</p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          AI Mock Interview
        </h1>
        <p className="mt-2 text-slate-400">
          Practice technical interviews and get instant AI-powered feedback.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-slate-800 bg-slate-900 p-5 sm:p-6"
      >
        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Technology
            </span>
            <select
              value={setup.technology}
              onChange={(event) => onChange("technology", event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              {technologies.map((technology) => (
                <option key={technology} value={technology}>
                  {technology}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Difficulty
            </span>
            <select
              value={setup.difficulty}
              onChange={(event) => onChange("difficulty", event.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">
              Interview Type
            </span>
            <select
              value={setup.interviewType}
              onChange={(event) =>
                onChange("interviewType", event.target.value)
              }
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              {interviewTypes.map((interviewType) => (
                <option key={interviewType} value={interviewType}>
                  {interviewType}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600 sm:w-auto"
        >
          Start Interview
        </button>
      </form>
    </div>
  );
}

export default InterviewSetup;
