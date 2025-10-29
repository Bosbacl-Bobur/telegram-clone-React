import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loginUser } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });

      if (data.token) {
        alert("✅ Login successful!");
        localStorage.setItem("token", data.token);
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 to-blue-700">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/20 backdrop-blur-md shadow-xl rounded-2xl p-8 w-96 border border-white/30"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Telegram Clone
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full bg-white/80 text-gray-800"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full bg-white/80 text-gray-800"
          />

          <button
            type="submit"
            className="btn btn-primary w-full rounded-full mt-2"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-yellow-200 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
