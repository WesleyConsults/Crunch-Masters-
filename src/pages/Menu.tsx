import { useState } from "react";
import { motion } from "motion/react";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
  images?: string[];
  inStock: boolean;
  category: string;
}

const MENU_CATEGORIES = ["All", "Rice"];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Assorted Fried Rice — GH₵30 Package",
    price: 30,
    description: "A tasty single-serving assorted fried rice package with rich flavor and fresh ingredients.",
    image: "/assorted_fried_rice_1.jpeg",
    inStock: true,
    category: "Rice",
  },
  {
    id: 2,
    name: "Assorted Fried Rice — GH₵40 Package",
    price: 40,
    description: "A more filling portion of assorted fried rice, perfect for a satisfying meal.",
    image: "/assorted_fried_rice_2.jpeg",
    inStock: true,
    category: "Rice",
  },
  {
    id: 3,
    name: "Assorted Fried Rice — GH₵50 Package",
    price: 50,
    description: "A premium assorted fried rice package with extra portions and a richer serving.",
    image: "/assorted_fried_rice_3.jpeg",
    inStock: true,
    category: "Rice",
  },
  {
    id: 4,
    name: "Assorted Fried Rice — GH₵70 Package",
    price: 70,
    description: "A large assorted fried rice package, ideal for sharing or for anyone with a big appetite.",
    image: "/assorted_fried_rice_4.jpeg",
    inStock: true,
    category: "Rice",
  },
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
              {item.images ? (
                <div className="grid grid-cols-2 grid-rows-2 h-full gap-0.5">
                  {item.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${item.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              )}
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
              <a
                href="https://wa.me/233551195049"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
