import Image from "next/image";
import data1 from '@/app/public/assets/data1.png';
import data2 from '@/app/public/assets/data2.png';

const Analytics = () => {
    // Forced Dark / Glassmorphism Mode
    return (
        <section className="bg-transparent py-16 md:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                <div className="md:col-span-6 space-y-6">
                    <div className="flex flex-col gap-4">
                        <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-[0.25em]">Beneficios</span>
                        <span className="inline-flex w-fit items-center rounded-full bg-gray-100 dark:bg-white/5 px-3 py-1 text-xs md:text-sm text-gray-700 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-white/10 backdrop-blur-md">
                            Seguimiento en tiempo real
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white transition-colors">
                        Simplificamos el control de tu negocio para que tomes mejores decisiones.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl transition-colors">
                        Verifica y controla tus ingresos por los comprobantes que generas y analiza la
                        información por métodos de pago como Efectivo, Yape o Plin. Todo en un panel claro
                        y accionable.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 pt-4">
                        {[
                            { color: "#22c55e", text: "Control de comprobantes", sub: "Sigue cada boleta y factura." },
                            { color: "#facc15", text: "Clientes e inventario", sub: "Visualiza clientes y stock." },
                            { color: "#6366f1", text: "Métodos de pago", sub: "Compara Efectivo, Yape y Plin." },
                            { color: "#ec4899", text: "Productos más vendidos", sub: "Identifica tus tops." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                                <div className="mt-[6px] h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white transition-colors">{item.text}</p>
                                    <p className="text-xs md:text-sm text-gray-500">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-6 flex justify-center mt-10 md:mt-0">
                    <div className="relative w-full max-w-md">
                        {/* Blob decorativo */}
                        <div className="absolute inset-x-6 top-8 h-64 rounded-3xl bg-[#8A38F5]/20 filter blur-xl" />

                        <div className="relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md px-6 pt-6 pb-5 shadow-2xl transition-colors">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">Panel</p>
                                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white">Rendimiento de ventas</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#22c55e]">
                                    <span className="font-semibold">+18%</span>
                                    <span className="text-gray-500 dark:text-gray-400">vs mes anterior</span>
                                </div>
                            </div>
                            <div className="mb-5 rounded-2xl bg-gray-50 dark:bg-black/20 px-4 pt-5 pb-4 border border-gray-100 dark:border-white/5">
                                <Image
                                    className="w-full h-full mx-auto object-contain rounded-t-xl opacity-90"
                                    alt="Gráfico de rendimiento"
                                    src={data1}
                                />
                                <Image
                                    className="w-full h-full mx-auto object-contain rounded-b-xl opacity-90"
                                    alt="Gráfico de rendimiento"
                                    src={data2}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Ingresos totales</p>
                                    <p className="text-xl font-semibold text-gray-900 dark:text-white">S/ 32,540</p>
                                </div>
                                <div className="rounded-full bg-[#22c55e]/10 px-3 py-1 text-xs text-[#22c55e] border border-[#22c55e]/20">
                                    Operación saludable
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-3xl px-6 py-6 text-center shadow-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md transition-colors">
                            <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">Estrategias para mejorar tus resultados</h3>
                            <p className="mt-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                                Profundiza en tus métricas de comprobantes, clientes e inventario para tomar
                                decisiones más rápidas y precisas en tu negocio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;