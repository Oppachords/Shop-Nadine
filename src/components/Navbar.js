import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 bg-black/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-neutral-900">

        {/* Logo */}
        <div className="text-xl md:text-2xl font-serif tracking-[0.35em] uppercase">
          Shop Nadine
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 text-xs uppercase tracking-[0.2em]">
          <a href="/collections" className="hover:text-amber-400 transition">
            Collections
          </a>
          <a href="/house" className="hover:text-amber-400 transition">
            The House
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">

          {/* Cart */}
          <button
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-2 text-sm italic hover:opacity-80"
          >
            <ShoppingBag size={18} className="text-amber-400" />
            Bag ({cartCount})
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white">

          <button
            className="absolute top-8 right-8"
            onClick={() => setMenuOpen(false)}
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col gap-10 text-xl uppercase tracking-[0.25em]">
            <a href="/collections" onClick={() => setMenuOpen(false)}>
              Collections
            </a>
            <a href="/house" onClick={() => setMenuOpen(false)}>
              The House
            </a>
          </nav>

        </div>
      )}

      {/* CART DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">

          {/* Overlay */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setCartOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="w-96 bg-white h-full p-8 shadow-xl flex flex-col">

            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-serif">Your Bag</h2>
              <button onClick={() => setCartOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex-1 text-gray-500 text-sm">
              Your cart is empty.
            </div>

            <button className="bg-black text-white py-4 mt-6 uppercase text-xs tracking-widest hover:bg-neutral-800 transition">
              Checkout
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;