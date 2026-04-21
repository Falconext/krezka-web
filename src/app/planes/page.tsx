import Link from "next/link";
import { CheckCircle2, Store, TrendingUp, WalletCards } from "lucide-react";

type CommercialPlan = {
    plan: string;
    comprobantesMes: number;
    precioMensual: number;
    precioAnual: number;
    utilidadMeta: number;
    tienda: "No incluida" | "Add-on opcional" | "Incluida";
    badge: string;
    modules: string[];
};

const commercialPlaybook: CommercialPlan[] = [
    {
        plan: "Start 100",
        comprobantesMes: 100,
        precioMensual: 15,
        precioAnual: 180,
        utilidadMeta: 10,
        tienda: "No incluida",
        badge: "Entrada",
        modules: ["Facturación electrónica", "1 usuario admin", "Catálogo simple", "Reporte básico"],
    },
    {
        plan: "Pyme 300",
        comprobantesMes: 300,
        precioMensual: 30,
        precioAnual: 360,
        utilidadMeta: 15,
        tienda: "No incluida",
        badge: "Crecimiento",
        modules: ["Clientes y proveedores", "Cotizaciones", "Reportes mensuales", "Exportación Excel/CSV"],
    },
    {
        plan: "Pro 500",
        comprobantesMes: 500,
        precioMensual: 45,
        precioAnual: 540,
        utilidadMeta: 20,
        tienda: "Add-on opcional",
        badge: "Upsell",
        modules: ["Inventario + kardex", "Compras/gastos", "Caja y movimientos", "Control operativo"],
    },
    {
        plan: "Negocio 600",
        comprobantesMes: 600,
        precioMensual: 55,
        precioAnual: 660,
        utilidadMeta: 25,
        tienda: "Incluida",
        badge: "Recomendado",
        modules: ["2 sedes", "Multiusuario + roles", "Dashboard rentabilidad", "Soporte prioritario"],
    },
    {
        plan: "Escala 800",
        comprobantesMes: 800,
        precioMensual: 70,
        precioAnual: 840,
        utilidadMeta: 30,
        tienda: "Incluida",
        badge: "Escalamiento",
        modules: ["Tienda online", "Pasarela de pago", "Delivery/recojo", "Campañas comerciales"],
    },
    {
        plan: "Avanzado 1200",
        comprobantesMes: 1200,
        precioMensual: 95,
        precioAnual: 1140,
        utilidadMeta: 35,
        tienda: "Incluida",
        badge: "Premium",
        modules: ["Más sedes y usuarios", "Integraciones/API", "Reportes avanzados", "Auditoría operativa"],
    },
];

const badgeStyle: Record<CommercialPlan["badge"], string> = {
    Entrada: "bg-slate-100 text-slate-700 border-slate-200",
    Crecimiento: "bg-blue-100 text-blue-700 border-blue-200",
    Upsell: "bg-amber-100 text-amber-700 border-amber-200",
    Recomendado: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Escalamiento: "bg-indigo-100 text-indigo-700 border-indigo-200",
    Premium: "bg-purple-100 text-purple-700 border-purple-200",
};

export default function PlanesPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-28 pb-16">
            <section className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                    <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        Falconext · Guía Comercial de Planes
                    </p>
                    <h1 className="mt-4 text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                        Planes recomendados para crecer con margen saludable
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-slate-600 max-w-3xl leading-relaxed">
                        Esta estructura está diseñada para que cada nivel tenga sentido comercial: empezar rápido,
                        escalar por necesidad real y mantener utilidad neta por plan de forma consistente.
                        En lugar de regalar todo al inicio, se usa una progresión clara de valor para sostener
                        rentabilidad y fomentar upgrades naturales.
                    </p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                                <WalletCards size={16} />
                                Margen por nivel
                            </div>
                            <p className="mt-1 text-xs text-slate-600">Objetivo: S/10, S/15, S/20, S/25, S/30, S/35.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                                <Store size={16} />
                                Estrategia de tienda
                            </div>
                            <p className="mt-1 text-xs text-slate-600">Sin tienda en entrada, add-on en Pro, incluida desde Negocio 600.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                                <TrendingUp size={16} />
                                Upsell ordenado
                            </div>
                            <p className="mt-1 text-xs text-slate-600">Cada plan agrega módulos concretos para justificar el salto de precio.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 md:px-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {commercialPlaybook.map((item) => (
                        <article key={item.plan} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">{item.plan}</h2>
                                    <p className="text-xs text-slate-500">{item.comprobantesMes} comprobantes por mes</p>
                                </div>
                                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold ${badgeStyle[item.badge]}`}>
                                    {item.badge}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                                    <p className="text-[11px] uppercase text-slate-500 font-semibold">Mensual</p>
                                    <p className="text-base font-bold text-slate-900">S/ {item.precioMensual.toFixed(2)}</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                                    <p className="text-[11px] uppercase text-slate-500 font-semibold">Anual</p>
                                    <p className="text-base font-bold text-slate-900">S/ {item.precioAnual.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                                    Utilidad meta: S/ {item.utilidadMeta.toFixed(2)}
                                </span>
                                <span
                                    className={`rounded-full px-2.5 py-1 font-semibold ${
                                        item.tienda === "Incluida"
                                            ? "bg-indigo-50 text-indigo-700"
                                            : item.tienda.includes("Add-on")
                                                ? "bg-amber-50 text-amber-700"
                                                : "bg-slate-100 text-slate-600"
                                    }`}
                                >
                                    Tienda: {item.tienda}
                                </span>
                            </div>

                            <ul className="space-y-1.5 text-sm text-slate-700">
                                {item.modules.map((module) => (
                                    <li key={module} className="flex items-start gap-2">
                                        <CheckCircle2 className="mt-0.5 text-emerald-500" size={15} />
                                        <span>{module}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 md:px-6 mt-8">
                <div className="rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-600 to-blue-700 p-6 md:p-8 text-white">
                    <h3 className="text-xl font-bold">¿Qué recomendamos para vender más sin perder margen?</h3>
                    <ul className="mt-4 space-y-2 text-sm text-indigo-100">
                        <li>• No incluir todo desde el plan inicial para mantener diferenciales claros de upgrade.</li>
                        <li>• Mantener tienda como add-on en Pro para abrir oportunidad de ticket medio mayor.</li>
                        <li>• Incluir tienda desde Negocio 600 para reforzar percepción premium.</li>
                        <li>• Comunicar módulos por valor de negocio (operación, control, crecimiento y escalamiento).</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link href="/cotizar" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition-colors">
                            Cotizar un plan
                        </Link>
                        <Link href="/resellers" className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                            Ver página para resellers
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
