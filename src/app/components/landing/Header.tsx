'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LogIn, Phone, Menu } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src={BRAND.logo} alt={BRAND.name} className="h-10 w-auto" />
              <span className="text-slate-900 font-bold text-xl tracking-tight">{BRAND.name.toUpperCase()}</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold">Negocios</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold">Restaurantes</Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold">Corporativo</Link>
            <Link href="/sistemas" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold flex items-center gap-1">
              Sistemas de Facturación
              <span className="bg-blue-100 text-blue-600 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Nuevo</span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="tel:+5116804448" className="hidden lg:flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mr-4">
              <Phone size={18} />
              <span className="text-sm font-medium">Llámanos</span>
            </a>

            <Link
              href="https://admin.tumi-soft.com/admin/auth" // Placeholder URL del sistema
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all shadow-lg shadow-blue-600/20 text-sm font-bold"
            >
              <LogIn size={18} />
              Ingresar al Sistema
            </Link>

            <button className="md:hidden p-2 text-slate-600">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
