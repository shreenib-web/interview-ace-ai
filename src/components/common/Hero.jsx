import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Ace Your Next <span className="text-cyan-400">Interview</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Practice interview questions, solve coding challenges,
            track your progress, and build confidence.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-cyan-500/20 rounded-3xl flex items-center justify-center">
            <h2 className="text-3xl font-bold">
              Dashboard Preview
            </h2>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;