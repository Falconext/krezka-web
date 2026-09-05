'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FileText, ShoppingCart, Store, Boxes, MessageCircle, Check, ArrowRight } from 'lucide-react';
import CountUp from './CountUp';

type Tab = {
  key: string;
  label: string;
  Icon: typeof FileText;
  title: string;
  desc: string;
  bullets: string[];
  // Imagen por defecto (respaldo). Si existe /assets/tour/<key>.png, se usa esa.
  img: string;
};

const TABS: Tab[] = [
  {
    key: 'facturacion',
    label: 'Facturación',
    Icon: FileText,
    title: 'Facturación electrónica SUNAT en segundos',
    desc: 'Emite boletas, facturas, notas y guías de remisión válidas ante SUNAT sin salir del sistema. Envío automático por WhatsApp y correo.',
    bullets: ['Comprobantes ilimitados', 'Guías de remisión GRE-R y GRE-T', 'Series y numeración automática'],
    img: '/assets/dashboard/facturacion.png',
  },
  {
    key: 'pos',
    label: 'Punto de Venta',
    Icon: ShoppingCart,
    title: 'Vende rápido con un POS pensado para tu mostrador',
    desc: 'Cobra en segundos, controla tu caja con apertura y cierre, y prioriza los productos con stock. Táctil y también con lector de código de barras.',
    bullets: ['Apertura / cierre de caja', 'Calculadora de vuelto', 'Ventas por fracción y combos'],
    img: '/assets/dashboard/pos.png',
  },
  {
    key: 'tienda',
    label: 'Tienda Virtual',
    Icon: Store,
    title: 'Tu tienda online lista para vender',
    desc: 'Un ecommerce con tu marca, catálogo, banners y variantes por talla/color. Pagos, delivery y comunicación automática con tus clientes.',
    bullets: ['Catálogo con tu slug propio', 'Variantes, combos y mayoristas', 'Pagos y envío a despacho'],
    img: '/assets/brochure/tiendavirtual.png',
  },
  {
    key: 'inventario',
    label: 'Inventario',
    Icon: Boxes,
    title: 'Controla tu stock por rubro, sin sorpresas',
    desc: 'Kardex de entradas y salidas, lotes y vencimientos (FEFO/FIFO), código de barras y traslados entre sedes. Todo en tiempo real.',
    bullets: ['Kardex y dashboard de stock', 'Lotes y vencimientos', 'Traslados entre sucursales'],
    img: '/assets/brochure/inventariointeligente.png',
  },
  {
    key: 'ia',
    label: 'IA de Ventas',
    Icon: MessageCircle,
    title: 'Un asesor con IA que atiende y vende 24/7',
    desc: 'Responde tu WhatsApp con tu catálogo real, envía fotos y precios, califica prospectos y te avisa los leads calientes. Con tu número y tu marca.',
    bullets: ['Responde al instante', 'Seguimiento automático', 'Te avisa los leads calientes'],
    img: '/assets/brochure/financieroreal.png',
  },
];

const STATS: { to: number; fmt: (n: number) => string; label: string }[] = [
  { to: 500, fmt: (n) => `+${n}`, label: 'Negocios activos' },
  {
    to: 1000000,
    fmt: (n) => (n >= 1_000_000 ? '1M+' : n >= 1000 ? `${Math.round(n / 1000)}K+` : `${n}+`),
    label: 'Comprobantes emitidos',
  },
  { to: 99, fmt: (n) => `${n}%`, label: 'Satisfacción' },
  { to: 24, fmt: (n) => `${n}/7`, label: 'Soporte e IA' },
];

/** Usa /assets/tour/<key>.png si existe; si no, la imagen por defecto. Nunca imagen rota. */
function useTourImage(tabKey: string, fallback: string) {
  const [src, setSrc] = useState(fallback);
  useEffect(() => {
    setSrc(fallback);
    const override = `/assets/tour/${tabKey}.png`;
    const img = new window.Image();
    img.onload = () => setSrc(override);
    img.onerror = () => setSrc(fallback);
    img.src = override;
  }, [tabKey, fallback]);
  return src;
}

const ProductTour = () => {
  const [active, setActive] = useState(0);
  const tab = TABS[active];
  const src = useTourImage(tab.key, tab.img);

  return (
    <section id="tour" className="bg-[#f8f7fe] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#6c5ce7] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Conoce Krezka por dentro
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Todo tu negocio en una sola pantalla
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Explora los módulos de Krezka y mira cómo se ve por dentro.
          </p>
        </div>

        {/* tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.key}
                onClick={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  on
                    ? 'bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/25'
                    : 'bg-white text-slate-500 hover:text-slate-800 hover:shadow-sm'
                }`}
              >
                <t.Icon size={16} />
                {t.label}
              </button>
            );
          })}
        </div>

        {/* content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* text (re-mount on tab change para animar) */}
          <div key={`txt-${tab.key}`} className="kz-reveal-left">
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">{tab.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{tab.desc}</p>
            <ul className="mt-6 space-y-3">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] font-medium text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#6c5ce7] text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href="/sistemas"
              className="mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-[#6c5ce7] transition-all hover:gap-2.5"
            >
              Ver todos los módulos
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* screenshot */}
          <div key={`img-${tab.key}`} className="kz-reveal-right relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-[#6c5ce7]/25 to-[#a99df8]/25 blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-[0_40px_80px_-24px_rgba(75,63,190,0.4)]">
              <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-inner">
                  app.krezka.com/administrador
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={tab.title} className="block w-full" />
            </div>
          </div>
        </div>

        {/* estadísticas al pie del contenedor */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-[#e7e4fb] pt-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <CountUp
                to={s.to}
                format={s.fmt}
                className="block text-3xl font-extrabold tracking-tight text-[#6c5ce7] md:text-4xl"
              />
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
