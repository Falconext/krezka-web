'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const faqs = [
  { q: '¿Los comprobantes son válidos ante SUNAT?', a: 'Sí. Krezka está certificado y emite boletas, facturas, notas de crédito/débito y guías de remisión electrónicas 100% válidas ante SUNAT. El certificado digital PSE está incluido en todos los planes.' },
  { q: '¿Hay límite de comprobantes?', a: 'No. Todos los planes incluyen comprobantes ILIMITADOS con una tarifa fija mensual o anual, sin cargos por documento emitido.' },
  { q: '¿Sirve para mi rubro?', a: 'Sí. El sistema se adapta a bodegas, ropa, ferreterías, farmacias, cómputo, minimarkets, distribuidoras y fabricación, activando lotes, vencimientos, código de barras, variantes y más.' },
  { q: '¿Qué incluye la IA de Ventas por WhatsApp?', a: 'Un asesor con IA que atiende tu WhatsApp 24/7: responde con tu catálogo real, envía fotos y precios, califica prospectos y te avisa los leads calientes desde tu propio número.' },
  { q: '¿Cuánto tarda la activación?', a: 'La mayoría de negocios queda operativo en 24 horas. Nuestro equipo te acompaña en la configuración y la carga de tu catálogo.' },
  { q: '¿Puedo cambiar de plan o cancelar?', a: 'Claro. Puedes subir o bajar de plan en cualquier momento y cancelar cuando quieras, sin penalidades ni permanencia forzada.' },
];

const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            FAQ
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Preguntas frecuentes
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Todo lo que necesitas saber antes de empezar con {BRAND.name}.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                style={{ animationDelay: `${(i % 2) * 0.06}s` }}
                className={`kz-reveal h-fit overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-[#6c5ce7]/40 bg-[#f8f7fe]' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14.5px] font-semibold text-slate-900">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen ? 'rotate-45 bg-[#6c5ce7] text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* still have questions */}
        <div className="kz-reveal mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#e7e4fb] bg-[#f8f7fe] px-6 py-5 sm:flex-row">
          <div>
            <p className="text-base font-bold text-slate-900">¿Aún tienes preguntas?</p>
            <p className="text-sm text-slate-500">Escríbenos y te respondemos al instante.</p>
          </div>
          <a
            href={`https://wa.me/${BRAND.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#6c5ce7] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#5b4bd6]"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
