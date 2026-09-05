'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
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
    <section id="planes" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Planes
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Explora nuestros planes
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Comprobantes ilimitados en todos los planes, desde S/ {minMonthly.toFixed(2)}/mes. Cambia o cancela cuando quieras.
          </p>
        </div>

        {/* toggle */}
        <div className="mt-7 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 p-1">
            <button
              onClick={() => setCycle('monthly')}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                cycle === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setCycle('annual')}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                cycle === 'annual' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
              }`}
            >
              Anual
              <span className="rounded-full bg-[#e6faf0] px-2 py-0.5 text-[10px] font-bold text-emerald-600">-17%</span>
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const popular = plan.popular;
            const price = cycle === 'monthly' ? plan.monthly : plan.annual / 12;

            return (
              <article
                key={plan.id}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`kz-reveal relative flex flex-col overflow-hidden rounded-3xl p-7 ${
                  popular
                    ? 'bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] text-white shadow-2xl shadow-[#6c5ce7]/30'
                    : 'border border-slate-200 bg-white text-slate-900'
                }`}
              >
                {popular && (
                  <>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
                    <span className="absolute right-6 top-7 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  </>
                )}

                {/* head */}
                <h3 className={`text-lg font-bold ${popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`mt-1 text-[13px] ${popular ? 'text-white/70' : 'text-slate-400'}`}>{plan.utility}</p>

                {/* price */}
                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-lg font-semibold ${popular ? 'text-white/80' : 'text-slate-500'}`}>S/</span>
                    <span className={`text-5xl font-extrabold tracking-tight ${popular ? 'text-white' : 'text-slate-900'}`}>
                      {price.toFixed(2)}
                    </span>
                  </div>
                  <p className={`mt-1.5 text-[13px] ${popular ? 'text-white/70' : 'text-slate-400'}`}>
                    {cycle === 'annual' ? `Suscripción anual · S/ ${plan.annual.toFixed(2)}/año` : 'Suscripción mensual'}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={planWhatsappLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                    popular ? 'bg-white text-[#4b3fbe]' : 'bg-[#6c5ce7] text-white hover:bg-[#5b4bd6]'
                  }`}
                >
                  Comenzar ahora
                </a>

                {/* includes */}
                <p className={`mt-7 text-xs font-semibold uppercase tracking-wider ${popular ? 'text-white/70' : 'text-slate-400'}`}>
                  Incluye
                </p>
                <ul className="mt-3 space-y-2.5">
                  {plan.highlights.slice(0, 7).map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          popular ? 'bg-white/20 text-white' : 'bg-[#f1eefe] text-[#6c5ce7]'
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className={popular ? 'text-white/90' : 'text-slate-600'}>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-1" />
                <p className={`mt-6 text-[11px] ${popular ? 'text-white/60' : 'text-slate-400'}`}>
                  {plan.usersLabel} · {plan.sedesLabel} · cancela cuando quieras
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 text-center">
          <Link
            href="/sistemas"
            className="text-sm font-semibold text-[#6c5ce7] underline decoration-[#6c5ce7]/40 underline-offset-4 hover:text-[#4b3fbe]"
          >
            Ver comparación completa de módulos
          </Link>
        </div>

        {/* ── IA de Ventas add-on (mismo estilo, morado) ── */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#e7e4fb] bg-[#f8f7fe] p-6 md:p-9">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#6c5ce7] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6c5ce7] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6c5ce7]" />
              </span>
              Nuevo · IA de Ventas por WhatsApp
            </span>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
              Un asesor con IA que atiende y vende 24/7
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
              Responde con tu catálogo real, califica prospectos y te avisa los leads calientes — desde tu propio número.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { nombre: 'Ventas Start', precio: '149', conv: '500', popular: false },
              { nombre: 'Ventas Pro', precio: '249', conv: '1,500', popular: true },
              { nombre: 'Ventas Scale', precio: '399', conv: '5,000', popular: false },
            ].map((p) => (
              <div
                key={p.nombre}
                className={`relative rounded-2xl p-6 ${
                  p.popular
                    ? 'bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] text-white shadow-xl shadow-[#6c5ce7]/25'
                    : 'border border-slate-200 bg-white text-slate-900'
                }`}
              >
                {p.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                    Más elegido
                  </span>
                )}
                <p className={`text-sm font-bold ${p.popular ? 'text-white' : 'text-slate-900'}`}>{p.nombre}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className={`text-sm font-semibold ${p.popular ? 'text-white/80' : 'text-slate-500'}`}>S/</span>
                  <span className={`text-4xl font-extrabold ${p.popular ? 'text-white' : 'text-slate-900'}`}>{p.precio}</span>
                  <span className={`text-sm ${p.popular ? 'text-white/70' : 'text-slate-400'}`}>/mes</span>
                </div>
                <p className={`mt-1 text-sm font-semibold ${p.popular ? 'text-white/90' : 'text-[#6c5ce7]'}`}>
                  {p.conv} conversaciones/mes
                </p>
                <a
                  href={planWhatsappLink(p.nombre)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-[1.02] ${
                    p.popular ? 'bg-white text-[#4b3fbe]' : 'bg-[#6c5ce7] text-white hover:bg-[#5b4bd6]'
                  }`}
                >
                  Quiero este plan
                </a>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center justify-between gap-3 rounded-2xl border border-[#e7e4fb] bg-white p-5 md:flex-row">
            <p className="text-sm text-slate-600">
              <span className="font-bold text-slate-900">Facturación + Ventas (Full)</span> — todo el ERP más la IA con 1,500 conversaciones/mes.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold text-slate-500">S/</span>
                <span className="text-3xl font-extrabold text-slate-900">299</span>
                <span className="text-sm text-slate-400">/mes</span>
              </div>
              <a
                href={planWhatsappLink('Facturación + Ventas Full')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#6c5ce7] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#5b4bd6]"
              >
                Elegir Full
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricing;
