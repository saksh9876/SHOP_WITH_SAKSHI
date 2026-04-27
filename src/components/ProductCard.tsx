import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: string;
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-brand-dark flex items-center gap-1">
          <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
          Featured
        </div>
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onAddToCart(product)}
            className="w-full bg-white text-brand-dark py-3 rounded-full flex items-center justify-center gap-2 font-bold text-sm tracking-wide shadow-2xl hover:bg-brand-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </motion.button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-dark/40 font-bold mb-1">
              {product.category}
            </p>
            <h3 className="text-xl font-serif text-brand-dark group-hover:text-brand-gold transition-colors leading-tight">
              {product.name}
            </h3>
          </div>
          <span className="text-lg font-medium text-brand-dark">
            ${product.price}
          </span>
        </div>
        <p className="text-sm text-brand-dark/60 line-clamp-2 font-light leading-relaxed">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
