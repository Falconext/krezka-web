'use client';

import { Users, Building2, BarChart3, LifeBuoy } from 'lucide-react';
import { BRAND } from '@/lib/branding';

type Addon = {
  Icon: typeof Users;
  title: string;
  price?: string; // monto fijo mensual
  note?: string; // texto cuando el precio es variable
  featured?: boolean;
};

const addons: Addon[] = [
  { Icon: Users, title: 'Por usuario', price: '30' },
  { Icon: Building2, title: 'Por almacén o sucursal', price: '80' },
  { Icon: BarChart3, title: 'Reportes a medida', note: 'Importe sujeto a análisis y evaluación', featured: true },
  { Icon: LifeBuoy, title: 'Soporte Premium', note: 'Importe sujeto a condiciones' },
];

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero cotizar complementos/precios adicionales de ${BRAND.name}.`
)}`;

const PreciosAdicionales = () => {
  return (
    <section id="adicionales" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Precios adicionales
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Escala Krezka según lo que necesites
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Complementos opcionales que puedes activar sobre cualquier plan, cuando tu negocio crece.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {addons.map((a, i) => (
            <div
              key={a.title}
              style={{ animationDelay: `${i * 0.07}s` }}
              className={`kz-reveal group relative flex flex-col items-center rounded-3xl border p-6 text-center transition-all hover:-translate-y-1 ${
                a.featured
                  ? 'border-transparent bg-gradient-to-b from-[#7b6af2] to-[#6c5ce7] text-white shadow-xl shadow-[#6c5ce7]/25 sm:-my-2'
                  : 'border-slate-100 bg-white shadow-sm hover:shadow-lg'
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
                  a.featured ? 'bg-white/15 text-white' : 'bg-[#f1eefe] text-[#6c5ce7]'
                }`}
              >
                <a.Icon size={22} />
              </span>

              <p className={`mt-4 text-[10px] font-bold uppercase tracking-widest ${a.featured ? 'text-white/70' : 'text-slate-400'}`}>
                Precio adicional
              </p>
              <h3 className={`mt-1 text-sm font-bold leading-snug ${a.featured ? 'text-white' : 'text-slate-900'}`}>
                {a.title}
              </h3>

              <div className="mt-4 flex flex-1 flex-col items-center justify-center">
                {a.price ? (
                  <div className="flex items-baseline gap-1">
                    <span className={`text-sm font-semibold ${a.featured ? 'text-white/80' : 'text-slate-400'}`}>S/</span>
                    <span className={`text-4xl font-extrabold tracking-tight ${a.featured ? 'text-white' : 'text-slate-900'}`}>
                      {a.price}
                    </span>
                    <span className={`text-sm ${a.featured ? 'text-white/70' : 'text-slate-400'}`}>/mes</span>
                  </div>
                ) : (
                  <p className={`text-[13px] font-medium leading-relaxed ${a.featured ? 'text-white/80' : 'text-slate-500'}`}>
                    {a.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          ¿Necesitas un complemento a medida?{' '}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#6c5ce7] underline decoration-[#6c5ce7]/40 underline-offset-4 hover:text-[#4b3fbe]"
          >
            Cotízalo con un asesor
          </a>
        </p>
      </div>
    </section>
  );
};

export default PreciosAdicionales;
