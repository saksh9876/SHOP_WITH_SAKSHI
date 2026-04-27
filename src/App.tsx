/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen">
      <Navbar 
        cartCount={totalItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        
        <ProductGrid onAddToCart={addToCart} />
        
        {/* Features Section */}
        <section className="py-24 bg-white border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Artisanal Craft', desc: 'Every piece is handmade by master craftsmen in our heritage studios.' },
              { title: 'Global Concierge', desc: 'Complimentary white-glove delivery to over 150 countries worldwide.' },
              { title: 'Timeless Quality', desc: 'Lifetime warranty on all jewelry and timepiece collections.' }
            ].map((f, i) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-[1px] bg-brand-gold mx-auto mb-8" />
                <h3 className="text-2xl font-serif mb-4 leading-tight">{f.title}</h3>
                <p className="text-brand-dark/50 text-sm leading-relaxed max-w-xs mx-auto font-light">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand Mantra Section */}
        <section className="py-32 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-7xl font-serif italic text-brand-dark/80 tracking-tighter leading-[0.95]">
                "True elegance is not to be noticed, but to be <span className="text-brand-dark not-italic font-medium underline decoration-brand-gold underline-offset-8">remembered</span>."
              </h2>
              <p className="text-xs uppercase tracking-[0.5em] font-bold text-brand-dark/30">
                Sakshi Heritage
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Decorative Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1] opacity-20">
        <div className="absolute top-[20%] left-[-10%] w-[40%] aspect-square bg-brand-gold/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] aspect-square bg-blue-100/30 rounded-full blur-[150px] animate-pulse" />
      </div>
    </div>
  );
}

