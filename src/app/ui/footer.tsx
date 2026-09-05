'use client';

import Image from 'next/image';
import { MessageCircle, Mail, ArrowRight, BookText } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const producto = [
  { label: 'Facturación SUNAT', href: '/#comparacion' },
  { label: 'Punto de Venta (POS)', href: '/#tour' },
  { label: 'Inventario / Kardex', href: '/#tour' },
  { label: 'Tienda Virtual', href: '/#tour' },
  { label: 'IA de Ventas', href: '/#ventas-ia' },
  { label: 'Envíos Shalom', href: '/#tour' },
];

const krezka = [
  { label: 'Cómo funciona', href: '/#tour' },
  { label: 'Precios', href: '/#planes' },
  { label: 'Comparación de módulos', href: '/#comparacion' },
  { label: 'Asesores', href: '/#asesores' },
  { label: 'Preguntas frecuentes', href: '/#faq' },
  { label: 'Contacto', href: '/#contacto' },
];

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero más información sobre ${BRAND.name}.`
)}`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="font-inter-tight relative overflow-hidden bg-[#0f0a2e] text-white">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-[#6c5ce7]/25 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/assets/krezka/krezkalogo.png" width={240} height={288} alt={BRAND.name} className="h-11 w-auto object-contain" />
              <span className="text-2xl font-extrabold tracking-tight text-white">{BRAND.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              La plataforma peruana para facturar ante SUNAT, vender con POS y tienda virtual, y atender por
              WhatsApp con inteligencia artificial. Todo en un solo lugar.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-[1.03] hover:bg-[#20bd5a]"
            >
              <MessageCircle size={16} />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Producto */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Producto</p>
            <ul className="mt-4 space-y-2.5">
              {producto.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Krezka */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Krezka</p>
            <ul className="mt-4 space-y-2.5">
              {krezka.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Contacto</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
                  <MessageCircle size={16} className="text-[#25D366]" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white">
                  <Mail size={16} className="text-[#a99df8]" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a href={BRAND.dashboardUrl} className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  Iniciar sesión
                  <ArrowRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="/libro-de-reclamaciones"
                  className="mt-1 flex items-center gap-2.5 rounded-xl border-2 border-white/20 bg-white/[0.04] px-3.5 py-2.5 transition-colors hover:border-red-400/60 hover:bg-white/[0.07]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-red-600 text-white">
                    <BookText size={16} />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-white">Libro de</span>
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-white">Reclamaciones</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {BRAND.legalName} · RUC {BRAND.ruc}. Hecho en el Perú 🇵🇪
          </p>
          <div className="flex items-center gap-5 text-xs text-white/50">
            <a href="/privacidad" className="transition-colors hover:text-white">
              Política de Privacidad
            </a>
            <span className="text-white/20">·</span>
            <a href={BRAND.website} className="transition-colors hover:text-white">
              {BRAND.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
