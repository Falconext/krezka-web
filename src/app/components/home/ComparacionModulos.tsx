'use client';

import { useEffect, useState } from 'react';
import { Check, Minus } from 'lucide-react';
import { BRAND } from '@/lib/branding';
import {
  fetchPublicPlansClient,
  mergePricingPlans,
  PRICING_BASE_PLANS,
  type PricingBasePlan,
} from '@/lib/public-pricing';

type Capability = {
  guiaRemision: boolean;
  kardexDashboard: boolean;
  traslados: boolean;
  combos: boolean;
  lotesBarcodes: boolean;
  compras: boolean;
  caja: boolean;
  gastos: boolean;
  ticketera: boolean;
  cotizaciones: boolean;
  reservas: boolean;
  tienda: 'none' | 'addon' | 'included';
  banners: boolean;
  galeria: boolean;
  culqi: boolean;
  shalom: boolean;
  reportesGerenciales: boolean;
  sire: boolean;
  finanzas: boolean;
  produccion: boolean;
  roles: boolean;
  whatsapp: boolean;
  gemini: boolean;
  soporte: 'standard' | 'priority' | 'dedicated';
};

const CAP: Record<string, Capability> = {
  'plan-emprendedor': {
    guiaRemision: true, kardexDashboard: false, traslados: false, combos: true, lotesBarcodes: false,
    compras: true, caja: true, gastos: false, ticketera: false, cotizaciones: true, reservas: false,
    tienda: 'none', banners: false, galeria: false, culqi: false, shalom: false,
    reportesGerenciales: false, sire: false, finanzas: false, produccion: false, roles: true,
    whatsapp: false, gemini: false, soporte: 'standard',
  },
  'plan-negocio': {
    guiaRemision: true, kardexDashboard: true, traslados: true, combos: true, lotesBarcodes: true,
    compras: true, caja: true, gastos: true, ticketera: true, cotizaciones: true, reservas: false,
    tienda: 'included', banners: true, galeria: true, culqi: false, shalom: true,
    reportesGerenciales: true, sire: true, finanzas: false, produccion: false, roles: true,
    whatsapp: true, gemini: false, soporte: 'priority',
  },
  'plan-corporativo': {
    guiaRemision: true, kardexDashboard: true, traslados: true, combos: true, lotesBarcodes: true,
    compras: true, caja: true, gastos: true, ticketera: true, cotizaciones: true, reservas: true,
    tienda: 'included', banners: true, galeria: true, culqi: true, shalom: true,
    reportesGerenciales: true, sire: true, finanzas: true, produccion: true, roles: true,
    whatsapp: true, gemini: true, soporte: 'dedicated',
  },
};

type CellVal = string | boolean | { label: string; tone: 'green' | 'violet' | 'indigo' | 'slate' };

type Row = {
  key: string;
  label: string;
  category: string;
  description?: string;
  getValue: (plan: PricingBasePlan) => CellVal;
};

const CATEGORIES = ['Facturación', 'Inventario', 'Compras', 'Ventas', 'Tienda', 'Reportes', 'Avanzado', 'Soporte'];

