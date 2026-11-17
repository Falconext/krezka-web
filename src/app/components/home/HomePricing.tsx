'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronLeft, ChevronRight, Gem, Sparkles } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import AvisoAlzaPrecios from '../AvisoAlzaPrecios';
import {
  descuentoPeriodoPct,
  fetchPublicPlansClient,
  mensualPeriodo,
  mergePricingPlans,
  PERIODO_CLAVES,
  PERIODOS,
  PRICING_TODOS_LOS_PLANES,
  totalPeriodo,
  type PeriodoClave,
  type PricingBasePlan,
} from '@/lib/public-pricing';

const planWhatsappLink = (planName: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero el plan ${planName} de ${BRAND.name}. ¿Me ayudan a activarlo?`
  )}`;

const prefiereMenosMovimiento = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const HomePricing = () => {
  const [plans, setPlans] = useState<PricingBasePlan[]>(PRICING_TODOS_LOS_PLANES);
  const [periodo, setPeriodo] = useState<PeriodoClave>('mensual');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activo, setActivo] = useState(0);
  const [enInicio, setEnInicio] = useState(true);
  const [enFinal, setEnFinal] = useState(false);
  const [pausado, setPausado] = useState(false);

  // Paso entre tarjetas = ancho de una tarjeta + el gap del carrusel.
  const paso = useCallback(() => {
    const el = sliderRef.current;
    const card = el?.querySelector<HTMLElement>('[data-card]');
    if (!el || !card) return 0;
    return card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0');
  }, []);

  const actualizarPosicion = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    const p = paso();
    const final = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    // Al llegar al tope, marca el último punto aunque varias tarjetas quepan a la vez.
    setActivo(final ? plans.length - 1 : p ? Math.round(el.scrollLeft / p) : 0);
    setEnInicio(el.scrollLeft <= 4);
    setEnFinal(final);
  }, [paso, plans.length]);

  useEffect(() => {
    actualizarPosicion();
    window.addEventListener('resize', actualizarPosicion);
    return () => window.removeEventListener('resize', actualizarPosicion);
  }, [actualizarPosicion, plans.length]);

  const irA = (indice: number) => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollTo({ left: indice * paso(), behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth' });
  };
  const mover = (dir: 1 | -1) =>
    sliderRef.current?.scrollBy({ left: dir * paso(), behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth' });
  const onTeclado = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); mover(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); mover(-1); }
  };

  // Avanza solo cada 15 s; al llegar al final vuelve al primero. Se pausa con el mouse
  // encima o el foco dentro, y el conteo se reinicia cada vez que la posición cambia.
  useEffect(() => {
    if (pausado) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      if (enFinal) irA(0);
      else mover(1);
    }, 15000);
    return () => window.clearInterval(id);
  }, [pausado, activo, enFinal]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let active = true;
    (async () => {
      const remote = await fetchPublicPlansClient();
      if (active) setPlans(mergePricingPlans(PRICING_TODOS_LOS_PLANES, remote));
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
            Desde S/ {minMonthly.toFixed(2)} + IGV al mes. Emprendedor incluye 300 comprobantes SUNAT al mes; desde Negocio, ilimitados. Instalación S/ 50, pago único. Cambia o cancela cuando quieras.
          </p>
          <div className="kz-reveal mt-7" style={{ animationDelay: '0.16s' }}>
            <AvisoAlzaPrecios />
          </div>
        </div>

        {/* periodo de pago */}
        <div className="mt-8 flex justify-center">
          <div role="group" aria-label="Periodo de pago" className="inline-flex max-w-full items-center rounded-full border border-[#6c5ce7]/20 bg-white p-1 shadow-sm">
            {PERIODO_CLAVES.map((clave) => {
              const sel = periodo === clave;
              const pct = descuentoPeriodoPct(plans[0], clave);
              return (
                <button
                  key={clave}
                  type="button"
                  aria-pressed={sel}
                  onClick={() => setPeriodo(clave)}
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-xs font-bold transition-all sm:gap-1.5 sm:px-5 sm:py-2.5 sm:text-sm ${
                    sel ? 'bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] text-white shadow' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {PERIODOS[clave].etiqueta}
                  {pct > 0 && (
                    <span
                      className={`rounded-full px-1 py-px text-[9px] font-bold sm:px-1.5 sm:text-[10px] ${
                        sel ? 'bg-white/25 text-white' : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      -{pct}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* cards */}
        <div
          ref={sliderRef}
          onScroll={actualizarPosicion}
          onKeyDown={onTeclado}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocus={() => setPausado(true)}
          onBlur={() => setPausado(false)}
          tabIndex={0}
          role="region"
          aria-roledescription="carrusel"
          aria-label="Planes del sistema"
          className="-mx-4 mt-6 flex snap-x snap-mandatory items-center gap-6 overflow-x-auto scroll-px-4 px-4 py-10 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-[#6c5ce7]/40 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-8 lg:scroll-px-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {plans.map((plan, i) => {
            const popular = plan.popular;
            const price = mensualPeriodo(plan, periodo);
            const total = totalPeriodo(plan, periodo);
            const off = Math.round((1 - price / plan.regularMonthly) * 100);

            return (
              <article
                key={plan.id}
                data-card
                aria-label={`${plan.name}, ${i + 1} de ${plans.length}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`kz-reveal relative flex w-[84%] shrink-0 snap-start flex-col last:snap-end overflow-hidden rounded-[2rem] p-8 sm:w-[46%] lg:w-[30%] ${
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
                  <span className={`text-xs font-semibold ${popular ? 'text-white/70' : 'text-slate-400'}`}>+ IGV</span>
                  <span className={`text-sm font-semibold ${popular ? 'text-white/70' : 'text-slate-400'}`}>/mes</span>
                </div>
                <p className={`mt-1 text-[12px] ${popular ? 'text-white/60' : 'text-slate-400'}`}>
                  {periodo === 'mensual'
                    ? 'Facturación mensual'
                    : `Pagas S/ ${total.toFixed(2)} + IGV ${PERIODOS[periodo].cada}`}
                </p>
                <p className={`mt-0.5 text-[12px] font-semibold ${popular ? 'text-white/80' : 'text-slate-600'}`}>
                  + S/ 50 de instalación (pago único)
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

        {/* controles del carrusel */}
        <div className="mt-2 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => mover(-1)}
            disabled={enInicio}
            aria-label="Plan anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6c5ce7]/20 bg-white text-[#6c5ce7] shadow-sm transition-all hover:border-[#6c5ce7]/50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {plans.map((plan, i) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => irA(i)}
                aria-label={`Ver plan ${plan.name}`}
                aria-current={activo === i}
                className={`h-2 rounded-full transition-all ${activo === i ? 'w-6 bg-[#6c5ce7]' : 'w-2 bg-[#6c5ce7]/25 hover:bg-[#6c5ce7]/50'}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => mover(1)}
            disabled={enFinal}
            aria-label="Plan siguiente"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6c5ce7]/20 bg-white text-[#6c5ce7] shadow-sm transition-all hover:border-[#6c5ce7]/50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          ¿Te falta un usuario o un local? Súmalos a cualquier plan: usuario adicional S/ 30 y sede adicional S/ 80 al mes + IGV.
        </p>

        <div className="mt-5 text-center">
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
