'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import avatar1 from '@/app/public/assets/avatar1.png';
import avatar2 from '@/app/public/assets/avatar2.png';
import avatar3 from '@/app/public/assets/avatar3.png';

export default function Hero() {
    return (
        <section className="relative pt-48 pb-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-8 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <span className="w-2 h-2 rounded-full bg-[#8A38F5] animate-pulse" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Nuevo: IA para Ingresos</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8"
                >
                    El Futuro de la <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white dark:to-gray-500">
                        Gestión Hotelera
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Simplifica operaciones, aumenta ingresos y deleita a tus huéspedes con la plataforma más avanzada todo en uno para la hospitalidad moderna.
                </motion.p>

                {/* Review Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.45 }}
                    className="flex items-center justify-center gap-4 mb-12"
                >
                    <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0E0E0E] overflow-hidden relative">
                            <Image src={avatar1} alt="User" fill className="object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0E0E0E] overflow-hidden relative">
                            <Image src={avatar2} alt="User" fill className="object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0E0E0E] overflow-hidden relative">
                            <Image src={avatar3} alt="User" fill className="object-cover" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0E0E0E] bg-gray-700 overflow-hidden flex items-center justify-center relative z-10">
                            <span className="text-xs font-bold text-white">+2k</span>
                        </div>
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-gray-900 dark:text-white">4.9/5 Calificación</div>
                        <div className="text-sm text-gray-500">Basado en 500+ reseñas</div>
                    </div>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <button className="px-8 py-4 bg-[#5A0EBB] text-white rounded-full font-semibold hover:bg-[#6820C7] transition-all shadow-[0_0_30px_rgba(90,14,187,0.4)] hover:shadow-[0_0_50px_rgba(90,14,187,0.6)] flex items-center gap-2 group">
                        Prueba Gratis
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-transparent text-gray-900 border border-gray-200 dark:bg-white/5 dark:text-white dark:border-white/10 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-all backdrop-blur-sm">
                        Agendar Demo
                    </button>
                </motion.div>

                {/* Dashboard Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.6, type: "spring" }}
                    className="relative mx-auto max-w-6xl perspective-1000"
                >
                    {/* Glow behind mockup */}
                    <div className="absolute inset-0 bg-[#5A0EBB] blur-[100px] opacity-20 dark:opacity-30 rounded-full z-0 transform scale-75" />

                    {/* The Dashboard Card */}
                    <div className="relative z-10 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] group">
                        {/* Top Bar Mockup */}
                        <div className="h-12 border-b border-gray-200 dark:border-white/5 flex items-center px-4 gap-2 bg-gray-100 dark:bg-[#0E0E0E]">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="ml-4 w-64 h-6 bg-gray-200 dark:bg-white/5 rounded-md" />
                        </div>

                        {/* Actual Dashboard Screenshot */}
                        <div className="relative w-full h-full bg-gray-50 dark:bg-[#0E0E0E]">
                            <video
                                src="/assets/videos/dark.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            />

                            {/* Overlay Gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent dark:from-[#0E0E0E] opacity-40" />
                        </div>

                        {/* "Glass" Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>

                    {/* Floating Mobile Mockup (Optional accent - removed for cleaner look with real screenshot) */}

                </motion.div>
            </div>
        </section>
    );
}
