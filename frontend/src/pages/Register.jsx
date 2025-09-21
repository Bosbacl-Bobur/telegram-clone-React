import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { registerUser } from "../utils/api";

export default function Register() {
  const handleRegister = async ({ username, email, password }) => {
    try {
      const data = await registerUser({ username, email, password });

      if (data.message === "User registered successfully") {
        alert("✅ Registration successful! Now you can login.");
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
      <RegisterForm onRegister={handleRegister} />
      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
