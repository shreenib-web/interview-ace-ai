import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          InterviewAce AI
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>

          <Link to="/login" className="hover:text-cyan-400">
            Login
          </Link>

          <Link
            to="/register"
            className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;