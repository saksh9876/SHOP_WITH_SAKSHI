import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-brand-dark mb-12">
      {/* Background with parallax-ish effect */}
      <div className="absolute inset-0 opacity-60">
        <img
          src="https://picsum.photos/seed/boutique_hero/1920/1080?grayscale"
          alt="Boutique Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-6 border-b border-brand-gold/30 pb-2">
              Spring / Summer Collection 2026
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[0.85] tracking-tight">
              Elegance <br />
              <span className="italic font-light text-brand-paper/80">Redefined.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-paper/60 mb-10 max-w-lg font-light leading-relaxed">
              Discover our exclusive selection of artisanal goods, crafted with unrivaled attention to detail and a passion for modern aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <motion.a
                href="#shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-gold text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl hover:bg-white transition-colors"
              >
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                <span className="w-12 h-[1px] bg-white/20" />
                Featured in Vogue & Harper's
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="absolute right-12 bottom-24 hidden lg:block overflow-hidden">
        <motion.p 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="vertical-rl transform rotate-180 text-white/10 uppercase tracking-[1em] text-4xl font-serif select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          SHOP WITH SAKSHI
        </motion.p>
      </div>
    </section>
  );
}
