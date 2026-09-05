'use client';

import { UserPlus, PackagePlus, Rocket, Check, Flame, FileCheck2 } from 'lucide-react';

/* ── Mini-UI: paso 1 (configuración) ── */
const SetupCard = () => {
  const items = ['RUC verificado', 'Series y numeración', 'Emisión SUNAT habilitada', 'Activación en 24h'];
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-800">Configuración</p>
        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-600">100% lista</span>
      </div>
      <ul className="mt-3 space-y-2.5">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-2.5 text-[13px] font-medium text-slate-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#6c5ce7] text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className="h-full w-full rounded-full bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7]" />
      </div>
    </div>
  );
};

/* ── Mini-UI: paso 2 (catálogo) ── */
const CatalogCard = () => {
  const prods = [
    { n: 'Taladro Bosch GSB', p: '189.00', s: 24 },
    { n: 'Pintura Látex 4L', p: '45.00', s: 60 },
    { n: 'Cemento Sol 42.5kg', p: '32.00', s: 120 },
  ];
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-slate-800">Catálogo</p>
        <span className="rounded-full bg-[#f1eefe] px-2.5 py-0.5 text-[11px] font-bold text-[#6c5ce7]">+ Nuevo</span>
      </div>
      <ul className="mt-3 space-y-2">
        {prods.map((p) => (
          <li key={p.n} className="flex items-center justify-between rounded-lg border border-slate-100 px-3 py-2">
            <span className="truncate text-[12.5px] font-medium text-slate-700">{p.n}</span>
            <span className="ml-2 flex shrink-0 items-center gap-2">
              <span className="text-[12.5px] font-bold text-slate-900">S/ {p.p}</span>
              <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600">{p.s}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ── Mini-UI: paso 3 (facturación + IA) ── */
const GrowCard = () => (
  <div className="grid gap-3 sm:grid-cols-2">
    {/* stats */}
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <p className="text-[11px] font-medium text-slate-400">Ventas de hoy</p>
      <p className="mt-1 text-2xl font-extrabold text-slate-900">S/ 4,235.00</p>
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2">
        <FileCheck2 size={16} className="text-emerald-600" />
        <span className="text-[12px] font-semibold text-emerald-700">Comprobante SUNAT aceptado</span>
      </div>
    </div>
    {/* IA lead */}
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
          <Flame size={15} />
        </span>
        <p className="text-sm font-bold text-slate-800">Lead caliente</p>
      </div>
      <div className="mt-3 rounded-xl rounded-tl-sm bg-[#6c5ce7] px-3 py-2 text-[12px] leading-snug text-white">
        Hola 👋 quiero cotizar 10 bolsas de cemento
      </div>
      <div className="mt-2 ml-auto w-fit rounded-xl rounded-tr-sm bg-slate-100 px-3 py-2 text-[12px] leading-snug text-slate-700">
        ¡Claro! Te preparo la cotización ahora mismo…
      </div>
    </div>
  </div>
);

const pasos = [
  {
    n: '01',
    Icon: UserPlus,
    title: 'Activa tu empresa',
    desc: 'Configuramos tu RUC, series y certificado digital. Quedas operativo en menos de 24 horas.',
    mock: <SetupCard />,
    wide: false,
  },
  {
    n: '02',
    Icon: PackagePlus,
    title: 'Carga tu catálogo',
    desc: 'Sube productos, precios y stock. Empieza a vender en tu local con el POS y online con tu tienda.',
    mock: <CatalogCard />,
    wide: false,
  },
  {
    n: '03',
    Icon: Rocket,
    title: 'Factura, cobra y crece',
    desc: 'Emite comprobantes SUNAT, controla tu caja y deja que la IA atienda y venda por WhatsApp 24/7.',
    mock: <GrowCard />,
    wide: true,
  },
];

const ComoFunciona = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Cómo funciona
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl" style={{ animationDelay: '0.06s' }}>
            Empieza a vender en 3 pasos
          </h2>
          <p className="kz-reveal mt-4 text-[15px] text-slate-500 md:text-base" style={{ animationDelay: '0.12s' }}>
            Sin instalaciones ni complicaciones. Te acompañamos en todo el proceso.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pasos.map((p, i) => (
            <article
              key={p.n}
              style={{ animationDelay: `${i * 0.1}s` }}
              className={`kz-reveal flex flex-col rounded-3xl border border-slate-100 bg-[#f7f7fc] p-6 transition-all hover:-translate-y-1 hover:shadow-lg md:p-7 ${
                p.wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className={p.wide ? 'grid items-center gap-6 md:grid-cols-2' : ''}>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/25">
                      <p.Icon size={20} />
                    </span>
                    <span className="text-2xl font-extrabold text-[#d9d3fb]">{p.n}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
                </div>
                <div className={p.wide ? '' : 'mt-6'}>{p.mock}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
