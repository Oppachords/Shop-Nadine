import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="group">
    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800 mb-6 border border-gray-900">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" 
      />
      <button 
        onClick={() => onAddToCart(product)}
        className="absolute bottom-0 left-0 w-full bg-white text-black py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase text-xs tracking-widest font-bold"
      >
        Add to Bag
      </button>
    </div>
    <h4 className="text-lg font-serif text-white mb-1 uppercase tracking-wider">{product.name}</h4>
    <p className="text-xs text-amber-500 uppercase tracking-widest mb-2 font-bold">{product.note}</p>
    <p className="text-gray-400 font-light italic">${product.price}</p>
  </div>
);

export default ProductCard;