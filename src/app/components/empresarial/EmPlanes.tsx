import Link from 'next/link';
import { Check, ChevronRight } from 'lucide-react';
import { EMPRESARIAL, INSTALACION, PLUS, waEmpresarial } from './datos';

const planes = [
  {
    ...EMPRESARIAL,
    lema: 'Tu tienda vende sola y recupera ventas',
    destacado: false,
    incluye: [
      'Todo lo de Corporativo',
      'Promociones automáticas y cupones avanzados',
      'Carritos abandonados, cuenta del cliente y popup',
      'Portada a tu medida, preventa y analítica',
      '10 usuarios y hasta 5 sedes',
    ],
  },
  {
    ...PLUS,
    lema: 'Captar, fidelizar y vender a empresas',
    destacado: true,
    incluye: [
      'Todo lo de Empresarial',
      'Precios B2B por cliente mayorista o contratista',
      'Puntos de fidelidad, gift cards y compras recurrentes',
      'Devoluciones, idiomas y monedas, productos digitales',
      'Pago con tarjeta y módulo de producción',
      'Usuarios y sedes ilimitados',
    ],
  },
];

const EmPlanes = () => (
  <section id="planes-empresariales" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-500">Precios</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Elige tu plan</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 md:text-lg">
          Comprobantes SUNAT ilimitados y 0 % de comisión por venta en los dos.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {planes.map((p) => (
          <div
            key={p.nombre}
            className={`relative flex flex-col rounded-3xl p-8 md:p-10 ${
              p.destacado
                ? 'bg-gradient-to-br from-[#6d5ce8] to-[#4b3fbe] text-white shadow-2xl shadow-[#6c5ce7]/30'
                : 'border border-slate-200 bg-white'
            }`}
          >
            {p.destacado && (
              <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                Todo incluido
              </span>
            )}
            <h3 className="text-2xl font-extrabold">{p.nombre}</h3>
            <p className={`mt-1 text-sm ${p.destacado ? 'text-white/75' : 'text-slate-500'}`}>{p.lema}</p>
            <p className="mt-7 flex items-baseline gap-1.5">
              <span className="text-5xl font-extrabold tracking-tight">S/ {p.mensual.toFixed(2)}</span>
              <span className={`text-sm font-semibold ${p.destacado ? 'text-white/70' : 'text-slate-400'}`}>+ IGV /mes</span>
            </p>
            <p className={`mt-1.5 text-xs font-semibold ${p.destacado ? 'text-white/80' : 'text-slate-600'}`}>
              Primer pago: (S/ {p.mensual.toFixed(2)} + S/ {INSTALACION} de instalación, pago único) + IGV
            </p>

            <ul className="mt-8 flex-1 space-y-3.5">
              {p.incluye.map((i) => (
                <li key={i} className="flex gap-3 text-[15px]">
                  <Check size={18} className={`mt-0.5 shrink-0 ${p.destacado ? 'text-white' : 'text-[#6c5ce7]'}`} strokeWidth={2.6} />
                  <span className={p.destacado ? 'text-white/95' : 'text-slate-700'}>{i}</span>
                </li>
              ))}
            </ul>

            <a
              href={waEmpresarial(p.nombre)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group mt-9 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[15px] font-semibold transition-all hover:scale-[1.02] ${
                p.destacado ? 'bg-white text-[#4b3fbe]' : 'bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/25 hover:bg-[#5b4bd6]'
              }`}
            >
              Quiero {p.nombre}
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-slate-500">
        ¿Te falta un usuario o un local? Usuario adicional S/ 30 y sede adicional S/ 80 al mes + IGV.{' '}
        <Link href="/#comparacion" className="font-semibold text-[#6c5ce7] underline decoration-[#6c5ce7]/40 underline-offset-4">
          Comparar todos los planes
        </Link>
      </p>
    </div>
  </section>
);

export default EmPlanes;
