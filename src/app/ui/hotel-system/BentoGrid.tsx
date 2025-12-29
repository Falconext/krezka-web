'use client';

import { motion } from 'framer-motion';
import {
    BarChart3,
    Users,
    BedDouble,
    CalendarCheck,
    Bot,
    CreditCard,
    Box,
    FileText
} from 'lucide-react';

interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    colSpan: string;
    bgGradient: string;
    image?: string;
}

const bentoItems: BentoItem[] = [
    {
        title: "Analítica de Facturación",
        description: "Emite comprobantes electrónicos SUNAT.",
        icon: <FileText className="w-6 h-6 text-[#8A38F5]" />,
        colSpan: "col-span-12 md:col-span-8",
        bgGradient: "bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0E0E0E]",
        image: "/assets/dashboard/facturacion.png"
    },
    {
        title: "Gestión de Clientes",
        description: "Base de datos completa de tus huéspedes y clientes frecuentes.",
        icon: <Users className="w-6 h-6 text-[#5A0EBB]" />,
        colSpan: "col-span-12 md:col-span-4",
        bgGradient: "bg-white dark:bg-[#151515]",
        image: "/assets/dashboard/huespedes.png"
    },
    {
        title: "Control de Inventario",
        description: "Gestiona suministros, productos de limpieza y stock de minibar.",
        icon: <Box className="w-6 h-6 text-gray-900 dark:text-[#5A0EBB]" />,
        colSpan: "col-span-12 md:col-span-4",
        bgGradient: "bg-white dark:bg-[#151515]",
        image: "/assets/dashboard/pos.png"
    },
    {
        title: "Caja y Movimientos",
        description: "Control total de aperturas, cierres y flujo de efectivo diario.",
        icon: <CreditCard className="w-6 h-6 text-[#8A38F5]" />,
        colSpan: "col-span-12 md:col-span-4",
        bgGradient: "bg-white dark:bg-[#151515]",
        image: "/assets/dashboard/caja.png"
    },
    {
        title: "Reportes Contables",
        description: "Exporta reportes detallados para tu contabilidad sin esfuerzo.",
        icon: <BarChart3 className="w-6 h-6 text-[#5A0EBB]" />,
        colSpan: "col-span-12 md:col-span-4",
        bgGradient: "bg-white dark:bg-[#151515]",
        image: "/assets/dashboard/reportes.png"
    },
];

export default function BentoGrid() {
    return (
        <section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Todo lo que necesitas para <span className="text-[#8A38F5]">escalar</span></h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Módulos diseñados para trabajar juntos a la perfección.</p>
            </div>

            <div className="grid grid-cols-12 gap-6 auto-rows-[250px]">
                {bentoItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative ${item.colSpan} rounded-3xl p-8 border border-gray-200 dark:border-white/5 overflow-hidden group hover:border-[#8A38F5]/30 transition-colors ${item.bgGradient} shadow-xl dark:shadow-none`}
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-[#5A0EBB] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                        <div className="relative z-20 flex flex-col h-full justify-between max-w-[60%]">
                            <div className="p-3 bg-gray-100 dark:bg-white/5 w-fit rounded-xl border border-gray-200 dark:border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </div>

                        {/* Image for specific items */}
                        {item.image && (
                            <div className="absolute top-8 right-0 bottom-0 w-[55%] z-10 perspective-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover object-left-top rounded-tl-2xl border-t border-l border-white/10 shadow-[-20px_20px_50px_rgba(0,0,0,0.5)] transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
                                />
                                {/* Overlay Gradient for better partial blend */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent opacity-50" />
                            </div>
                        )}

                        {/* Decorative Elements for larger cards if no image (kept for backward compatibility or specific design choices) */}
                        {index === 0 && !item.image && (
                            <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 bg-gradient-to-l from-[#5A0EBB] to-transparent" />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
