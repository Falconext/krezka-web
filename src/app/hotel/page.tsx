'use client';
import Image from 'next/image';
import fnlogo from '@/app/public/assets/fnlogo.png';
import { motion } from 'framer-motion';
import Hero from '../ui/hotel-system/Hero';
import BentoGrid from '../ui/hotel-system/BentoGrid';
import Navbar from '../ui/hotel-system/Navbar';
import FeatureShowcase from '../ui/hotel-system/FeatureShowcase';
import Footer from '../ui/footer';
import Questions from '@/app/ui/questions';

export default function HotelSystemLanding() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0E0E0E] text-gray-900 dark:text-white selection:bg-[#5A0EBB] selection:text-white font-sans overflow-x-hidden transition-colors duration-300">
            {/* Background Ambience */}
            <div className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-[#0E0E0E] transition-colors duration-300">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#5A0EBB] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-10 dark:opacity-20 animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8A38F5] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-10 dark:opacity-15" />
            </div>

            <div className="relative z-10">
                <Navbar />

                <Hero />

                <section id="features">
                    <FeatureShowcase />
                </section>

                <div className="max-w-7xl mx-auto px-6 py-24" id="bento">
                    <BentoGrid />
                </div>

                {/* Pricing Section */}
                <section className="py-24 relative" id="pricing">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 flex flex-col items-center">
                            <Image src={fnlogo} alt="Falconext" width={48} height={48} className="w-12 h-12 mb-6 opacity-80" />
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Planes Simples y Transparentes</h2>
                            <p className="text-gray-600 dark:text-gray-400">Sin comisiones ocultas. Elige lo que tu hotel necesita.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Plan Básico */}
                            <div className="rounded-3xl p-8 bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/5 shadow-xl flex flex-col relative group hover:border-[#8A38F5]/30 transition-colors">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Gestión Interna</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">S/ 40</span>
                                    <span className="text-gray-500">/mes</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-8">Ideal para pequeños hospedajes que emiten comprobantes físicos.</p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {['Control de Habitaciones & Limpieza', 'Calendario Dinámico (Gantt)', 'Caja Chica y Gastos', 'Reportes de Ocupación', 'Gestión de Huéspedes'].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transform group-hover:translate-x-1 transition-transform duration-300">
                                            <div className="w-5 h-5 rounded-full bg-[#8A38F5]/10 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-[#8A38F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                    <li className="flex items-center gap-3 text-gray-400 dark:text-gray-600 line-through">
                                        <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </div>
                                        <span className="text-sm">Facturación Electrónica SUNAT</span>
                                    </li>
                                </ul>

                                <a
                                    href="https://wa.me/51991065217?text=Hola,%20quisiera%20empezar%20con%20el%20plan%20Gestión%20Interna%20(S/40)."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 text-center block rounded-xl font-semibold bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                                >
                                    Empezar con este plan
                                </a>
                            </div>

                            {/* Plan Pro */}
                            <div className="rounded-3xl p-8 bg-white dark:bg-[#151515] border border-[#8A38F5] shadow-2xl shadow-[#8A38F5]/10 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#8A38F5] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Profesional</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">S/ 60</span>
                                    <span className="text-gray-500">/mes</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-8">Solución completa con facturación electrónica ilimitada.</p>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {['Todo lo del plan Gestión Interna', 'Facturación Electrónica Ilimitada', 'Envío Automático a SUNAT', 'Envío de Comprobantes por WhatsApp', 'Soporte Prioritario'].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-[#8A38F5] flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(138,56,245,0.3)]">
                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://wa.me/51991065217?text=Hola,%20quisiera%20empezar%20con%20el%20plan%20Profesional%20(S/60)."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 text-center block rounded-xl font-semibold bg-[#5A0EBB] text-white hover:bg-[#6820C7] transition-all shadow-[0_4px_20px_rgba(90,14,187,0.3)] hover:shadow-[0_6px_25px_rgba(90,14,187,0.4)] transform hover:-translate-y-0.5"
                                >
                                    Empezar Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="questions">
                    <Questions />
                </section>

                <Footer />
            </div>
        </main>
    );
}
