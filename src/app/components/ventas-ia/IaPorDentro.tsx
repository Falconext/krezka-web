'use client';

import { useEffect, useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { BellRing, Check, Filter, Maximize2, MessagesSquare, UserCog, X } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import chats from '@/app/public/assets/sistema/tour-ia.webp';
import embudo from '@/app/public/assets/sistema/ia-embudo.webp';
import vendedor from '@/app/public/assets/sistema/ia-vendedor.webp';
import avisos from '@/app/public/assets/sistema/ia-avisos.webp';

type Vista = {
  key: string;
  label: string;
  Icon: typeof MessagesSquare;
  title: string;
  desc: string;
  bullets: string[];
  // Captura real del módulo con la cuenta demo de minimarket.
  img: StaticImageData;
  url: string;
};

const VISTAS: Vista[] = [
  {
    key: 'chats',
    label: 'Chats',
    Icon: MessagesSquare,
    title: 'Todas tus conversaciones en una bandeja',
    desc: 'WhatsApp e Instagram en un solo lugar, con la ficha de cada cliente al lado: qué pidió, cuánto le interesa y en qué etapa va.',
    bullets: ['La IA responde con fotos y precios reales', 'Pausa el bot y responde tú', 'Notas de voz y vouchers en el chat'],
    img: chats,
    url: 'app.krezka.com/administrador/leads',
  },
  {
    key: 'embudo',
    label: 'Embudo',
    Icon: Filter,
    title: 'Sabe en qué va cada cliente',
    desc: 'Cada pedido avanza solo por etapa: desde el primer mensaje hasta la cotización, el pago y la entrega.',
    bullets: ['Interés de 0 a 100 por cliente', 'Frío, tibio o caliente de un vistazo', 'Pagos esperando revisión'],
    img: embudo,
    url: 'app.krezka.com/administrador/leads/embudo',
  },
  {
    key: 'vendedor',
    label: 'Mi vendedor',
    Icon: UserCog,
    title: 'Tu vendedor habla como tu negocio',
    desc: 'Le das nombre, le dices a quién le vende y qué nunca debe hacer. Un puntaje te muestra qué le falta para vender mejor.',
    bullets: ['Personalidad, reglas y saludo', 'Conocimiento: horarios, envíos y pagos', 'Zonas de envío y medios de pago'],
    img: vendedor,
    url: 'app.krezka.com/administrador/leads/vendedor',
  },
  {
    key: 'avisos',
    label: 'Seguimiento',
    Icon: BellRing,
    title: 'Seguimiento que sale solo',
    desc: 'Los mensajes que nadie tiene tiempo de mandar: la cotización que quedó abierta, la recompra del mes y el producto que volvió a llegar.',
    bullets: ['Cotización sin cerrar y “avisaba luego”', 'Recompra y reactivación de clientes', 'Respeta horarios y a quien pidió no recibir'],
    img: avisos,
    url: 'app.krezka.com/administrador/leads/avisos',
  },
];

const IaPorDentro = () => {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const vista = VISTAS[active];

  // Cerrar el visor con ESC y bloquear el scroll de fondo mientras está abierto.
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setZoom(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoom]);

  return (
    <section id="por-dentro" className="bg-[#f8f7fe] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#6c5ce7] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Así se ve por dentro
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Tú ves todo lo que tu vendedor IA hace
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Pantallas reales del módulo IA de Ventas de {BRAND.name}, con un minimarket de ejemplo.
          </p>
        </div>

        <div role="tablist" aria-label="Pantallas de la IA de Ventas" className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {VISTAS.map((v, i) => {
            const on = i === active;
            return (
              <button
                key={v.key}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  on ? 'bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/25' : 'bg-white text-slate-500 hover:text-slate-800 hover:shadow-sm'
                }`}
              >
                <v.Icon size={16} />
                {v.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div key={`txt-${vista.key}`} className="kz-reveal-left">
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">{vista.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{vista.desc}</p>
            <ul className="mt-6 space-y-3">
              {vista.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#6c5ce7] text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div key={`img-${vista.key}`} className="kz-reveal-right relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#6c5ce7]/25 to-[#a99df8]/25 blur-2xl" />
            <div className="group overflow-hidden rounded-2xl border border-white bg-white shadow-[0_40px_80px_-24px_rgba(75,63,190,0.4)]">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-inner">{vista.url}</span>
              </div>
              <button
                type="button"
                onClick={() => setZoom(true)}
                aria-label="Ver imagen completa"
                className="relative flex aspect-[16/10] w-full cursor-zoom-in items-center justify-center bg-gradient-to-br from-[#eef0ff] to-[#f7f5ff] p-4 sm:p-7"
              >
                <Image
                  src={vista.img}
                  alt={vista.title}
                  quality={90}
                  sizes="(min-width: 1152px) 640px, (min-width: 1024px) 55vw, 92vw"
                  className="h-full w-auto max-w-full rounded-2xl object-contain shadow-xl ring-1 ring-black/5"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-slate-900/25 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-[13px] font-semibold text-slate-800 shadow-lg backdrop-blur">
                    <Maximize2 size={15} className="text-[#6c5ce7]" />
                    Ver completo
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {zoom && (
        <div
          onClick={() => setZoom(false)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            onClick={() => setZoom(false)}
            aria-label="Cerrar"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <X size={22} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="kz-reveal-scale relative w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
          >
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 flex-1 truncate text-[11px] font-medium text-slate-500">{vista.title}</span>
            </div>
            <Image src={vista.img} alt={vista.title} quality={90} sizes="(min-width: 1152px) 1152px, 100vw" className="max-h-[80vh] w-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
};

export default IaPorDentro;
