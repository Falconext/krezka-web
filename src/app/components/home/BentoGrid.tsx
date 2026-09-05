'use client';

import { ShieldCheck, MessageCircle, Store, Boxes, Building2, MapPin, Sparkles } from 'lucide-react';

const items = [
  {
    Icon: ShieldCheck,
    title: 'Facturación SUNAT',
    desc: 'Boletas, facturas y guías 100% válidas ante SUNAT, ilimitadas.',
    card: 'from-blue-50 to-white',
    tile: 'bg-blue-100 text-blue-500',
  },
  {
    Icon: MessageCircle,
    title: 'IA de Ventas 24/7',
    desc: 'Un asesor con IA que atiende y vende por tu WhatsApp.',
    card: 'from-violet-50 to-white',
    tile: 'bg-violet-100 text-violet-500',
  },
  {
    Icon: Store,
    title: 'Tienda Virtual',
    desc: 'Vende online con tu marca, variantes, combos y pagos.',
    card: 'from-amber-50 to-white',
    tile: 'bg-amber-100 text-amber-500',
  },
  {
    Icon: Boxes,
    title: 'Inventario en tiempo real',
    desc: 'Kardex, lotes, vencimientos y código de barras.',
    card: 'from-emerald-50 to-white',
    tile: 'bg-emerald-100 text-emerald-500',
  },
  {
    Icon: Building2,
    title: 'Multi-sede',
    desc: 'Controla varias sucursales desde un solo panel.',
    card: 'from-fuchsia-50 to-white',
    tile: 'bg-fuchsia-100 text-fuchsia-500',
  },
  {
    Icon: MapPin,
    title: 'Hecho para el Perú',
    desc: 'Adaptado a tu rubro y a la normativa de la SUNAT.',
    card: 'from-rose-50 to-white',
    tile: 'bg-rose-100 text-rose-500',
  },
];

const BentoGrid = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full border border-[#6c5ce7]/30 bg-[#f1eefe] px-4 py-1.5 text-xs font-bold text-[#6c5ce7]">
            <Sparkles size={13} />
            Por qué Krezka
          </span>
          <h2 className="kz-reveal mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl" style={{ animationDelay: '0.06s' }}>
            La ventaja que tu negocio necesita
          </h2>
          <p className="kz-reveal mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500 md:text-base" style={{ animationDelay: '0.12s' }}>
            Todo lo que un negocio peruano necesita para vender, facturar y crecer, en una sola plataforma.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div
              key={it.title}
              style={{ animationDelay: `${i * 0.08}s` }}
              className={`kz-reveal flex flex-col items-center rounded-[2rem] border border-slate-100 bg-gradient-to-t ${it.card} p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60`}
            >
              <span className={`flex h-16 w-16 items-center justify-center rounded-2xl ${it.tile} shadow-sm`}>
                <it.Icon size={28} strokeWidth={2} />
              </span>
              <h3 className="mt-6 text-xl font-extrabold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
