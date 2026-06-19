'use client';
import { CheckCircle2, XCircle, Globe, Mail, MessageCircle, Printer, Zap, Search, Rocket, Clock, Laptop, Award, Star, FileText, Package, BarChart3 } from "lucide-react";
import Image from "next/image";
import { fetchPublicPlansClient, mergePricingPlans, PRICING_BASE_PLANS, type PricingBasePlan } from "@/lib/public-pricing";
import { useEffect, useMemo, useState } from "react";

const BRAND = {
  name: "KREZKA",
  web: "www.krezka.com",
  email: "ventas@krezka.com",
  wa: "https://wa.me/51932332556"
};

type BrochurePlan = PricingBasePlan & {
  color: string;
  light: string;
  roles: boolean;
  compras: boolean;
  caja: boolean;
  reportes: boolean;
  delivery: boolean;
  api: boolean;
  soporte: string;
  marks: string[];
};

const PLAN_VISUALS: Record<PricingBasePlan["id"], Omit<BrochurePlan, keyof PricingBasePlan>> = {
  "plan-emprendedor": {
    color: "#6366F1",
    light: "#EEF2FF",
    roles: false,
    compras: false,
    caja: true,
    reportes: true,
    delivery: false,
    api: false,
    soporte: "Estándar",
    marks: ["Facturación ilimitada", "Certificado Digital incluido", "Gestión de productos", "Boletas y Facturas"],
  },
  "plan-negocio": {
    color: "#8B5CF6",
    light: "#F5F3FF",
    roles: true,
    compras: true,
    caja: true,
    reportes: true,
    delivery: false,
    api: false,
    soporte: "Prioritario",
    marks: ["Kardex avanzado", "Tienda virtual", "Banners y galería", "Control de cajas"],
  },
  "plan-corporativo": {
    color: "#10B981",
    light: "#F0FDF4",
    roles: true,
    compras: true,
    caja: true,
    reportes: true,
    delivery: true,
    api: true,
    soporte: "Prioritario",
    marks: ["Usuarios avanzados", "Tienda Virtual Pro", "Integraciones / API", "Asesor dedicado"],
  },
};

const toBrochurePlans = (basePlans: PricingBasePlan[]): BrochurePlan[] =>
  basePlans.map((plan) => ({
    ...plan,
    ...PLAN_VISUALS[plan.id],
  }));

const Tick = ({ ok, color }: { ok: boolean; color: string }) => ok
  ? <CheckCircle2 size={15} style={{ color }} />
  : <XCircle size={15} className="text-gray-200" />;

const Page = ({ children, dark = false, last = false }: { children: React.ReactNode; dark?: boolean; last?: boolean }) => (
  <div className={`w-full max-w-[210mm] md:w-[210mm] md:h-[297mm] mx-auto my-5 md:my-7 relative overflow-hidden shadow-2xl print:shadow-none print:my-0 ${!last ? 'break-after-page' : ''}  ${dark ? 'bg-[#080B14] text-white' : 'bg-white text-gray-900'}`} style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif" }}>
    {children}
  </div>
);

