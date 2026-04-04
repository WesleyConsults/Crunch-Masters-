import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Our Story", path: "/about" },
    { name: "Community", path: "/community" },
    { name: "Partner/Admin", path: "/admin" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="font-bold text-xl tracking-tight text-stone-900">CrunchMasters</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-orange-500",
                    location.pathname === link.path ? "text-orange-500" : "text-stone-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/menu"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Now
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path
                    ? "bg-orange-50 text-orange-600"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/menu"
              className="block w-full text-center mt-4 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="font-bold text-xl tracking-tight text-white">CrunchMasters</span>
            </div>
            <p className="text-sm text-stone-400 max-w-xs">
              Serving the best Braised Rice and Fried Yam on campus. Quality food, fast service, great vibes.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact & Location</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Socio-New Block Canteen,<br/>KNUST</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>WhatsApp: +233 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>hello@crunchmasters.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-stone-400">Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-stone-400">Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-stone-400">Sunday</span>
                <span className="text-orange-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-sm text-stone-500 text-center">
          &copy; {new Date().getFullYear()} CrunchMasters. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
