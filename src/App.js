import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Reuse your previous Hero code
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Optional: Alert or toast notification
    console.log(`${product.name} added to bag.`);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar cartCount={cart.length} />
      
      {/* Hero Section */}
        <Hero />

      {/* Dynamic Product Grid */}
      <main className="py-24 px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-serif text-white uppercase tracking-tighter">The Collection</h2>
          <p className="text-gray-500 italic text-sm">Showing {products.length} Scents</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-10 text-center text-gray-600 text-[10px] uppercase tracking-[0.2em]">
        &copy; 2026 Shop Nadine House of Fragrance
      </footer>
    </div>
  );
}

export default App;