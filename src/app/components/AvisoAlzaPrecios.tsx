'use client';

import { useEffect, useState } from 'react';
import { CalendarClock } from 'lucide-react';
import { AVISO_ALZA_PRECIOS } from '@/lib/public-pricing';

const DIA = 86_400_000;

/**
 * Aviso de que los planes suben de precio en 2027. En la web lleva la cuenta
 * regresiva; `impreso` es la versión de los brochures, sin días que envejezcan
 * en el PDF.
 */
export default function AvisoAlzaPrecios({ impreso = false, className = '' }: { impreso?: boolean; className?: string }) {
  // Los días se calculan en el navegador: el HTML del servidor no sabe qué día lo abren.
  const [dias, setDias] = useState<number | null>(null);
  useEffect(() => {
    if (impreso) return;
    setDias(Math.ceil((new Date(AVISO_ALZA_PRECIOS.desde).getTime() - Date.now()) / DIA));
  }, [impreso]);

  if (impreso) {
    // shrink-0: la hoja A4 es una columna de alto fijo y, sin esto, la franja
    // se aplastaba para hacerle sitio a las tarjetas.
    return (
      <div className={`relative shrink-0 overflow-hidden rounded-2xl bg-gradient-to-r from-[#2a1d6b] via-[#4b3fbe] to-[#6c5ce7] px-4 py-3.5 text-white ${className}`}>
        <div className="pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-amber-300 ring-1 ring-white/25">
            <CalendarClock size={19} strokeWidth={2.2} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-black leading-tight">{AVISO_ALZA_PRECIOS.titulo}</p>
            <p className="mt-1 text-[10px] leading-snug text-white/80">{AVISO_ALZA_PRECIOS.texto}</p>
          </div>
          <span className="shrink-0 rounded-full bg-white px-3 py-1.5 text-[9px] font-black uppercase tracking-wider text-[#4b3fbe]">
            Hasta el 31/12/2026
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1546] via-[#2a1d6b] to-[#4b3fbe] p-px shadow-xl shadow-[#4b3fbe]/25 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-[#1e1546]/95 via-[#2a1d6b]/95 to-[#4b3fbe]/95 px-5 py-5 text-left sm:px-6">
        {/* brillos */}
        <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-[#a99df8]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 left-10 h-36 w-36 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-amber-300 ring-1 ring-white/20 backdrop-blur">
            <CalendarClock size={24} strokeWidth={2} />
          </span>

          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-300/15 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-amber-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-300 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-300" />
              </span>
              Aviso importante
            </span>
            <p className="mt-1.5 text-[17px] font-extrabold leading-snug tracking-tight text-white">{AVISO_ALZA_PRECIOS.titulo}</p>
            <p className="mt-1 text-[13.5px] leading-relaxed text-white/70">{AVISO_ALZA_PRECIOS.texto}</p>
          </div>

          {dias !== null && dias > 0 && (
            <div className="flex shrink-0 items-center gap-3 rounded-2xl bg-white px-4 py-2.5 shadow-lg sm:flex-col sm:gap-0 sm:px-5 sm:text-center">
              <span className="text-3xl font-black leading-none tracking-tight text-[#4b3fbe] tabular-nums">{dias}</span>
              <span className="text-[11px] font-bold uppercase leading-tight tracking-wider text-slate-500 sm:mt-1">
                {dias === 1 ? 'día' : 'días'} con
                <br className="hidden sm:block" /> precio actual
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
