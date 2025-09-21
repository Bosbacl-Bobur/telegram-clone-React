import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../api";

export default function Login() {
  const handleLogin = async ({ email, password }) => {
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LoginForm onLogin={handleLogin} />
      <p className="mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
