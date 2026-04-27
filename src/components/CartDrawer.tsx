import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-paper z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/5 flex justify-between items-center bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-gold" />
                <h2 className="text-2xl font-serif">Your Bag</h2>
                <span className="bg-brand-dark/5 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                  {items.length} Items
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-dark/5 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-brand-dark/20" />
                  </div>
                  <h3 className="text-xl font-serif">Your bag is empty</h3>
                  <p className="text-sm text-brand-dark/40 max-w-[200px]">
                    Looks like you haven't added anything to your bag yet.
                  </p>
                  <button 
                    onClick={onClose}
                    className="text-brand-gold font-bold text-xs uppercase tracking-widest border-b border-brand-gold pb-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-24 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-lg leading-tight group-hover:text-brand-gold transition-colors">
                            {item.name}
                          </h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-brand-dark/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-3 bg-brand-dark/5 rounded-full px-3 py-1">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-brand-gold transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-brand-gold transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-brand-dark">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 bg-white border-t border-black/5 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-dark/40">Subtotal</span>
                    <span className="font-medium">${total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-dark/40">Shipping</span>
                    <span className="text-brand-gold uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-xl font-serif pt-4 border-t border-black/5 mt-4">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-dark text-white py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-gold transition-colors shadow-xl"
                >
                  Checkout Now
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
