'use client';

import { MessageCircle, Clock } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const asesores = [
  { name: 'Bratfor Deudor N.', role: 'Asesor Comercial', specialty: 'Bodegas y Minimarkets', image: '/assets/krezka/bratfor.jpeg', msg: `Hola Bratfor, me interesa ${BRAND.name} para mi bodega/minimarket. ¿Me puedes dar más información?` },
  { name: 'Yan Gamonal S.', role: 'Asesor Comercial', specialty: 'Farmacias y Boticas', image: '/assets/krezka/yan.jpeg', msg: `Hola Yan, me interesa ${BRAND.name} para mi farmacia/botica. ¿Me puedes dar más información?` },
  { name: 'Diego Ortega R.', role: 'Asesor Comercial', specialty: 'Ferreterías y Distribuidoras', image: '/assets/krezka/diego.jpeg', msg: `Hola Diego, me interesa ${BRAND.name} para mi ferretería. ¿Me puedes dar más información?` },
  { name: 'Moroni S.', role: 'Asesor Comercial', specialty: 'Restaurantes y Servicios', image: '/assets/krezka/moroni.jpeg', msg: `Hola Moroni, me interesa ${BRAND.name} para mi restaurante/negocio de servicios. ¿Me puedes dar más información?` },
];

const Asesores = () => {
  return (
    <section id="asesores" className="bg-[#f8f7fe] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#6c5ce7] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Equipo de asesores
          </span>
          <h2 className="kz-reveal mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl" style={{ animationDelay: '0.06s' }}>
            Habla con un asesor{' '}
            <span className="bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] bg-clip-text text-transparent">especializado</span>
          </h2>
          <p className="kz-reveal mt-4 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Cada asesor conoce a profundidad tu tipo de negocio. Te ayudamos a elegir el plan ideal para ti.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {asesores.map((a, i) => (
            <div
              key={a.name}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="kz-reveal group relative flex flex-col items-center overflow-hidden rounded-[1.75rem] border border-slate-100 bg-gradient-to-b from-white to-[#faf9ff] p-6 text-center shadow-sm transition-all hover:-translate-y-1.5 hover:border-[#6c5ce7]/25 hover:shadow-2xl hover:shadow-[#6c5ce7]/10"
            >
              {/* halo superior */}
              <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#6c5ce7]/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

              {/* avatar + online */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] opacity-70 blur-[7px] transition-opacity group-hover:opacity-100" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="relative h-24 w-24 rounded-full object-cover object-top shadow-lg ring-4 ring-white"
                />
                <span className="absolute bottom-1.5 right-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
              </div>

              <p className="mt-4 text-base font-bold text-slate-900">{a.name}</p>
              <p className="text-xs font-medium text-slate-400">{a.role}</p>
              <span className="mt-2.5 inline-block rounded-full bg-[#f1eefe] px-3.5 py-1 text-xs font-semibold text-[#6c5ce7]">
                {a.specialty}
              </span>

              <p className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-emerald-600">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                En línea
                <span className="text-slate-300">·</span>
                <Clock size={12} className="text-slate-400" />
                <span className="text-slate-400">Responde en minutos</span>
              </p>

              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(a.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:scale-[1.02] hover:bg-[#20bd5a]"
              >
                <MessageCircle size={16} />
                Chatear ahora
              </a>
            </div>
          ))}
        </div>

        <p className="mt-9 text-center text-sm text-slate-400">
          También puedes escribirnos directo al{' '}
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#25D366] hover:underline"
          >
            {BRAND.phone}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Asesores;
