import { Instagram, Send, Bell } from "lucide-react";

export default function Community() {
  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">The Crunch Community</h1>
          <p className="text-lg text-stone-600">Join the movement. Follow us for flash sales, secret menu drops, and campus vibes.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Wall of Fame */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">👑</span> Wall of Fame
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "/shop_counter.jpeg",
                  "/menu_banner.jpeg",
                  "/shop_front_banner.jpeg",
                  "/asset_mockups.jpeg",
                  "/shop_front_wide.jpeg",
                  "/asset_logos.jpeg"
                ].map((imgSrc, i) => (
                  <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
                    <img 
                      src={imgSrc} 
                      alt="Wall of Fame" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white font-medium text-sm">@student_vibes{i}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Social Links */}
            <div className="bg-stone-900 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors">
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <span className="font-medium">Follow on Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors">
                  <div className="w-6 h-6 bg-yellow-400 rounded-md flex items-center justify-center text-black font-bold text-xs">👻</div>
                  <span className="font-medium">Add on Snapchat</span>
                </a>
                <a href="#" className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-colors">
                  <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white font-bold text-xs border border-white/20">🎵</div>
                  <span className="font-medium">Watch on TikTok</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-brand-500 rounded-3xl p-8 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Never Miss Out</h3>
              <p className="text-brand-100 mb-6 text-sm">Get SMS alerts for flash sales and when fresh batches drop.</p>
              
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-brand-200 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button type="submit" className="w-full bg-white text-brand-600 hover:bg-stone-100 py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                  Sign Up <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
