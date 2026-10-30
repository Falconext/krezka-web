'use client';

import Image from 'next/image';
import { ChevronRight, Flame, MessageCircle, Play, Send } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import MetaPartnerBadge from '../MetaPartnerBadge';
import chat from '@/app/public/assets/sistema/tour-ia.webp';

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero ver una demo de la IA de Ventas de ${BRAND.name}.`
)}`;

// Lo que pasa en el chat de la captura: la IA cotiza y marca a la clienta como caliente.
const avisos = [
  { Icon: Send, texto: 'Cotización enviada', sub: 'Con fotos y precios reales', pos: '-left-3 top-[18%] sm:-left-10', color: 'from-[#7b6af2] to-[#5b4bd6]', delay: '0s' },
  { Icon: Flame, texto: 'Lead caliente', sub: 'María Fernández · 92', pos: '-right-3 bottom-[16%] sm:-right-10', color: 'from-[#f97316] to-[#e11d48]', delay: '1.2s' },
];

const IaHero = () => (
  <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#e9eefb] via-[#f4f5fd] to-white" />
    <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-[460px] w-[460px] rounded-full bg-[#6c5ce7]/15 blur-[120px]" />
    <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[380px] w-[380px] rounded-full bg-emerald-400/10 blur-[120px]" />

    <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.15fr] lg:px-8">
      <div className="text-center lg:text-left">
        <span className="kz-reveal inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          IA de Ventas por WhatsApp
        </span>
        <h1
          className="kz-reveal mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.2rem]"
          style={{ animationDelay: '0.06s' }}
        >
          Un vendedor que{' '}
          <span className="bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] bg-clip-text text-transparent">nunca deja un mensaje sin responder</span>
        </h1>
        <p className="kz-reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg lg:mx-0" style={{ animationDelay: '0.12s' }}>
          Atiende tu WhatsApp las 24 horas con tu catálogo, tu stock y tus precios reales. Cotiza, toma el pedido y te
          avisa cuando un cliente está listo para comprar. Desde tu propio número y con tu marca.
        </p>

        <div className="kz-reveal mt-9 flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start sm:justify-center" style={{ animationDelay: '0.18s' }}>
          <a
            href="#planes-ia"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6c5ce7] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#6c5ce7]/30 transition-all hover:scale-[1.03] hover:bg-[#5b4bd6] sm:w-auto"
          >
            Probar 7 días gratis
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
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

        <div className="kz-reveal mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center" style={{ animationDelay: '0.24s' }}>
          <MetaPartnerBadge alto={42} />
          <span className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-500">
            <MessageCircle size={16} className="text-emerald-500" />
            Facturación SUNAT incluida en todos los planes
          </span>
        </div>
      </div>

      {/* Captura real del chat con avisos flotantes */}
      <div className="kz-reveal-right relative" style={{ animationDelay: '0.2s' }}>
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#6c5ce7]/25 to-emerald-300/25 blur-2xl" />
        <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_40px_80px_-24px_rgba(75,63,190,0.4)]">
          <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-inner">
              app.krezka.com/administrador/leads
            </span>
          </div>
          <div>
            <Image
              src={chat}
              alt="Chat de WhatsApp donde la IA cotiza yogurt y queso a una clienta y la marca como lead caliente"
              priority
              quality={90}
              sizes="(min-width: 1152px) 640px, (min-width: 1024px) 55vw, 92vw"
              className="h-auto w-full"
            />
          </div>
        </div>

        {avisos.map((a) => (
          <div key={a.texto} className={`absolute z-10 hidden sm:block ${a.pos}`}>
            <div
              className="kz-float-x flex items-center gap-3 rounded-2xl border border-white bg-white/95 py-2.5 pl-2.5 pr-4 shadow-xl shadow-slate-400/25 backdrop-blur-md"
              style={{ animationDelay: a.delay }}
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.color}`}>
                <a.Icon size={17} strokeWidth={2.4} />
              </span>
              <span>
                <span className="block text-[13px] font-bold leading-tight text-slate-900">{a.texto}</span>
                <span className="block text-[11.5px] text-slate-500">{a.sub}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IaHero;
