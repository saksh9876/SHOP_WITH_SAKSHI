import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold mb-4"
          >
            Curated Selection
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif leading-tight"
          >
            Timeless pieces for the <span className="italic">modern connoisseur</span>.
          </motion.h2>
        </div>

        <div className="flex flex-wrap gap-4 border-b border-black/5 pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative py-2 px-1 text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? 'text-brand-dark' 
                  : 'text-brand-dark/30 hover:text-brand-dark/60'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
