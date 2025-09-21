import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../utils/api";
import Alert from "../components/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password  });

      if (data.token) {
        setAlert({ type: "success", message: "✅ Login successful!" });
        localStorage.setItem("token", data.token);
      } else {
        setAlert({ type: "error", message: data.message || "Login failed" });
      }
    } catch (error) {
      console.error(error);
      setAlert({ type: "error", message: "Server error, please try again." });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* 🔔 Alert chiqishi */}
        {alert && <Alert type={alert.type} message={alert.message} />}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
