import { Check, X } from 'lucide-react';
import { EMPRESARIAL, INSTALACION } from './datos';

// Lo que un negocio arma hoy con varias herramientas, frente a Krezka.
const separado = [
  { que: 'Tienda virtual tipo Shopify', costo: 'US$ 39 al mes + 2 % de cada venta' },
  { que: 'Facturación electrónica SUNAT', costo: 'S/ 39 a 70 al mes, en otro sistema' },
  { que: 'Punto de venta e inventario', costo: 'Otro sistema, o un Excel' },
  { que: 'Apps de cupones, puntos y gift cards', costo: 'Se pagan aparte, una por una' },
  { que: 'Pasar los pedidos de un sistema a otro', costo: 'Horas tuyas, todos los días' },
];

const krezka = [
  'Tienda virtual con promociones, cupones y carritos recuperados',
  'Boletas y facturas SUNAT desde la misma venta',
  'POS, inventario y stock sincronizados con la tienda',
  'Puntos, gift cards y precios mayoristas en el plan Plus',
  '0 % de comisión por venta',
];

const metricas = [
  { valor: '13', texto: 'funciones de tienda avanzada' },
  { valor: '0 %', texto: 'de comisión por venta' },
  { valor: '1', texto: 'solo sistema para todo' },
  { valor: `S/ ${INSTALACION}`, texto: 'de instalación + IGV, gratis en el plan anual' },
];

const EmUnSolo = () => (
  <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-500">Por qué cambiarte</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Deja de pagar cinco herramientas para vender
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
          La tienda en un lado, la facturación en otro y el inventario en un Excel. Con Krezka todo vive en un solo
          lugar y cada venta, de la tienda o del local, descuenta stock y emite su comprobante.
        </p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-9">
          <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Por separado</p>
          <ul className="mt-6 space-y-5">
            {separado.map((s) => (
              <li key={s.que} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                  <X size={14} strokeWidth={3} />
                </span>
                <span>
                  <span className="block font-semibold text-slate-800">{s.que}</span>
                  <span className="block text-sm text-slate-500">{s.costo}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6d5ce8] to-[#4b3fbe] p-7 text-white shadow-2xl shadow-[#6c5ce7]/30 md:p-9">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <p className="relative text-sm font-bold uppercase tracking-wider text-white/70">Con Krezka {EMPRESARIAL.nombre}</p>
          <p className="relative mt-3 text-4xl font-extrabold tracking-tight">
            S/ {EMPRESARIAL.mensual.toFixed(2)} <span className="text-base font-semibold text-white/70">+ IGV al mes</span>
          </p>
          <ul className="relative mt-6 space-y-4">
            {krezka.map((k) => (
              <li key={k} className="flex gap-3.5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#5b4bd6]">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="font-medium text-white/95">{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-slate-400">
        Costos de otras herramientas: precios publicados por cada proveedor en noviembre de 2026, referenciales.
      </p>

      <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
        {metricas.map((m) => (
          <div key={m.texto} className="text-center">
            <p className="text-4xl font-extrabold tracking-tight text-[#6c5ce7] md:text-5xl">{m.valor}</p>
            <p className="mt-2 text-sm font-medium text-slate-600">{m.texto}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EmUnSolo;
