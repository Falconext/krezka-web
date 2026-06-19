'use client';

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { BRAND } from "@/lib/branding";
import {
    fetchPublicPlansClient,
    mergePricingPlans,
    PRICING_BASE_PLANS,
    type PricingBasePlan,
} from "@/lib/public-pricing";

type ProPlan = PricingBasePlan;

type Capability = {
    users: string;
    sedes: string;
    // Facturación
    guiaRemision: boolean;
    // Inventario
    kardexDashboard: boolean;
    traslados: boolean;
    combos: boolean;
    lotesBarcodes: boolean;
    // Compras
    compras: boolean;
    // Ventas
    caja: boolean;
    gastos: boolean;
    ticketera: boolean;
    cotizaciones: boolean;
    reservas: boolean;
    // Tienda
    tienda: "none" | "addon" | "included";
    banners: boolean;
    galeria: boolean;
    culqi: boolean;
    deliveryGPS: boolean;
    // Reportes
    reportesGerenciales: boolean;
    sire: boolean;
    finanzas: boolean;
    // Producción & Avanzado
    produccion: boolean;
    comisiones: boolean;
    roles: boolean;
    whatsapp: boolean;
    gemini: boolean;
    soporte: "standard" | "priority" | "dedicated";
    onboarding: string;
};

const proPlanCapabilities: Record<string, Capability> = {
    "plan-emprendedor": {
        users: "2 usuarios",
        sedes: "1 sede",
        guiaRemision: false,
        kardexDashboard: false,
        traslados: false,
        combos: false,
        lotesBarcodes: false,
        compras: false,
        caja: true,
        gastos: false,
        ticketera: false,
        cotizaciones: false,
        reservas: false,
        tienda: "none",
        banners: false,
        galeria: false,
        culqi: false,
        deliveryGPS: false,
        reportesGerenciales: false,
        sire: false,
        finanzas: false,
        produccion: false,
        comisiones: false,
        roles: false,
        whatsapp: false,
        gemini: false,
        soporte: "standard",
        onboarding: "Activación en 24h",
    },
    "plan-negocio": {
        users: "5 usuarios",
        sedes: "2 sedes",
        guiaRemision: true,
        kardexDashboard: true,
        traslados: true,
        combos: true,
        lotesBarcodes: true,
        compras: true,
        caja: true,
        gastos: true,
        ticketera: true,
        cotizaciones: true,
        reservas: false,
        tienda: "included",
        banners: true,
        galeria: true,
        culqi: false,
        deliveryGPS: false,
        reportesGerenciales: true,
        sire: true,
        finanzas: false,
        produccion: false,
        comisiones: false,
        roles: true,
        whatsapp: true,
        gemini: false,
        soporte: "priority",
        onboarding: "Activación inmediata",
    },
    "plan-corporativo": {
        users: "15 usuarios",
        sedes: "Ilimitadas",
        guiaRemision: true,
        kardexDashboard: true,
        traslados: true,
        combos: true,
        lotesBarcodes: true,
        compras: true,
        caja: true,
        gastos: true,
        ticketera: true,
        cotizaciones: true,
        reservas: true,
        tienda: "included",
        banners: true,
        galeria: true,
        culqi: true,
        deliveryGPS: true,
        reportesGerenciales: true,
        sire: true,
        finanzas: true,
        produccion: true,
        comisiones: true,
        roles: true,
        whatsapp: true,
        gemini: true,
        soporte: "dedicated",
        onboarding: "Asesor dedicado",
    },
};

type BadgeVariant = "included" | "addon" | "none" | "dedicated" | "priority" | "standard";

const badgeVariantClasses: Record<BadgeVariant, string> = {
    included: "border border-emerald-100 bg-emerald-50 text-emerald-700",
    addon: "border border-amber-100 bg-amber-50 text-amber-700",
    none: "border border-slate-200 bg-slate-50 text-slate-500",
    dedicated: "border border-purple-100 bg-purple-50 text-purple-700",
    priority: "border border-indigo-100 bg-indigo-50 text-indigo-700",
    standard: "border border-slate-200 bg-white text-slate-700",
};

