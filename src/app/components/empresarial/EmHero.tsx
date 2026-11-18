import Image, { type StaticImageData } from 'next/image';
import { ChevronRight, Percent, ReceiptText, ShoppingCart } from 'lucide-react';
import arcilla from '@/app/public/assets/plantillas/arcilla.webp';
import brasa from '@/app/public/assets/plantillas/brasa.webp';
import cacao from '@/app/public/assets/plantillas/cacao.webp';
import cumbre from '@/app/public/assets/plantillas/cumbre.webp';
import esmalte from '@/app/public/assets/plantillas/esmalte.webp';
import folio from '@/app/public/assets/plantillas/folio.webp';
import halo from '@/app/public/assets/plantillas/halo.webp';
import iris from '@/app/public/assets/plantillas/iris.webp';
import lumen from '@/app/public/assets/plantillas/lumen.webp';
import migas from '@/app/public/assets/plantillas/migas.webp';
import navaja from '@/app/public/assets/plantillas/navaja.webp';
import nori from '@/app/public/assets/plantillas/nori.webp';
import polar from '@/app/public/assets/plantillas/polar.webp';
import pulso from '@/app/public/assets/plantillas/pulso.webp';
import smash from '@/app/public/assets/plantillas/smash.webp';
import telar from '@/app/public/assets/plantillas/telar.webp';
import voltio from '@/app/public/assets/plantillas/voltio.webp';
import { EMPRESARIAL, waEmpresarial } from './datos';

// Capturas reales de plantillas de la tienda virtual (vista previa con la tienda demo),
// repartidas en columnas para el collage inclinado.
const fotos: StaticImageData[] = [
  migas, brasa, halo, cacao, voltio, polar, iris, smash, lumen, telar,
  esmalte, cumbre, pulso, arcilla, nori, folio, navaja,
];
// 6 por columna, corridas para que ninguna fila repita la foto de al lado.
const columnas = Array.from({ length: 5 }, (_, c) =>
  Array.from({ length: 6 }, (_, f) => fotos[(f * 5 + c * 3) % fotos.length]),
);
const desfase = ['0%', '-22%', '-8%', '-30%', '-14%'];

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

      {/* Collage inclinado con plantillas reales de la tienda virtual, con avisos flotantes */}
      <div className="kz-reveal-scale relative mx-auto mt-16 max-w-6xl" style={{ animationDelay: '0.24s' }}>
        <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#6c5ce7]/25 via-white to-emerald-300/25 blur-2xl" />
        <div
          className="relative h-[400px] overflow-hidden rounded-[2rem] border border-white bg-[#ecebf3] shadow-[0_50px_100px_-30px_rgba(75,63,190,0.45)] sm:h-[540px] lg:h-[620px]"
          role="img"
          aria-label="Plantillas de tienda virtual de Krezka: panadería, hamburguesas, cerámica, perfumes, ópticas, ferretería y más"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-[-35%] grid w-[230%] grid-cols-5 gap-3 sm:w-[150%] sm:gap-5"
            style={{ transform: 'translateX(-50%) rotate(-14deg)' }}
            aria-hidden="true"
          >
            {columnas.map((fotos, c) => (
              <div key={c} style={{ marginTop: desfase[c] }}>
                {/* Se repite la columna para que el desplazamiento infinito no tenga salto. */}
                <div className={`kz-columna ${c % 2 ? 'kz-columna-inversa' : ''}`}>
                  {[...fotos, ...fotos].map((foto, i) => (
                    <div key={i} className="pb-3 sm:pb-5">
                      <div className="overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_-18px_rgba(30,27,75,0.35)] ring-1 ring-black/5 sm:rounded-2xl">
                        <Image
                          src={foto}
                          alt=""
                          priority={i < 2}
                          quality={80}
                          sizes="(min-width: 1024px) 360px, 40vw"
                          className="h-auto w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Desvanece arriba y abajo para que las columnas entren y salgan suaves. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#ecebf3] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#ecebf3] to-transparent" />
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
