import { motion } from "framer-motion";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="relative flex items-center bg-gradient-to-b from-[#0E1621] to-[#1B2838] justify-center min-h-screen overflow-hidden text-white">
      <div className="space">
    {Array.from({ length: 250 }).map((_, i) => (
  <div
    key={i}
    className="star"
    style={{
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDuration: `${2 + Math.random() * 5}s`,
      animationDelay: `${Math.random() * 5}s`,
    }}
  ></div>
))}

  </div>
      {/* 🔵 Harakatlanuvchi gradient fon */}
      <div className="absolute inset-0 from-[#17212B] via-[#000000] to-[#408cff] animate-gradient" />

      {/* 🔷 Login oynasi */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-[380px] bg-[#17212B]/90 p-8 rounded-2xl shadow-lg backdrop-blur-md"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 bg-[#2AABEE] rounded-full flex items-center justify-center shadow-[0_0_25px_#2AABEE]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 240"
              className="w-9 h-9 fill-white" >
              <path d="M120,0C53.73,0,0,53.73,0,120s53.73,120,120,120,120-53.73,120-120S186.27,0,120,0ZM175.5,80.22l-18.88,89.14c-1.42,6.36-5.19,7.93-10.51,4.94l-29.06-21.4-14.02,13.5c-1.55,1.55-2.86,2.86-5.86,2.86l2.1-29.69,54.05-48.84c2.35-2.1-.51-3.27-3.63-1.22l-66.78,42.07-28.76-9c-6.25-1.95-6.36-6.25,1.3-9.25l112.39-43.33c5.19-1.95,9.73,1.22,8.02,9.02Z" />
            </svg>
          </motion.div>
        </div>

        <h2 className="text-xl font-semibold text-center mb-4">
          Введите ваш номер телефона
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Мы отправим вам код для входа в Telegram.
        </p>

        {/* ⬇️ Bu yerda formani import qilib ishlatamiz */}
        <LoginForm />

        <p className="text-center text-sm text-gray-500 mt-6">
          Нет аккаунта?{" "}
          <a href="/register" className="text-[#2AABEE] hover:underline">
            Создать аккаунт
          </a>
        </p>
      </motion.div>

      {/* 🔮 Gradient animatsiya */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradientMove 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