type ComparisonRow = {
    key: string;
    label: string;
    category?: string;
    description?: string;
    kind: "text" | "boolean" | "badge";
    getValue: (plan: ProPlan) => string | boolean | { label: string; variant: BadgeVariant };
};

const comparisonRows: ComparisonRow[] = [
    // ── Facturación ──────────────────────────────
    {
        key: "docs",
        label: "Comprobantes electrónicos",
        category: "Facturación",
        description: "Boletas, Facturas, Notas de crédito/débito",
        kind: "text",
        getValue: (plan) => plan.docs,
    },
    {
        key: "pse",
        label: "Certificado Digital PSE",
        category: "Facturación",
        kind: "text",
        getValue: () => "Incluido",
    },
    {
        key: "guiaRemision",
        label: "Guías de Remisión",
        category: "Facturación",
        description: "GRE-R y GRE-T para traslado de bienes",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].guiaRemision,
    },
    // ── Inventario ───────────────────────────────
    {
        key: "kardex",
        label: "Inventario / Kardex",
        category: "Inventario",
        description: "Productos, categorías, marcas, movimientos de stock",
        kind: "text",
        getValue: () => "Incluido",
    },
    {
        key: "kardexDashboard",
        label: "Dashboard de inventario",
        category: "Inventario",
        description: "KPIs de stock, alertas y análisis",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].kardexDashboard,
    },
    {
        key: "traslados",
        label: "Traslados entre sedes",
        category: "Inventario",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].traslados,
    },
    {
        key: "combos",
        label: "Combos / Kits y Modificadores",
        category: "Inventario",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].combos,
    },
    {
        key: "lotesBarcodes",
        label: "Lotes, vencimientos y código de barras",
        category: "Inventario",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].lotesBarcodes,
    },
    // ── Compras ──────────────────────────────────
    {
        key: "compras",
        label: "Compras y proveedores",
        category: "Compras",
        description: "Órdenes de compra e ingreso de stock",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].compras,
    },
    // ── Ventas & POS ─────────────────────────────
    {
        key: "caja",
        label: "Caja (apertura / cierre / arqueo)",
        category: "Ventas",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].caja,
    },
    {
        key: "gastos",
        label: "Control de gastos",
        category: "Ventas",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].gastos,
    },
    {
        key: "ticketera",
        label: "Ticketera / POS táctil",
        category: "Ventas",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].ticketera,
    },
    {
        key: "cotizaciones",
        label: "Cotizaciones",
        category: "Ventas",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].cotizaciones,
    },
    {
        key: "reservas",
        label: "Reservas",
        category: "Ventas",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].reservas,
    },
    // ── Tienda Virtual ───────────────────────────
    {
        key: "tienda",
        label: "Tienda virtual (e-commerce)",
        category: "Tienda",
        description: "Landing comercial con slug propio",
        kind: "badge",
        getValue: (plan) => {
            const s = proPlanCapabilities[plan.id].tienda;
            if (s === "included") return { label: "Incluida", variant: "included" };
            if (s === "addon") return { label: "Add-on disponible", variant: "addon" };
            return { label: "No incluida", variant: "none" };
        },
    },
    {
        key: "banners",
        label: "Banners promocionales",
        category: "Tienda",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].banners,
    },
    {
        key: "galeria",
        label: "Galería de imágenes por producto",
        category: "Tienda",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].galeria,
    },
    {
        key: "culqi",
        label: "Pago online con Culqi",
        category: "Tienda",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].culqi,
    },
    {
        key: "deliveryGPS",
        label: "Delivery con GPS",
        category: "Tienda",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].deliveryGPS,
    },
    // ── Reportes & Contabilidad ──────────────────
    {
        key: "reportesGerenciales",
        label: "Dashboard gerencial (KPIs)",
        category: "Reportes",
        description: "Top productos, tendencias, ventas por período",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].reportesGerenciales,
    },
    {
        key: "sire",
        label: "SIRE (Libros Ventas / Compras)",
        category: "Reportes",
        description: "Exportación a formato SUNAT",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].sire,
    },
    {
        key: "finanzas",
        label: "Finanzas (P&L y análisis financiero)",
        category: "Reportes",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].finanzas,
    },
    // ── Avanzado ─────────────────────────────────
    {
        key: "produccion",
        label: "Producción y Recetas",
        category: "Avanzado",
        description: "Órdenes de producción y bill of materials",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].produccion,
    },
    {
        key: "comisiones",
        label: "Comisiones por vendedor",
        category: "Avanzado",
        description: "% Venta y % Provisión configurables",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].comisiones,
    },
    {
        key: "roles",
        label: "Roles y permisos granulares",
        category: "Avanzado",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].roles,
    },
    {
        key: "whatsapp",
        label: "WhatsApp automático",
        category: "Avanzado",
        description: "Envío de comprobantes y notificaciones",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].whatsapp,
    },
    {
        key: "gemini",
        label: "Gemini IA",
        category: "Avanzado",
        description: "Clasificación e inteligencia artificial",
        kind: "boolean",
        getValue: (plan) => proPlanCapabilities[plan.id].gemini,
    },
    // ── Soporte ──────────────────────────────────
    {
        key: "users",
        label: "Usuarios incluidos",
        category: "Soporte",
        kind: "text",
        getValue: (plan) => plan.usersLabel,
    },
    {
        key: "sedes",
        label: "Sedes / sucursales",
        category: "Soporte",
        kind: "text",
        getValue: (plan) => plan.sedesLabel,
    },
    {
        key: "soporte",
        label: "Canal de soporte",
        category: "Soporte",
        kind: "badge",
        getValue: (plan) => {
            const s = proPlanCapabilities[plan.id].soporte;
            if (s === "dedicated") return { label: "Asesor dedicado", variant: "dedicated" };
            if (s === "priority") return { label: "Prioritario", variant: "priority" };
            return { label: "Chat estándar", variant: "standard" };
        },
    },
    {
        key: "onboarding",
        label: "Onboarding",
        category: "Soporte",
        kind: "text",
        getValue: (plan) => proPlanCapabilities[plan.id].onboarding,
    },
];

