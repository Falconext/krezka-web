'use client';

import { FileText, BarChart3, MessageCircle, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Facturación inteligente',
    desc: 'Emite boletas, facturas, notas y guías de remisión válidas ante SUNAT en un clic. Certificado digital incluido.',
    featured: false,
  },
  {
    icon: BarChart3,
    title: 'Analítica en tiempo real',
    desc: 'Ventas, utilidad, stock y caja en vivo. Reportes gerenciales y KPIs para decidir con datos, no con corazonadas.',
    featured: true,
  },
  {
    icon: MessageCircle,
    title: 'IA de Ventas 24/7',
    desc: 'Un asesor con inteligencia artificial que atiende tu WhatsApp, responde con tu catálogo y te avisa los leads calientes.',
    featured: false,
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Funciones potentes
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Un sistema para el negocio moderno
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Toma el control del presente y el futuro de tu empresa con Krezka.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              style={{ animationDelay: `${i * 0.1}s` }}
              className={`kz-reveal group relative flex flex-col overflow-hidden rounded-3xl border p-7 transition-all hover:-translate-y-1 ${
                f.featured
                  ? 'border-transparent bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] text-white shadow-xl shadow-[#6c5ce7]/25'
                  : 'border-slate-200 bg-white text-slate-900 hover:shadow-lg'
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  f.featured ? 'bg-white/20 text-white' : 'bg-[#f1eefe] text-[#6c5ce7]'
                }`}
              >
                <f.icon size={22} strokeWidth={2} />
              </span>
              <h3 className={`mt-5 text-lg font-bold ${f.featured ? 'text-white' : 'text-slate-900'}`}>{f.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${f.featured ? 'text-white/85' : 'text-slate-500'}`}>{f.desc}</p>

              <a
                href="/sistemas"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${
                  f.featured ? 'text-white' : 'text-[#6c5ce7]'
                }`}
              >
                Saber más
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
