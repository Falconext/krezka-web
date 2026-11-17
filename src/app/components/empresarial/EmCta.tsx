import { ChevronRight } from 'lucide-react';
import { EMPRESARIAL, waEmpresarial } from './datos';

const EmCta = () => (
  <section className="bg-white px-4 pb-24 pt-20 sm:px-6 lg:px-8">
    <div className="kz-reveal-scale relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#eeecfd] px-7 py-12 md:flex-row md:items-center md:px-12 md:py-14">
      <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-[#6c5ce7]/20 blur-[90px]" />
      <div className="relative max-w-xl">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
          Una sola cuenta para tu tienda, tu local y la SUNAT
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Agenda una demo y te mostramos cómo quedaría tu tienda con tus productos.
        </p>
      </div>
      <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <a
          href="#planes-empresariales"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-800 transition-all hover:bg-slate-50"
        >
          Ver precios
        </a>
        <a
          href={waEmpresarial(EMPRESARIAL.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#6c5ce7] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#6c5ce7]/30 transition-all hover:bg-[#5b4bd6]"
        >
          Pedir una demo
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);

export default EmCta;