const ROWS: Row[] = [
  { key: 'docs', label: 'Comprobantes electrónicos', category: 'Facturación', description: 'Boletas, facturas, notas de crédito/débito', getValue: (p) => p.docs },
  { key: 'informales', label: 'Comprobantes informales', category: 'Facturación', description: 'Nota de venta, nota de pedido, orden de trabajo, ticket, etc.', getValue: () => 'Incluido' },
  { key: 'guiaRemision', label: 'Guías de Remisión (GRE-R / GRE-T)', category: 'Facturación', getValue: (p) => CAP[p.id].guiaRemision },
  { key: 'kardex', label: 'Inventario / Kardex / Código de barras', category: 'Inventario', description: 'Productos, categorías, marcas, movimientos', getValue: () => 'Incluido' },
  { key: 'imgIA', label: 'Autogeneración de imágenes para productos', category: 'Inventario', description: 'IA que crea la imagen de tus productos', getValue: (p) => p.id !== 'plan-emprendedor' },
  { key: 'kardexDashboard', label: 'Dashboard de inventario', category: 'Inventario', getValue: (p) => CAP[p.id].kardexDashboard },
  { key: 'traslados', label: 'Traslados entre sedes', category: 'Inventario', getValue: (p) => CAP[p.id].traslados },
  { key: 'combos', label: 'Combos / Kits', category: 'Inventario', getValue: (p) => CAP[p.id].combos },
  { key: 'lotes', label: 'Lotes y vencimientos', category: 'Inventario', getValue: (p) => CAP[p.id].lotesBarcodes },
  { key: 'compras', label: 'Compras y proveedores', category: 'Compras', description: 'Órdenes de compra e ingreso de stock', getValue: (p) => CAP[p.id].compras },
  { key: 'caja', label: 'Caja (apertura / cierre / arqueo)', category: 'Ventas', getValue: (p) => CAP[p.id].caja },
  { key: 'cotizaciones', label: 'Cotizaciones', category: 'Ventas', getValue: (p) => CAP[p.id].cotizaciones },
  { key: 'reservas', label: 'Reservas', category: 'Ventas', getValue: (p) => CAP[p.id].reservas },
  {
    key: 'tienda', label: 'Tienda virtual (e-commerce)', category: 'Tienda', description: 'Landing comercial con slug propio',
    getValue: (p) => {
      const s = CAP[p.id].tienda;
      if (s === 'included') return { label: 'Incluida', tone: 'green' };
      if (s === 'addon') return { label: 'Add-on', tone: 'indigo' };
      return { label: 'No incluida', tone: 'slate' };
    },
  },
  { key: 'banners', label: 'Banners promocionales', category: 'Tienda', getValue: (p) => CAP[p.id].banners },
  { key: 'galeria', label: 'Galería de imágenes por producto', category: 'Tienda', getValue: (p) => CAP[p.id].galeria },
  { key: 'shalom', label: 'Shalom Pro (envío a despacho)', category: 'Tienda', getValue: (p) => CAP[p.id].shalom },
  { key: 'reportes', label: 'Dashboard gerencial (KPIs)', category: 'Reportes', description: 'Top productos, tendencias, ventas por período', getValue: (p) => CAP[p.id].reportesGerenciales },
  { key: 'sire', label: 'SIRE (Libros Ventas / Compras)', category: 'Reportes', description: 'Exportación a formato SUNAT', getValue: (p) => CAP[p.id].sire },
  { key: 'finanzas', label: 'Finanzas (P&L y análisis financiero)', category: 'Reportes', getValue: (p) => CAP[p.id].finanzas },
  { key: 'produccion', label: 'Producción y recetas', category: 'Avanzado', description: 'Órdenes de producción y bill of materials', getValue: (p) => CAP[p.id].produccion },
  { key: 'roles', label: 'Roles y permisos granulares', category: 'Avanzado', getValue: (p) => CAP[p.id].roles },
  { key: 'whatsapp', label: 'WhatsApp automático', category: 'Avanzado', description: 'Envío de comprobantes y notificaciones', getValue: (p) => CAP[p.id].whatsapp },
  { key: 'gemini', label: 'Gemini IA', category: 'Avanzado', getValue: (p) => CAP[p.id].gemini },
  { key: 'users', label: 'Usuarios incluidos', category: 'Soporte', getValue: (p) => p.usersLabel },
  { key: 'sedes', label: 'Sedes / sucursales', category: 'Soporte', getValue: (p) => p.sedesLabel },
  {
    key: 'soporte', label: 'Canal de soporte', category: 'Soporte',
    getValue: (p) => {
      const s = CAP[p.id].soporte;
      if (s === 'dedicated') return { label: 'Asesor dedicado', tone: 'violet' };
      if (s === 'priority') return { label: 'Prioritario', tone: 'indigo' };
      return { label: 'Chat estándar', tone: 'slate' };
    },
  },
];

