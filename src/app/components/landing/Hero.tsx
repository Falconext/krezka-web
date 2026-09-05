'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Star, FileText, Globe, MessageCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-[#0A0E1A]" id="home">
      {/* Fondo premium: gradiente dark + glows esmeralda/violeta + grid sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A] via-[#11122A] to-[#0A0E1A]" />
        <div className="absolute -top-48 right-0 w-[720px] h-[720px] rounded-full bg-violet-700/22 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 w-[520px] h-[520px] rounded-full bg-emerald-600/12 blur-[130px]" />
        <div className="absolute -bottom-40 right-1/4 w-[520px] h-[520px] rounded-full bg-indigo-700/16 blur-[130px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <defs>
            <pattern id="heroGrid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d="M46 0L0 0 0 46" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 md:py-20">
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
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-400/[0.08] border border-emerald-400/25 text-gray-200 text-sm font-medium backdrop-blur-md mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-semibold">Certificado SUNAT</span>
              <span className="text-white/25">·</span>
              <span className="text-emerald-300 font-semibold">Nuevo: IA de Ventas por WhatsApp</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem] font-bold text-white leading-[1.05] mb-6 tracking-tight drop-shadow-2xl font-povlar">
              El sistema que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-violet-300 font-povlar">
                digitaliza y hace crecer
              </span>{" "}
              tu negocio
            </h1>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed font-light">
              Facturación electrónica SUNAT, inventario, caja y tienda virtual — más un{" "}
              <span className="font-medium text-white">asesor con IA que atiende y vende por WhatsApp 24/7</span>. Todo en una sola plataforma.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link
                href="/sistemas"
                className="group px-8 py-4 bg-white text-[#1a0b3b] rounded-full font-bold text-base transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                PROBAR GRATIS
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#planes"
                className="group px-7 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-base backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 flex items-center gap-2"
              >
                Ver planes
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Trust Badges / Stats */}
            <div className="flex items-center gap-7 border-t border-white/10 pt-8 w-full md:w-auto">
              <div>
                <div className="text-2xl font-bold text-white">+500</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Empresas</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white">IA 24/7</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Ventas WhatsApp</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col">
                <div className="flex text-yellow-400 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-xs text-gray-400 font-medium mt-1">Líderes en soporte</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: premium glass feature stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-4 pl-6"
          >
            {/* Destacado: IA de Ventas */}
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.07] p-5 backdrop-blur-xl ring-1 ring-white/5 shadow-2xl shadow-emerald-500/5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-white font-bold text-[15px]">IA de Ventas</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400 px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wide text-emerald-950">
                      <Sparkles size={9} /> Nuevo
                    </span>
                  </div>
                  <p className="mt-0.5 text-white/55 text-[13px]">Atiende y vende por WhatsApp 24/7</p>
                </div>
              </div>
            </div>

            {[
              { Icon: FileText, tint: "text-violet-300", bg: "bg-violet-400/15", title: "Facturación SUNAT", desc: "Boletas, facturas y guías en un clic" },
              { Icon: Globe, tint: "text-indigo-300", bg: "bg-indigo-400/15", title: "Tienda virtual", desc: "Vende online con tu catálogo y pagos" },
              { Icon: ShieldCheck, tint: "text-emerald-300", bg: "bg-emerald-400/12", title: "Todo en la nube", desc: "Multi-sede, seguro y siempre disponible" },
            ].map(({ Icon, tint, bg, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-colors hover:border-white/20">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${bg} ${tint}`}>
                    <Icon size={21} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[15px]">{title}</p>
                    <p className="mt-0.5 text-white/55 text-[13px]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



