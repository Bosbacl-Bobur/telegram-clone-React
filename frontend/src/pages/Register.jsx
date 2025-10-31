import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🟢 qo‘shildi: navigatsiya uchun

export default function Register() {
  const navigate = useNavigate(); // 🟢 Login sahifaga o‘tish uchun
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Yangi akkaunt: ${formData.firstName} ${formData.lastName} - ${formData.phone}`);
  };

  return ( 
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0E1621] to-[#1B2838] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[380px] bg-[#17212B]/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl" >
        {/* 🟢 Yangi Telegram logo */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 1.1  }}
            className="w-20 h-20 bg-gradient-to-tr from-[#2AABEE] to-[#229ED9] rounded-full flex items-center justify-center shadow-lg shadow-[#2AABEE]/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 240"
              className="w-10 h-10 fill-white">
              <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm58.7 81.7l-20 94.3c-1.5 6.8-5.5 8.5-11 5.3l-30.4-22.4-14.7 14.1c-1.6 1.6-3 3-6.1 3l2.2-31.8 57.9-52.3c2.5-2.2-0.5-3.4-3.9-1.3l-71.7 45.1-30.9-9.7c-6.7-2.1-6.8-6.7 1.5-9.9l120.7-46.6c5.6-2 10.5 1.3 8.7 9.6z" />
            </svg>
          </motion.div>
        </div>

        {/* 🟢 Sarlavha */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold text-center mb-4">
          Создать аккаунт Telegram
        </motion.h2>

        <p className="text-gray-400 text-sm text-center mb-6">
          Введите свои данные, чтобы начать пользоваться Telegram.
        </p>

        {/* 🟢 Forma */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-gray-300 text-sm">Имя</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              placeholder="Введите имя"
              className="w-full mt-1 bg-[#0E1621] text-white border border-gray-600 rounded-md p-2 outline-none placeholder-gray-500"
              required />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Фамилия (необязательно)</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              placeholder="Введите фамилию"
              className="w-full mt-1 bg-[#0E1621] text-white border border-gray-600 rounded-md p-2 outline-none placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Номер телефона</label>
            <div className="flex items-center bg-[#0E1621] border border-gray-600 rounded-md px-3 py-2">
              <span className="text-gray-400 mr-2">+998</span>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="__ ___ __ __"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
                required
              />
            </div>
          </div>

          {/* 🟢 Next button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-medium py-2 rounded-md mt-4"
          >
            Далее
          </motion.button>
        </form>

        {/* 🟢 Login sahifaga o‘tish */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Уже есть аккаунт?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#2AABEE] hover:underline"
          >
            Войти
          </button>
        </p>
      </motion.div>
    </div>
  );
}
