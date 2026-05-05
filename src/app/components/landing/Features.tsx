'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Cloud, PackageSearch, Code2, BarChart3 } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const features = [
  {
    title: "Procesamiento de Pagos",
    description: "Acepta múltiples métodos de pago con total rapidez y seguridad, garantizando ventas fluidas y sin interrupciones.",
    icon: <CircleDollarSign size={24} className="text-[#3b82f6] stroke-[2.5]" />,
    iconBg: "bg-[#eff6ff]", // Blue
  },
  {
    title: "Acceso en la Nube",
    description: "Gestiona tu negocio desde cualquier lugar con actualizaciones en tiempo real y sincronización en todos tus dispositivos.",
    icon: <Cloud size={24} className="text-[#f97316] stroke-[2.5]" />,
    iconBg: "bg-[#fff7ed]", // Orange
  },
  {
    title: "Inventario Inteligente",
    description: "Controla tu stock al instante, configura alertas de bajo inventario y evita problemas de quiebres o sobrestock.",
    icon: <PackageSearch size={24} className="text-[#0d9488] stroke-[2.5]" />,
    iconBg: "bg-[#f0fdfa]", // Teal
  },
  {
    title: "Software a Medida",
    description: "Desarrollamos cualquier tipo de software a medida, E-commerce y sistemas personalizados en tiempo récord de entrega.",
    icon: <Code2 size={24} className="text-[#ec4899] stroke-[2.5]" />,
    iconBg: "bg-[#fdf2f8]", // Pink
  },
  {
    title: "Análisis y Reportes",
    description: "Obtén información valiosa sobre tus ventas, flujo de caja y comportamiento de clientes para decisiones estratégicas.",
    icon: <BarChart3 size={24} className="text-[#10b981] stroke-[2.5]" />,
    iconBg: "bg-[#f0fdf4]", // Green
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-[#fafafa]" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#111827] mb-5 tracking-tight"
          >
            ¿Por qué elegir {BRAND.name}?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#6b7280] max-w-4xl leading-relaxed"
          >
            Descubre {BRAND.name}, la solución integral que combina una potente gestión operativa POS, optimización de eficiencia y desarrollo ágil de software a medida para impulsar tu negocio hacia el futuro.
          </motion.p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[1.5rem] p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-[17px] font-bold text-[#111827] mb-3 leading-snug group-hover:text-[#3b82f6] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[14px] text-[#6b7280] leading-[1.6]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