export default function BrochurePage() {
  const [pricingPlans, setPricingPlans] = useState<PricingBasePlan[]>(PRICING_BASE_PLANS);
  const plans = useMemo(() => toBrochurePlans(pricingPlans), [pricingPlans]);
  const minMonthly = useMemo(() => Math.min(...plans.map((plan) => plan.monthly)), [plans]);

  useEffect(() => {
    let active = true;
    const loadPlans = async () => {
      const remotePlans = await fetchPublicPlansClient();
      if (!active) return;
      setPricingPlans(mergePricingPlans(PRICING_BASE_PLANS, remotePlans));
    };
    void loadPlans();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="bg-[#ECEEF3] min-h-screen py-10 print:bg-white print:py-0">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');@media print{@page{size:A4;margin:0}body{margin:0;padding:0;background:white!important;-webkit-print-color-adjust:exact!important}  .pba{page-break-after:always;break-after:page}.ph{display:none!important} *{box-shadow:none!important;}}`}</style>

      <div className="fixed top-5 right-5 z-50 ph print:hidden">
        <button onClick={() => window.print()} className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-xl hover:scale-105 transition-transform text-sm font-semibold">
          <Printer size={15} /> Descargar PDF
        </button>
      </div>

      {/* PAGE 1 — COVER */}
      <Page dark>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-700/25 blur-3xl print:hidden" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-700/20 blur-3xl print:hidden" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.035]"><defs><pattern id="g1" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0L0 0 0 44" fill="none" stroke="white" strokeWidth="0.6" /></pattern></defs><rect width="100%" height="100%" fill="url(#g1)" /></svg>
        </div>
        <div className="relative z-10 flex flex-col h-full p-[14mm]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/krezka/krezkawhite.png"
                alt="Krezka Logo"
                width={250}
                height={50}
                className="h-18 w-auto object-contain"
              />
            </div>
            <span className="text-white/35 text-[11px] font-semibold uppercase tracking-[0.3em]">Brochure {new Date().getFullYear()}</span>
          </div>

          <div className="my-auto flex flex-col gap-7">
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-indigo-300 text-[11px] font-bold tracking-[0.18em] uppercase">Sistema de Gestión Empresarial</span>
            </div>
            <h1 className="text-[3.8rem] leading-none font-black text-white tracking-tight">
              DIGITALIZA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 print:hidden">TU NEGOCIO</span>
              <span className="hidden print:inline text-indigo-400">TU NEGOCIO</span>
            </h1>
            <p className="text-white/45 text-base font-light max-w-sm leading-relaxed">
              Facturación electrónica SUNAT, inventario, caja, tienda virtual y más — todo en una sola plataforma.
            </p>
            <div className="flex gap-8 pt-2">
              {[{ v: "3", l: "Planes" }, { v: "8+", l: "Módulos" }, { v: "24h", l: "Activación" }, { v: "100%", l: "Cloud" }].map(s => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-white">{s.v}</div>
                  <div className="text-white/35 text-[10px] uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex gap-8">
              {[{ l: "Web", v: BRAND.web }, { l: "Soporte", v: BRAND.email }].map(x => (
                <div key={x.l}>
                  <p className="text-white/30 text-[9px] uppercase tracking-widest">{x.l}</p>
                  <p className="text-white/65 text-sm font-semibold">{x.v}</p>
                </div>
              ))}
            </div>
            <div className="px-4 py-1.5 rounded-full bg-white/8 border border-white/10">
              <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase">Lima, Perú</span>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 2 — PLANES */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="flex items-end justify-between border-b border-gray-100 pb-5">
            <div>
              <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Krezka · Precios {new Date().getFullYear()}</p>
              <h2 className="text-[2rem] font-black text-gray-900 leading-tight">Planes de Software</h2>
              <p className="text-gray-400 text-sm mt-1">Sin contratos · Sin costos ocultos · Cancela cuando quieras</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <Star size={10} className="text-emerald-600 fill-emerald-600" />
              <span className="text-emerald-700 text-[11px] font-bold">Desde S/ {minMonthly.toFixed(2)} / mes</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 flex-1 mt-4">
            {plans.map(p => (
              <div key={p.id} className="relative rounded-[1.35rem] border bg-white p-3.5 shadow-sm flex flex-col" style={{ borderColor: p.popular ? p.color : '#E5E7EB', borderWidth: p.popular ? 2 : 1 }}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[8px] font-black text-white uppercase tracking-wider print:shadow-none" style={{ background: p.color }}>Recomendado</div>
                )}
                <div className="text-center">
                  {!p.popular && (
                    <span className="inline-flex rounded-full border border-gray-200 px-2.5 py-0.5 text-[7px] font-black uppercase tracking-wider text-gray-500">
                      {p.badge}
                    </span>
                  )}
                  {p.popular && <div className="h-[18px]" /> /* Spacer to keep alignment */}
                  <p className="mt-2 text-[8px] font-black uppercase tracking-widest" style={{ color: p.color }}>{p.docs}</p>
                  <h3 className="mt-0.5 text-[1.35rem] font-black leading-none text-gray-900">{p.name}</h3>
                  <div className="mt-3">
                    <div className="mb-1 flex items-center justify-center gap-1.5">
                      <span className="text-[9px] text-gray-400 line-through">S/ {p.regularMonthly.toFixed(2)}</span>
                      <span className="rounded-full border border-emerald-200 bg-emerald-50 px-1.5 py-0.5 text-[7px] font-black text-emerald-600">
                        {Math.round((1 - p.monthly / p.regularMonthly) * 100)}% OFF
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-[2rem] font-black leading-none text-gray-950">S/ {p.monthly.toFixed(2)}</span>
                      <span className="text-[10px] font-semibold text-gray-400">/ mes</span>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-2 py-1.5">
                    <span className="text-[8px] text-gray-500">Anual: </span>
                    <span className="text-[8px] font-black text-gray-800">S/ {p.annual.toFixed(2)}</span>
                    <span className="text-[8px] text-gray-400"> (S/ {(p.annual / 12).toFixed(2)}/mes)</span>
                    <span className="text-[8px] font-black text-amber-600"> · 2 meses gratis</span>
                  </div>
                  <p className="mt-3 text-[9px] leading-relaxed text-gray-500">{p.tagline}</p>
                </div>

                <div className="mt-3 rounded-xl border px-3 py-2.5" style={{ borderColor: p.color + "22", background: p.light }}>
                  <p className="text-[8px] font-black uppercase tracking-widest" style={{ color: p.color }}>Ideal para</p>
                  <p className="mt-1 text-[9px] font-bold leading-relaxed text-gray-700">{p.target}</p>
                </div>

                <div className="mt-3 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-3 py-2 text-center text-[9px] font-black text-gray-600">
                  {p.store}
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {p.modules.slice(0, 6).map((module) => (
                    <span key={module} className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[7.5px] font-black text-gray-600">
                      {module}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex-1 space-y-1.5">
                  {p.highlights.map(m => (
                    <div key={m} className="flex items-start gap-1.5 text-[9px] leading-snug text-gray-700">
                      <CheckCircle2 size={10} className="mt-0.5 shrink-0 text-emerald-500" />{m}
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-full px-3 py-2 text-center text-[9px] font-black text-white shadow-sm" style={{ background: p.color }}>
                  Elegir por WhatsApp
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-5 py-3">
            <p className="text-[10px] text-gray-600 font-medium">Ahora el brochure usa la misma propuesta comercial de Planes Pro: target, módulos, precio anual y beneficios completos.</p>
            <p className="text-[9px] text-gray-400 shrink-0 ml-4">Precios sin IGV (18%)</p>
          </div>
        </div>
      </Page>

      {/* PAGE 3 — RUBROS */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="border-b border-gray-100 pb-5">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Cobertura por rubro</p>
            <h2 className="text-[2rem] font-black text-gray-900 leading-tight">No es un POS genérico. Es Krezka para tu negocio.</h2>
            <p className="text-gray-400 text-sm mt-1">Activamos módulos y flujos según lo que realmente vendes: productos simples, variantes, lotes, series, delivery o multi-sede.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1">
            {[
              { title: "Bodegas y bazares", plan: "Emprendedor", desc: "Caja rápida, boletas, facturas, vuelto, clientes y stock básico.", color: "#6366F1", tags: ["POS", "SUNAT", "Caja"], bgImage: "/assets/brochure/bodegas.png" },
              { title: "Ropa y calzado", plan: "Negocio", desc: "Variantes por talla/color, tienda virtual, banners, galería y WhatsApp.", color: "#8B5CF6", tags: ["Variantes", "Ecommerce", "Stock"], bgImage: "/assets/brochure/ropa.png" },
              { title: "Ferreterías", plan: "Negocio", desc: "Precios mayoristas, combos, compras, proveedores y control por sede.", color: "#8B5CF6", tags: ["Mayorista", "Combos", "Compras"], bgImage: "/assets/brochure/ferreteria.png" },
              { title: "Cómputo y repuestos", plan: "Negocio", desc: "Ficha técnica, códigos de barra, series, garantías y servicios técnicos.", color: "#2563EB", tags: ["Series", "Garantía", "Servicios"], bgImage: "/assets/brochure/computo.png" },
              { title: "Farmacias y minimarkets", plan: "Corporativo", desc: "Lotes, vencimientos, FEFO/FIFO, traslados y control multi-sucursal.", color: "#10B981", tags: ["FEFO", "Lotes", "Vencimientos"], bgImage: "/assets/brochure/farmacias.png" },
              { title: "Distribuidoras B2B", plan: "Corporativo", desc: "Resellers, comisiones, rutas, ventas por canal y rentabilidad exacta.", color: "#059669", tags: ["B2B", "Comisiones", "SIRE"], bgImage: "/assets/brochure/distribuidores.png" },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-4 shadow-sm ${item.bgImage ? "border-indigo-100 bg-cover bg-center" : "border-gray-100 bg-white"}`}
                style={item.bgImage ? { backgroundImage: `url(${item.bgImage})` } : undefined}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black text-gray-900">{item.title}</h3>
                      <p className="mt-1 max-w-[68%] text-[11px] font-semibold leading-relaxed text-slate-600">{item.desc}</p>
                    </div>
                    <span className="shrink-0 rounded-full px-2.5 py-1 text-[8px] font-black uppercase text-white" style={{ background: item.color }}>{item.plan}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-gray-100 bg-gray-50 px-2 py-0.5 text-[9px] font-bold text-gray-500">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4">
            <p className="text-[11px] font-semibold leading-relaxed text-gray-700">
              La diferencia: Krezka no muestra ruido. Puedes controlar módulos por plan y por rubro para que cada empresa vea exactamente lo que necesita.
            </p>
          </div>
        </div>
      </Page>

      {/* PAGE 4 — DECISIÓN */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="border-b border-gray-100 pb-5">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Elige sin confundirte</p>
            <h2 className="text-[2rem] font-black text-gray-900">Un plan para cada etapa de crecimiento</h2>
            <p className="text-gray-400 text-sm mt-1">Empieza con lo necesario hoy y activa más herramientas cuando tu operación lo pida.</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {plans.map((plan) => (
              <div key={plan.id} className="rounded-2xl border p-4" style={{ borderColor: plan.color + "55", background: plan.light }}>
                <div className="text-[9px] font-black uppercase tracking-widest" style={{ color: plan.color }}>{plan.badge}</div>
                <h3 className="mt-1 text-lg font-black text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-[10px] leading-relaxed text-gray-600">{plan.target}</p>
                <div className="mt-3 rounded-xl bg-white/80 p-3">
                  <p className="text-[9px] font-black uppercase text-gray-400">Por qué te conviene</p>
                  <p className="mt-1 text-[10px] leading-relaxed text-gray-700">{plan.strategy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {[
              { title: "Facturación sin miedo", desc: "Emite documentos SUNAT, notas, guías y tickets con PDF listo para imprimir, enviar por email o WhatsApp.", icon: FileText, color: "#6366F1", image: "/assets/brochure/facturacion.png" },
              { title: "Inventario inteligente", desc: "Stock simple, variantes, combos, lotes, FEFO/FIFO, series y garantías según el rubro.", icon: Package, color: "#8B5CF6", image: "/assets/brochure/inventariointeligente.png" },
              { title: "Tienda virtual conectada", desc: "Catálogo web, banners, galería, reseñas, pagos Culqi, pedidos y atención por WhatsApp.", icon: Globe, color: "#2563EB", image: "/assets/brochure/tiendavirtual.png" },
              { title: "Control financiero real", desc: "Caja, compras, cuentas por cobrar, SIRE, rentabilidad por margen y dashboard financiero.", icon: BarChart3, color: "#10B981", image: "/assets/brochure/financieroreal.png" },
            ].map((item) => (
              <div 
                key={item.title} 
                className={`overflow-hidden rounded-2xl border shadow-sm p-5 ${"image" in item && item.image ? "border-indigo-100 bg-cover bg-center" : "border-gray-100 bg-white"}`}
                style={"image" in item && item.image ? { backgroundImage: `url(${item.image})` } : undefined}
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: item.color + "15", color: item.color }}>
                    <item.icon size={16} />
                  </div>
                  <h3 className="text-[13px] font-black text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-2 text-[10px] font-semibold leading-snug text-slate-600 max-w-[55%]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Page>

      {/* PAGE 5 — FLUJO DE VALOR */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="border-b border-gray-100 pb-5">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Del mostrador al crecimiento</p>
            <h2 className="text-[2rem] font-black text-gray-900 leading-tight">Todo lo que pasa después de vender también queda controlado</h2>
            <p className="text-gray-400 text-sm mt-1">Krezka conecta caja, SUNAT, stock, clientes, tienda virtual y finanzas para que el negocio deje de depender de hojas sueltas.</p>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {[
              { n: "01", title: "Vendes", desc: "POS, tienda virtual, nota de venta o comprobante.", color: "#6366F1" },
              { n: "02", title: "Emites", desc: "Boleta, factura, guía, PDF y envío automático.", color: "#8B5CF6" },
              { n: "03", title: "Descuentas", desc: "Stock por sede, variante, lote, serie o servicio.", color: "#2563EB" },
              { n: "04", title: "Comunicas", desc: "WhatsApp, email, reseñas y seguimiento al cliente.", color: "#EC4899" },
              { n: "05", title: "Decides", desc: "Caja, margen, SIRE, rentabilidad y dashboard.", color: "#10B981" },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl text-[10px] font-black text-white" style={{ background: step.color }}>{step.n}</div>
                <h3 className="mt-3 text-sm font-black text-gray-900">{step.title}</h3>
                <p className="mt-1 text-[10px] leading-relaxed text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {[
              { title: "Menos errores de caja", desc: "Apertura, cierre, cobros, vuelto, ventas rápidas y reportes diarios para saber qué pasó en cada turno.", icon: Zap, color: "#6366F1" },
              { title: "Stock que sí cuadra", desc: "Productos simples, variantes, combos, lotes, vencimientos, series, garantías y traslados según tu rubro.", icon: Package, color: "#8B5CF6" },
              { title: "Tienda que vende de verdad", desc: "Catálogo web, banners, galería, carrito, pedidos por WhatsApp, pagos Culqi y reseñas moderadas.", icon: Globe, color: "#2563EB" },
              { title: "Rentabilidad visible", desc: "Compras, gastos, margen, cuentas por cobrar, cuentas por pagar, SIRE y dashboard financiero.", icon: BarChart3, color: "#10B981" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: item.color }}>
                    <item.icon size={18} />
                  </div>
                  <h3 className="text-sm font-black text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4">
            <p className="text-[11px] font-semibold leading-relaxed text-gray-700">
              Resultado: el cliente no compra “un sistema”; compra tranquilidad para facturar, controlar inventario, vender online y crecer sin cambiar de plataforma.
            </p>
          </div>
        </div>
      </Page>

      {/* PAGE 6 — COMPARACIÓN BASE */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="border-b border-gray-100 pb-4">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Krezka · Comparación</p>
            <h2 className="text-[2rem] font-black text-gray-900">¿Qué incluye cada plan?</h2>
            <p className="text-gray-400 text-sm">Parte 1: base operativa, facturación, caja, tienda virtual y ventas.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid text-white text-[10px] font-bold" style={{ gridTemplateColumns: '1.85fr 1fr 1fr 1fr' }}>
              <div className="bg-[#080B14] px-4 py-3 rounded-tl-2xl">Funcionalidad</div>
              {plans.map(p => <div key={p.id} className="py-3 px-2 text-center text-[10px]" style={{ background: p.color }}>{p.name}</div>)}
            </div>
            {[
              { category: "Base del sistema" },
              { label: "Comprobantes/mes", vals: plans.map(p => p.docs) },
              { label: "Usuarios", vals: plans.map(p => p.usersLabel) },
              { label: "Sedes", vals: plans.map(p => p.sedesLabel) },
              { label: "Certificado Digital PSE", vals: [true, true, true] },
              { label: "Boletas, facturas, notas y guías", vals: [true, true, true] },
              { label: "POS básico y ventas rápidas", vals: [true, true, true] },
              { label: "Apertura/cierre de caja y vuelto", vals: [true, true, true] },
              { label: "Productos y servicios simples", vals: [true, true, true] },
              { label: "Clientes y proveedores", vals: [true, true, true] },
              { label: "Reporte diario Excel/PDF", vals: [true, true, true] },
              { category: "Tienda virtual y ventas" },
              { label: "Tienda virtual ecommerce", vals: [false, true, true] },
              { label: "Banners y galería web", vals: [false, true, true] },
              { label: "Variantes talla/color", vals: [false, true, true] },
              { label: "Combos, kits y mayoristas", vals: [false, true, true] },
              { label: "Cotizaciones y proformas", vals: [false, true, true] },
              { label: "WhatsApp y Email automático", vals: [false, true, true] },
              { label: "Pasarela de pagos Culqi", vals: [false, true, true] },
              { label: "Reviews y reseñas web", vals: [false, false, true] },
            ].map((row, i) => (
              "category" in row ? (
                <div key={row.category} className="bg-gray-50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
                  {row.category}
                </div>
              ) : (
                <div key={row.label} className={`grid items-center border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`} style={{ gridTemplateColumns: '1.85fr 1fr 1fr 1fr' }}>
                  <div className="px-4 py-2.5 text-[10px] font-semibold text-gray-700">{row.label}</div>
                  {row.vals.map((val, j) => (
                    <div key={j} className="flex items-center justify-center py-2.5">
                      {typeof val === 'boolean' ? <Tick ok={val} color={plans[j].color} /> : <span className="text-[9px] font-semibold text-gray-800">{val}</span>}
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>

          <div className="mt-auto flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-3">
            <MessageCircle size={18} className="text-indigo-600 shrink-0" />
            <p className="text-[11px] text-gray-600">Todos los planes incluyen comprobantes ilimitados. Negocio suma tienda virtual; Corporativo suma control avanzado.</p>
          </div>
        </div>
      </Page>

      {/* PAGE 7 — COMPARACIÓN AVANZADA */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="border-b border-gray-100 pb-4">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Krezka · Comparación avanzada</p>
            <h2 className="text-[2rem] font-black text-gray-900">Inventario, logística, finanzas y soporte</h2>
            <p className="text-gray-400 text-sm">Parte 2: módulos para negocios que crecen, operan por sedes o necesitan control financiero.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid text-white text-[10px] font-bold" style={{ gridTemplateColumns: '1.85fr 1fr 1fr 1fr' }}>
              <div className="bg-[#080B14] px-4 py-3 rounded-tl-2xl">Funcionalidad</div>
              {plans.map(p => <div key={p.id} className="py-3 px-2 text-center text-[10px]" style={{ background: p.color }}>{p.name}</div>)}
            </div>
            {[
              { category: "Inventario, compras y logística" },
              { label: "Kardex básico entradas/salidas", vals: [true, true, true] },
              { label: "Compras, gastos y cuentas por pagar", vals: [false, true, true] },
              { label: "Lotes básicos", vals: [false, true, true] },
              { label: "FEFO/FIFO y vencimientos", vals: [false, false, true] },
              { label: "Traslados entre sucursales", vals: [false, false, true] },
              { label: "Delivery/GPS tienda virtual", vals: [false, false, true] },
              { category: "Crecimiento, finanzas y soporte" },
              { label: "Distribuidores / resellers", vals: [false, false, true] },
              { label: "Comisiones y afiliados", vals: [false, false, true] },
              { label: "SIRE y contabilidad avanzada", vals: [false, false, true] },
              { label: "Dashboard financiero y rentabilidad", vals: [false, false, true] },
              { label: "Sistema de escritorio", vals: [false, false, true] },
              { label: "App móvil", vals: [false, false, true] },
              { label: "Soporte", vals: plans.map(p => p.soporte) },
            ].map((row, i) => (
              "category" in row ? (
                <div key={row.category} className="bg-gray-50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-gray-400">
                  {row.category}
                </div>
              ) : (
                <div key={row.label} className={`grid items-center border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`} style={{ gridTemplateColumns: '1.85fr 1fr 1fr 1fr' }}>
                  <div className="px-4 py-2.5 text-[10px] font-semibold text-gray-700">{row.label}</div>
                  {row.vals.map((val, j) => (
                    <div key={j} className="flex items-center justify-center py-2.5">
                      {typeof val === 'boolean' ? <Tick ok={val} color={plans[j].color} /> : <span className="text-[9px] font-semibold text-gray-800">{val}</span>}
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>

          <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-3">
            <MessageCircle size={18} className="text-indigo-600 shrink-0" />
            <p className="text-[11px] text-gray-600">¿Dudas sobre qué plan elegir? Escríbenos a <strong className="text-gray-900">{BRAND.email}</strong> o por WhatsApp — te asesoramos sin compromiso.</p>
          </div>
        </div>
      </Page>

      {/* PAGE 7 — CÓMO TRABAJAMOS */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-6">
          <div className="border-b border-gray-100 pb-5">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Proceso</p>
            <h2 className="text-[2rem] font-black text-gray-900">Cómo trabajamos</h2>
            <p className="text-gray-400 text-sm">Del primer contacto hasta tener tu negocio operando en horas.</p>
          </div>
          <div className="flex-1 flex flex-col justify-around">
            {[
              { Icon: Search, color: "#6366F1", step: "01", title: "Diagnóstico", time: "Día 1", desc: "Analizamos tu negocio, flujos y objetivos. Definimos el plan ideal antes de activar cualquier módulo." },
              { Icon: Laptop, color: "#8B5CF6", step: "02", title: "Configuración", time: "Día 1–2", desc: "Personalizamos el sistema con tus productos, precios y flujos de venta en menos de 24 horas." },
              { Icon: Rocket, color: "#EC4899", step: "03", title: "Activación y Capacitación", time: "Día 2–3", desc: "Tu equipo aprende a operar el sistema con sesiones en vivo guiadas por nuestros asesores." },
              { Icon: Zap, color: "#10B981", step: "04", title: "Soporte Continuo", time: "Continuo", desc: "Acceso directo a soporte por WhatsApp, actualizaciones automáticas y nuevas funciones cada mes." },
            ].map((s, i, arr) => (
              <div key={s.step} className="flex gap-5 items-start relative">
                {i < arr.length - 1 && <div className="absolute left-[1.55rem] top-[3.2rem] w-px h-[calc(100%+8px)] bg-gray-100 z-0" />}
                <div className="relative z-10 w-13 h-13 w-[3.25rem] h-[3.25rem] rounded-2xl flex flex-col items-center justify-center shrink-0 border-2" style={{ borderColor: s.color, background: s.color + '15' }}>
                  <s.Icon size={18} style={{ color: s.color }} />
                  <span className="text-[8px] font-black mt-0.5" style={{ color: s.color }}>{s.step}</span>
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-black text-gray-900">{s.title}</h3>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold border" style={{ borderColor: s.color + '40', color: s.color, background: s.color + '10' }}>
                      <Clock size={8} />{s.time}
                    </div>
                  </div>
                  <p className="text-gray-500 text-[12px] mt-1 leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3">
            <Award size={18} className="text-indigo-600 shrink-0" />
            <p className="text-[11px] text-gray-600"><strong className="text-gray-900">Activación garantizada en 24 horas</strong> — o te devolvemos el primer mes. Sin excepciones.</p>
          </div>
        </div>
      </Page>

      {/* PAGE 8 — CONTACTO (DARK) */}
      <Page dark last>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl print:hidden" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-indigo-600/15 blur-3xl print:hidden" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]"><defs><pattern id="g2" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0L0 0 0 44" fill="none" stroke="white" strokeWidth="0.6" /></pattern></defs><rect width="100%" height="100%" fill="url(#g2)" /></svg>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-[15mm] text-center gap-8">
          <div>
            <Image
              src="/assets/krezka/krezkawhite.png"
              alt="Krezka Logo"
              width={200}
              height={70}
              className="h-16 w-auto object-contain mx-auto mb-5 drop-shadow-2xl"
            />
            <h2 className="text-5xl font-black text-white leading-tight">
              Empieza <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 print:hidden">Hoy</span>
              <span className="hidden print:inline text-indigo-400">Hoy</span>
            </h2>
            <p className="text-white/45 text-base mt-3 max-w-xs mx-auto leading-relaxed">
              Digitaliza tu negocio en 24 horas. Sin contratos, sin permanencia.
            </p>
          </div>

          <div className="w-full max-w-sm space-y-3">
            {[
              { Icon: Globe, bg: "bg-indigo-600", label: "Sitio Web", value: BRAND.web },
              { Icon: Mail, bg: "bg-violet-600", label: "Correo", value: BRAND.email },
              { Icon: MessageCircle, bg: "bg-[#25D366]", label: "WhatsApp", value: "Escríbenos ahora" },
            ].map(({ Icon, bg, label, value }) => (
              <div key={label} className="flex items-center gap-4 bg-white/6 border border-white/10 rounded-2xl px-5 py-4">
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                  <Icon size={19} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/35 text-[9px] uppercase tracking-widest">{label}</p>
                  <p className="text-white font-bold text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-white/20 text-[10px] border-t border-white/10 pt-6 w-full">
            © {new Date().getFullYear()} Krezka. Todos los derechos reservados · Lima, Perú
          </div>
        </div>
      </Page>
    </div>
  );
}
