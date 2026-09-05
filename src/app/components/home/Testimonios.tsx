'use client';

import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

type Cliente = { id: number; nombre: string; logo: string };

/**
 * Frases de EJEMPLO. Reemplázalas por reseñas reales de tus clientes.
 * (No se inventan testimonios atribuidos a negocios reales.)
 */
const FRASES_EJEMPLO = [
  'Reemplaza este texto por la reseña real de tu cliente. Cuenta cómo Krezka le ayudó a vender y facturar mejor.',
  'Reemplaza este texto por la reseña real de tu cliente. Menciona el módulo que más usa (POS, tienda, IA…).',
  'Reemplaza este texto por la reseña real de tu cliente. Un testimonio concreto genera más confianza.',
];

const Testimonios = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/empresas/clientes', { cache: 'no-store' });
        const payload = await res.json();
        const data: Cliente[] = Array.isArray(payload?.data) ? payload.data : [];
        if (active) setClientes(data.filter((c) => c.logo).slice(0, 3));
      } catch {
        /* silencioso */
      } finally {
        if (active) setLoaded(true);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  if (loaded && clientes.length === 0) return null;

  return (
    <section className="bg-[#f8f7fe] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#6c5ce7] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Testimonios
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Negocios reales que confían en Krezka
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Empresas peruanas que digitalizaron su gestión y hoy venden más.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {(loaded ? clientes : Array.from({ length: 3 }).map((_, i) => ({ id: -i, nombre: '', logo: '' }))).map(
            (c, i) => (
              <div
                key={c.id}
                style={{ animationDelay: `${i * 0.1}s` }}
                className="kz-reveal flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <Quote size={28} className="text-[#6c5ce7]/25" />
                <div className="mt-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {loaded ? `“${FRASES_EJEMPLO[i % FRASES_EJEMPLO.length]}”` : ''}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                    {c.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.logo} alt={c.nombre} className="h-full w-full object-cover" />
                    ) : (
                      <span className="h-full w-full animate-pulse bg-slate-100" />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">{c.nombre || '—'}</p>
                    <p className="text-xs text-slate-400">Cliente Krezka</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
