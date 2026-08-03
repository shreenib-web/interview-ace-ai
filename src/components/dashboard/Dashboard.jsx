import StatCard from "../../components/dashboard/StatCard";

function Dashboard() {
  return (
    <div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="text-slate-400">
          Here's your interview preparation summary.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Questions Solved"
          value="128"
          color="text-cyan-400"
        />

        <StatCard
          title="Quiz Score"
          value="89%"
          color="text-green-400"
        />

        <StatCard
          title="Current Streak"
          value="12 Days"
          color="text-yellow-400"
        />

        <StatCard
          title="Bookmarks"
          value="42"
          color="text-pink-400"
        />

      </div>

    </div>
  );
}

export default Dashboard;