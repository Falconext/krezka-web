"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import avatar1 from '@/app/public/assets/avatar1.png';
import avatar2 from '@/app/public/assets/avatar2.png';
import avatar3 from '@/app/public/assets/avatar3.png';

const Testimonials = () => {
    // Forced Dark / Glassmorphism Mode
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement | null>(null);

    const testimonials = [
        {
            id: 1,
            name: "John Smith",
            role: "Head of Marketing RetailPro",
            avatarImg: avatar1,
            quote: "Revolucionó nuestra estrategia de datos",
            description: "Sata ha transformado completamente cómo gestionamos y utilizamos nuestros datos de clientes. Las perspectivas en tiempo real nos permitieron entregar experiencias personalizadas."
        },
        {
            id: 2,
            name: "Emily Johnson",
            role: "Growth Manager at FitLife",
            avatarImg: avatar2,
            quote: "Integración perfecta en todos los canales",
            description: "Necesitábamos una plataforma que unificara nuestros datos de múltiples canales. Sata lo hizo posible y nos ayudó a escalar nuestras operaciones de manera eficiente."
        },
        {
            id: 3,
            name: "Carlos Mendoza",
            role: "CEO de TechStart",
            avatarImg: avatar3,
            quote: "Automatización que realmente funciona",
            description: "La automatización inteligente de Sata nos permitió reducir tiempos operativos en un 40% mientras mejoramos la calidad de nuestros servicios."
        }
    ];

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const child = track.children[index] as HTMLElement | undefined;
        if (!child) return;
        const left = child.offsetLeft - 16;
        track.scrollTo({ left, behavior: "smooth" });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const next = prev === 0 ? testimonials.length - 1 : prev - 1;
            return next;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const next = prev === testimonials.length - 1 ? 0 : prev + 1;
            return next;
        });
    };

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    return (
        <section
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white transition-colors">
                            Mira lo que dicen
                            <br />
                            <span>Nuestros clientes</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={handlePrev}
                            className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                        >
                            <Icon icon="ic:baseline-arrow-back" width={24} height={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                        >
                            <Icon icon="ic:baseline-arrow-forward" width={24} height={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={trackRef}
                    className="relative flex gap-4 overflow-x-hidden md:overflow-x-hidden scrollbar-hide"
                >
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={testimonial.id}
                                className={`min-w-[85%] md:min-w-[55%] lg:min-w-[42%] rounded-3xl border px-6 py-7 transition-all duration-500
                                bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-xl
                                    ${isActive ? "scale-100 border-gray-300 dark:border-white/20 shadow-xl" : "opacity-60 blur-[1px] scale-95"}`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                                    {/* Left: avatar + name/role */}
                                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                                        <div className="shrink-0 rounded-full ring-2 ring-gray-200 dark:ring-white/10 p-1 bg-gray-100 dark:bg-white/5 transition-colors">
                                            <Image src={testimonial.avatarImg} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg text-gray-900 dark:text-white transition-colors">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    {/* Right: inner panel */}
                                    <div className="md:col-span-3 w-full">
                                        <div className="rounded-2xl border border-gray-100 dark:border-white/5 p-1 bg-gray-50 dark:bg-black/20 transition-colors">
                                            <div className="relative rounded-xl border border-white/5 p-5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none transition-colors">
                                                <p className="font-semibold text-lg md:text-xl mb-3 text-gray-900 dark:text-white italic transition-colors">"{testimonial.quote}"</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{testimonial.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex md:hidden justify-center gap-3 mt-8">
                    <button
                        onClick={handlePrev}
                        className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                    >
                        <Icon icon="ic:baseline-arrow-back" width={24} height={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                    >
                        <Icon icon="ic:baseline-arrow-forward" width={24} height={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
