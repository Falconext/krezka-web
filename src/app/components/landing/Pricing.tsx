'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: "Tumi Gratis",
    price: "0",
    period: "mes",
    description: "Ideal para emprendedores.",
    popular: false,
    color: "bg-white/5",
    features: [
      "50 comprobantes mensuales",
      "Notas de venta ilimitadas",
      "1 licencia para gestión",
      "Hasta 500 productos",
      "Acceso web y móvil",
      "Certificado Digital PSE"
    ]
  },
  {
    name: "Tumi Despegar",
    price: "49",
    period: "mes",
    description: "Para negocios con ritmo.",
    popular: true,
    color: "bg-white/10",
    features: [
      "100 comprobantes mensuales",
      "Notas de venta ilimitadas",
      "Licencia Admin + Vendedor",
      "Hasta 1,500 productos",
      "Soporte por teléfono y chat",
      "Certificado Digital PSE"
    ]
  },
  {
    name: "Tumi Power",
    price: "100",
    period: "mes",
    description: "Crecimiento acelerado.",
    popular: false,
    color: "bg-white/5",
    features: [
      "Comprobantes ILIMITADOS",
      "Notas de venta ilimitadas",
      "5 licencias operativas",
      "Hasta 6,000 productos",
      "Apertura y cierre de caja",
      "Soporte por teléfono y chat"
    ]
  },
  {
    name: "Tumi Full",
    price: "1416",
    period: "anual",
    description: "Para negocios en expansión.",
    popular: false,
    color: "bg-white/5",
    features: [
      "Comprobantes ILIMITADOS",
      "Notas de venta ilimitadas",
      "Productos ilimitados",
      "Manejo de múltiples RUCs",
      "Opción de Holding",
      "Gestión de restaurantes"
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-32 bg-transparent" id="planes">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6"
          >
            Planes que crecen <br />
            <span className="text-blue-500">contigo</span>
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Sin contratos forzosos. Elige el plan que mejor se adapte a tu etapa actual y escala cuando estés listo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border flex flex-col backdrop-blur-xl ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10' 
                  : 'border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors'
              } ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/30">
                  ⭐ Más Elegido
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{plan.description}</p>
              </div>

              <div className="mb-10 text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-gray-400 font-bold text-lg">S/</span>
                  <span className="text-5xl font-black text-gray-900 dark:text-white leading-none">{plan.price}</span>
                </div>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2 block">Por {plan.period}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-blue-500/20 text-blue-500' : 'bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400'}`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-[2rem] font-black transition-all flex items-center justify-center gap-2 group ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20' 
                    : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black'
                }`}
              >
                {plan.price === "0" ? "Probar Gratis" : "Adquirir plan"}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
