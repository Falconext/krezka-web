import { Icon } from "@iconify/react/dist/iconify.js";

const WeTools = () => {
    // Forced Dark / Glassmorphism Mode
    return (
        <section
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="text-center mb-12">
                    <p className="uppercase text-[#B76AE0] text-[14px] md:text-[16px] tracking-[0.25em] mb-2">
                        INTELIGENCIA ARTIFICIAL
                    </p>
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                        Automatización Inteligente
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        {
                            name: "Catálogo Automático",
                            desc: "Crea miles de productos en segundos. Solo escribe 'Ferretería' y la IA generará nombres, precios y descripciones por ti.",
                            icon: "mdi:robot-excited-outline",
                            color: "#38bdf8"
                        },
                        {
                            name: "Imágenes con IA",
                            desc: "Olvídate de buscar fotos. Nuestra IA asigna imágenes realistas y atractivas a tus productos automáticamente.",
                            icon: "mdi:image-auto-adjust",
                            color: "#B76AE0"
                        },
                        {
                            name: "Insights de Ventas",
                            desc: "Detecta patrones de compra y recibe recomendaciones sobre qué productos reponer antes de que se agoten.",
                            icon: "mdi:chart-timeline-variant-shimmer",
                            color: "#22c55e"
                        },
                        {
                            name: "Asistente 24/7",
                            desc: "Resuelve dudas sobre el sistema o temas contables al instante con nuestro chat integrado potenciado por LLMs.",
                            icon: "mdi:face-agent",
                            color: "#fb923c"
                        }
                    ].map((tool, idx) => (
                        <div
                            key={idx}
                            className="rounded-3xl border px-6 py-6 flex flex-col gap-4 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-md hover:bg-gray-50 dark:hover:bg-white/10 hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none group"
                        >
                            <div className="inline-flex items-center gap-3">
                                <div className="rounded-2xl bg-gray-100 dark:bg-black/40 p-3 border border-gray-200 dark:border-white/5 transition-colors group-hover:scale-110 duration-300">
                                    <Icon icon={tool.icon} width={28} height={28} color={tool.color || undefined} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-400 transition-colors">{tool.name}</h3>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default WeTools;