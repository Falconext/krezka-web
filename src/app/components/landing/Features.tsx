'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CircleDollarSign, Cloud, PackageSearch, BarChart3, Sparkles } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const features = [
  {
    title: "IA de Ventas por WhatsApp",
    description: "Un asesor con IA que atiende, califica y vende 24/7 desde tu propio número — con tu catálogo real y seguimiento automático.",
    Icon: MessageCircle,
    tint: "text-emerald-300",
    bg: "bg-emerald-400/12",
    highlight: true,
  },
  {
    title: "Facturación & Pagos",
    description: "Boletas, facturas y guías SUNAT en un clic, con múltiples métodos de pago rápidos y seguros para ventas sin fricción.",
    Icon: CircleDollarSign,
    tint: "text-violet-300",
    bg: "bg-violet-400/12",
  },
  {
    title: "Acceso en la Nube",
    description: "Gestiona tu negocio desde cualquier lugar con sincronización en tiempo real y multi-sede en todos tus dispositivos.",
    Icon: Cloud,
    tint: "text-indigo-300",
    bg: "bg-indigo-400/12",
  },
  {
    title: "Inventario Inteligente",
    description: "Controla tu stock al instante, configura alertas de bajo inventario y evita quiebres o sobrestock por rubro.",
    Icon: PackageSearch,
    tint: "text-teal-300",
    bg: "bg-teal-400/12",
  },
  {
    title: "Análisis y Reportes",
    description: "Información clara sobre ventas, flujo de caja y comportamiento de clientes para tomar decisiones con datos.",
    Icon: BarChart3,
    tint: "text-cyan-300",
    bg: "bg-cyan-400/12",
  },
];

const Features = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0A0E1A]" id="features">
      {/* Fondo premium: glows + grid sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-violet-700/12 blur-[130px]" />
        <div className="absolute -bottom-32 right-1/4 h-[500px] w-[500px] rounded-full bg-emerald-600/10 blur-[130px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
          <defs>
            <pattern id="featGrid" width="46" height="46" patternUnits="userSpaceOnUse">
              <path d="M46 0L0 0 0 46" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#featGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300"
          >
            <Sparkles size={13} /> Una sola plataforma
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-5 text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-5 tracking-tight"
          >
            ¿Por qué elegir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-violet-300">
              {BRAND.name}
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {BRAND.name} reúne facturación SUNAT, inventario, tienda virtual y un asesor con IA que vende por
            WhatsApp — la solución integral para gestionar y hacer crecer tu negocio.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((feature, index) => {
            const { Icon } = feature;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group relative flex h-full flex-col rounded-[1.5rem] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                  feature.highlight
                    ? "border border-emerald-400/30 bg-emerald-400/[0.07] ring-1 ring-emerald-400/20 shadow-2xl shadow-emerald-500/10"
                    : "border border-white/10 bg-white/[0.04] hover:border-white/20"
                }`}
              >
                {feature.highlight && (
                  <span className="absolute right-5 top-6 inline-flex items-center gap-1 rounded-full bg-emerald-400 px-2 py-0.5 text-[8.5px] font-black uppercase tracking-wide text-emerald-950">
                    <Sparkles size={9} /> Nuevo
                  </span>
                )}
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.tint} transition-transform duration-300 group-hover:scale-105`}>
                  <Icon size={24} className="stroke-[2.2]" />
                </div>
                <h3 className="mb-3 text-[17px] font-bold leading-snug text-white">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
