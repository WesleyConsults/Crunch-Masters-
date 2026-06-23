import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

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
    name: "Assorted Fried Rice — GH₵35 Package",
    price: 35,
    description: "A tasty single-serving with rich flavor and fresh ingredients.",
    image: "/assorted_fried_rice_2.webp",
    category: "Rice",
  },
  {
    id: 2,
    name: "Assorted Fried Rice — GH₵40 Package",
    price: 40,
    description: "A more filling portion, perfect for a satisfying meal.",
    image: "/assorted_fried_rice_3.webp",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeCategory === "All"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
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

        {/* Menu Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            src="/crunch_master_menu_1.webp" 
            alt="Crunch Master Menu 1" 
            onClick={() => setSelectedImage("/crunch_master_menu_1.webp")}
            className="w-full h-auto rounded-2xl shadow-sm border border-stone-100 object-cover cursor-pointer hover:opacity-90 transition-opacity" 
          />
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            src="/crunch_master_menu_2.webp" 
            alt="Crunch Master Menu 2" 
            onClick={() => setSelectedImage("/crunch_master_menu_2.webp")}
            className="w-full h-auto rounded-2xl shadow-sm border border-stone-100 object-cover cursor-pointer hover:opacity-90 transition-opacity" 
          />
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

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-pointer"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedImage}
              alt="Menu Preview"
              className="max-w-full max-h-full object-contain rounded-xl cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
