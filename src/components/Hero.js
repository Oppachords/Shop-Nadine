import React from 'react';

const Hero = () => (
  <header className="relative h-[80vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="images/hero.png" 
        alt="Heritage" 
        className="w-full h-full object-cover opacity-40"
      />
    </div>
    <div className="relative text-center z-10 px-4">
      <p className="text-amber-500 uppercase tracking-[0.5em] text-xs mb-4">The Essence of Heritage</p>
      <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white">Discover Your <br/> Signature</h2>
      <button className="border border-white text-white px-10 py-4 uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition duration-500">
        Shop the Collection
      </button>
    </div>
  </header>
);

export default Hero;