'use client';
import { CheckCircle2, XCircle, Globe, Mail, MessageCircle, Printer, Zap, Search, Rocket, Clock, Laptop, Award, Star } from "lucide-react";
import Image from "next/image";
import { BRAND as BRAND_GLOBAL } from "@/lib/branding";

const BRAND = {
  name: "KREZKA",
  web: "www.krezka.com",
  email: "ventas@krezka.com",
  wa: "https://wa.me/51932332556"
};

const plans = [
  { id: "p1", name: "Emprendedor", badge: "Entrada", tagline: "Formalización electrónica sin límites.", docs: "ILIMITADOS", monthly: 19.9, annual: 199.0, reg: 29.9, color: "#6366F1", light: "#EEF2FF", users: "1 usuario", sedes: "1 sede", roles: false, compras: false, caja: true, reportes: true, delivery: false, api: false, soporte: "Estándar", marks: ["Facturación ILIMITADA", "Certificado Digital Incluido", "Gestión de productos", "Boletas y Facturas"] },
  { id: "p2", name: "Negocio", badge: "Popular", tagline: "Control total de stock y ventas.", docs: "ILIMITADOS", monthly: 49.9, annual: 499.0, reg: 69.9, color: "#8B5CF6", light: "#F5F3FF", users: "3 usuarios", sedes: "Ilimitadas", roles: true, compras: true, caja: true, reportes: true, delivery: true, api: false, soporte: "Prioritario", popular: true, marks: ["Kardex avanzado (Stock)", "App Mobile Pro", "Catálogo PDF Automático", "Control de Cajas"] },
  { id: "p3", name: "Corporativo", badge: "Recomendado", tagline: "Para empresas multi-negocio.", docs: "ILIMITADOS", monthly: 89.9, annual: 899.0, reg: 129.9, color: "#10B981", light: "#F0FDF4", users: "Ilimitados", sedes: "Ilimitadas", roles: true, compras: true, caja: true, reportes: true, delivery: true, api: true, soporte: "Prioritario", marks: ["Multi-RUC (3 empresas)", "Tienda Virtual Pro", "Integraciones / API", "Asesor Dedicado"] },
] as const;

const Tick = ({ ok, color }: { ok: boolean; color: string }) => ok
  ? <CheckCircle2 size={15} style={{ color }} />
  : <XCircle size={15} className="text-gray-200" />;

