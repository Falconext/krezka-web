'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const faqs = [
  {
    q: '¿Uso mi mismo número de WhatsApp?',
    a: 'Sí. La IA atiende desde tu número y con el nombre de tu negocio. Te ayudamos a conectarlo con la API oficial de WhatsApp de Meta.',
  },
  {
    q: '¿Qué pasa si la IA no sabe algo?',
    a: 'No inventa: responde solo con tu catálogo, tus precios y lo que le enseñaste. Si el cliente pide algo que no tiene respuesta, te pasa la conversación con el mensaje de derivación que tú elijas.',
  },
  {
    q: '¿Puedo responder yo en algún momento?',
    a: 'Cuando quieras. Pausas el bot en ese chat y escribes tú desde la bandeja. También puedes apagar la IA completa con un interruptor.',
  },
  {
    q: '¿Qué es un lead y cuántos incluye mi plan?',
    a: 'Un lead es un cliente nuevo que te escribe en el mes; quien ya conversaba contigo no se vuelve a contar. Ventas Start incluye 500, Ventas Pro 1,500 y Ventas Scale 5,000. Si necesitas más, armamos un plan a tu medida.',
  },
  {
    q: '¿Hay cargos por mensaje?',
    a: 'No dentro de tu plan. Aparte, y solo si los usas, pagas directo a Meta tus anuncios y los avisos que salen fuera de una conversación abierta.',
  },
  {
    q: '¿Viene con facturación electrónica?',
    a: 'Sí. Todos los planes de IA de Ventas incluyen la facturación electrónica SUNAT, el punto de venta y el inventario de Krezka, porque la IA vende con tu stock real.',
  },
  {
    q: '¿Cómo es la prueba gratis?',
    a: 'Te registras, eliges tu plan y tienes 7 días para probarlo con tus clientes. Si te convence, pagas desde el mismo sistema con Mercado Pago.',
  },
  {
    q: '¿Puedo cancelar cuando quiera?',
    a: 'Sí. Sin permanencia forzada ni penalidades. Puedes subir o bajar de plan en cualquier momento.',
  },
];

const IaFaq = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq-ia" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            FAQ
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Preguntas sobre la IA de Ventas
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Lo que más nos preguntan antes de activar su vendedor IA.
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

        <div className="kz-reveal mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#e7e4fb] bg-[#f8f7fe] px-6 py-5 sm:flex-row">
          <div>
            <p className="text-base font-bold text-slate-900">¿Quieres verla funcionando con tu catálogo?</p>
            <p className="text-sm text-slate-500">Te mostramos una demo en vivo por videollamada.</p>
          </div>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(`Hola, quiero una demo de la IA de Ventas de ${BRAND.name}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#6c5ce7] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-[#5b4bd6]"
          >
            Agendar demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default IaFaq;
