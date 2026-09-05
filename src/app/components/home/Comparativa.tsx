'use client';

import { X, Check } from 'lucide-react';

const antes = [
  'Cuadernos, Excel y facturas a mano',
  'Pierdes ventas fuera de horario',
  'No sabes cuánto ganas de verdad',
  'Cinco sistemas distintos que no se hablan',
  'Miedo a las multas de SUNAT',
];

const conKrezka = [
  'Todo digital y en la nube, en un solo lugar',
  'La IA atiende y vende por ti 24/7',
  'Rentabilidad y reportes en tiempo real',
  'Facturación, ventas, inventario e IA integrados',
  'Comprobantes válidos, sin sustos con SUNAT',
];

const Comparativa = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            El cambio
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            La diferencia de trabajar con Krezka
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* Antes */}
          <div className="kz-reveal-left rounded-3xl border border-slate-200 bg-slate-50/60 p-7">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                <X size={18} strokeWidth={2.5} />
              </span>
              <h3 className="text-lg font-bold text-slate-500">Sin Krezka</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {antes.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-slate-500">
                  <X size={18} className="mt-0.5 shrink-0 text-slate-300" strokeWidth={2.5} />
                  <span className="line-through decoration-slate-300">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Con Krezka */}
          <div className="kz-reveal-right relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] p-7 text-white shadow-xl shadow-[#6c5ce7]/25">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-[80px]" />
            <div className="relative flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white">
                <Check size={18} strokeWidth={3} />
              </span>
              <h3 className="text-lg font-bold">Con Krezka</h3>
            </div>
            <ul className="relative mt-6 space-y-4">
              {conKrezka.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] font-medium">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white/20">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparativa;
