'use client';

import { useEffect, useState } from 'react';

type Cliente = { id: number; nombre: string; logo: string };

// Normaliza (sin tildes, minúsculas) para comparar nombres.
const norm = (s: string) =>
  (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Logos que se ven pequeños por su arte → se muestran un poco más grandes.
const LOGOS_GRANDES = ['ortega', 'chabelita', 'amelis', 'santos', 'toribio', 'cordob'];
const esLogoGrande = (nombre: string) =>
  LOGOS_GRANDES.some((k) => norm(nombre).includes(k));

// Logos que lucen mejor recortados en círculo, llenando el 100%.
const LOGOS_CIRCULO = ['amelis', 'tecsi', 'aguilar', 'huerta', 'salvador', 'marell'];
const esLogoCirculo = (nombre: string) =>
  LOGOS_CIRCULO.some((k) => norm(nombre).includes(k));

// Logos extra grandes (arte muy pequeño).
const LOGOS_XL = ['chabelita'];
const esLogoXL = (nombre: string) =>
  LOGOS_XL.some((k) => norm(nombre).includes(k));

const TrustBar = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch('/api/empresas/clientes', { cache: 'no-store' });
        const payload = await res.json();
        const data: Cliente[] = Array.isArray(payload?.data) ? payload.data : [];
        if (active) setClientes(data.filter((c) => c.logo));
      } catch {
        /* silencioso: la sección se muestra sin logos */
      } finally {
        if (active) setLoaded(true);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const hasLogos = clientes.length > 0;
  // Duplicamos la lista para un marquee continuo cuando hay suficientes logos.
  const marquee = hasLogos ? [...clientes, ...clientes] : [];
  const enableMarquee = clientes.length >= 6;

  return (
    <section className="bg-white pt-20 pb-14 md:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg font-bold text-slate-800 md:text-xl">
          Con la confianza de más de <span className="text-[#6c5ce7]">1000+</span> negocios peruanos
        </p>

        {/* Skeleton mientras carga */}
        {!loaded && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 w-28 animate-pulse rounded-lg bg-slate-100" />
            ))}
          </div>
        )}

        {/* Logos de clientes reales — tira limpia a color, en movimiento continuo */}
        {loaded && hasLogos && (
          <div
            className={`kz-reveal relative mt-12 ${
              enableMarquee ? 'overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]' : ''
            }`}
          >
            <ul
              className={
                enableMarquee
                  ? 'flex w-max items-center gap-16 kz-marquee'
                  : 'flex flex-wrap items-center justify-center gap-14'
              }
            >
              {(enableMarquee ? marquee : clientes).map((c, i) =>
                esLogoCirculo(c.nombre) ? (
                  <li key={`${c.id}-${i}`} className="flex h-20 shrink-0 items-center">
                    <span className="flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={c.logo}
                        alt={c.nombre}
                        title={c.nombre}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                      />
                    </span>
                  </li>
                ) : (
                  <li key={`${c.id}-${i}`} className="flex h-20 shrink-0 items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.logo}
                      alt={c.nombre}
                      title={c.nombre}
                      loading="lazy"
                      className={`w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100 ${
                        esLogoXL(c.nombre)
                          ? 'max-h-20 max-w-[250px]'
                          : esLogoGrande(c.nombre)
                            ? 'max-h-16 max-w-[210px]'
                            : 'max-h-12 max-w-[160px]'
                      }`}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {/* Fallback elegante si aún no hay logos disponibles */}
        {loaded && !hasLogos && (
          <p className="mt-6 text-center text-sm text-slate-400">
            Bodegas, ferreterías, farmacias, minimarkets, distribuidoras y más confían en Krezka.
          </p>
        )}
      </div>
    </section>
  );
};

export default TrustBar;
