'use client';

import { useEffect, useState } from 'react';
import { UserPlus, PackagePlus, Rocket } from 'lucide-react';

const INTERVAL = 5000;

type Paso = {
  n: string;
  Icon: typeof UserPlus;
  title: string;
  desc: string;
  // 1 a 3 capturas: la primera es la base grande, las siguientes se superponen.
  imgs: string[];
};

const pasos: Paso[] = [
  {
    n: '01',
    Icon: UserPlus,
    title: 'Activa tu empresa',
    desc: 'Configuramos tu RUC, series y certificado digital. Quedas operativo en menos de 24 horas.',
    imgs: ['/assets/tour/facturacion.png', '/assets/tour/pos.png', '/assets/tour/tienda.png'],
  },
  {
    n: '02',
    Icon: PackagePlus,
    title: 'Carga tu catálogo',
    desc: 'Sube productos, precios y stock. Empieza a vender en tu local con el POS y online con tu tienda.',
    imgs: ['/assets/tour/pos.png', '/assets/tour/inventario.png', '/assets/tour/tienda.png'],
  },
  {
    n: '03',
    Icon: Rocket,
    title: 'Factura, cobra y crece',
    desc: 'Emite comprobantes SUNAT, controla tu caja y deja que la IA atienda y venda por WhatsApp 24/7.',
    imgs: ['/assets/tour/ia.png', '/assets/tour/facturacion.png', '/assets/tour/pos.png'],
  },
];

/** Marco de navegador con la captura principal. */
const BrowserFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_50px_100px_-30px_rgba(75,63,190,0.55)]">
    <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
      <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
      <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
      <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      <span className="ml-2 flex-1 truncate rounded bg-white px-2 py-0.5 text-[9px] text-slate-400 shadow-inner">
        app.krezka.com/administrador
      </span>
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} loading="lazy" className="block w-full" />
  </div>
);

/** Composición de hasta 3 capturas superpuestas para un paso. */
const StackVisual = ({ paso }: { paso: Paso }) => {
  const [main, second, third] = paso.imgs;
  return (
    <>
      {/* base grande */}
      <div className="absolute left-0 top-0 w-[80%]">
        <BrowserFrame src={main} alt={paso.title} />
      </div>

      {/* tercera (pequeña), arriba a la derecha */}
      {third && (
        <div className="absolute right-0 top-[6%] w-[38%] overflow-hidden rounded-xl border-2 border-white bg-white shadow-[0_30px_60px_-20px_rgba(75,63,190,0.5)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={third} alt="" loading="lazy" className="block w-full" />
        </div>
      )}

      {/* segunda (mediana), abajo a la derecha — encima de todo */}
      {second && (
        <div className="absolute bottom-0 right-[3%] z-10 w-[52%] overflow-hidden rounded-xl border-2 border-white bg-white shadow-[0_40px_80px_-24px_rgba(75,63,190,0.6)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={second} alt="" loading="lazy" className="block w-full" />
        </div>
      )}
    </>
  );
};

const ComoFunciona = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % pasos.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <section
      className="bg-white py-16 md:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Cómo funciona
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Empieza a vender en 3 pasos
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Sin instalaciones ni complicaciones. Te acompañamos en todo el proceso.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          {/* ── Pasos (izquierda) ── */}
          <div className="flex flex-col gap-3">
            {pasos.map((p, i) => {
              const on = i === active;
              return (
                <button
                  key={p.n}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                    on
                      ? 'border-[#6c5ce7]/40 bg-[#f8f7fe] shadow-md'
                      : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        on ? 'bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/25' : 'bg-[#f1eefe] text-[#6c5ce7]'
                      }`}
                    >
                      <p.Icon size={22} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-xs font-black ${on ? 'text-[#6c5ce7]' : 'text-slate-300'}`}>{p.n}</span>
                        <h3 className={`text-base font-bold ${on ? 'text-slate-900' : 'text-slate-600'}`}>{p.title}</h3>
                      </div>
                      <p className={`mt-1 text-sm leading-relaxed ${on ? 'text-slate-500' : 'text-slate-400 lg:line-clamp-1'}`}>
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent">
                    {on && !paused && (
                      <div
                        key={active}
                        className="kz-progress h-full rounded-full bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7]"
                        style={{ animationDuration: `${INTERVAL}ms` }}
                      />
                    )}
                    {on && paused && <div className="h-full w-full rounded-full bg-[#6c5ce7]/40" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Stack de capturas (derecha), auto-cambiante ── */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-[#6c5ce7]/25 to-[#a99df8]/25 blur-3xl" />
            {/* escenario de altura fija para el cross-fade */}
            <div className="relative aspect-[4/3] w-full">
              {pasos.map((p, i) => (
                <div
                  key={p.n}
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <StackVisual paso={p} />
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {pasos.map((p, i) => (
                <button
                  key={p.n}
                  onClick={() => setActive(i)}
                  aria-label={`Paso ${p.n}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-[#6c5ce7]' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
