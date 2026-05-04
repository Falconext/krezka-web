'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20" id="home">
      {/* Reinstated bannerhero.png as background - Opacity 1 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/bannerhero.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Removed dark overlay as requested to see background at opacity 1 */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full min-h-[calc(100vh-80px)] flex flex-col justify-center py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md mb-8"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              Sistema Certificado por SUNAT - 2024
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-2xl">
              Potencia tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Negocio al Máximo
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-gray-300 max-w-lg mb-10 leading-relaxed font-light">
              Gestiona ventas, inventarios y facturación electrónica en un solo lugar. El sistema POS más rápido, seguro y fácil de usar en el mercado peruano.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <Link
                href="/sistemas"
                className="group px-8 py-4 bg-white text-[#1a0b3b] rounded-full font-bold text-base transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                PROBAR GRATIS
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              {/* 
              <Link
                href="https://app.falconext.pe"
                target="_blank"
                className="group px-6 py-4 text-white font-medium flex items-center gap-4 transition-all hover:opacity-80"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all">
                  <Play className="w-5 h-5 fill-white ml-1" />
                </div>
                Mirar Demo
              </Link>
              */}
            </div>

            {/* Trust Badges / Stats */}
            <div className="flex items-center gap-8 border-t border-white/10 pt-8 w-full md:w-auto">
               <div>
                  <div className="text-2xl font-bold text-white">+500</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Empresas</div>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div className="flex flex-col">
                  <div className="flex text-yellow-400 gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Líderes en Soporte</div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: Left empty for grid layout */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Hands visual - Absolutely positioned to stick to the bottom right of the screen */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-full lg:w-1/2 h-full pointer-events-none flex items-end justify-end z-20 pr-4 lg:pr-12"
      >
        <img 
          src="/assets/bannerfx.png" 
          alt="Falconext Software Visual" 
          className="w-full max-w-[700px] h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-700 pointer-events-auto"
        />
      </motion.div>
    </div>
  );
};

export default Hero;



