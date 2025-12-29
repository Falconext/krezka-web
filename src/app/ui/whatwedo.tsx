import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import whatdo from "@/app/public/assets/whatdo.png";

const WhatWeDo = () => {
    // Forced Dark / Glassmorphism Mode
    return (
        <section
            id="service"
            className="bg-transparent py-16 md:py-24" // Transparent background
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                {/* Tarjeta con imagen y contenido */}
                <div className="md:col-span-6 flex justify-center mt-8 md:mt-0">
                    <div className="relative w-full max-w-md">
                        {/* Blob decorativo detrás de la card */}
                        <div className="absolute inset-x-6 top-8 h-72 rounded-3xl bg-[#5A0EBB]/20 filter blur-xl" />

                        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 pt-6 pb-5 shadow-2xl">
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Proyectos</p>
                                    <p className="text-sm md:text-base font-medium text-white">Sistemas completados</p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-[#22c55e]">
                                    <span className="font-semibold">+24%</span>
                                    <span className="text-gray-400">este año</span>
                                </div>
                            </div>
                            <div className="mb-5 rounded-2xl bg-black/20 px-4 pt-5 pb-4 border border-white/5">
                                <Image
                                    src={whatdo}
                                    alt="Vista previa de nuestros sistemas"
                                    className="w-full h-full object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-400">Clientes satisfechos</p>
                                    <p className="text-xl font-semibold text-white">150+</p>
                                </div>
                                <div className="rounded-full bg-[#22c55e]/10 px-3 py-1 text-xs text-[#22c55e] border border-[#22c55e]/20">
                                    Calidad garantizada
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Texto y beneficios */}
                <div className="md:col-span-6 space-y-6">
                    <p className="bg-white/10 backdrop-blur-md border border-white/10 w-fit rounded-xl p-2 px-4 mb-1 mt-2 text-white/90">
                        Brindamos lo mejor
                    </p>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white"
                    >
                        Solo nuestra estrategia tiene el poder de construir sistemas top.
                    </h2>
                    <p
                        className="text-sm md:text-base max-w-md text-gray-400"
                    >
                        Organizamos tu negocio desde la parte visual hasta la arquitectura técnica: diseño UI/UX,
                        sistemas de facturación, páginas web y ecommerce, para que puedas enfocarte en crecer.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {[
                            { icon: "tabler:ux-circle", color: "#ef4444", text: "UI/UX Design", sub: "Interfaces modernas." },
                            { icon: "mdi:network-pos", color: "#22c55e", text: "Facturación electrónica", sub: "Integrado con SUNAT." },
                            { icon: "streamline:web", color: "#6366f1", text: "Páginas web modernas", sub: "Sitios a medida." },
                            { icon: "material-symbols:store", color: "#f97316", text: "Ecommerce", sub: "Vende 24/7." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm">
                                <div className={`rounded-xl p-2`} style={{ backgroundColor: `${item.color}20` }}>
                                    <Icon icon={item.icon} color={item.color} width={22} height={22} />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-medium">{item.text}</p>
                                    <p className="text-xs text-gray-500">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhatWeDo;