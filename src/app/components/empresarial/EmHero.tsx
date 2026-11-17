import Image from 'next/image';
import { ChevronRight, Percent, ReceiptText, ShoppingCart } from 'lucide-react';
import tienda from '@/app/public/assets/sistema/tour-tienda.webp';
import { EMPRESARIAL, waEmpresarial } from './datos';

// Lo que pasa en una tienda Krezka mientras el dueño atiende el local.
const avisos = [
  { Icon: ShoppingCart, texto: 'Carrito recuperado', sub: '+ S/ 189.00 por WhatsApp', pos: '-left-3 top-[22%] sm:-left-12', color: 'from-emerald-500 to-emerald-600', delay: '0s' },
  { Icon: Percent, texto: 'Promoción 2x1 aplicada', sub: 'Sin tocar el precio', pos: '-right-3 top-[8%] sm:-right-12', color: 'from-[#f97316] to-[#e11d48]', delay: '0.9s' },
  { Icon: ReceiptText, texto: 'Boleta enviada a SUNAT', sub: 'B001-2481 · aceptada', pos: '-right-3 bottom-[10%] sm:-right-10', color: 'from-[#7b6af2] to-[#5b4bd6]', delay: '1.8s' },
];

const EmHero = () => (
  <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ecebfd] via-[#f6f6fe] to-white" />
    <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#6c5ce7]/15 blur-[130px]" />

    <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
      <span className="kz-reveal inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
        <span className="rounded-full bg-[#6c5ce7] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Nuevo</span>
        Planes Empresarial y Empresarial Plus
      </span>
      <h1
        className="kz-reveal mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.6rem]"
        style={{ animationDelay: '0.06s' }}
      >
        Ya no necesitas Shopify ni otro sistema.{' '}
        <span className="bg-gradient-to-r from-[#7b6af2] to-[#5b4bd6] bg-clip-text text-transparent">Todo está en Krezka.</span>
      </h1>
      <p className="kz-reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg" style={{ animationDelay: '0.12s' }}>
        Tu tienda virtual al nivel de Shopify, el punto de venta, el inventario y la facturación SUNAT en un solo
        sistema. Promociones, cupones, carritos recuperados, puntos y precios mayoristas, sin apps aparte y sin
        comisión por venta.
      </p>

      <div className="kz-reveal mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row" style={{ animationDelay: '0.18s' }}>
        <a
          href="#planes-empresariales"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6c5ce7] px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-[#6c5ce7]/30 transition-all hover:scale-[1.03] hover:bg-[#5b4bd6] sm:w-auto"
        >
          Ver planes desde S/ {EMPRESARIAL.mensual.toFixed(2)} + IGV
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href={waEmpresarial(EMPRESARIAL.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/80 px-8 py-4 text-[15px] font-semibold text-slate-800 transition-all hover:bg-white sm:w-auto"
        >
          Pedir una demo
        </a>
      </div>

      {/* Tienda real de un cliente, con avisos flotantes */}
      <div className="kz-reveal-scale relative mx-auto mt-16 max-w-5xl" style={{ animationDelay: '0.24s' }}>
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#6c5ce7]/25 via-white to-emerald-300/25 blur-2xl" />
        <div className="overflow-hidden rounded-2xl border border-white bg-white text-left shadow-[0_50px_100px_-30px_rgba(75,63,190,0.45)]">
          <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-inner">
              tutienda.krezka.com
            </span>
          </div>
          <Image
            src={tienda}
            alt="Tienda virtual hecha con Krezka, con categorías, buscador, carrito y banners"
            priority
            quality={85}
            sizes="(min-width: 1024px) 1024px, 94vw"
            className="h-auto w-full"
          />
        </div>

        {avisos.map((a) => (
          <div key={a.texto} className={`absolute z-10 hidden sm:block ${a.pos}`}>
            <div
              className="kz-float-x flex items-center gap-3 rounded-2xl border border-white bg-white/95 py-2.5 pl-2.5 pr-4 text-left shadow-xl shadow-slate-400/25 backdrop-blur-md"
              style={{ animationDelay: a.delay }}
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br text-white ${a.color}`}>
                <a.Icon size={17} strokeWidth={2.4} />
              </span>
              <span>
                <span className="block text-[13px] font-bold leading-tight text-slate-900">{a.texto}</span>
                <span className="block text-[11.5px] text-slate-500">{a.sub}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EmHero;