const toneClass: Record<string, string> = {
  green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  violet: 'bg-[#f1eefe] text-[#6c5ce7] border-[#6c5ce7]/20',
  indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  slate: 'bg-slate-50 text-slate-500 border-slate-200',
};

const waLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  `Hola, quiero entender los planes de ${BRAND.name} y elegir el ideal para mi empresa.`
)}`;

const ComparacionModulos = () => {
  const [plans, setPlans] = useState<PricingBasePlan[]>(PRICING_BASE_PLANS);

  useEffect(() => {
    let active = true;
    (async () => {
      const remote = await fetchPublicPlansClient();
      if (active) setPlans(mergePricingPlans(PRICING_BASE_PLANS, remote));
    })();
    return () => {
      active = false;
    };
  }, []);

  const cols = `minmax(220px,1.6fr) repeat(${plans.length}, minmax(120px,1fr))`;

  const renderCell = (v: CellVal, popular: boolean) => {
    if (typeof v === 'boolean') {
      return v ? (
        <Check size={18} className="mx-auto text-[#6c5ce7]" strokeWidth={2.5} />
      ) : (
        <Minus size={16} className="mx-auto text-slate-300" strokeWidth={2.5} />
      );
    }
    if (typeof v === 'object') {
      return (
        <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${toneClass[v.tone]}`}>
          {v.label}
        </span>
      );
    }
    return <span className={`text-[13px] font-medium ${popular ? 'text-slate-900' : 'text-slate-600'}`}>{v}</span>;
  };

  return (
    <section id="comparacion" className="bg-[#f8f7fe] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#6c5ce7] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
            Comparación completa
          </span>
          <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
            Compara todos los módulos
          </h2>
          <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
            Todo lo que incluye cada plan, sin letra chica. Elige según tu etapa y tu rubro.
          </p>
        </div>

        <div className="kz-reveal mt-12 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="min-w-[720px]">
            {/* header */}
            <div className="sticky top-0 z-10 grid items-center gap-2 border-b border-slate-100 bg-white px-5 py-4" style={{ gridTemplateColumns: cols }}>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Módulo</span>
              {plans.map((p) => (
                <div key={p.id} className="text-center">
                  <div className={`inline-flex flex-col items-center rounded-xl px-3 py-1.5 ${p.popular ? 'bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7] text-white shadow-md shadow-[#6c5ce7]/25' : ''}`}>
                    <span className={`text-sm font-extrabold ${p.popular ? 'text-white' : 'text-slate-900'}`}>{p.name}</span>
                    <span className={`text-[11px] ${p.popular ? 'text-white/80' : 'text-slate-400'}`}>S/ {p.monthly.toFixed(2)}/mes</span>
                  </div>
                </div>
              ))}
            </div>

            {CATEGORIES.map((cat) => {
              const rows = ROWS.filter((r) => r.category === cat);
              if (!rows.length) return null;
              return (
                <div key={cat}>
                  <div className="border-b border-slate-100 bg-slate-50/70 px-5 py-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#6c5ce7]">{cat}</span>
                  </div>
                  {rows.map((row) => (
                    <div
                      key={row.key}
                      className="grid items-center gap-2 border-b border-slate-50 px-5 py-3 transition-colors hover:bg-[#f8f7fe]"
                      style={{ gridTemplateColumns: cols }}
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{row.label}</p>
                        {row.description && <p className="text-xs text-slate-400">{row.description}</p>}
                      </div>
                      {plans.map((p) => (
                        <div key={p.id + row.key} className={`text-center ${p.popular ? 'bg-[#f4f2fe]/60' : ''} rounded-lg py-1`}>
                          {renderCell(row.getValue(p), p.popular)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#planes"
            className="inline-flex items-center justify-center rounded-full bg-[#6c5ce7] px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[#5b4bd6]"
          >
            Ver planes y precios
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#6c5ce7]/30 bg-white px-7 py-3 text-sm font-semibold text-[#6c5ce7] transition-all hover:bg-[#f1eefe]"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparacionModulos;