const CATEGORIES = [
    "Facturación",
    "Inventario",
    "Compras",
    "Ventas",
    "Tienda",
    "Reportes",
    "Avanzado",
    "Soporte",
];

const planWhatsappLink = (planName: string) =>
    `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
        `Hola, quiero elegir el plan ${planName} de ${BRAND.name}. ¿Me ayudan a activarlo?`
    )}`;

const generalWhatsappLink = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero entender los Planes Pro de ${BRAND.name} y elegir el ideal para mi empresa.`
)}`;

const industryFit = [
    {
        rubro: "Bodegas, bazares y emprendedores",
        plan: "Emprendedor",
        promise: "Empieza formal, vende rápido y emite SUNAT sin pagar de más.",
        bullets: ["POS básico", "Caja diaria", "Stock simple"],
    },
    {
        rubro: "Ropa, calzado y ventas por redes",
        plan: "Negocio",
        promise: "Vende online con variantes de talla/color, WhatsApp y tienda virtual.",
        bullets: ["Tienda virtual", "Variantes", "Banners"],
    },
    {
        rubro: "Ferreterías y minimarkets",
        plan: "Negocio",
        promise: "Controla compras, proveedores, combos, mayoristas y rotación diaria.",
        bullets: ["Compras", "Combos", "Mayoristas"],
    },
    {
        rubro: "Cómputo, repuestos y servicios técnicos",
        plan: "Negocio",
        promise: "Gestiona ficha técnica, series, garantías, servicios y catálogo profesional.",
        bullets: ["Series", "Garantías", "Servicios"],
    },
    {
        rubro: "Farmacias, cadenas y distribuidoras",
        plan: "Corporativo",
        promise: "Escala con multi-sede, FEFO/FIFO, vencimientos, comisiones y SIRE.",
        bullets: ["Multi-sede", "FEFO/FIFO", "SIRE"],
    },
    {
        rubro: "Empresas que quieren crecer",
        plan: "Corporativo",
        promise: "Une web, móvil, escritorio, finanzas y soporte dedicado en un solo sistema.",
        bullets: ["Mobile", "Desktop", "Finanzas"],
    },
];

