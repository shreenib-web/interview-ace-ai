import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", score: 20 },
  { day: "Tue", score: 35 },
  { day: "Wed", score: 50 },
  { day: "Thu", score: 65 },
  { day: "Fri", score: 80 },
  { day: "Sat", score: 75 },
  { day: "Sun", score: 95 },
];

function ProgressChart() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-4">
        Weekly Progress
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />
            <XAxis dataKey="day" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#06B6D4"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProgressChart;