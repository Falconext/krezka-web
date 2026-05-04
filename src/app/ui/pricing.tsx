import { CheckCircle2, XCircle } from "lucide-react";

type ProPlan = {
    id: string;
    name: string;
    docs: string;
    monthly: number;
    annual: number;
    regularMonthly: number;
    utility: string;
    store: "Sin tienda virtual" | "Add-on opcional" | "Incluye tienda virtual";
    badge: string;
    tagline: string;
    highlights: string[];
};

const proPlans: ProPlan[] = [
    {
        id: "plan-19",
        name: "Principiante",
        docs: "100 comprobantes/mes",
        monthly: 19.9,
        annual: 238.8,
        regularMonthly: 29.9,
        utility: "Plan base para iniciar ordenadamente",
        store: "Incluye tienda virtual",
        badge: "Entrada",
        tagline: "Ideal para emprendedores que arrancan su operación digital.",
        highlights: ["Facturación electrónica", "30 días de acompañamiento", "Reportes básicos", "Onboarding guiado"],
    },
    {
        id: "plan-29",
        name: "Microempresa",
        docs: "300 comprobantes/mes",
        monthly: 29.9,
        annual: 358.8,
        regularMonthly: 39.9,
        utility: "Más control para operaciones en crecimiento",
        store: "Incluye tienda virtual",
        badge: "Crecimiento",
        tagline: "Para negocios con más ventas, clientes frecuentes y caja diaria.",
        highlights: ["Clientes y proveedores", "Cotizaciones", "Caja y movimientos", "1 asesor asignado"],
    },
    {
        id: "plan-49",
        name: "Emprendedor",
        docs: "700 comprobantes/mes",
        monthly: 49.9,
        annual: 598.8,
        regularMonthly: 69.9,
        utility: "Escalamiento comercial con mejor productividad",
        store: "Incluye tienda virtual",
        badge: "Upsell",
        tagline: "Equipos que necesitan compras, inventario y gestión por roles.",
        highlights: ["Inventario + kardex", "Compras y gastos", "Roles por usuario", "Reportes gerenciales"],
    },
    {
        id: "plan-99",
        name: "Corporativo",
        docs: "1200 comprobantes/mes",
        monthly: 99.9,
        annual: 1198.8,
        regularMonthly: 139.9,
        utility: "Máxima cobertura para equipos multi-sede",
        store: "Incluye tienda virtual",
        badge: "Recomendado",
        tagline: "Pensado para empresas con varias sedes y mayor volumen operativo.",
        highlights: ["Tienda virtual incluida", "Delivery y pasarela", "Integraciones/API", "Auditoría operativa"],
    },
];

type Capability = {
    users: string;
    sedes: string;
    roles: boolean;
    inventoryAdvanced: boolean;
    compras: boolean;
    caja: boolean;
    reportesGerenciales: boolean;
    tienda: "none" | "addon" | "included";
    delivery: boolean;
    integraciones: boolean;
    auditoria: boolean;
    soporte: "standard" | "priority";
    onboarding: string;
};

const proPlanCapabilities: Record<string, Capability> = {
    "plan-19": {
        users: "1 usuario",
        sedes: "1 sede",
        roles: false,
        inventoryAdvanced: true,
        compras: false,
        caja: false,
        reportesGerenciales: false,
        tienda: "included",
        delivery: false,
        integraciones: false,
        auditoria: false,
        soporte: "standard",
        onboarding: "Activación en 24h",
    },
    "plan-29": {
        users: "2 usuarios",
        sedes: "1 sede",
        roles: false,
        inventoryAdvanced: true,
        compras: false,
        caja: true,
        reportesGerenciales: false,
        tienda: "included",
        delivery: false,
        integraciones: false,
        auditoria: false,
        soporte: "standard",
        onboarding: "Activación en 24h",
    },
    "plan-49": {
        users: "4 usuarios",
        sedes: "2 sedes",
        roles: true,
        inventoryAdvanced: true,
        compras: true,
        caja: true,
        reportesGerenciales: true,
        tienda: "included",
        delivery: false,
        integraciones: false,
        auditoria: false,
        soporte: "priority",
        onboarding: "Asesor dedicado",
    },
    "plan-99": {
        users: "8 usuarios",
        sedes: "4 sedes",
        roles: true,
        inventoryAdvanced: true,
        compras: true,
        caja: true,
        reportesGerenciales: true,
        tienda: "included",
        delivery: true,
        integraciones: true,
        auditoria: true,
        soporte: "priority",
        onboarding: "Project manager dedicado",
    },
};
type BadgeVariant = "included" | "addon" | "none" | "priority" | "standard";

