'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import HeroPanel from './HeroPanel';

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero probar ${BRAND.name} gratis para mi negocio.`
)}`;

// Pastillas flotantes de rubro. Dos encima del panel (arriba) y dos a media
// altura saliendo por los lados; todas derivan lentamente de lado a lado.
const pills = [
  { label: 'Bodegas', dot: 'from-[#00d0d4] to-[#008b8f]', pos: '-top-5 left-[8%] sm:left-[14%]', delay: '0s' },
  { label: 'Ferreterías', dot: 'from-[#f59e0b] to-[#d97706]', pos: '-top-5 right-[8%] sm:right-[14%]', delay: '1.4s' },
  { label: 'Farmacias', dot: 'from-[#22c55e] to-[#16a34a]', pos: 'top-[42%] -left-2 sm:-left-6', delay: '0.7s' },
  { label: 'Restaurantes', dot: 'from-[#f43f5e] to-[#e11d48]', pos: 'top-[36%] -right-2 sm:-right-6', delay: '2s' },
];

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Efecto al hacer scroll: el texto/botones se desvanecen y el panel sube.
  useEffect(() => {
    const update = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      // El texto se desvanece rápido (≈200px); el panel sube algo más suave (≈340px).
      const pText = Math.min(1, Math.max(0, y / 200));
      const pPanel = Math.min(1, Math.max(0, y / 340));
      if (textRef.current) {
        textRef.current.style.opacity = String(1 - pText);
        textRef.current.style.transform = `translateY(${pText * 24}px)`;
        textRef.current.style.pointerEvents = pText > 0.7 ? 'none' : 'auto';
      }
      if (panelRef.current) {
        // el panel sube y (con mayor z-index) tapa el texto: se mete atrás de la imagen
        panelRef.current.style.transform = `translateY(${-pPanel * 140}px)`;
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    document.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', update);
      document.removeEventListener('scroll', update);
    };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-0 pt-28 md:pt-32">
      {/* ── Cielo de fondo ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e9eefb] via-[#f4f5fd] to-[#efeafe]" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/krezka/fondo.svg"
          alt=""
          aria-hidden
          className="absolute inset-x-0 top-0 h-full w-full object-cover object-top opacity-90"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* nubes a la altura de los botones (detrás del contenido) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/krezka/nubeizquierda.webp"
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[30%] -left-10 z-0 hidden w-[34%] max-w-[380px] -translate-y-1/2 select-none sm:block md:-left-16"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/krezka/nubederecha.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-[28%] -right-10 z-0 hidden w-[32%] max-w-[360px] -translate-y-1/2 select-none sm:block md:-right-16"
        />

        {/* ── Texto centrado ── */}
        <div ref={textRef} className="relative z-10 mx-auto max-w-4xl text-center will-change-[opacity,transform]">
          <h1 className="kz-reveal text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Digitaliza tu negocio y
            <br className="hidden sm:block" /> vende{' '}
            <span className="bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] bg-clip-text text-transparent">
              sin límites
            </span>
          </h1>
          <p className="kz-reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg" style={{ animationDelay: '0.1s' }}>
            Facturación SUNAT, punto de venta, inventario y tienda virtual — con un asesor de IA
            que atiende y vende por WhatsApp 24/7.
          </p>

          <div className="kz-reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '0.18s' }}>
            <Link
              href="/sistemas"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6c5ce7] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#6c5ce7]/30 transition-all hover:scale-[1.03] hover:bg-[#5b4bd6] sm:w-auto"
            >
              Comenzar gratis
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-8 py-4 text-[15px] font-semibold text-slate-800 backdrop-blur-sm transition-all hover:bg-white sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" />
              Agendar demo
            </a>
          </div>
        </div>

        {/* ── Panel + nubes + pastillas ── */}
        <div ref={panelRef} className="relative z-30 mx-auto mt-16 max-w-5xl will-change-transform">
          {/* pastillas flotantes (2 arriba encima del panel, 2 a media altura saliendo por los lados) */}
          {pills.map((p) => (
            <div key={p.label} className={`kz-reveal absolute z-30 hidden sm:block ${p.pos}`} style={{ animationDelay: '0.5s' }}>
              <div
                className="kz-float-x inline-flex items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 shadow-lg shadow-slate-400/20 backdrop-blur-md"
                style={{ animationDelay: p.delay }}
              >
                <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-br ${p.dot}`} />
                <span className="text-sm font-semibold text-slate-700">{p.label}</span>
              </div>
            </div>
          ))}

          {/* panel */}
          <div className="kz-reveal-scale relative z-20 px-2 sm:px-6" style={{ animationDelay: '0.24s' }}>
            <HeroPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
