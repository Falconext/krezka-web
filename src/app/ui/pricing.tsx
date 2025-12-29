import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Store, Printer } from "lucide-react";

const Pricing = () => {
    // Forced Dark / Glassmorphism Mode
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");
    const [customerType, setCustomerType] = useState<"formal" | "informal">("formal");
    const [withPrinter, setWithPrinter] = useState<boolean>(false);
    const [withStore, setWithStore] = useState<boolean>(false);
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

    const plans: Plan[] = customerType === "formal" ? formalPlans : informalPlans;

    const priceFor = (plan: Plan) => (isAnnual ? plan.annualPrice : plan.monthlyPrice);
    const addonFor = (plan: Plan) => {
        const isInformal = plan.id.includes("informal");
        if (isInformal) {
            return 0;
        } else {
            if (plan.id === "micro") return isAnnual ? 199 : 20;
            if (plan.id === "emprende") return isAnnual ? 249 : 25;
            return isAnnual ? 0 : 25;
        }
    };

    const storePrice = isAnnual ? 299 : 29.90;

    const addonMonthlyFor = (plan: Plan) => {
        const isInformal = plan.id.includes("informal");
        if (isInformal) {
            return 0;
        } else {
            if (plan.id === "micro") return 20;
            if (plan.id === "emprende") return 25;
            return 25;
        }
    };
    const hasFreePrinter = (plan: Plan) => customerType === "formal" && isAnnual && !!plan.includesPrinter;

    const finalPrice = (plan: Plan) => {
        let total = priceFor(plan);
        if (withPrinter && !hasFreePrinter(plan)) {
            total += addonFor(plan);
        }
        if (withStore) {
            total += storePrice;
        }
        return total;
    };

    const subtitleFor = (plan: Plan) => (isAnnual ? plan.subtitleAnnual : plan.subtitleMonthly);

    const savingsFor = (plan: Plan) => {
        const base = plan.monthlyPrice * 12 - plan.annualPrice;
        let addonSavings = (withPrinter && !hasFreePrinter(plan)) ? (addonMonthlyFor(plan) * 12 - addonFor(plan)) : 0;
        if (withStore && isAnnual) {
            addonSavings += (29.90 * 12 - 299);
        }
        return Math.max(0, base + addonSavings);
    };

    const monthlyOriginalFor = (plan: Plan) => {
        let total = plan.monthlyPrice;
        if (withPrinter && !hasFreePrinter(plan)) total += addonMonthlyFor(plan);
        if (withStore) total += 29.90;
        return total;
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
                        className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
                    >
                        Planes flexibles para cada tipo de negocio
                    </h2>
                    <p
                        className="mt-3 text-sm md:text-base text-gray-400"
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

                    <div className="bg-white/5 border border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${customerType === "formal" ? "bg-white/10 text-white font-medium" : "text-gray-400"}`}
                            onClick={() => setCustomerType("formal")}
                        >
                            Empresa formal
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${customerType === "informal" ? "bg-white/10 text-white font-medium" : "text-gray-400"}`}
                            onClick={() => setCustomerType("informal")}
                        >
                            Emprendedor informal
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${!isAnnual ? "bg-white/10 text-white" : "text-gray-400"}`}
                            onClick={() => setBillingPeriod("monthly")}
                        >
                            Mensual
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${isAnnual ? "bg-[#22c55e]/20 text-[#22c55e]" : "text-gray-400"}`}
                            onClick={() => setBillingPeriod("annual")}
                        >
                            Anual
                        </button>
                    </div>

                    {customerType === "formal" && (
                        <div className="bg-white/5 border border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md">
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-full transition-all ${!withPrinter ? "bg-white/10 text-white" : "text-gray-400"}`}
                                onClick={() => setWithPrinter(false)}
                            >
                                Sin ticketera
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 rounded-full transition-all ${withPrinter ? "bg-white/10 text-white" : "text-gray-400"}`}
                                onClick={() => setWithPrinter(true)}
                            >
                                Con ticketera
                            </button>
                        </div>
                    )}

                    <div className="bg-white/5 border border-white/5 rounded-full p-1.5 flex items-center justify-center gap-4 text-sm backdrop-blur-md">
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${!withStore ? "bg-white/10 text-white" : "text-gray-400"}`}
                            onClick={() => setWithStore(false)}
                        >
                            Sin Tienda
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-full transition-all ${withStore ? "bg-white/10 text-white" : "text-gray-400"}`}
                            onClick={() => setWithStore(true)}
                        >
                            Con Tienda
                        </button>
                    </div>

                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col rounded-3xl border px-6 pt-8 pb-6 transition-all duration-300
                                ${plan.highlight
                                    ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-xl"
                                    : "bg-white/5 border-white/5 shadow-lg backdrop-blur-md hover:bg-white/10"
                                }
                            `}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-3 right-6 rounded-full bg-[#22c55e] px-3 py-1 text-xs font-medium text-[#052e16] shadow-lg">Popular</span>
                            )}
                            {isAnnual && savingsFor(plan) > 0 && (
                                <span className="absolute -top-3 z-[10] left-6 rounded-full bg-[#22c55e]/20 border border-[#22c55e]/30 px-3 py-1 text-xs text-[#4ade80]">
                                    Ahorro: S/ {savingsFor(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                            )}
                            <div className="mb-6 flex items-center justify-between">
                                <div className={`inline-flex items-center justify-center rounded-full p-2 bg-white/5`}>
                                    <span className={`h-2 w-2 rounded-full ${plan.color === "orange" ? "bg-[#f97316]" : plan.color === "green" ? "bg-[#22c55e]" : "bg-[#6366f1]"}`} />
                                </div>
                                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
                                    {plan.name}
                                </span>
                            </div>
                            <div className="mb-6">
                                <p className="text-3xl font-semibold text-white">
                                    S/ {finalPrice(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    <span className="ml-1 text-sm font-normal text-gray-400">{isAnnual ? "/ anual" : "/ mes"}</span>
                                </p>
                                {isAnnual && (
                                    <div className="mt-1 space-y-0.5">
                                        <p className="text-xs text-gray-400">S/ {(finalPrice(plan) / 12).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mes</p>
                                        <p className="text-xs text-gray-600 line-through">S/ {monthlyOriginalFor(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mes</p>
                                    </div>
                                )}
                                <p className="text-xs text-gray-400 mt-1">{subtitleFor(plan)}</p>
                                {withPrinter && (
                                    <p className="text-xs text-[#4ade80] mt-1 flex items-center gap-1"><Printer size={12} /> Ticketera (+S/ {addonFor(plan).toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</p>
                                )}
                                {withStore && (
                                    <p className="text-xs text-[#60a5fa] mt-1 flex items-center gap-1"><Store size={12} /> Tienda Virtual (+S/ {storePrice.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</p>
                                )}
                            </div>
                            <div className="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <div className="space-y-3 text-sm">
                                {plan.features.map((f, idx) => (
                                    <p key={idx} className="flex items-center gap-2">
                                        {f.included ? (
                                            <CheckCircle2 size={16} className="text-[#22c55e]" />
                                        ) : (
                                            <XCircle size={16} className="text-gray-600" />
                                        )}
                                        <span className={`${f.included ? "text-gray-300" : "text-gray-600 line-through"}`}>{f.label}</span>
                                    </p>
                                ))}
                                {customerType === "formal" && (
                                    <p className="flex items-center gap-2">
                                        {hasFreePrinter(plan) || withPrinter ? (
                                            <CheckCircle2 size={16} className="text-[#22c55e]" />
                                        ) : (
                                            <XCircle size={16} className="text-[#ef4444]" />
                                        )}
                                        <span className={`${hasFreePrinter(plan) || withPrinter ? "text-gray-300" : "text-gray-600"}`}>
                                            {hasFreePrinter(plan) ? "Con Ticketera GRATIS*" : withPrinter ? "Con Ticketera" : "Sin Ticketera"}
                                        </span>
                                    </p>
                                )}
                                <p className="flex items-center gap-2">
                                    {withStore ? (
                                        <CheckCircle2 size={16} className="text-[#3b82f6]" />
                                    ) : (
                                        <XCircle size={16} className="text-gray-600" />
                                    )}
                                    <span className={`${withStore ? "text-[#60a5fa] font-medium" : "text-gray-600"}`}>
                                        {withStore ? "Tienda Virtual Integrada" : "Sin Tienda Virtual"}
                                    </span>
                                </p>
                            </div>
                            <Link
                                href={`/cotizar?plan=${plan.id}&billing=${isAnnual ? 'annual' : 'monthly'}&type=${customerType}&printer=${(hasFreePrinter(plan) || withPrinter) ? '1' : '0'}&store=${withStore ? '1' : '0'}`}
                                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all
                                    ${plan.highlight ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-white/10 text-white hover:bg-white/20"}
                                `}
                            >
                                Agendar demo GRATIS
                            </Link>
                        </div>
                    ))}
                </div>

                {customerType === "formal" && (
                    <div className="mt-16 overflow-x-auto">
                        <div className="bg-[#1d4ed8] text-white rounded-t-2xl px-4 py-3 text-sm font-medium min-w-[900px] grid grid-cols-7 gap-2 border border-[#1d4ed8]">
                            <span>Comparación de planes</span>
                            {formalPlans.map((p) => (
                                <span key={p.id} className="text-center">{p.name}</span>
                            ))}
                        </div>
                        <div className="bg-white/5 backdrop-blur-md rounded-b-2xl border border-white/10 min-w-[900px] text-gray-300">
                            {/* Comprobantes */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="font-semibold text-white">Comprobantes/mes</p>
                                    <p className="text-xs text-gray-500">Boletas y Facturas, Guías...</p>
                                </div>
                                {formalPlans.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center font-medium text-white">{p.docsPerMonth}</div>
                                ))}
                            </div>
                            {/* Notas de Venta */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-white">Notas de Venta</div>
                                {formalPlans.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center text-sm">Ilimitado</div>
                                ))}
                            </div>
                            {/* Usuarios */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-white">Usuarios</div>
                                {[0, 0, 2, 4, 6, 10].map((val, i) => (
                                    <div key={i} className="flex items-center justify-center text-sm">{val === 0 ? "–" : val}</div>
                                ))}
                            </div>
                            {/* Ticketera */}
                            <div className="grid grid-cols-7 gap-2 px-4 py-4 border-b border-white/5 hover:bg-white/5 transition-colors">
                                <div>
                                    <p className="font-semibold text-white">+ Ticketera</p>
                                    <p className="text-xs text-gray-500">Portátil, batería...</p>
                                </div>
                                {formalPlans.map((p) => (
                                    <div key={p.id} className="flex items-center justify-center">
                                        {p.includesPrinter ? (
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