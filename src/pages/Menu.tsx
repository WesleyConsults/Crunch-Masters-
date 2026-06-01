import { useState } from "react";
import { motion } from "motion/react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const MENU_CATEGORIES = ["All", "Rice"];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Assorted Fried Rice — GH₵30 Package",
    price: 30,
    description: "A tasty single-serving with rich flavor and fresh ingredients.",
    image: "/assorted_fried_rice_3.webp",
    category: "Rice",
  },
  {
    id: 2,
    name: "Assorted Fried Rice — GH₵40 Package",
    price: 40,
    description: "A more filling portion, perfect for a satisfying meal.",
    image: "/assorted_fried_rice_2.webp",
    category: "Rice",
  },
  {
    id: 3,
    name: "Assorted Fried Rice — GH₵50 Package",
    price: 50,
    description: "A premium package with extra portions and a richer serving.",
    image: "/assorted_fried_rice_1.webp",
    category: "Rice",
  },
  {
    id: 4,
    name: "Assorted Fried Rice — GH₵70 Package",
    price: 70,
    description: "A large package, ideal for sharing or a big appetite.",
    image: "/assorted_fried_rice_4.webp",
    category: "Rice",
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Our Menu</h1>
        <p className="text-stone-500">Assorted Fried Rice Packages</p>

        <div className="flex gap-2 mt-6 overflow-x-auto pb-2 hide-scrollbar">
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

      <div className="space-y-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden bg-stone-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-stone-900 text-sm sm:text-base truncate">
                {item.name}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm mt-0.5 line-clamp-2">
                {item.description}
              </p>
            </div>

            <div className="hidden sm:flex items-center flex-1 min-w-0">
              <span className="flex-1 border-b border-dotted border-stone-300 group-hover:border-stone-400 transition-colors" />
            </div>

            <span className="font-bold text-brand-500 text-lg sm:text-xl shrink-0">
              GH₵{item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
