'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Share2, X } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const todas = [
  { label: 'Facebook', icon: 'mdi:facebook', color: '#1877F2', href: BRAND.socials.facebook },
  { label: 'Instagram', icon: 'mdi:instagram', color: '#E4405F', href: BRAND.socials.instagram },
  { label: 'TikTok', icon: 'ic:baseline-tiktok', color: '#000000', href: BRAND.socials.tiktok },
  { label: 'YouTube', icon: 'mdi:youtube', color: '#FF0000', href: BRAND.socials.youtube },
];

// En producción solo se muestran las redes con enlace; en local se ven todas para revisar el diseño.
const redes = process.env.NODE_ENV === 'development' ? todas : todas.filter((r) => r.href);

export function RedesFooter() {
  if (redes.length === 0) return null;

  return (
    <div className="mt-5">
      <p className="text-xs font-bold uppercase tracking-widest text-white/40">Síguenos</p>
      <div className="mt-3 flex items-center gap-2.5">
        {redes.map((r) => (
          <a
            key={r.label}
            href={r.href || '#'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={r.label}
            title={r.label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Icon icon={r.icon} width="20" height="20" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function RedesFlotante() {
  const [abierto, setAbierto] = useState(false);
  const contenedor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!abierto) return;

    const alClicFuera = (e: MouseEvent) => {
      if (!contenedor.current?.contains(e.target as Node)) setAbierto(false);
    };
    const alEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false);
    };

    document.addEventListener('mousedown', alClicFuera);
    document.addEventListener('keydown', alEscape);
    return () => {
      document.removeEventListener('mousedown', alClicFuera);
      document.removeEventListener('keydown', alEscape);
    };
  }, [abierto]);

  if (redes.length === 0) return null;

  return (
    <div ref={contenedor} className="relative flex justify-center">
      {abierto && (
        <div className="absolute right-0 bottom-full mb-3 flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
          {redes.map((r) => (
            <a
              key={r.label}
              href={r.href || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100"
            >
              <Icon icon={r.icon} width="22" height="22" style={{ color: r.color }} />
              {r.label}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-label={abierto ? 'Cerrar redes sociales' : 'Ver redes sociales'}
        title="Redes sociales"
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#6c5ce7] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#5b4bd5]"
      >
        {abierto ? <X size={22} /> : <Share2 size={22} />}
      </button>
    </div>
  );
}
