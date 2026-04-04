import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus, ShoppingBag, CheckCircle2 } from "lucide-react";

// Mock Data
const MENU_CATEGORIES = ["All", "Main Bowls", "Quick Bites", "Add-ons", "Drinks"];

const MENU_ITEMS = [
  { id: 1, name: "Classic Braised Rice Bowl", category: "Main Bowls", price: 35, description: "Our signature braised rice with tender beef, veggies, and special sauce.", inStock: true, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Spicy Fried Yam & Chicken", category: "Main Bowls", price: 40, description: "Crispy fried yam chunks with spicy grilled chicken wings and shito.", inStock: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Jollof Fiesta", category: "Main Bowls", price: 45, description: "Smoky party jollof with assorted meat and fried plantain.", inStock: false, image: "https://images.unsplash.com/photo-1664992805988-825590a2a11b?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Kelewele Bites", category: "Quick Bites", price: 15, description: "Spicy diced fried plantain with roasted peanuts.", inStock: true, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Extra Chicken Wing", category: "Add-ons", price: 10, description: "One piece of our signature grilled chicken wing.", inStock: true, image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Fresh Pineapple Juice", category: "Drinks", price: 12, description: "Freshly squeezed pineapple juice, chilled.", inStock: true, image: "https://images.unsplash.com/photo-1559839914-11aae62e1531?auto=format&fit=crop&q=80&w=800" },
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
                  <span className="font-bold text-orange-500">GH₵{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm mb-4 flex-grow">{item.description}</p>
                
                <button
                  disabled={!item.inStock}
                  onClick={() => addToCart(item.id)}
                  className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
                    item.inStock 
                      ? "bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white" 
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
            <ShoppingBag className="w-6 h-6 text-orange-500" />
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
                        <div className="text-orange-500 font-medium text-sm">GH₵{item.price * cartItem.quantity}</div>
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
                  <span className="text-orange-500">GH₵{finalTotal}</span>
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
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow bg-stone-50"
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
