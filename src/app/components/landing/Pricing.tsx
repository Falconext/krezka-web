'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import {
  fetchPublicPlansClient,
  mergePricingPlans,
  PRICING_BASE_PLANS,
  type PricingBasePlan,
} from '@/lib/public-pricing';

const planColor = (plan: PricingBasePlan): string => (plan.popular ? "bg-white/10" : "bg-white/5");
const planFeatures = (plan: PricingBasePlan): string[] => [
  plan.docs,
  `${plan.usersLabel} · ${plan.sedesLabel}`,
  ...plan.highlights,
];

const Pricing = () => {
  const [plans, setPlans] = React.useState<PricingBasePlan[]>(PRICING_BASE_PLANS);

  React.useEffect(() => {
    let active = true;
    const load = async () => {
      const remote = await fetchPublicPlansClient();
      if (!active) return;
      setPlans(mergePricingPlans(PRICING_BASE_PLANS, remote));
    };
    void load();
    return () => {
      active = false;
    };
  }, []);

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
            Elige una etapa: formalízate, vende online o escala con multi-sede, logística, app móvil y control financiero.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border flex flex-col backdrop-blur-xl ${
                plan.popular 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-105 z-10' 
                  : 'border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors'
              } ${planColor(plan)}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/30">
                  ⭐ Más Elegido
                </div>
              )}

              <div className="mb-8 text-center">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">{plan.description}</p>
                <p className="mt-3 text-xs font-semibold leading-relaxed text-blue-600 dark:text-blue-300">{plan.target}</p>
              </div>

              <div className="mb-10 text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-gray-400 font-bold text-lg">S/</span>
                  <span className="text-5xl font-black text-gray-900 dark:text-white leading-none">{plan.monthly.toFixed(2)}</span>
                </div>
                <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mt-2 block">Por mes</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {plan.modules.slice(0, 5).map((module) => (
                    <span key={module} className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-1 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                      {module}
                    </span>
                  ))}
                </div>
                {planFeatures(plan).map((feature, i) => (
                  <div key={`${plan.id}-${i}-${feature}`} className="flex items-start gap-3">
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
                {plan.monthly === 0 ? "Probar Gratis" : "Adquirir plan"}
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
