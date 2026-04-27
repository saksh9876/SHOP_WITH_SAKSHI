import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-serif mb-8 tracking-tighter uppercase">Shop with Sakshi</h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Defining modern elegance through curated collections and artisanal mastery by Sakshi. Since 2026.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-white/40 hover:text-brand-gold transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-white/40 hover:text-brand-gold transition-colors cursor-pointer" />
              <Facebook className="w-5 h-5 text-white/40 hover:text-brand-gold transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Shop All', 'New Arrivals', 'Featured', 'Archive'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Client Services</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-8">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6 font-light">Join our inner circle for exclusive previews and editorial insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xs tracking-widest focus:border-brand-gold transition-colors outline-none"
              />
              <button className="absolute right-0 top-0 text-[10px] font-bold text-brand-gold tracking-widest hover:text-white transition-colors uppercase">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
          <p>© 2026 Shop with Sakshi. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Term of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p>Designed by AI Studio</p>
        </div>
      </div>
    </footer>
  );
}
