import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus, ShoppingBag, CheckCircle2 } from "lucide-react";

// Mock Data
const MENU_CATEGORIES = ["All", "Breakfast", "Fried Yam", "Noodles", "Anwamo & Waakye", "Fries", "Extras", "Drinks"];

const MENU_ITEMS = [
  // Breakfast Packages
  { id: 101, name: "Milo/Lipton + Bread & Choc/Margarine", category: "Breakfast", price: 15, description: "Classic hot beverage with bread and your choice of spread.", inStock: true, image: "https://images.unsplash.com/photo-1544787219-7f47ccb7fae6?auto=format&fit=crop&q=80&w=800" },
  { id: 102, name: "Porridge + Bread & Choc/Margarine", category: "Breakfast", price: 15, description: "Oat, Tom Brown, or Rice water porridge with bread and spread.", inStock: true, image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=800" },
  { id: 103, name: "Milo/Lipton + Bread & Eggs", category: "Breakfast", price: 20, description: "Hot beverage with bread and freshly prepared eggs.", inStock: true, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },
  { id: 104, name: "Porridge + Bread & Eggs", category: "Breakfast", price: 20, description: "Oat, Tom Brown, or Rice water porridge with bread and eggs.", inStock: true, image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=800" },
  { id: 105, name: "Full Porridge Breakfast", category: "Breakfast", price: 30, description: "Porridge + Bread, Eggs, Sardine & Sausage.", inStock: true, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800" },

  // Fried Yam Packages
  { id: 201, name: "Fried Yam + Sausage/Egg", category: "Fried Yam", price: 15, description: "Yam with sausage or egg (fried/boiled) and pepper.", inStock: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
  { id: 202, name: "Fried Yam + Sausage & Gizzard", category: "Fried Yam", price: 15, description: "Fried yam served with sausage and seasoned gizzard.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 203, name: "Fried Yam + Sausage & Egg", category: "Fried Yam", price: 18, description: "Fried yam served with sausage and egg (fried/boiled) with pepper.", inStock: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
  { id: 204, name: "Fried Yam + Sausage + Gizzard/Egg", category: "Fried Yam", price: 20, description: "Normal package with yam, sausage, and choice of gizzard or egg.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 205, name: "Fried Yam + Gizzard + Sausage/Egg", category: "Fried Yam", price: 20, description: "Normal package with yam, gizzard, and choice of sausage or egg.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 206, name: "Fried Yam + Fish only", category: "Fried Yam", price: 20, description: "Fried yam served with delicious fried fish.", inStock: true, image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800" },
  { id: 207, name: "Bossu Yam + Chicken + Extra", category: "Fried Yam", price: 25, description: "Fried yam with chicken and either sausage, egg, or gizzard.", inStock: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
  { id: 208, name: "Bossu Yam + Fish + Extra", category: "Fried Yam", price: 25, description: "Fried yam with fish and either sausage, gizzard, or egg.", inStock: true, image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800" },
  { id: 209, name: "Bossu Yam + Pork (Small)", category: "Fried Yam", price: 25, description: "Fried yam served with a small portion of pork.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 210, name: "Bossu Yam + Pork (Big)", category: "Fried Yam", price: 30, description: "Fried yam served with a large portion of pork.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 211, name: "Bossu Ultimate Yam Package", category: "Fried Yam", price: 30, description: "Fried yam with egg, chicken, and big sausage.", inStock: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },

  // Noodles
  { id: 301, name: "Noodles with Fried Egg (Reg)", category: "Noodles", price: 20, description: "Regular portion noodles with fried egg.", inStock: true, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800" },
  { id: 302, name: "Noodles with Fried Egg (Large)", category: "Noodles", price: 40, description: "Large portion noodles with fried egg.", inStock: true, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800" },
  { id: 303, name: "Assorted Noodles + Eggs & Sausages (Reg)", category: "Noodles", price: 40, description: "Regular assorted noodles with fried eggs and sausages.", inStock: true, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800" },
  { id: 304, name: "Assorted Noodles + Eggs & Sausages (Large)", category: "Noodles", price: 50, description: "Large assorted noodles with fried eggs and sausages.", inStock: true, image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800" },
  { id: 305, name: "Assorted Noodles + Chicken & Extra (Reg)", category: "Noodles", price: 50, description: "Regular assorted noodles with chicken and egg/sausages.", inStock: true, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800" },
  { id: 306, name: "Assorted Noodles + Chicken & Extra (Large)", category: "Noodles", price: 60, description: "Large assorted noodles with chicken and egg/sausages.", inStock: true, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800" },

  // Fries
  { id: 401, name: "Yam Chips + Sausage or Chicken", category: "Fries", price: 25, description: "Crispy yam chips with your choice of sausage or chicken.", inStock: true, image: "https://images.unsplash.com/photo-1585692277358-e36efa0a468d?auto=format&fit=crop&q=80&w=800" },
  { id: 402, name: "Yam Chips + Sausage & Chicken", category: "Fries", price: 30, description: "Crispy yam chips served with both sausage and chicken.", inStock: true, image: "https://images.unsplash.com/photo-1585692277358-e36efa0a468d?auto=format&fit=crop&q=80&w=800" },
  { id: 403, name: "Yam Chips + 2 Chicken Pieces & Sausage", category: "Fries", price: 35, description: "Crispy yam chips with 2 pieces of chicken and a sausage.", inStock: true, image: "https://images.unsplash.com/photo-1585692277358-e36efa0a468d?auto=format&fit=crop&q=80&w=800" },

  // Anwamo & Waakye
  { id: 501, name: "Loaded Anwamo (Small)", category: "Anwamo & Waakye", price: 30, description: "Small portion of our loaded Anwamo.", inStock: true, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800" },
  { id: 502, name: "Loaded Anwamo (Medium)", category: "Anwamo & Waakye", price: 40, description: "Medium portion of our loaded Anwamo.", inStock: true, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800" },
  { id: 503, name: "Loaded Anwamo (Large)", category: "Anwamo & Waakye", price: 50, description: "Large portion of our loaded Anwamo.", inStock: true, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800" },
  { id: 504, name: "Waakye Package (Small)", category: "Anwamo & Waakye", price: 30, description: "Small package of our signature Waakye.", inStock: true, image: "https://images.unsplash.com/photo-1664992805988-825590a2a11b?auto=format&fit=crop&q=80&w=800" },
  { id: 505, name: "Waakye Package (Medium)", category: "Anwamo & Waakye", price: 40, description: "Medium package of our signature Waakye.", inStock: true, image: "https://images.unsplash.com/photo-1664992805988-825590a2a11b?auto=format&fit=crop&q=80&w=800" },
  { id: 506, name: "Waakye Package (Large)", category: "Anwamo & Waakye", price: 50, description: "Large package of our signature Waakye.", inStock: true, image: "https://images.unsplash.com/photo-1664992805988-825590a2a11b?auto=format&fit=crop&q=80&w=800" },

  // Extras
  { id: 601, name: "Fried Yam Only", category: "Extras", price: 10, description: "Portion of fried yam.", inStock: true, image: "https://images.unsplash.com/photo-1585692277358-e36efa0a468d?auto=format&fit=crop&q=80&w=800" },
  { id: 602, name: "Gizzard", category: "Extras", price: 5, description: "Seasoned gizzard.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 603, name: "Small Sausage", category: "Extras", price: 5, description: "Small sausage link.", inStock: true, image: "https://images.unsplash.com/photo-1563514986161-583eb52f4c4a?auto=format&fit=crop&q=80&w=800" },
  { id: 604, name: "Big Sausage", category: "Extras", price: 8, description: "Large sausage link.", inStock: true, image: "https://images.unsplash.com/photo-1563514986161-583eb52f4c4a?auto=format&fit=crop&q=80&w=800" },
  { id: 605, name: "Fish", category: "Extras", price: 10, description: "Piece of fried fish.", inStock: true, image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800" },
  { id: 606, name: "Sausage Sauce", category: "Extras", price: 10, description: "Flavorful sausage sauce.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 607, name: "Gizzard Sauce", category: "Extras", price: 10, description: "Spicy gizzard sauce.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 608, name: "Chicken (Small)", category: "Extras", price: 15, description: "Small piece of chicken.", inStock: true, image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800" },
  { id: 609, name: "Chicken (Big)", category: "Extras", price: 20, description: "Large piece of chicken.", inStock: true, image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800" },
  { id: 610, name: "Pork", category: "Extras", price: 15, description: "Portion of pork.", inStock: true, image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800" },
  { id: 611, name: "Kosua Preman (Egg)", category: "Extras", price: 5, description: "Boiled or fried egg.", inStock: true, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800" },

  // Drinks
  { id: 701, name: "Fresh Kube", category: "Drinks", price: 10, description: "Fresh coconut water.", inStock: true, image: "https://images.unsplash.com/photo-1510521876402-4ec173d1abfa?auto=format&fit=crop&q=80&w=800" },
  { id: 702, name: "Packaged Kube", category: "Drinks", price: 15, description: "Packaged coconut water (with ice or lime).", inStock: true, image: "https://images.unsplash.com/photo-1510521876402-4ec173d1abfa?auto=format&fit=crop&q=80&w=800" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [orderType, setOrderType] = useState<"pickup" | "delivery">("pickup");
  const [momoNumber, setMomoNumber] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const filteredItems = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const addToCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
      }
      return prev.filter(item => item.id !== id);
    });
  };

  const cartTotal = cart.reduce((total, cartItem) => {
    const item = MENU_ITEMS.find(i => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const deliveryFee = orderType === "delivery" ? 10 : 0;
  const finalTotal = cartTotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      alert("Order placed successfully! Check your phone for the MoMo prompt.");
      setCart([]);
      setIsCheckingOut(false);
      setMomoNumber("");
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
      
      {/* Main Menu Area */}
      <div className="flex-1">
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
                <p className="text-stone-500 text-sm mb-4 flex-grow">{item.description}</p>
                
                <button
                  disabled={!item.inStock}
                  onClick={() => addToCart(item.id)}
                  className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
                    item.inStock 
                      ? "bg-brand-50 text-brand-600 hover:bg-brand-500 hover:text-white" 
                      : "bg-stone-100 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  <Plus className="w-4 h-4" /> Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Checkout Sidebar */}
      <div className="w-full lg:w-96 shrink-0">
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sticky top-24 shadow-sm">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-brand-500" />
            Your Order
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-12 text-stone-400">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map(cartItem => {
                  const item = MENU_ITEMS.find(i => i.id === cartItem.id)!;
                  return (
                    <div key={cartItem.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="font-medium text-stone-900 text-sm">{item.name}</h4>
                        <div className="text-brand-500 font-medium text-sm">GH₵{item.price * cartItem.quantity}</div>
                      </div>
                      <div className="flex items-center gap-3 bg-stone-50 rounded-full px-2 py-1 border border-stone-200">
                        <button onClick={() => removeFromCart(item.id)} className="p-1 text-stone-500 hover:text-stone-900">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-bold w-4 text-center">{cartItem.quantity}</span>
                        <button onClick={() => addToCart(item.id)} className="p-1 text-stone-500 hover:text-stone-900">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Type Toggle */}
              <div className="flex bg-stone-100 p-1 rounded-xl mb-6">
                <button
                  onClick={() => setOrderType("pickup")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${orderType === "pickup" ? "bg-white shadow-sm text-stone-900" : "text-stone-500"}`}
                >
                  Pickup
                </button>
                <button
                  onClick={() => setOrderType("delivery")}
                  className={`flex-1 py-2 text-sm font-medium rounded-lg transition-colors ${orderType === "delivery" ? "bg-white shadow-sm text-stone-900" : "text-stone-500"}`}
                >
                  Delivery
                </button>
              </div>

              {/* Summary */}
              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between text-stone-500">
                  <span>Subtotal</span>
                  <span>GH₵{cartTotal}</span>
                </div>
                {orderType === "delivery" && (
                  <div className="flex justify-between text-stone-500">
                    <span>Delivery Fee</span>
                    <span>GH₵{deliveryFee}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold text-stone-900 pt-2 border-t border-stone-100">
                  <span>Total</span>
                  <span className="text-brand-500">GH₵{finalTotal}</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-500 mb-1 uppercase tracking-wider">Mobile Money Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 054 000 0000"
                    value={momoNumber}
                    onChange={(e) => setMomoNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow bg-stone-50"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isCheckingOut || !momoNumber}
                  className="w-full bg-stone-900 hover:bg-black text-white py-4 rounded-xl font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>Pay GH₵{finalTotal} <CheckCircle2 className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
