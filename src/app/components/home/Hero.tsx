'use client';

import Link from 'next/link';
import { ChevronRight, Play } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import HeroPanel from './HeroPanel';

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero probar ${BRAND.name} gratis para mi negocio.`
)}`;

const Hero = () => {
  return (
    <section id="home" className="relative">
      {/* ── Purple gradient block (rounded bottom, like the reference) ── */}
      <div className="relative overflow-hidden rounded-b-[2.5rem] bg-gradient-to-b from-[#6d5ce8] via-[#7c6bf0] to-[#a99df8] px-4 pt-32 pb-56 sm:px-6 md:pt-36 md:pb-64 lg:px-8">
        {/* soft glows + grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-white/20 blur-[130px]" />
          <div className="absolute -bottom-20 right-1/4 h-[420px] w-[420px] rounded-full bg-[#c9c0fb]/40 blur-[120px]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
            <defs>
              <pattern id="heroGrid" width="46" height="46" patternUnits="userSpaceOnUse">
                <path d="M46 0L0 0 0 46" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[13px] font-medium text-white backdrop-blur-md">
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-semibold">La forma más rápida</span>
            Gestiona y haz crecer tu negocio
          </span>

          <h1
            className="kz-reveal mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ animationDelay: '0.08s' }}
          >
            Digitaliza tu negocio y vende sin límites
          </h1>

          <p
            className="kz-reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
            style={{ animationDelay: '0.16s' }}
          >
            La plataforma peruana para facturación electrónica SUNAT, punto de venta, inventario y
            tienda virtual — con un asesor de IA que vende por WhatsApp 24/7.
          </p>

          <div
            className="kz-reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: '0.24s' }}
          >
            <Link
              href="/sistemas"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#4b3fbe] shadow-lg shadow-[#3a2ea0]/20 transition-all hover:scale-[1.03] sm:w-auto"
            >
              Comenzar gratis
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
            >
              <Play className="h-4 w-4 fill-current" />
              Ver demo
            </a>
          </div>
        </div>
      </div>

      {/* ── Dashboard mockup, overlapping the purple/white boundary ── */}
      <div className="kz-reveal-scale relative z-20 mx-auto -mt-44 max-w-5xl px-4 sm:px-6 md:-mt-52 lg:px-8" style={{ animationDelay: '0.2s' }}>
        <HeroPanel />
      </div>
    </section>
  );
};

export default Hero;
