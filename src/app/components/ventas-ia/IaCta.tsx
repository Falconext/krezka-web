import { ChevronRight } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const IaCta = () => (
  <section className="bg-white px-4 pb-24 pt-4 sm:px-6 lg:px-8">
    <div className="kz-reveal-scale relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6d5ce8] via-[#7c6bf0] to-[#a99df8] px-6 py-16 text-center shadow-2xl shadow-[#6c5ce7]/25 md:px-12 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-white/20 blur-[110px]" />
        <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-[110px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
          <defs>
            <pattern id="iaCtaGrid" width="42" height="42" patternUnits="userSpaceOnUse">
              <path d="M42 0L0 0 0 42" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#iaCtaGrid)" />
        </svg>
      </div>

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Mañana a las 11 de la noche alguien te va a escribir
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
          Que tu vendedor IA le responda, le cotice y te deje la venta lista. Pruébalo 7 días gratis.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`${BRAND.dashboardUrl}/registro?plan=pro`}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#4b3fbe] shadow-lg transition-all hover:scale-[1.03] sm:w-auto"
          >
            Probar 7 días gratis
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hola, quiero activar la IA de Ventas de ${BRAND.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-[15px] font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:w-auto"
          >
            Hablar con un asesor
          </a>
        </div>
        <p className="mt-5 text-xs font-medium text-white/60">
          Facturación SUNAT incluida · Tu propio número · Cancela cuando quieras
        </p>
      </div>
    </div>
  </section>
);

export default IaCta;
