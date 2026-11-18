'use client';

import { Check } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import MetaPartnerBadge from '../MetaPartnerBadge';
import { IA_VENTAS_ADDON_TEXTO } from '@/lib/public-pricing';

// La IA de Ventas es un complemento: se suma a cualquier plan de Krezka. Se contrata por WhatsApp.
const waLink = (escala: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero sumar la IA de Ventas (${escala}) a mi plan de ${BRAND.name}. ¿Me ayudan a activarla?`
  )}`;

type Escala = {
  nombre: string;
  precio?: string;
  conv: string;
  desc: string;
  feats: string[];
  popular?: boolean;
  custom?: boolean;
};

const escalas: Escala[] = [
  {
    nombre: 'IA Start',
    precio: '149',
    conv: '500 leads / mes',
    desc: 'Para empezar a automatizar la atención por WhatsApp.',
    feats: [
      'Se suma a cualquier plan de Krezka',
      'Todas las funciones de la IA de Ventas',
      'Configuración inicial de tu asesor IA',
    ],
  },
  {
    nombre: 'IA Pro',
    precio: '249',
    conv: '1,500 leads / mes',
    desc: 'El equilibrio ideal para negocios activos.',
    feats: [
      'Se suma a cualquier plan de Krezka',
      'Todas las funciones de la IA de Ventas',
      'Configuración inicial de tu asesor IA',
      'Entrenamos la IA con tus documentos',
    ],
    popular: true,
  },
  {
    nombre: 'IA Scale',
    precio: '399',
    conv: '5,000 leads / mes',
    desc: 'Para negocios con alto volumen de consultas.',
    feats: [
      'Se suma a cualquier plan de Krezka',
      'Todas las funciones de la IA de Ventas',
      'Entrenamos la IA con tus documentos',
      'Revisión mensual de resultados',
    ],
  },
  {
    nombre: 'IA Personalizada',
    conv: 'Más de 5,000 leads / mes',
    desc: 'Para empresas con varias sedes o un volumen mayor.',
    feats: [
      'Se suma a cualquier plan de Krezka',
      'Todas las funciones de la IA de Ventas',
      'Volumen de leads a tu medida',
      'Asesor dedicado y varias sedes',
    ],
    custom: true,
  },
];

const funcionesIA = [
  'Atiende 24/7 por WhatsApp, Instagram y Messenger',
  'Responde con tu catálogo, stock y precios reales',
  'Cotiza con envío por zona y descuentos',
  'Envía fotos, notas de voz y tu brochure',
  'Aprende de los documentos que le subas',
  'Califica prospectos (BANT) y avisa los leads calientes',
  'Seguimiento automático: cotizaciones, recompra y reactivación',
  'Toma pedidos con link de pago y valida el voucher',
  'Bandeja de chats: pausa el bot y responde tú',
  'Embudo de ventas y paso de prospecto a cliente',
  'Panel de métricas y reporte diario por WhatsApp',
];

// En /ventas-ia las funciones ya tienen su propia sección: ahí se omite la lista.
const VentasIA = ({ conFunciones = true }: { conFunciones?: boolean }) => {
  return (
    <section id="ventas-ia" className="relative overflow-hidden bg-[#0f0a2e] py-16 md:py-24">
      {/* glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[#6c5ce7]/25 blur-[130px]" />
        <div className="absolute -bottom-40 left-0 h-[520px] w-[520px] rounded-full bg-emerald-500/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            IA de Ventas por WhatsApp
          </span>
          <h2 className="kz-reveal mt-5 text-3xl font-extrabold tracking-tight text-white md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Un asesor con IA que{' '}
            <span className="bg-gradient-to-r from-emerald-300 via-[#a99df8] to-[#8b7bf5] bg-clip-text text-transparent">
              atiende y vende 24/7
            </span>
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-white/60" style={{ animationDelay: '0.12s' }}>
            Responde con tu catálogo real, califica cada prospecto y te avisa los leads calientes —
            desde tu propio número y con tu marca.
          </p>
          <p className="kz-reveal mt-4 inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-[13px] font-semibold text-white/85" style={{ animationDelay: '0.15s' }}>
            Complemento aparte: se suma a cualquier plan y se ajusta a tus leads
          </p>
          <div className="kz-reveal mt-6 flex justify-center" style={{ animationDelay: '0.18s' }}>
            <MetaPartnerBadge fondo="oscuro" alto={42} />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {escalas.map((p, i) => (
            <div
              key={p.nombre}
              style={{ animationDelay: `${i * 0.08}s` }}
              className={`kz-reveal relative flex flex-col rounded-3xl p-6 ${
                p.popular
                  ? 'bg-white/[0.06] ring-2 ring-[#8b7bf5] shadow-2xl shadow-[#6c5ce7]/20'
                  : 'border border-white/10 bg-white/[0.03]'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] px-4 py-1 text-[10px] font-black uppercase tracking-wide text-white shadow-lg">
                  Más popular
                </span>
              )}

              <h3 className="text-lg font-bold text-white">{p.nombre}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                {p.precio ? (
                  <>
                    <span className="text-sm font-semibold text-white/60">S/</span>
                    <span className="text-4xl font-extrabold tracking-tight text-white">{p.precio}</span>
                    <span className="text-xs font-semibold text-white/50">+ IGV</span>
                    <span className="text-sm text-white/50">/mes</span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold tracking-tight text-white">A medida</span>
                )}
              </div>
              <p className={`mt-1.5 text-sm font-semibold ${p.custom ? 'text-[#a99df8]' : 'text-emerald-300'}`}>{p.conv}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">{p.desc}</p>

              <a
                href={waLink(`${p.nombre}, ${p.conv}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                  p.popular
                    ? 'bg-white text-[#2a1d6b] hover:bg-white/90'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {p.custom ? 'Cotizar por WhatsApp' : 'Sumarla a mi plan'}
              </a>

              <ul className="mt-6 space-y-2.5">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/75">
                    <Check size={16} className={`mt-0.5 shrink-0 ${p.custom ? 'text-[#a99df8]' : 'text-emerald-400'}`} strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="kz-reveal mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-center text-[13.5px] leading-relaxed text-white/75">
          {IA_VENTAS_ADDON_TEXTO}
        </p>

        {conFunciones && (
        <div className="kz-reveal mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Todas las escalas incluyen</p>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {funcionesIA.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/75">
                <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        )}

        <p className="mx-auto mt-8 max-w-3xl text-center text-[12.5px] leading-relaxed text-white/45">
          <span className="font-semibold text-white/70">Precio claro:</span> la IA de Ventas se paga aparte de tu plan de Krezka, que es
          el que trae la facturación SUNAT, el punto de venta y el inventario. Krezka no cobra por mensaje: tus mensajes de WhatsApp y tus anuncios los cobra Meta directo a tu cuenta,
          con 1,000 mensajes de servicio gratis al mes por número.
        </p>
      </div>
    </section>
  );
};

export default VentasIA;
