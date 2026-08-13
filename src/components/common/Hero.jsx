import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-slate-900 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
            🚀 AI Powered Learning
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Ace Your Next <br />
            <span className="text-cyan-400">Interview</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg">
            Master React, JavaScript, Node.js and more with interview questions,
            quizzes, coding challenges and progress tracking.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/questions"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Get Started
            </Link>

            <Link
              to="/quiz"
              className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500"
            >
              Take a Quiz
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-slate-800 rounded-2xl p-6 w-full max-w-md shadow-xl">

            <h2 className="text-xl font-bold mb-6">
              Dashboard Preview
            </h2>

            <div className="space-y-4">

              <div>
                <div className="flex justify-between mb-1">
                  <span>React</span>
                  <span>80%</span>
                </div>

                <div className="bg-slate-700 rounded-full h-3">
                  <div className="bg-cyan-400 h-3 rounded-full w-4/5"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>JavaScript</span>
                  <span>70%</span>
                </div>

                <div className="bg-slate-700 rounded-full h-3">
                  <div className="bg-green-400 h-3 rounded-full w-[70%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>Node.js</span>
                  <span>50%</span>
                </div>

                <div className="bg-slate-700 rounded-full h-3">
                  <div className="bg-purple-400 h-3 rounded-full w-1/2"></div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
