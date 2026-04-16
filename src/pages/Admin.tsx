import { useState } from "react";
import { Lock, TrendingUp, Package, Clock, CheckCircle2, XCircle } from "lucide-react";

// Mock Data
const INVENTORY = [
  { id: 1, name: "Classic Braised Rice Bowl", stock: 45, status: "active" },
  { id: 2, name: "Spicy Fried Yam & Chicken", stock: 12, status: "active" },
  { id: 3, name: "Jollof Fiesta", stock: 0, status: "inactive" },
];

const RECENT_ORDERS = [
  { id: "ORD-001", customer: "Kwame A.", items: "2x Braised Rice", total: "GH₵70", status: "preparing", time: "2 mins ago" },
  { id: "ORD-002", customer: "Ama S.", items: "1x Fried Yam", total: "GH₵40", status: "ready", time: "15 mins ago" },
  { id: "ORD-003", customer: "Kojo B.", items: "3x Jollof", total: "GH₵135", status: "completed", time: "1 hour ago" },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-stone-50 px-4">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 w-full max-w-md">
          <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6 text-stone-600" />
          </div>
          <h1 className="text-2xl font-bold text-center text-stone-900 mb-2">Partner & Admin Portal</h1>
          <p className="text-center text-stone-500 mb-8 text-sm">Enter your password to access the dashboard.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Password (try: admin123)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500 bg-stone-50"
              />
            </div>
            <button type="submit" className="w-full bg-stone-900 hover:bg-black text-white py-3 rounded-xl font-bold transition-colors">
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-100 text-center">
            <p className="text-sm text-stone-500 mb-4">Interested in partnering or catering?</p>
            <button 
              onClick={() => {
                const form = document.getElementById('inquiry-form');
                if (form) {
                  form.scrollIntoView({ behavior: 'smooth' });
                  form.classList.remove('hidden');
                }
              }}
              className="text-brand-500 font-medium hover:text-brand-600"
            >
              Submit an Inquiry
            </button>
          </div>

          {/* Inquiry Form (Hidden by default) */}
          <div id="inquiry-form" className="hidden mt-8 pt-8 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 mb-4">Partner Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent!'); }}>
              <input type="text" placeholder="Your Name / Organization" required className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              <input type="email" placeholder="Email Address" required className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500" />
              <select className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500 text-stone-600">
                <option value="">Select Inquiry Type</option>
                <option value="catering">Event Catering</option>
                <option value="faculty">Faculty Partnership</option>
                <option value="investor">Investment</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Message details..." rows={3} required className="w-full px-4 py-2 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-brand-500"></textarea>
              <button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 rounded-lg font-medium transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Dashboard</h1>
            <p className="text-stone-500">Welcome back, Admin.</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-stone-500 hover:text-stone-900 font-medium text-sm"
          >
            Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-stone-600">Today's Sales</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900">GH₵ 1,245</p>
            <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12% from yesterday
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-brand-100 text-brand-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-stone-600">Orders Today</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900">48</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-medium text-stone-600">Avg. Prep Time</h3>
            </div>
            <p className="text-3xl font-bold text-stone-900">12 min</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Live Orders */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-stone-900">Live Orders</h2>
              <span className="bg-brand-100 text-brand-600 px-3 py-1 rounded-full text-xs font-bold">3 Active</span>
            </div>
            <div className="divide-y divide-stone-100">
              {RECENT_ORDERS.map((order) => (
                <div key={order.id} className="p-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-stone-900">{order.id}</span>
                      <span className="text-stone-400 text-sm">• {order.time}</span>
                    </div>
                    <p className="text-stone-600 text-sm mb-1">{order.customer}</p>
                    <p className="text-stone-900 font-medium">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-stone-900 mb-2">{order.total}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      order.status === 'preparing' ? 'bg-yellow-100 text-yellow-700' :
                      order.status === 'ready' ? 'bg-green-100 text-green-700' :
                      'bg-stone-100 text-stone-500'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inventory Management */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-100">
              <h2 className="text-xl font-bold text-stone-900">Inventory Status</h2>
            </div>
            <div className="p-6 space-y-4">
              {INVENTORY.map((item) => (
                <div key={item.id} className="flex items-center justify-between bg-stone-50 p-4 rounded-2xl">
                  <div>
                    <h4 className="font-bold text-stone-900">{item.name}</h4>
                    <p className="text-sm text-stone-500">Stock: {item.stock} portions</p>
                  </div>
                  <button className={`w-12 h-6 rounded-full transition-colors relative ${item.status === 'active' ? 'bg-green-500' : 'bg-stone-300'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${item.status === 'active' ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
