'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const footerLinks = [
  {
    title: 'POS SOLUCIONES',
    links: ['POS Todo en Uno', 'POS Portátil', 'POS Delivery', 'Software de Ventas', 'Gestión de Inventario', 'Facturación SUNAT'],
  },
  {
    title: 'HARDWARE',
    links: ['Impresoras Térmicas', 'Cajones de Dinero', 'Lectores de Código', 'Pantallas Touch', 'Combos Completos'],
  },
  {
    title: 'SOFTWARE',
    links: ['Facturación Electrónica', 'E-Commerce', 'Software a Medida', 'App Móvil', 'Integraciones API'],
  },
  {
    title: 'EMPRESA',
    links: ['Sobre Nosotros', 'Blog', 'Casos de Éxito', 'Trabaja con Nosotros'],
  },
  {
    title: 'SOPORTE',
    links: ['Centro de Ayuda', 'Contacto', 'WhatsApp Soporte', 'Términos de Uso', 'Política de Privacidad'],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0c0a1a] text-white">
      
      {/* Main Footer Body */}
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 pb-12 border-b border-white/10">

          {/* Left: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto brightness-200" />
              <span className="text-white font-black text-xl tracking-tight">{BRAND.name.toUpperCase()}</span>
            </Link>

            <p className="text-[#8b8fa8] text-[14px] leading-[1.7] max-w-[240px]">
              Soluciones POS, hardware y software a medida para impulsar el crecimiento de las PyMEs peruanas.
            </p>

            <Link
              href="/tienda"
              className="inline-flex items-center gap-3 self-start border border-white/30 hover:border-white text-white text-[14px] font-semibold px-5 py-3 rounded-full transition-all hover:bg-white/5 group"
            >
              Ver Tienda
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div>
              <p className="text-[#8b8fa8] text-[12px] font-semibold mb-3 uppercase tracking-widest">Síguenos</p>
              <div className="flex gap-3">
                {[
                  { Icon: Twitter, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Linkedin, href: '#' },
                  { Icon: Youtube, href: '#' },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 rounded-xl border border-white/15 hover:border-white/40 hover:bg-white/10 flex items-center justify-center transition-all"
                  >
                    <Icon size={15} className="text-[#8b8fa8]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h5 className="text-white text-[11px] font-bold tracking-[0.12em] uppercase mb-5">
                  {col.title}
                </h5>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-[#8b8fa8] hover:text-white text-[13px] leading-snug transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555870] text-[12px]">
            {BRAND.name} © {new Date().getFullYear()} | Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            {['Términos y Condiciones', 'Política de Privacidad', 'Libro de Reclamaciones', 'Política de Cookies'].map((item) => (
              <Link key={item} href="#" className="text-[#555870] hover:text-white text-[12px] transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