const badgeVariantClasses: Record<BadgeVariant, string> = {
    included: "border border-emerald-100 bg-emerald-50 text-emerald-700",
    addon: "border border-amber-100 bg-amber-50 text-amber-700",
    none: "border border-slate-200 bg-slate-50 text-slate-600",
    priority: "border border-indigo-100 bg-indigo-50 text-indigo-700",
    standard: "border border-slate-200 bg-white text-slate-700",
};

type ComparisonRow = {
    key: string;
    label: string;
    description?: string;
    kind: "text" | "boolean" | "badge";
    getValue: (plan: ProPlan) => string | boolean | { label: string; variant: BadgeVariant };
};

const comparisonRows: ComparisonRow[] = [
    {
        key: "docs",
        label: "Comprobantes/mes",
        description: "Boletas, Facturas y Guías",
        kind: "text",
        getValue: (plan) => plan.docs,
    },
    {
        key: "facturacion",
        label: "Facturación electrónica",
        description: "Toda la plataforma incluida",
        kind: "text",
        getValue: () => "Incluida",
    },
    {
        key: "documentos",
        label: "Documentos internos",
        kind: "text",
        getValue: () => "Ilimitados",
    },
    {
        key: "users",
        label: "Usuarios",
        kind: "text",
        getValue: (plan) => proPlanCapabilities[plan.id].users,
    },
    {
        key: "sedes",
        label: "Sedes",
        kind: "text",
        getValue: (plan) => proPlanCapabilities[plan.id].sedes,
    },
    {
        key: "roles",
        label: "Roles y permisos",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].roles,
    },
    {
        key: "inventory",
        label: "Inventario + Kardex",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].inventoryAdvanced,
    },
    {
        key: "compras",
        label: "Compras y gastos",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].compras,
    },
    {
        key: "caja",
        label: "Caja y movimientos",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].caja,
    },
    {
        key: "reportes",
        label: "Reportes gerenciales",
        description: "KPIs y dashboards",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].reportesGerenciales,
    },
    {
        key: "store",
        label: "Tienda virtual",
        description: "Landing comercial",
        kind: "badge",
        getValue: (plan) => {
            const status = proPlanCapabilities[plan.id].tienda;
            if (status === "included") return { label: "Incluida", variant: "included" };
            if (status === "addon") return { label: "Add-on disponible", variant: "addon" };
            return { label: "No incluida", variant: "none" };
        },
    },
    {
        key: "delivery",
        label: "Delivery y pasarela",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].delivery,
    },
    {
        key: "integraciones",
        label: "Integraciones / API",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].integraciones,
    },
    {
        key: "auditoria",
        label: "Auditoría operativa",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].auditoria,
    },
    {
        key: "soporte",
        label: "Soporte",
        description: "Acompañamiento",
        kind: "badge",
        getValue: (plan) => {
            const support = proPlanCapabilities[plan.id].soporte;
            return support === "priority"
                ? { label: "Prioritario", variant: "priority" }
                : { label: "Estándar", variant: "standard" };
        },
    },
    {
        key: "onboarding",
        label: "Onboarding",
        description: "Tiempo de activación",
        kind: "text",
        getValue: (plan) => proPlanCapabilities[plan.id].onboarding,
    },
];

const planWhatsappLink = (planName: string) =>
    `https://wa.me/51932332556?text=${encodeURIComponent(
        `Hola, quiero elegir el plan ${planName} de Falconext. ¿Me ayudan a activarlo?`
    )}`;

const generalWhatsappLink = `https://wa.me/51932332556?text=${encodeURIComponent(
    "Hola, quiero entender los Planes Pro de Falconext y elegir el ideal para mi empresa."
)}`;

