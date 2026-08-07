import { Link } from "react-router-dom";

function uniqueTopItems(items, limit = 3) {
  return [...new Set(items.filter(Boolean))].slice(0, limit);
}

function InterviewResult({ responses, onChooseAnother, onTryAgain }) {
  const totalScore = responses.reduce(
    (sum, response) => sum + Number(response.feedback.score || 0),
    0
  );
  const averageScore = responses.length ? totalScore / responses.length : 0;
  const strongAreas = uniqueTopItems(
    responses.flatMap((response) => response.feedback.strengths || [])
  );
  const areasToImprove = uniqueTopItems(
    responses.flatMap((response) => [
      ...(response.feedback.missingConcepts || []),
      ...(response.feedback.weaknesses || []),
    ])
  );

  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center sm:p-8">
        <p className="text-sm font-medium text-cyan-400">AI Interview</p>
        <h1 className="mt-2 text-3xl font-bold text-white">
          Interview Complete!
        </h1>

        <div className="mx-auto my-8 flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-500 bg-slate-800">
          <span className="text-3xl font-bold text-white">
            {averageScore.toFixed(1)}
          </span>
        </div>

        <div className="grid gap-4 text-left sm:grid-cols-2">
          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Overall Score</p>
            <p className="mt-1 text-2xl font-bold text-cyan-400">
              {averageScore.toFixed(1)}/10
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Questions</p>
            <p className="mt-1 text-2xl font-bold text-white">
              {responses.length}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Average Score</p>
            <p className="mt-1 text-2xl font-bold text-green-400">
              {averageScore.toFixed(1)}
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-4">
            <p className="text-sm text-slate-400">Session</p>
            <p className="mt-1 text-2xl font-bold text-white">Complete</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
          <section className="rounded-lg bg-slate-800 p-4">
            <h2 className="mb-3 font-semibold text-white">Strong Areas</h2>
            <p className="leading-relaxed text-slate-300">
              {strongAreas.length ? strongAreas.join(", ") : "Keep practicing."}
            </p>
          </section>

          <section className="rounded-lg bg-slate-800 p-4">
            <h2 className="mb-3 font-semibold text-white">Areas to Improve</h2>
            <p className="leading-relaxed text-slate-300">
              {areasToImprove.length
                ? areasToImprove.join(", ")
                : "No major gaps found."}
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={onTryAgain}
            className="rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-600"
          >
            Try Again
          </button>
          <button
            onClick={onChooseAnother}
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:bg-slate-800"
          >
            Choose Another Technology
          </button>
          <Link
            to="/dashboard"
            className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:bg-slate-800"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InterviewResult;
