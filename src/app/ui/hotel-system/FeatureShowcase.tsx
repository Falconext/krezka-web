'use client';

import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    image: string;
    video?: string;
    align: string;
}

const features: Feature[] = [
    {
        title: "Gestión de Habitaciones",
        description: "Control total sobre el inventario de habitaciones. Categoriza por tipo (Simple, Doble, Suite), gestiona estados de limpieza y mantenimiento, y ajusta precios dinámicamente según la temporada.",
        image: "/assets/dashboard/rooms.png",
        video: "/assets/videos/habitaciones.mov",
        align: "right"
    },
    {
        title: "Calendario Dinámico (Gantt)",
        description: "Visualiza la ocupación mensual de un vistazo. El sistema de calendario interactivo facilita la creación de nuevas reservas, cambios de fecha y gestión de estancias con arrastrar y soltar.",
        image: "/assets/dashboard/calendar.png",
        video: "/assets/videos/calendario.mov",
        align: "left"
    },
    {
        title: "Punto de Venta Integrado (Restaurante)",
        description: "Gestiona consumos en restaurante, bar y minibar desde la misma plataforma. Carga pedidos directamente a la cuenta de la habitación o cobra al instante con comprobantes electrónicos.",
        image: "/assets/dashboard/restaurant.png",
        video: "/assets/videos/pos.mov",
        align: "right"
    }
];

export default function FeatureShowcase() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${feature.align === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                            <button className="text-[#8A38F5] font-semibold hover:text-[#9F5BF8] transition-colors flex items-center gap-2 group">
                                Conocer más
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>

                        {/* Image Showcase */}
                        <div className="flex-1 w-full perspective-1000">
                            <motion.div
                                whileHover={{ rotateY: feature.align === 'left' ? -5 : 5, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#151515] group"
                            >
                                {/* Browser Bar Mockup */}
                                <div className="h-8 bg-gray-100 dark:bg-[#0E0E0E] border-b border-gray-200 dark:border-white/5 flex items-center px-4 gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                {feature.video ? (
                                    <video
                                        src={feature.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                ) : (
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                                {/* Overlay Glow */}
                                <div className="absolute inset-0 bg-[#5A0EBB]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