const Page = ({ children, dark = false, last = false }: { children: React.ReactNode; dark?: boolean; last?: boolean }) => (
  <div className={`w-full max-w-[210mm] md:w-[210mm] md:h-[297mm] mx-auto my-5 md:my-7 relative overflow-hidden shadow-2xl print:shadow-none print:my-0 ${!last ? 'break-after-page' : ''}  ${dark ? 'bg-[#080B14] text-white' : 'bg-white text-gray-900'}`} style={{ fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif" }}>
    {children}
  </div>
);

export default function BrochurePage() {
  return (
    <div className="bg-[#ECEEF3] min-h-screen py-10 print:bg-white print:py-0">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');@media print{@page{size:A4;margin:0}body{margin:0;padding:0;background:white!important;-webkit-print-color-adjust:exact!important}  .pba{page-break-after:always;break-after:page}.ph{display:none!important}}`}</style>

      <div className="fixed top-5 right-5 z-50 ph print:hidden">
        <button onClick={() => window.print()} className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-xl hover:scale-105 transition-transform text-sm font-semibold">
          <Printer size={15} /> Descargar PDF
        </button>
      </div>

      {/* PAGE 1 — COVER */}
      <Page dark>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-700/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-700/20 blur-3xl" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400">TU NEGOCIO</span>
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
              <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Krezka · Precios 2025</p>
              <h2 className="text-[2rem] font-black text-gray-900 leading-tight">Planes de Software</h2>
              <p className="text-gray-400 text-sm mt-1">Sin contratos · Sin costos ocultos · Cancela cuando quieras</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <Star size={10} className="text-emerald-600 fill-emerald-600" />
              <span className="text-emerald-700 text-[11px] font-bold">Desde S/ 19.90 / mes</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 flex-1">
            {plans.map(p => (
              <div key={p.id} className="relative rounded-2xl border-2 overflow-hidden flex flex-col" style={{ borderColor: (p as any).popular ? p.color : '#E5E7EB', borderWidth: (p as any).popular ? 2 : 1 }}>
                {(p as any).popular && (
                  <div className="absolute top-0 right-0">
                    <div className="px-3 py-1 text-[9px] font-black text-white uppercase tracking-wider rounded-bl-xl" style={{ background: p.color }}>MÁS POPULAR</div>
                  </div>
                )}
                <div className="px-5 pt-5 pb-4" style={{ background: p.light }}>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{p.badge}</span>
                  <h3 className="text-lg font-black text-gray-900 mt-0.5">{p.name}</h3>
                  <p className="text-[10px] text-gray-500 mt-0.5">{p.tagline}</p>
                  <div className="flex items-baseline gap-1 mt-3">
                    <span className="text-2xl font-black" style={{ color: p.color }}>S/ {p.monthly.toFixed(2)}</span>
                    <span className="text-[10px] text-gray-400">/mes + IGV</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[9px] line-through text-gray-400">S/ {p.reg.toFixed(2)}</span>
                    <span className="text-[9px] font-bold text-emerald-600">Ahorra S/ {(p.reg - p.monthly).toFixed(2)}</span>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-0.5">Anual: S/ {p.annual.toFixed(2)}</p>
                </div>
                <div className="px-5 py-4 flex flex-col gap-2.5 flex-1 bg-white">
                  <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[10px] text-gray-600">
                    {[p.docs, p.users, p.sedes, `Soporte ${p.soporte}`].map(t => (
                      <div key={t} className="flex items-center gap-1.5">
                        <span className="font-bold" style={{ color: p.color }}>→</span>{t}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto space-y-1">
                    {p.marks.map(m => (
                      <div key={m} className="flex items-center gap-1.5 text-[10px] text-gray-700">
                        <CheckCircle2 size={10} style={{ color: p.color }} className="shrink-0" />{m}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-5 py-3">
            <p className="text-[10px] text-gray-600 font-medium">Tienda virtual incluida en todos los planes · Ticketera bluetooth disponible como add-on</p>
            <p className="text-[9px] text-gray-400 shrink-0 ml-4">Precios sin IGV (18%)</p>
          </div>
        </div>
      </Page>

      {/* PAGE 3 — COMPARACIÓN */}
      <Page>
        <div className="flex flex-col h-full p-[12mm] gap-5">
          <div className="border-b border-gray-100 pb-4">
            <p className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em] mb-1">Krezka · Comparación</p>
            <h2 className="text-[2rem] font-black text-gray-900">¿Qué incluye cada plan?</h2>
            <p className="text-gray-400 text-sm">Todos los planes incluyen facturación electrónica y documentos internos ilimitados.</p>
          </div>

          <div className="flex-1 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="grid text-white text-[11px] font-bold" style={{ gridTemplateColumns: '1.9fr 1fr 1fr 1fr' }}>
              <div className="bg-[#080B14] px-4 py-3 rounded-tl-2xl">Funcionalidad</div>
              {plans.map(p => <div key={p.id} className="py-3 px-2 text-center text-[10px]" style={{ background: p.color }}>{p.name}</div>)}
            </div>
            {[
              { label: "Comprobantes/mes", vals: plans.map(p => p.docs) },
              { label: "Usuarios", vals: plans.map(p => p.users) },
              { label: "Sedes", vals: plans.map(p => p.sedes) },
              { label: "Caja y movimientos", vals: plans.map(p => p.caja) },
              { label: "Compras y gastos", vals: plans.map(p => p.compras) },
              { label: "Roles y permisos", vals: plans.map(p => p.roles) },
              { label: "Reportes gerenciales", vals: plans.map(p => p.reportes) },
              { label: "Tienda virtual", vals: plans.map(() => true) },
              { label: "Delivery y pasarela", vals: plans.map(p => p.delivery) },
              { label: "Integraciones / API", vals: plans.map(p => p.api) },
              { label: "Soporte", vals: plans.map(p => p.soporte) },
            ].map((row, i) => (
              <div key={row.label} className={`grid items-center border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`} style={{ gridTemplateColumns: '1.9fr 1fr 1fr 1fr' }}>
                <div className="px-4 py-2.5 text-[11px] font-semibold text-gray-700">{row.label}</div>
                {row.vals.map((val, j) => (
                  <div key={j} className="flex items-center justify-center py-2.5">
                    {typeof val === 'boolean' ? <Tick ok={val} color={plans[j].color} /> : <span className="text-[10px] font-semibold text-gray-800">{val}</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-100 rounded-xl px-5 py-3">
            <MessageCircle size={18} className="text-indigo-600 shrink-0" />
            <p className="text-[11px] text-gray-600">¿Dudas sobre qué plan elegir? Escríbenos a <strong className="text-gray-900">{BRAND.email}</strong> o por WhatsApp — te asesoramos sin compromiso.</p>
          </div>
        </div>
      </Page>

      {/* PAGE 4 — CÓMO TRABAJAMOS */}
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

      {/* PAGE 5 — CONTACTO (DARK) */}
      <Page dark last>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-indigo-600/15 blur-3xl" />
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
              Empieza <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Hoy</span>
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
