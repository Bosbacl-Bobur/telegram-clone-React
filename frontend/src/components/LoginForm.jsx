import { useState } from "react";

export default function LoginForm() {
  const [phone, setPhone] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Telefon raqamingiz: ${phone}`);
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="text-gray-300 text-sm">Страна</label>
        <select className="w-full mt-1 bg-[#0E1621] text-white border border-gray-600 rounded-md p-2 outline-none">
          <option>Uzbekistan</option>
          <option>Russia</option>
          <option>Kazakhstan</option>
          <option>USA</option>
        </select>
      </div>

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
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-medium py-2 rounded-md mt-4"
      >
        Продолжить
      </button>
    </form>
  );
}
