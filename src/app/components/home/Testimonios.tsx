'use client';

import { useEffect, useState } from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

type Testimonio = {
  nombre: string;
  iniciales: string;
  fecha: string;
  frase: string;
  color: string; // gradiente del avatar (respaldo si no hay logo)
  matchKeys: string[]; // para enlazar con el logo real del cliente por nombre
};

// Reseñas reales de clientes (recomendaciones en Facebook).
const testimonios: Testimonio[] = [
  {
    nombre: 'Luis OwenSoft',
    iniciales: 'LO',
    fecha: '27 de junio',
    frase:
      '¡Un sistema 10 de 10! La gestión de inventarios es súper exacta, el proceso de facturación es una rapidez total y el soporte al cliente es al instante. El mejor aliado para el día a día de cualquier empresa.',
    color: 'from-[#6c5ce7] to-[#4b3fbe]',
    matchKeys: ['owensoft'],
  },
  {
    nombre: 'Artículos Kolob',
    iniciales: 'AK',
    fecha: '28 de junio',
    frase: 'Excelente servicio, todo muy intuitivo. ¡Gracias por el soporte personalizado!',
    color: 'from-[#f59e0b] to-[#d97706]',
    matchKeys: ['kolob'],
  },
  {
    nombre: 'Construservicios P&V',
    iniciales: 'CP',
    fecha: '23 de junio',
    frase: 'Dan muy buen soporte, están pendientes a los requerimientos. Me encantó la tienda virtual.',
    color: 'from-[#0ea5e9] to-[#0369a1]',
    matchKeys: ['construservicios', 'construservicios p&v', 'construservicios p y v'],
  },
  {
    nombre: 'Gamonal Trasporti SRL',
    iniciales: 'GT',
    fecha: '23 de junio',
    frase: 'Excelente atención, el sistema es muy intuitivo.',
    color: 'from-[#22c55e] to-[#15803d]',
    matchKeys: ['gamonal', 'trasporti', 'transporti'],
  },
];

type Cliente = { id: number; nombre: string; logo: string };

// Normaliza (sin tildes, minúsculas) para comparar nombres.
const norm = (s: string) =>
  (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const Testimonios = () => {
  // Mapa nombre-del-testimonio → logo real del cliente (si existe en el backend).
  const [logos, setLogos] = useState<Record<string, string>>({});

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/empresas/clientes', { cache: 'no-store' });
        const payload = await res.json();
        const data: Cliente[] = Array.isArray(payload?.data) ? payload.data : [];
        if (!active) return;
        const map: Record<string, string> = {};
        for (const t of testimonios) {
          const found = data.find(
            (c) => c.logo && t.matchKeys.some((k) => norm(c.nombre).includes(norm(k))),
          );
          if (found) map[t.nombre] = found.logo;
        }
        setLogos(map);
      } catch {
        /* silencioso: se muestran las iniciales como respaldo */
      }
    })();
    return () => {
      active = false;
    };
  }, []);

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonios.map((t, i) => {
            const logo = logos[t.nombre];
            return (
              <div
                key={t.nombre}
                style={{ animationDelay: `${i * 0.08}s` }}
                className="kz-reveal flex flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <Quote size={28} className="text-[#6c5ce7]/25" />
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">“{t.frase}”</p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  {logo ? (
                    <span className="flex h-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white px-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo} alt={t.nombre} title={t.nombre} loading="lazy" className="h-8 w-auto max-w-[96px] object-contain" />
                    </span>
                  ) : (
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                      {t.iniciales}
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-900">{t.nombre}</p>
                    <p className="flex items-center gap-1.5 text-xs text-slate-400">
                      <ThumbsUp size={12} className="text-[#6c5ce7]" />
                      Recomienda Krezka · {t.fecha}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
