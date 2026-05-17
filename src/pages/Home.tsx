import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Menu as MenuIcon, Star, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  const isKitchenOpen = true; // This would typically come from a backend

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/branded_bag.jpeg"
            alt="Delicious Fried Yam and Chicken"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className={`w-2.5 h-2.5 rounded-full ${isKitchenOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
            <span className="text-white text-sm font-medium tracking-wide uppercase">
              {isKitchenOpen ? 'Kitchen is Open' : 'Kitchen is Closed'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
          >
            The Best Fried Yam <br className="hidden md:block" />
            <span className="text-brand-500">on Campus.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-medium"
          >
            CrunchMasters brings you the ultimate comfort food. Freshly prepared, packed with flavor, and ready when you are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-brand-500/20"
            >
              Order Now <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/menu" className="group flex items-center gap-4 p-6 rounded-2xl bg-stone-50 hover:bg-brand-50 transition-colors border border-stone-100 hover:border-brand-100">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MenuIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">View Menu</h3>
                <p className="text-stone-500 text-sm">Explore our delicious bowls</p>
              </div>
            </Link>
            
            <a href="#location" className="group flex items-center gap-4 p-6 rounded-2xl bg-stone-50 hover:bg-brand-50 transition-colors border border-stone-100 hover:border-brand-100">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Our Location</h3>
                <p className="text-stone-500 text-sm">Socio-New Block Canteen</p>
              </div>
            </a>

            <Link to="/menu?category=specials" className="group flex items-center gap-4 p-6 rounded-2xl bg-stone-50 hover:bg-brand-50 transition-colors border border-stone-100 hover:border-brand-100">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">Today's Special</h3>
                <p className="text-stone-500 text-sm">Check out what's hot today</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Vibe Section */}
      <section className="py-24 bg-stone-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Join the #CrunchMovement</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">See what everyone on campus is talking about.</p>
        </div>
        
        {/* Scrolling Feed Simulation */}
        <div className="flex gap-4 px-4 pb-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
          {[
            "/asset_mockups.jpeg", 
            "/shop_front_wide.jpeg", 
            "/menu_banner.jpeg", 
            "/asset_logos.jpeg", 
            "/shop_counter.jpeg"
          ].map((imgSrc, i) => (
            <div key={i} className="snap-center shrink-0 w-64 md:w-80 aspect-[9/16] bg-stone-200 rounded-2xl overflow-hidden relative group">
              <img 
                src={imgSrc} 
                alt="CrunchMasters Community" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">"Literally the best lunch I've had all week! 🤤🔥"</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
