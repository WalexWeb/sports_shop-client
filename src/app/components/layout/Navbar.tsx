import { FaInstagram, FaTelegram, FaVk, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiSearch } from "react-icons/fi";
import { m } from "framer-motion";
import { useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 400);

  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 border-b">
          <div className="flex items-center space-x-6 mb-3 md:mb-0">
            <div className="flex items-center text-blue-600">
              <FiPhone className="mr-2" />
              <span>+7 (123) 456-78-90</span>
            </div>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-700"
            />
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <a
              href="#"
              className="p-2 text-blue-600 hover:text-orange-700 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-blue-600 hover:text-orange-700 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-blue-600 hover:text-orange-700 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-blue-600 hover:text-orange-700 transition-colors"
              aria-label="VKontakte"
            >
              <FaVk size={20} />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col md:flex-row justify-between items-center py-4">
          <m.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-blue-600 mb-4 md:mb-0"
          >
            Спортивный сектор
          </m.h1>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              Новинки
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-700 font-medium"
            >
              Контакты
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
