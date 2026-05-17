import { useState } from "react";
import { motion } from "motion/react";

const MENU_CATEGORIES = ["All"];

const MENU_ITEMS = [
  // TODO: Replace with actual menu items from client
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">Our Menu</h1>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
          {MENU_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map(item => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={item.id}
            className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="h-48 relative overflow-hidden bg-stone-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {!item.inStock && (
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="bg-stone-900 text-white px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider">Sold Out</span>
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                <span className="font-bold text-brand-500">GH₵{item.price}</span>
              </div>
              <p className="text-stone-500 text-sm flex-grow">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
