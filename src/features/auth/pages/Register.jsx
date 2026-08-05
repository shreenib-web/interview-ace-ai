import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-slate-400 mt-2">
            Start your interview preparation today.
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="block text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;