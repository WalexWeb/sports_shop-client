import { m } from "framer-motion";
import { useState } from "react";
import {
  FiSearch,
  FiPhone,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp, FaInstagram, FaVk } from "react-icons/fa";
import { categories, featuredProducts, sliderImages } from "../data/mockData";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("bestOffers");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="h-screen w-screen bg-gray-50">
      <Navbar />

      {/* Image Slider Banner */}
      <div className="relative h-96 overflow-hidden">
        {sliderImages.map((img, index) => (
          <m.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </m.div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
        >
          <FiChevronLeft size={24} className="text-blue-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition-all"
        >
          <FiChevronRight size={24} className="text-blue-600" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-orange-700" : "bg-white bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Text Section */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-indigo-800 py-16 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <m.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Спортивная форма для любых команд
          </m.h1>
          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-700"
          >
            Смотреть коллекцию
          </m.button>
        </div>
      </m.div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Категории</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <m.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredItem(category.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">
                  {category.name}
                </h3>
              </div>
              {hoveredItem === category.id && (
                <m.div
                  layoutId="hoverBg"
                  className="absolute inset-0 bg-blue-500 bg-opacity-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </m.div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Оказываем полный спектр услуг
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Переостанавлим формы под каждого человека. Самая новые цельные рынки
            готовой формы для помощи любовного уровня
          </p>
          <m.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-700"
          >
            Узнать больше
          </m.button>
        </div>
      </m.div>

      {/* Products Section with Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Лучшие предложения</h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab("new")}
              className={`px-4 py-2 rounded-full font-medium ${activeTab === "new" ? "bg-orange-700 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Новинки
            </button>
            <button
              onClick={() => setActiveTab("sales")}
              className={`px-4 py-2 rounded-full font-medium ${activeTab === "sales" ? "bg-orange-700 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Акции
            </button>
            <button
              onClick={() => setActiveTab("catalog")}
              className={`px-4 py-2 rounded-full font-medium ${activeTab === "catalog" ? "bg-orange-700 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            >
              Каталог
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {featuredProducts.map((product, index) => (
            <m.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {index % 3 === 0 && (
                  <div className="absolute top-2 right-2 bg-orange-700 text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  В наличии: {product.quantity}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600">
                    {product.price}
                  </span>
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-orange-700 text-white px-4 py-1 rounded-full text-sm hover:bg-orange-700"
                  >
                    Купить
                  </m.button>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <m.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Готовы обновить свою спортивную форму?
          </m.h2>
          <m.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-700 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-700"
          >
            Связаться с нами
          </m.button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
