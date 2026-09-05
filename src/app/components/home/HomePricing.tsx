'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, Gem, Sparkles } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import {
  fetchPublicPlansClient,
  mergePricingPlans,
  PRICING_BASE_PLANS,
  type PricingBasePlan,
} from '@/lib/public-pricing';

const planWhatsappLink = (planName: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero el plan ${planName} de ${BRAND.name}. ¿Me ayudan a activarlo?`
  )}`;

type Cycle = 'monthly' | 'annual';

const HomePricing = () => {
  const [plans, setPlans] = useState<PricingBasePlan[]>(PRICING_BASE_PLANS);
  const [cycle, setCycle] = useState<Cycle>('monthly');

  useEffect(() => {
    let active = true;
    (async () => {
      const remote = await fetchPublicPlansClient();
      if (active) setPlans(mergePricingPlans(PRICING_BASE_PLANS, remote));
    })();
    return () => {
      active = false;
    };
  }, []);

  const minMonthly = useMemo(() => Math.min(...plans.map((p) => p.monthly)), [plans]);

  return (
    <section id="planes" className="relative overflow-hidden bg-gradient-to-b from-[#f6f4ff] to-white py-16 md:py-24">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#6c5ce7]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full border border-[#6c5ce7]/30 bg-white px-4 py-1.5 text-xs font-bold text-[#6c5ce7]">
            <Sparkles size={13} />
            Precios
          </span>
          <h2 className="kz-reveal mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl" style={{ animationDelay: '0.06s' }}>
            Planes claros. Sin costos ocultos.
          </h2>
          <p className="kz-reveal mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500 md:text-base" style={{ animationDelay: '0.12s' }}>
            Comprobantes ilimitados en todos los planes, desde S/ {minMonthly.toFixed(2)}/mes. Cambia o cancela cuando quieras.
          </p>
        </div>

        {/* toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-[#6c5ce7]/20 bg-white p-1 shadow-sm">
            <button
              onClick={() => setCycle('monthly')}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                cycle === 'monthly' ? 'bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setCycle('annual')}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                cycle === 'annual' ? 'bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] text-white shadow' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Anual
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="mt-12 grid items-center gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const popular = plan.popular;
            const price = cycle === 'monthly' ? plan.monthly : plan.annual / 12;
            const off = Math.round((1 - plan.monthly / plan.regularMonthly) * 100);

            return (
              <article
                key={plan.id}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`kz-reveal relative flex flex-col overflow-hidden rounded-[2rem] p-8 ${
                  popular
                    ? 'z-10 bg-gradient-to-br from-[#8574f3] to-[#6c5ce7] text-white shadow-2xl shadow-[#6c5ce7]/40 lg:-my-6 lg:py-12'
                    : 'border border-slate-200 bg-white text-slate-900 shadow-sm'
                }`}
              >
                {popular && <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/15 blur-2xl" />}

                {/* head: icono + nombre + badge + subtítulo */}
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
                      popular ? 'bg-white text-[#6c5ce7]' : 'border-2 border-[#6c5ce7]/25 text-[#6c5ce7]'
                    }`}
                  >
                    <Gem size={24} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className={`text-2xl font-extrabold ${popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          popular ? 'bg-white/20 text-white' : 'bg-[#ece9fd] text-[#6c5ce7]'
                        }`}
                      >
                        Ahorra {off}%
                      </span>
                    </div>
                    <p className={`mt-0.5 text-[13px] ${popular ? 'text-white/70' : 'text-slate-400'}`}>{plan.utility}</p>
                  </div>
                </div>

                <hr className={`my-6 ${popular ? 'border-white/20' : 'border-slate-100'}`} />

                {/* features */}
                <ul className="space-y-3.5">
                  {plan.highlights.slice(0, 5).map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[14px] leading-snug">
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                          popular ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className={popular ? 'text-white/90' : 'text-slate-600'}>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-1" />

                {/* precio */}
                <div className="mt-8 flex items-baseline gap-1">
                  <span className={`text-xl font-bold ${popular ? 'text-white/80' : 'text-slate-500'}`}>S/</span>
                  <span className={`text-5xl font-extrabold tracking-tight ${popular ? 'text-white' : 'text-slate-900'}`}>
                    {price.toFixed(2)}
                  </span>
                  <span className={`text-sm font-semibold ${popular ? 'text-white/70' : 'text-slate-400'}`}>/mes</span>
                </div>
                <p className={`mt-1 text-[12px] ${popular ? 'text-white/60' : 'text-slate-400'}`}>
                  {cycle === 'annual' ? `Facturado S/ ${plan.annual.toFixed(2)} al año` : 'Facturación mensual'}
                </p>

                {/* CTA */}
                <a
                  href={planWhatsappLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full border px-5 py-3.5 text-sm font-bold transition-all hover:scale-[1.02] ${
                    popular
                      ? 'border-transparent bg-white text-[#4b3fbe] hover:bg-white/90'
                      : 'border-slate-200 bg-white text-slate-900 hover:border-[#6c5ce7]/40 hover:text-[#6c5ce7]'
                  }`}
                >
                  Comenzar ahora
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-9 text-center">
          <a
            href="#comparacion"
            className="text-sm font-semibold text-[#6c5ce7] underline decoration-[#6c5ce7]/40 underline-offset-4 hover:text-[#4b3fbe]"
          >
            Ver comparación completa de módulos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
