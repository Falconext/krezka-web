import { ShoppingCart, Pill, Hammer, UtensilsCrossed, Briefcase, Store } from "lucide-react";
import { BRAND } from "@/lib/branding";

const industries = [
    {
        Icon: Store,
        name: "Bodegas y Minimarkets",
        desc: "Control de stock, caja diaria y ventas rápidas con POS táctil.",
        color: "#5A0EBB",
    },
    {
        Icon: Pill,
        name: "Farmacias y Boticas",
        desc: "Gestión de lotes, vencimientos y kardex de medicamentos.",
        color: "#8A38F5",
    },
    {
        Icon: Hammer,
        name: "Ferreterías",
        desc: "Catálogo amplio, cotizaciones y despachos a clientes.",
        color: "#6366f1",
    },
    {
        Icon: UtensilsCrossed,
        name: "Restaurantes",
        desc: "Comandas, delivery integrado y control de insumos.",
        color: "#0ea5e9",
    },
    {
        Icon: Briefcase,
        name: "Servicios",
        desc: "Facturas de servicios, órdenes de trabajo y seguimiento de clientes.",
        color: "#8b5cf6",
    },
    {
        Icon: ShoppingCart,
        name: "Distribuidoras",
        desc: "Multi-sede, rutas de reparto y gestión de vendedores en campo.",
        color: "#ec4899",
    },
];

const Industries = () => {
    return (
        <section className="bg-transparent py-16 md:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="inline-flex items-center rounded-full bg-gray-100 dark:bg-white/5 px-4 py-1 text-xs md:text-sm text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-white/10 mb-4">
                        Para tu tipo de negocio
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white transition-colors">
                        Adaptado a cada<br />rubro del mercado
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        {BRAND.name} se adapta a las necesidades específicas de tu industria sin configuraciones complicadas.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {industries.map(({ Icon, name, desc, color }) => (
                        <div
                            key={name}
                            className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div
                                className="mb-4 w-12 h-12 rounded-2xl flex items-center justify-center"
                                style={{ backgroundColor: `${color}18` }}
                            >
                                <Icon size={22} style={{ color }} />
                            </div>
                            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 transition-colors">{name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