const Pricing = ({ showComparison = true }: { showComparison?: boolean }) => {
    return (
        <section id="price" className="bg-transparent py-16">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 space-y-14">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="inline-flex items-center rounded-full bg-[#facc15]/10 px-4 py-1 text-xs md:text-sm text-[#eab308]">
                        Precio justo y transparente
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gray-900">
                        Planes Pro Falconext
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-gray-500">
                        Sin contratos forzosos, sin costos ocultos y todo el acompañamiento incluido. Elige el plan perfecto para comenzar, crecer o escalar tu empresa conservando tu utilidad.
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
                        <span className="text-lg">🏆</span>
                        El plan más accesible del mercado — desde S/19.90/mes
                    </div>
                    <a
                        href={generalWhatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center rounded-full bg-gradient-to-r from-[#3E2BC7] to-[#5A45D1] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-500/20"
                    >
                        Hablar con un asesor por WhatsApp
                    </a>
                    <div className="mt-6 flex flex-wrap justify-center gap-2 text-[13px] font-medium text-gray-700">
                        {[
                            "Facturación electrónica ilimitada",
                            "Documentos internos y envíos por correo/WhatsApp",
                            "Soporte y acompañamiento comercial",
                        ].map((pill) => (
                            <span key={pill} className="rounded-full border border-gray-200 bg-white px-4 py-1">
                                {pill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {proPlans.map((plan) => (
                        <article
                            key={plan.id}
                            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="text-xs uppercase text-gray-500">{plan.docs}</p>
                                    <h3 className="mt-1 text-2xl font-semibold text-gray-900">{plan.name}</h3>
                                </div>
                                <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
                                    {plan.badge}
                                </span>
                            </div>
                            <div className="mt-5 space-y-1">
                                <p className="text-xs uppercase text-gray-500">
                                    Precio regular: <span className="line-through font-semibold text-gray-700">S/ {plan.regularMonthly.toFixed(2)}</span> / mes
                                </p>
                                <p className="text-3xl font-bold text-gray-900">
                                    S/ {plan.monthly.toFixed(2)}
                                    <span className="ml-1 text-sm font-normal text-gray-500">/ mes</span>
                                    <span className="ml-2 text-[11px] uppercase tracking-wide text-gray-400 font-semibold">+ IGV</span>
                                </p>
                                <p className="text-xs font-semibold text-emerald-600">
                                    Ahorra S/ {(plan.regularMonthly - plan.monthly).toFixed(2)} con la promo vigente
                                </p>
                                <p className="text-xs text-gray-500">
                                    Plan anual: S/ {plan.annual.toFixed(2)} (S/ {(plan.annual / 12).toFixed(2)} al mes) + IGV
                                </p>
                                <p className="text-xs text-gray-500">Ideal para: {plan.tagline}</p>
                                <p className="text-xs font-medium text-emerald-600">{plan.utility}</p>
                            </div>
                            <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-600">
                                {plan.store}
                            </div>
                            <ul className="mt-5 space-y-2 text-sm text-gray-700">
                                {plan.highlights.map((item) => (
                                    <li key={item} className="flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-[#22c55e]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={planWhatsappLink(plan.name)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3E2BC7] to-[#5A45D1] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all hover:scale-[1.02] shadow-md shadow-indigo-500/10"
                            >
                                Elegir por WhatsApp
                            </a>
                        </article>
                    ))}
                </div>

                {showComparison ? (
                    <div className="overflow-x-auto">
                        <div className="min-w-[900px] rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                            <div
                                className="bg-[#1d4ed8] text-white text-sm font-semibold grid gap-2 px-4 py-3"
                                style={{ gridTemplateColumns: `repeat(${proPlans.length + 1}, minmax(160px, 1fr))` }}
                            >
                                <span>Comparación de Planes Pro</span>
                                {proPlans.map((plan) => (
                                    <span key={plan.id} className="text-center">{plan.name}</span>
                                ))}
                            </div>
                            <div className="bg-white text-gray-800">
                                {comparisonRows.map((row) => (
                                    <div
                                        key={row.key}
                                        className="grid items-center gap-2 px-4 py-4 border-b border-gray-100 hover:bg-gray-50"
                                        style={{ gridTemplateColumns: `repeat(${proPlans.length + 1}, minmax(160px, 1fr))` }}
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{row.label}</p>
                                            {row.description && (
                                                <p className="text-xs text-gray-500">{row.description}</p>
                                            )}
                                        </div>
                                        {proPlans.map((plan) => {
                                            const value = row.getValue(plan);
                                            if (row.kind === "boolean") {
                                                const enabled = Boolean(value);
                                                return (
                                                    <div key={plan.id + row.key} className="flex items-center justify-center">
                                                        {enabled ? (
                                                            <CheckCircle2 size={18} className="text-[#22c55e]" />
                                                        ) : (
                                                            <XCircle size={18} className="text-gray-300" />
                                                        )}
                                                    </div>
                                                );
                                            }
                                            if (row.kind === "badge" && typeof value === "object" && value !== null) {
                                                const badgeValue = value as { label: string; variant: BadgeVariant };
                                                return (
                                                    <div key={plan.id + row.key} className="flex items-center justify-center">
                                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeVariantClasses[badgeValue.variant]}`}>
                                                            {badgeValue.label}
                                                        </span>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <div key={plan.id + row.key} className="text-center text-sm font-medium text-gray-900">
                                                    {value as string}
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center mt-8">
                        <a
                            href="/sistemas"
                            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
                        >
                            Ver comparación detallada de módulos
                        </a>
                    </div>
                )}
            </div>
            {showComparison && (
                <p className="mt-6 text-center text-xs text-gray-400">
                    Todos los precios mostrados no incluyen IGV (18%).
                </p>
            )}
        </section>
    );
};

export default Pricing;