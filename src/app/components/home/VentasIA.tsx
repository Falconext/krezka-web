'use client';

import { Check } from 'lucide-react';
import { BRAND } from '@/lib/branding';

// Start/Pro/Scale abren la prueba gratis en el sistema; Personalizado se conversa.
const registroLink = (clave: string) => `${BRAND.dashboardUrl}/registro?plan=${clave}`;

const waLink = (plan: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero el plan ${plan} (IA de Ventas) de ${BRAND.name}. ¿Me ayudan a activarlo?`
  )}`;

type Plan = {
  nombre: string;
  precio?: string;
  conv: string;
  desc: string;
  feats: string[];
  cta: string;
  popular?: boolean;
  custom?: boolean;
  clave?: 'start' | 'pro' | 'scale';
};

const planes: Plan[] = [
  {
    nombre: 'Ventas Start',
    clave: 'start',
    precio: '199',
    conv: '500 leads / mes',
    desc: 'Para empezar a automatizar la atención por WhatsApp.',
    feats: [
      'Facturación electrónica SUNAT incluida',
      'Todas las funciones de la IA de Ventas',
      'Configuración inicial de tu asesor IA',
    ],
    cta: 'Probar 7 días gratis',
  },
  {
    nombre: 'Ventas Pro',
    clave: 'pro',
    precio: '299',
    conv: '1,500 leads / mes',
    desc: 'El equilibrio ideal para negocios activos.',
    feats: [
      'Facturación electrónica SUNAT incluida',
      'Todas las funciones de la IA de Ventas',
      'Configuración inicial de tu asesor IA',
      'Entrenamos la IA con tus documentos',
    ],
    cta: 'Probar 7 días gratis',
    popular: true,
  },
  {
    nombre: 'Ventas Scale',
    clave: 'scale',
    precio: '499',
    conv: '5,000 leads / mes',
    desc: 'Para negocios con alto volumen de consultas.',
    feats: [
      'Facturación electrónica SUNAT incluida',
      'Todas las funciones de la IA de Ventas',
      'Entrenamos la IA con tus documentos',
      'Revisión mensual de resultados',
    ],
    cta: 'Probar 7 días gratis',
  },
  {
    nombre: 'Personalizado',
    conv: 'Más de 5,000 leads / mes',
    desc: 'Para empresas con varias sedes o un volumen mayor.',
    feats: [
      'Facturación electrónica SUNAT incluida',
      'Todas las funciones de la IA de Ventas',
      'Volumen de leads a tu medida',
      'Asesor dedicado y varias sedes',
    ],
    cta: 'Hablar con ventas',
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

const VentasIA = () => {
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
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {planes.map((p, i) => (
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
                    <span className="text-sm text-white/50">/mes</span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold tracking-tight text-white">A medida</span>
                )}
              </div>
              <p className={`mt-1.5 text-sm font-semibold ${p.custom ? 'text-[#a99df8]' : 'text-emerald-300'}`}>{p.conv}</p>
              <p className="mt-3 text-[13px] leading-relaxed text-white/55">{p.desc}</p>

              <a
                href={p.clave ? registroLink(p.clave) : waLink(p.nombre)}
                target={p.clave ? undefined : '_blank'}
                rel={p.clave ? undefined : 'noopener noreferrer'}
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                  p.popular
                    ? 'bg-white text-[#2a1d6b] hover:bg-white/90'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {p.cta}
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

        <div className="kz-reveal mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">Todos los planes incluyen</p>
          <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {funcionesIA.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-white/75">
                <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-[12.5px] leading-relaxed text-white/45">
          <span className="font-semibold text-white/70">Precio claro:</span> tu plan incluye la facturación electrónica SUNAT y el asesor con IA que
          atiende y responde 24/7, sin cargos por mensaje dentro de tu plan. Aparte —y solo si los usas— pagas directo a Meta
          tus anuncios y los avisos salientes que programes fuera de la conversación.
        </p>
      </div>
    </section>
  );
};

export default VentasIA;
