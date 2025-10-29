import { motion } from "framer-motion";
import { useState } from "react";

export default function Login() {
  const [phone, setPhone] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Telefon raqamingiz: ${phone}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0E1621] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[380px] bg-[#17212B] p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Ваш номер телефона
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Проверьте код страны и введите свой номер телефона.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Country select */}
          <div>
            <label className="text-gray-300 text-sm">Страна</label>
            <select className="w-full mt-1 bg-[#0E1621] text-white border border-gray-600 rounded-md p-2 outline-none">
              <option>Uzbekistan</option>
              <option>Russia</option>
              <option>Kazakhstan</option>
              <option>USA</option>
            </select>
          </div>

          {/* Phone input */}
          <div>
            <label className="text-gray-300 text-sm">Номер телефона</label>
            <div className="flex items-center bg-[#0E1621] border border-gray-600 rounded-md px-3 py-2">
              <span className="text-gray-400 mr-2">+998</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="__ ___ __ __"
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Continue button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-medium py-2 rounded-md mt-4"
          >
            Продолжить
          </motion.button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Быстрый вход по QR-коду
        </p>
      </motion.div>
    </div>
  );
}
