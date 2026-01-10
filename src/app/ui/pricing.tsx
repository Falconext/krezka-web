import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import PurchaseModal from "./purchase-modal";

const Pricing = () => {
    // Forced Dark / Glassmorphism Mode
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");
    const [customerType, setCustomerType] = useState<"formal" | "informal">("formal");
    const [withVirtualStore, setWithVirtualStore] = useState<boolean>(false);

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<{
        id: string;
        name: string;
        price: number;
        billingPeriod: "monthly" | "annual";
    } | null>(null);

    const isAnnual = billingPeriod === "annual";

    type Feature = { label: string; included: boolean };
    type Plan = {
        id: string;
        name: string;
        highlight?: boolean;
        monthlyPrice: number;
        annualPrice: number;
        subtitleMonthly: string;
        subtitleAnnual: string;
        color: "orange" | "green" | "indigo";
        docsPerMonth?: number;
        includesPrinter?: boolean;
        tieneTienda?: boolean;
        tieneTicketera?: boolean;
        // Virtual store variants
        virtualMonthlyPrice?: number;
        virtualAnnualPrice?: number;
        virtualDocsPerMonth?: number;
        features: Feature[];
    };

    const formalPlans: Plan[] = [
        {
            id: "micro",
            name: "Micro",
            color: "orange",
            highlight: false,
            monthlyPrice: 35.0,
            annualPrice: 350,
            subtitleMonthly: "100% Digital",
            subtitleAnnual: "Ahorra con pago anual",
            docsPerMonth: 100,
            includesPrinter: false,
            features: [
                { label: "100 Comprobantes/mes", included: true },
                { label: "Notas de venta ilimitadas", included: true },
                { label: "Inventario", included: true },
                { label: "Reportes", included: true },
                { label: "Todas las demás funciones", included: true },
            ],
        },
        {
            id: "emprende",
            name: "Emprende",
            color: "orange",
            highlight: false,
            monthlyPrice: 42.0,
            annualPrice: 420,
            subtitleMonthly: "100% Digital",
            subtitleAnnual: "Ahorra con pago anual",
            docsPerMonth: 300,
            includesPrinter: false,
            features: [
                { label: "300 Comprobantes/mes", included: true },
                { label: "Notas de venta ilimitadas", included: true },
                { label: "Inventario", included: true },
                { label: "Reportes", included: true },
                { label: "Todas las demás funciones", included: true },
            ],
        },
        {
            id: "control",
            name: "Control",
            color: "green",
            highlight: true,
            monthlyPrice: 49.9,
            annualPrice: 500,
            subtitleMonthly: "El más popular",
            subtitleAnnual: "El más popular",
            docsPerMonth: 500,
            includesPrinter: true,
            features: [
                { label: "500 Comprobantes/mes", included: true },
                { label: "Notas de venta ilimitadas", included: true },
                { label: "Inventario", included: true },
                { label: "Reportes", included: true },
                { label: "Todas las demás funciones", included: true },
            ],
        },
        {
            id: "bacan",
            name: "Bacán",
            color: "indigo",
            highlight: false,
            monthlyPrice: 59.9,
            annualPrice: 600,
            subtitleMonthly: "Para quienes crecen",
            subtitleAnnual: "Para quienes crecen",
            docsPerMonth: 600,
            includesPrinter: true,
            features: [
                { label: "600 Comprobantes/mes", included: true },
                { label: "Notas de venta ilimitadas", included: true },
                { label: "Inventario", included: true },
                { label: "Reportes", included: true },
                { label: "Todas las demás funciones", included: true },
            ],
        },
        {
            id: "super",
            name: "Súper",
            color: "indigo",
            highlight: false,
            monthlyPrice: 79.9,
            annualPrice: 800,
            subtitleMonthly: "Rey de las ventas",
            subtitleAnnual: "Rey de las ventas",
            docsPerMonth: 800,
            includesPrinter: true,
            features: [
                { label: "800 Comprobantes/mes", included: true },
                { label: "Notas de venta ilimitadas", included: true },
                { label: "Inventario", included: true },
                { label: "Reportes", included: true },
                { label: "Todas las demás funciones", included: true },
            ],
        },
        {
            id: "mega",
            name: "Mega",
            color: "indigo",
            highlight: false,
            monthlyPrice: 99.9,
            annualPrice: 1000,
            subtitleMonthly: "Facturación a lo grande",
            subtitleAnnual: "Facturación gigante",
            docsPerMonth: 1200,
            includesPrinter: true,
            features: [
                { label: "1200 Comprobantes/mes", included: true },
                { label: "Notas de venta ilimitadas", included: true },
                { label: "Inventario", included: true },
                { label: "Reportes", included: true },
                { label: "Todas las demás funciones", included: true },
            ],
        },
    ];

    const informalPlans: Plan[] = [
        {
            id: "emprende-informal-free",
            name: "Emprende",
            color: "orange",
            highlight: false,
            monthlyPrice: 0,
            annualPrice: 0,
            subtitleMonthly: "Free",
            subtitleAnnual: "Free",
            features: [
                { label: "200 ventas/mes", included: true },
                { label: "1 usuario", included: true },
                { label: "PDF / WhatsApp", included: true },
                { label: "Inventario avanzado", included: false },
            ],
        },
        {
            id: "crecimiento-informal",
            name: "Crecimiento",
            color: "green",
            highlight: true,
            monthlyPrice: 9.9,
            annualPrice: 99,
            subtitleMonthly: "S/9.90 / mes",
            subtitleAnnual: "S/99 / año",
            features: [
                { label: "Ventas ilimitadas", included: true },
                { label: "Inventario básico", included: true },
                { label: "2 usuarios", included: true },
                { label: "Reportes simples", included: true },
            ],
        },
        {
            id: "pro-informal",
            name: "Pro",
            color: "indigo",
            highlight: false,
            monthlyPrice: 19.9,
            annualPrice: 199,
            subtitleMonthly: "S/19.90 / mes",
            subtitleAnnual: "S/199 / año",
            features: [
                { label: "Inventario avanzado", included: true },
                { label: "Control de fiados", included: true },
                { label: "5 usuarios", included: true },
                { label: "Integración impresora", included: true },
                { label: "Backup automático", included: true },
            ],
        },
    ];

    // State for plans
    const [formalPlansState, setFormalPlansState] = useState<Plan[]>(formalPlans);
    const [informalPlansState, setInformalPlansState] = useState<Plan[]>(informalPlans);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('https://api.falconext.pe/api/plan');
                if (!response.ok) throw new Error('Failed to fetch plans');

                const result = await response.json();
                const backendPlans: any[] = result.data || [];

                if (!Array.isArray(backendPlans)) return;

                // Normalize helper - buscar por nombre exacto
                const findPlan = (name: string) => backendPlans.find((bp: any) => bp.nombre.toLowerCase() === name.toLowerCase());

                // Mapeo de planes mensuales a sus versiones anuales en el API
                const annualPlanNames: Record<string, string> = {
                    'micro': 'Micro - Anual',
                    'emprende': 'Emprende - Anual',
                    'control': 'Control - Anual',
                    'bacan': 'BACAN - ANUAL',
                    'super': 'SUPER - ANUAL',
                    'mega': 'MEGA - ANUAL'
                };

                // Mapeo de planes a sus versiones VIRTUAL
                const virtualPlanNames: Record<string, string> = {
                    'micro': 'MICRO - VIRTUAL',
                    'emprende': 'Emprende - Virtual',
                    'control': 'Control - Virtual',
                    'bacan': 'BACAN - VIRTUAL',
                    'super': 'SUPER - VIRTUAL',
                    'mega': 'MEGA - VIRTUAL'
                };

                // Actualizar planes formales
                setFormalPlansState(prev => prev.map(p => {
                    let monthlyMatch;
                    // Mapeo exacto para planes mensuales
                    if (p.id === 'micro') monthlyMatch = findPlan('Micro');
                    else if (p.id === 'emprende') monthlyMatch = findPlan('Emprende');
                    else if (p.id === 'control') monthlyMatch = findPlan('Control');
                    else if (p.id === 'bacan') monthlyMatch = findPlan('BACAN');
                    else if (p.id === 'super') monthlyMatch = findPlan('SUPER');
                    else if (p.id === 'mega') monthlyMatch = findPlan('MEGA');

                    // Buscar plan anual específico
                    const annualMatch = annualPlanNames[p.id] ? findPlan(annualPlanNames[p.id]) : null;
                    // Buscar plan virtual
                    const virtualMatch = virtualPlanNames[p.id] ? findPlan(virtualPlanNames[p.id]) : null;

                    if (monthlyMatch) {
                        // Usar datos del plan anual si existe, sino del mensual
                        const dataSource = annualMatch || monthlyMatch;
                        return {
                            ...p,
                            monthlyPrice: parseFloat(monthlyMatch.costo),
                            annualPrice: annualMatch ? parseFloat(annualMatch.costo) : parseFloat(monthlyMatch.costo) * 10,
                            tieneTienda: dataSource.tieneTienda || false,
                            tieneTicketera: dataSource.tieneTicketera || false,
                            // Datos de plan virtual
                            virtualMonthlyPrice: virtualMatch ? parseFloat(virtualMatch.costo) : undefined,
                            virtualAnnualPrice: virtualMatch ? parseFloat(virtualMatch.costo) * 10 : undefined,
                            virtualDocsPerMonth: virtualMatch ? virtualMatch.maxComprobantes : undefined,
                            docsPerMonth: monthlyMatch.maxComprobantes || p.docsPerMonth
                        };
                    }
                    return p;
                }));

                // Actualizar planes informales
                setInformalPlansState(prev => prev.map(p => {
                    let match;
                    if (p.id === 'emprende-informal-free') match = findPlan('Plan Básico');
                    else if (p.id === 'crecimiento-informal') match = findPlan('Mi Básico Informal');
                    else if (p.id === 'pro-informal') match = findPlan('Pro Informal');

                    if (match) {
                        return {
                            ...p,
                            monthlyPrice: parseFloat(match.costo),
                            annualPrice: match.tipoFacturacion === 'ANUAL' ? parseFloat(match.costo) : parseFloat(match.costo) * 10,
                            tieneTienda: match.tieneTienda || false,
                            tieneTicketera: match.tieneTicketera || false
                        };
                    }
                    return p;
                }));

            } catch (error) {
                console.error("Error fetching plans:", error);
            }
        };

        fetchPlans();
    }, []);

    const plans: Plan[] = customerType === "formal" ? formalPlansState : informalPlansState;

    const priceFor = (plan: Plan) => {
        if (withVirtualStore && customerType === 'formal' && !isAnnual) {
            // Solo mensual tiene precio diferente para tienda virtual
            if (plan.virtualMonthlyPrice) return plan.virtualMonthlyPrice;
        }
        // Anual con tienda virtual = mismo precio (ya incluido)
        return isAnnual ? plan.annualPrice : plan.monthlyPrice;
    };

    const docsPerMonthFor = (plan: Plan) => {
        if (withVirtualStore && customerType === 'formal' && plan.virtualDocsPerMonth) {
            return plan.virtualDocsPerMonth;
        }
        return plan.docsPerMonth;
    };

    // Ticketera solo está incluida en planes anuales
    const tieneTicketeraFor = (plan: Plan) => {
        if (!isAnnual) return false; // Mensual nunca incluye ticketera
        return plan.tieneTicketera || false;
    };

    const subtitleFor = (plan: Plan) => (isAnnual ? plan.subtitleAnnual : plan.subtitleMonthly);

    const savingsFor = (plan: Plan) => {
        const base = plan.monthlyPrice * 12 - plan.annualPrice;
        return Math.max(0, base);
    };

    const monthlyOriginalFor = (plan: Plan) => {
        return plan.monthlyPrice;
    };

    return (
        <section
            id="price"
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mt-10">
                    <p className="inline-flex items-center rounded-full bg-[#facc15]/10 px-4 py-1 text-xs md:text-sm text-[#eab308]">
                        Opciones de precios
                    </p>
                    <h2
                        className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white transition-colors"
                    >
                        Planes flexibles para cada tipo de negocio
                    </h2>
                    <p
                        className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 transition-colors"
                    >
                        Escoje el plan perfecto para comenzar, crecer o escalar tu empresa sin complicaciones.
                    </p>
                </div>

                <div className="mt-3 flex justify-center">
                    <span className="inline-flex items-center rounded-full bg-[#10b981]/10 px-3 py-1 text-xs text-[#059669]">
                        Cuota de activación: S/0
                    </span>
                </div>

                {/* Toggles row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:items-start lg:items-center lg:justify-between mt-10 justify-center">

                    <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md transition-colors">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${customerType === "formal" ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm font-medium" : "text-gray-500 dark:text-gray-400"}`}
                            onClick={() => setCustomerType("formal")}
                        >
                            Empresa formal
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${customerType === "informal" ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm font-medium" : "text-gray-500 dark:text-gray-400"}`}
                            onClick={() => setCustomerType("informal")}
                        >
                            Emprendedor informal
                        </button>
                    </div>

                    <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md transition-colors">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${!isAnnual ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}
                            onClick={() => setBillingPeriod("monthly")}
                        >
                            Mensual
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${isAnnual ? "bg-[#22c55e]/20 text-[#16a34a] dark:text-[#22c55e]" : "text-gray-500 dark:text-gray-400"}`}
                            onClick={() => setBillingPeriod("annual")}
                        >
                            Anual
                        </button>
                    </div>

                    {customerType === "formal" && (
                        <div className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md transition-colors">
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-full transition-all ${!withVirtualStore ? "bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm" : "text-gray-500 dark:text-gray-400"}`}
                                onClick={() => setWithVirtualStore(false)}
                            >
                                Sin Tienda
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-full transition-all ${withVirtualStore ? "bg-[#3b82f6]/20 text-[#2563eb] dark:text-[#60a5fa]" : "text-gray-500 dark:text-gray-400"}`}
                                onClick={() => setWithVirtualStore(true)}
                            >
                                Con Tienda Virtual
                            </button>
                        </div>
                    )}

                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col rounded-3xl border px-6 pt-8 pb-6 transition-all duration-300
                                ${plan.highlight
                                    ? "bg-white dark:bg-white/10 border-[#22c55e] dark:border-white/20 shadow-xl dark:shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-xl"
                                    : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/5 shadow-lg backdrop-blur-md hover:bg-gray-50 dark:hover:bg-white/10"
                                }
                            `}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 right-6 rounded-full bg-[#22c55e] px-3 py-1 text-xs font-medium text-[#ffffff] dark:text-[#052e16] shadow-lg">Popular</span>
                            )}
                            {isAnnual && savingsFor(plan) > 0 && (
                                <span className="absolute -top-3 z-[10] left-6 rounded-full bg-[#22c55e]/10 dark:bg-[#22c55e]/20 border border-[#22c55e]/30 px-3 py-1 text-xs text-[#16a34a] dark:text-[#4ade80]">
                                    Ahorro: S/ {savingsFor(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                            )}
                            <div className="mb-6 flex items-center justify-between">
                                <div className={`inline-flex items-center justify-center rounded-full p-2 bg-gray-100 dark:bg-white/5`}>
                                    <span className={`h-2 w-2 rounded-full ${plan.color === "orange" ? "bg-[#f97316]" : plan.color === "green" ? "bg-[#22c55e]" : "bg-[#6366f1]"}`} />
                                </div>
                                <span className="rounded-full border border-gray-200 dark:border-white/10 px-3 py-1 text-xs text-gray-500 dark:text-gray-300">
                                    {plan.name}
                                </span>
                            </div>
                            <div className="mb-6">
                                <p className="text-3xl font-semibold text-gray-900 dark:text-white transition-colors">
                                    S/ {priceFor(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    <span className="ml-1 text-sm font-normal text-gray-500 dark:text-gray-400">{isAnnual ? "/ anual" : "/ mes"}</span>
                                </p>
                                {isAnnual && (
                                    <div className="mt-1 space-y-0.5">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">S/ {(priceFor(plan) / 12).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mes</p>
                                        <p className="text-xs text-gray-400 dark:text-gray-600 line-through">S/ {monthlyOriginalFor(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mes</p>
                                    </div>
                                )}
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitleFor(plan)}</p>
                            </div>
                            <div className="mb-6 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                            <div className="space-y-3 text-sm">
                                {plan.features.map((f, idx) => (
                                    <p key={idx} className="flex items-center gap-2">
                                        {f.included ? (
                                            <CheckCircle2 size={16} className="text-[#22c55e]" />
                                        ) : (
                                            <XCircle size={16} className="text-gray-400 dark:text-gray-600" />
                                        )}
                                        <span className={`${f.included ? "text-gray-700 dark:text-gray-300" : "text-gray-400 dark:text-gray-600 line-through"}`}>{f.label}</span>
                                    </p>
                                ))}
                                {/* Ticketera feature */}
                                <p className="flex items-center gap-2">
                                    {tieneTicketeraFor(plan) ? (
                                        <CheckCircle2 size={16} className="text-[#22c55e]" />
                                    ) : (
                                        <XCircle size={16} className="text-gray-400 dark:text-gray-600" />
                                    )}
                                    <span className={`${tieneTicketeraFor(plan) ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-600"}`}>
                                        {tieneTicketeraFor(plan) ? "Incluye Ticketera" : "Sin Ticketera"}
                                    </span>
                                </p>
                                {/* Tienda Virtual feature */}
                                <p className="flex items-center gap-2">
                                    {plan.tieneTienda ? (
                                        <CheckCircle2 size={16} className="text-[#3b82f6]" />
                                    ) : (
                                        <XCircle size={16} className="text-gray-400 dark:text-gray-600" />
                                    )}
                                    <span className={`${plan.tieneTienda ? "text-[#3b82f6] dark:text-[#60a5fa] font-medium" : "text-gray-500 dark:text-gray-600"}`}>
                                        {plan.tieneTienda ? "Tienda Virtual Integrada" : "Sin Tienda Virtual"}
                                    </span>
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedPlan({
                                        id: plan.id,
                                        name: plan.name,
                                        price: priceFor(plan),
                                        billingPeriod: isAnnual ? "annual" : "monthly"
                                    });
                                    setIsModalOpen(true);
                                }}
                                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all w-full
                                    ${plan.highlight ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-gray-900 dark:bg-white/10 text-white hover:bg-gray-800 dark:hover:bg-white/20"}
                                `}
                            >
                                Comprar ahora
                            </button>
                        </div>
                    ))}
                </div>

                <PurchaseModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    plan={selectedPlan}
                />

                {customerType === "formal" && (
                    <div className="mt-16 overflow-x-auto">
                        <div className="bg-[#1d4ed8] text-white rounded-t-2xl px-4 py-3 text-sm font-medium min-w-[900px] grid grid-cols-7 gap-2 border border-[#1d4ed8]">
                            <span>Comparación de planes</span>
                            {formalPlans.map((p) => (
                                <span key={p.id} className="text-center">{p.name}</span>
                            ))}
                        </div>
                        <div className="bg-white dark:bg-white/5 backdrop-blur-md rounded-b-2xl border border-gray-200 dark:border-white/10 min-w-[900px] text-gray-700 dark:text-gray-300 shadow-xl">
                            {/* Comprobantes */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Comprobantes/mes</p>
                                    <p className="text-xs text-gray-500">Boletas y Facturas, Guías...</p>
                                </div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center font-medium text-gray-900 dark:text-white">{docsPerMonthFor(p)}</div>
                                ))}
                            </div>
                            {/* Notas de Venta */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Notas de Venta</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center text-sm">Ilimitado</div>
                                ))}
                            </div>
                            {/* Inventario */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Inventario</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Reportes */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Reportes</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Dashboard */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Panel / Dashboard</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Cotizaciones */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Cotizaciones</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Caja y Turnos */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Caja Chica</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Compras y Gastos */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Compras y Gastos</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Cuentas por Cobrar */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Cuentas x Cobrar</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Guías de Remisión */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Guías de Remisión</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Exportación Excel */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Exportación Excel</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Clientes y Proveedores */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Clientes/Proveedores</div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        <CheckCircle2 size={18} className="text-[#22c55e]" />
                                    </div>
                                ))}
                            </div>
                            {/* Tienda Virtual */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">Tienda Virtual</p>
                                    <p className="text-xs text-gray-500">Catálogo, Carrito...</p>
                                </div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        {p.tieneTienda ? (
                                            <CheckCircle2 size={18} className="text-[#3b82f6]" />
                                        ) : (
                                            <XCircle size={18} className="text-gray-400 dark:text-gray-600" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            {/* Usuarios */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-gray-900 dark:text-white">Usuarios</div>
                                {[0, 0, 2, 4, 6, 10].map((val, i) => (
                                    <div key={i} className="flex items-center justify-center text-sm">{val === 0 ? "–" : val}</div>
                                ))}
                            </div>
                            {/* Ticketera */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white">+ Ticketera</p>
                                    <p className="text-xs text-gray-500">Portátil, batería...</p>
                                </div>
                                {formalPlansState.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        {tieneTicketeraFor(p) ? (
                                            <span className="inline-block h-3 w-3 rounded-full bg-[#22c55e]" />
                                        ) : (
                                            <span className="inline-block h-3 w-3 rounded-full bg-[#ef4444]" />
                                        )}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </section>

    );
}

export default Pricing;