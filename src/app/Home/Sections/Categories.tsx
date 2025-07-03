import { useState } from "react";
import { m } from "framer-motion";
import { categories } from "../../data/mockData";

function Categories() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
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
  );
}

export default Categories;
