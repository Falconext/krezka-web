'use client';

import { MessageCircle, ShieldCheck, Building2, Store, Sparkles, MapPin } from 'lucide-react';

const BentoGrid = () => {
  return (
    <section className="bg-[#f8f7fe] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#6c5ce7] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Por qué Krezka
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            La ventaja que tu negocio necesita
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-2 gap-4 md:grid-cols-4">
          {/* Tile grande: IA de Ventas (oscuro) */}
          <div className="kz-reveal relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-3xl bg-[#241d4a] p-7 text-white shadow-xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#6c5ce7]/40 blur-[90px]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Nuevo
              </span>
              <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                <MessageCircle size={26} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold leading-tight">
                Un asesor con IA que vende por tu WhatsApp 24/7
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Responde con tu catálogo real, envía fotos y precios, califica prospectos y te avisa los
                leads calientes — desde tu propio número y con tu marca.
              </p>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {['Responde al instante', 'Seguimiento automático', 'Leads calientes'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[12px] text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* SUNAT certificado */}
          <div className="kz-reveal flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ animationDelay: '0.05s' }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d0d4]/10 text-[#008b8f]">
              <ShieldCheck size={20} />
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Certificado SUNAT</h3>
            <p className="mt-1 text-[13px] text-slate-500">Comprobantes 100% válidos, ilimitados.</p>
          </div>

          {/* Multi-sede */}
          <div className="kz-reveal flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ animationDelay: '0.1s' }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600">
              <Building2 size={20} />
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Multi-sede</h3>
            <p className="mt-1 text-[13px] text-slate-500">Controla varias sucursales en un solo panel.</p>
          </div>

          {/* Tienda virtual */}
          <div className="kz-reveal flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-sm" style={{ animationDelay: '0.15s' }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6c5ce7]/10 text-[#6c5ce7]">
              <Store size={20} />
            </span>
            <h3 className="mt-4 text-base font-bold text-slate-900">Tienda con tu marca</h3>
            <p className="mt-1 text-[13px] text-slate-500">Ecommerce, variantes y pagos online.</p>
          </div>

          {/* Hecho en Perú */}
          <div className="kz-reveal flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] p-6 text-white shadow-lg shadow-[#6c5ce7]/25" style={{ animationDelay: '0.2s' }}>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <MapPin size={20} />
            </span>
            <h3 className="mt-4 text-base font-bold">Hecho para el Perú</h3>
            <p className="mt-1 text-[13px] text-white/80">Adaptado a tu rubro y a la SUNAT.</p>
          </div>

          {/* Activación 24h */}
          <div className="kz-reveal col-span-2 flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-1" style={{ animationDelay: '0.25s' }}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
              <Sparkles size={20} />
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-900">Activación en 24h</h3>
              <p className="mt-1 text-[13px] text-slate-500">Soporte en español que te acompaña.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
