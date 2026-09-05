'use client';

import { Mail } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const FinalCta = () => {
  const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero empezar con ${BRAND.name}. ¿Me ayudan?`
  )}`;

  return (
    <section className="bg-white px-4 pb-24 pt-4 sm:px-6 lg:px-8">
      <div className="kz-reveal-scale relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#6d5ce8] via-[#7c6bf0] to-[#a99df8] px-6 py-16 text-center shadow-2xl shadow-[#6c5ce7]/25 md:px-12 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-10 h-72 w-72 rounded-full bg-white/20 blur-[110px]" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-[#c9c0fb]/40 blur-[110px]" />
          <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden>
            <defs>
              <pattern id="ctaGrid" width="42" height="42" patternUnits="userSpaceOnUse">
                <path d="M42 0L0 0 0 42" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaGrid)" />
          </svg>
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            ¿Listo para tomar el control de tu negocio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Únete a más de 500 negocios peruanos que venden más, facturan sin complicarse y atienden 24/7 con IA. Empieza hoy.
          </p>

          {/* email capture row (opens WhatsApp with the message) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink, '_blank', 'noopener,noreferrer');
            }}
            className="mx-auto mt-9 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
              <input
                type="email"
                required
                placeholder="Ingresa tu correo"
                className="w-full rounded-full border border-white/25 bg-white/10 py-3.5 pl-11 pr-4 text-sm text-white placeholder-white/60 outline-none backdrop-blur-md focus:border-white/50"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#4b3fbe] shadow-lg transition-all hover:scale-[1.03]"
            >
              Comenzar gratis
            </button>
          </form>

          <p className="mt-5 text-xs font-medium text-white/60">
            Sin tarjeta de crédito · Activación en 24h · Soporte en español
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