const Pricing = ({ showComparison = true }: { showComparison?: boolean }) => {
    const [proPlans, setProPlans] = useState<PricingBasePlan[]>(PRICING_BASE_PLANS);

    useEffect(() => {
        let active = true;
        const load = async () => {
            const remotePlans = await fetchPublicPlansClient();
            if (!active) return;
            setProPlans(mergePricingPlans(PRICING_BASE_PLANS, remotePlans));
        };
        void load();
        return () => {
            active = false;
        };
    }, []);

    const minMonthly = useMemo(
        () => Math.min(...proPlans.map((plan) => plan.monthly)),
        [proPlans]
    );

    return (
        <section id="price" className="bg-transparent py-16">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 space-y-14">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="inline-flex items-center rounded-full bg-[#facc15]/10 px-4 py-1 text-xs md:text-sm text-[#eab308]">
                        Precio justo y transparente
                    </p>
                    <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-gray-900">
                        Planes Pro {BRAND.name}
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-gray-500">
                        Falconext se adapta a tu rubro: bodegas, ropa, ferreterías, minimarkets, cómputo, farmacias, distribuidores y empresas multi-sede.
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-700">
                        <span className="text-lg">🏆</span>
                        Comprobantes ILIMITADOS en todos los planes — desde S/ {minMonthly.toFixed(2)}/mes
                    </div>
                    <div className="mt-4">
                        <a
                            href={generalWhatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#3E2BC7] to-[#5A45D1] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-500/20"
                        >
                            Hablar con un asesor por WhatsApp
                        </a>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-2 text-[13px] font-medium text-gray-700">
                        {[
                            "Facturación electrónica ilimitada",
                            "Inventario por rubro",
                            "Tienda virtual + WhatsApp",
                            "Desktop + Mobile",
                        ].map((pill) => (
                            <span key={pill} className="rounded-full border border-gray-200 bg-white px-4 py-1">
                                {pill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Plan Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {proPlans.map((plan) => (
                        <article
                            key={plan.id}
                            className={`rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition-all ${
                                plan.badge === "Recomendado"
                                    ? "border-indigo-400 ring-2 ring-indigo-200"
                                    : "border-gray-200"
                            }`}
                        >
                            <div className="flex flex-col items-center justify-center text-center gap-2">
                                <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                                    plan.badge === "Recomendado"
                                        ? "border-indigo-200 bg-indigo-50 text-indigo-600"
                                        : "border-gray-200 text-gray-500"
                                }`}>
                                    {plan.badge}
                                </span>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase font-bold text-indigo-600 tracking-widest">{plan.docs}</p>
                                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                </div>
                            </div>
                            <div className="mt-5 space-y-3 text-center">
                                {/* Precio principal */}
                                <div>
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-sm text-gray-400 line-through">S/ {plan.regularMonthly.toFixed(2)}</span>
                                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                                            {Math.round((1 - plan.monthly / plan.regularMonthly) * 100)}% OFF
                                        </span>
                                    </div>
                                    <p className="text-4xl font-extrabold text-gray-900 leading-none">
                                        S/ {plan.monthly.toFixed(2)}
                                        <span className="text-base font-normal text-gray-400 ml-1">/ mes</span>
                                    </p>
                                </div>

                                {/* Plan anual */}
                                <div className="flex items-center justify-center gap-1.5 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                                    <span className="text-xs text-gray-500">Anual:</span>
                                    <span className="text-xs font-bold text-gray-800">S/ {plan.annual.toFixed(2)}</span>
                                    <span className="text-xs text-gray-400">(S/ {(plan.annual / 12).toFixed(2)}/mes)</span>
                                    <span className="text-[11px] font-bold text-amber-600">· 2 meses gratis</span>
                                </div>

                                {/* Descripción */}
                                <p className="text-xs text-gray-500 leading-relaxed">{plan.tagline}</p>
                            </div>
                            <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-3">
                                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500">Ideal para</p>
                                <p className="mt-1 text-xs font-semibold leading-relaxed text-gray-700">{plan.target}</p>
                            </div>
                            <div className="mt-4 rounded-2xl border border-dashed border-gray-200 bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-600 text-center">
                                {plan.store}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {plan.modules.slice(0, 6).map((module) => (
                                    <span key={module} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-gray-600">
                                        {module}
                                    </span>
                                ))}
                            </div>
                            <ul className="mt-5 space-y-2 text-sm text-gray-700">
                                {plan.highlights.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <CheckCircle2 size={16} className="text-[#22c55e] mt-0.5 shrink-0" />
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

                {/* Industry Fit */}
                <div className="rounded-[2rem] border border-gray-200 bg-white p-5 md:p-7 shadow-sm">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-500">Planes por rubro</p>
                            <h3 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
                                Falconext se siente hecho para tu negocio
                            </h3>
                            <p className="mt-2 max-w-2xl text-sm text-gray-500">
                                No todos necesitan los mismos módulos. Por eso el sistema activa lo útil según etapa, rubro y forma de vender.
                            </p>
                        </div>
                        <a
                            href={generalWhatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 hover:bg-indigo-100"
                        >
                            Recomiéndame un plan
                        </a>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                        {industryFit.map((item) => (
                            <div key={item.rubro} className="rounded-2xl border border-gray-100 bg-gray-50/70 p-4 transition-all hover:-translate-y-0.5 hover:border-indigo-100 hover:bg-white hover:shadow-md">
                                <div className="flex items-start justify-between gap-3">
                                    <h4 className="text-sm font-bold text-gray-900">{item.rubro}</h4>
                                    <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[10px] font-black uppercase text-indigo-600 shadow-sm">
                                        {item.plan}
                                    </span>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.promise}</p>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {item.bullets.map((bullet) => (
                                        <span key={bullet} className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-600">
                                            {bullet}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Table */}
                {showComparison ? (
                    <div className="overflow-x-auto">
                        <div className="min-w-[860px] rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
                            {/* Table header */}
                            <div
                                className="bg-[#1d4ed8] text-white text-sm font-semibold grid gap-2 px-4 py-3"
                                style={{ gridTemplateColumns: `2fr repeat(${proPlans.length}, 1fr)` }}
                            >
                                <span>Comparación completa de módulos</span>
                                {proPlans.map((plan) => (
                                    <span key={plan.id} className="text-center">{plan.name}</span>
                                ))}
                            </div>

                            <div className="bg-white text-gray-800">
                                {CATEGORIES.map((category) => {
                                    const rows = comparisonRows.filter((r) => r.category === category);
                                    return (
                                        <div key={category}>
                                            {/* Category header */}
                                            <div
                                                className="grid gap-2 px-4 py-2 bg-gray-50 border-b border-gray-100"
                                                style={{ gridTemplateColumns: `2fr repeat(${proPlans.length}, 1fr)` }}
                                            >
                                                <span className="text-xs font-black uppercase tracking-widest text-gray-400">
                                                    {category}
                                                </span>
                                            </div>

                                            {rows.map((row) => (
                                                <div
                                                    key={row.key}
                                                    className="grid items-center gap-2 px-4 py-3 border-b border-gray-100 hover:bg-gray-50"
                                                    style={{ gridTemplateColumns: `2fr repeat(${proPlans.length}, 1fr)` }}
                                                >
                                                    <div>
                                                        <p className="text-sm font-semibold text-gray-900">{row.label}</p>
                                                        {row.description && (
                                                            <p className="text-xs text-gray-400">{row.description}</p>
                                                        )}
                                                    </div>
                                                    {proPlans.map((plan) => {
                                                        const value = row.getValue(plan);
                                                        if (row.kind === "boolean") {
                                                            return (
                                                                <div key={plan.id + row.key} className="flex items-center justify-center">
                                                                    {value ? (
                                                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                                                    ) : (
                                                                        <XCircle size={18} className="text-gray-200" />
                                                                    )}
                                                                </div>
                                                            );
                                                        }
                                                        if (row.kind === "badge" && typeof value === "object" && value !== null) {
                                                            const b = value as { label: string; variant: BadgeVariant };
                                                            return (
                                                                <div key={plan.id + row.key} className="flex items-center justify-center">
                                                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeVariantClasses[b.variant]}`}>
                                                                        {b.label}
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
                                    );
                                })}
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
                    Precios finales. Sin costos ocultos.
                </p>
            )}
        </section>
    );
};

export default Pricing;
