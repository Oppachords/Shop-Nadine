import React from "react";
import { ShoppingBag } from "lucide-react";

const Navbar = ({ cartCount }) => (
  <nav className="flex justify-between items-center p-8 bg-black text-white sticky top-0 z-50 border-b border-gray-900">
    
    {/* Logo */}
    <div className="text-2xl font-bold tracking-[0.3em] uppercase">
      Shop Nadine
    </div>

    {/* Navigation */}
    <div className="hidden md:flex space-x-10 text-xs uppercase tracking-widest font-light">
      <a href="/collections" className="hover:text-amber-500 transition">
        Collections
      </a>
      <a href="/house" className="hover:text-amber-500 transition">
        The House
      </a>
    </div>

    {/* Cart */}
    <div className="flex items-center space-x-2 text-sm italic">
      <ShoppingBag size={18} className="text-amber-500" />
      <button className="hover:opacity-70">
        Bag ({cartCount})
      </button>
    </div>

  </nav>
);

export default Navbar;