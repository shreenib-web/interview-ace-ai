import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed. Please try again.");
      }

      setSuccess("Account created successfully");
      setTimeout(() => {
        navigate("/login");
      }, 800);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

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

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white outline-none focus:border-cyan-400"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm text-emerald-400">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
          >
            {isLoading ? "Creating account..." : "Create Account"}
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
