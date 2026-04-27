import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ShoppingBag, Search, Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#shop' },
    { name: 'Lifestyle', href: '#' },
    { name: 'Bespoke', href: '#' },
    { name: 'Heritage', href: '#' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-black/5 py-4' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Mobile Menu Trigger / Desktop Links */}
        <div className="flex-1 hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-brand-gold ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden flex-1">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className={isScrolled ? 'text-brand-dark' : 'text-white'}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-shrink-0 text-center">
          <a href="#" className="perspective-1000">
            <motion.h1 
              whileHover={{ rotateY: 10, scale: 1.05 }}
              className={`text-2xl md:text-3xl font-serif tracking-tighter uppercase whitespace-nowrap ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Shop with Sakshi
            </motion.h1>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-4 md:gap-8">
          <button className={`p-2 transition-colors hover:text-brand-gold ${
            isScrolled ? 'text-brand-dark' : 'text-white'
          }`}>
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={onOpenCart}
            className="group relative p-3"
          >
            <ShoppingBag className={`w-6 h-6 transition-colors group-hover:text-brand-gold ${
              isScrolled ? 'text-brand-dark' : 'text-white'
            }`} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-brand-gold text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-lg border-2 border-brand-paper"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            className="fixed inset-0 bg-brand-dark z-[100] p-12 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-24">
              <h1 className="text-3xl font-serif text-white uppercase tracking-tighter">Shop with Sakshi</h1>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-5xl font-serif text-white hover:text-brand-gold"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex gap-8">
              <Instagram className="text-white/40 w-6 h-6 hover:text-white transition-colors" />
              <Twitter className="text-white/40 w-6 h-6 hover:text-white transition-colors" />
              <Facebook className="text-white/40 w-6 h-6 hover:text-white transition-colors" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
