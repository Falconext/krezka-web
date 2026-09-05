'use client';

import { useEffect, useState } from 'react';
import HeroMockup from './HeroMockup';

/**
 * Panel del hero. Usa la captura real del panel administrativo de Krezka
 * (guardar en /public/assets/dashboard/panel-krezka.png). Mientras el archivo
 * no exista, muestra el mockup HTML — nunca una imagen rota. En cuanto se
 * agregue el archivo, aparece automáticamente.
 */
const PANEL_IMG = '/assets/dashboard/panel-krezka.png';

const HeroPanel = () => {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setOk(true);
    img.onerror = () => setOk(false);
    img.src = PANEL_IMG;
  }, []);

  if (!ok) return <HeroMockup />;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/25 bg-white shadow-[0_40px_80px_-24px_rgba(75,63,190,0.45)]">
      {/* Barra tipo navegador para dar contexto */}
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 shadow-inner">
          app.krezka.com/administrador
        </span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PANEL_IMG} alt="Panel administrativo de Krezka" className="block w-full" />
    </div>
  );
};

export default HeroPanel;
