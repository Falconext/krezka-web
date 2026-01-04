'use client';

import { Printer, Store, Shield, Phone, Mail, ExternalLink, Check, Plus, Globe, Zap, Users, MessageCircle, Laptop, Rocket, Search, CheckCircle2, ChevronRight, BarChart, Server, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import mainproject from '@/app/public/assets/mainproject.png';

// --- A4 Container ---
const A4Page = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={`w-[210mm] h-[297mm] mx-auto bg-[#0E0E0E] shadow-2xl my-8 overflow-hidden relative print:shadow-none print:w-full print:h-full print:my-0 break-after-page page-break-always text-white font-helvetica ${className}`}
        >
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col p-[15mm]">
                {children}
            </div>
        </div>
    );
};

export default function BrochurePage() {

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="bg-[#1a1a1a] min-h-screen py-8 print:bg-[#0E0E0E] print:py-0 font-helvetica text-white">
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        background: #0E0E0E !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .page-break-always {
                        page-break-after: always;
                        break-after: page;
                    }
                    ::-webkit-scrollbar { display: none; }
                    .print-hidden { display: none !important; }
                }
            `}</style>

            <div className="fixed top-5 right-5 z-50 print-hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-medium"
                >
                    <Printer size={20} />
                    Descargar PDF
                </button>
            </div>

            <div id="brochure-root">

                {/* --- PAGE 1: COVER --- */}
                <A4Page className="flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="text-2xl font-bold tracking-widest text-white">FALCONEXT</div>
                        </div>
                        <div className="text-sm font-medium tracking-widest text-white/50">BROCHURE {new Date().getFullYear()}</div>
                    </div>

                    <div className="flex flex-col items-center text-center mt-6">
                        <h1 className="text-[5rem] leading-[0.9] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6">
                            IMPULSA TU<br />NEGOCIO
                        </h1>
                        <p className="text-2xl text-gray-400 font-light tracking-wide max-w-lg mb-10">
                            Software de Facturación & Desarrollo Web Profesional
                        </p>

                        <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent z-10"></div>
                            <Image
                                src={mainproject}
                                alt="Dashboard Interface"
                                className="object-contain rounded-3xl"
                                quality={100}
                                priority
                                unoptimized
                                placeholder="blur"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/10 pt-8 mt-auto">
                        <div className="flex gap-8">
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Ecosistema</p>
                                <p className="font-medium">Web + Móvil + Facturación</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold bg-white text-black px-4 py-1 rounded-full">FALCONEXT.PE</div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 2: SAAS PRICING (Formal & Informal) --- */}
                <A4Page>
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-2">Planes de Software</h2>
                        <p className="text-gray-400">Control total para tu negocio, seas formal o no.</p>
                    </div>

                    {/* --- INFORMAL SECTION --- */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Store className="text-green-500" />
                            <h3 className="text-2xl font-bold text-green-500">Negocio Informal / Emprendedor</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {/* Free */}
                            <div className="bg-[#151515] p-5 rounded-2xl border border-white/5">
                                <h4 className="font-bold text-lg mb-1">Emprende</h4>
                                <div className="text-3xl font-bold mb-2">GRATIS</div>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>• 200 Ventas/mes</li>
                                    <li>• 1 Usuario</li>
                                    <li>• PDF / WhatsApp</li>
                                </ul>
                            </div>
                            {/* Crecimiento */}
                            <div className="bg-[#1a2e1a] p-5 rounded-2xl border border-green-500/30">
                                <h4 className="font-bold text-lg mb-1">Crecimiento</h4>
                                <div className="text-3xl font-bold mb-2">S/ 9.90</div>
                                <p className="text-xs text-green-400 mb-2">Anual: S/ 99.00</p>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>• Ventas ilimitadas</li>
                                    <li>• 2 Usuarios</li>
                                    <li>• Inventario Básico</li>
                                </ul>
                            </div>
                            {/* Pro */}
                            <div className="bg-[#151515] p-5 rounded-2xl border border-white/5">
                                <h4 className="font-bold text-lg mb-1">Pro</h4>
                                <div className="text-3xl font-bold mb-2">S/ 19.90</div>
                                <p className="text-xs text-gray-500 mb-2">Anual: S/ 199.00</p>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>• 5 Usuarios</li>
                                    <li>• Inventario Avanzado</li>
                                    <li>• Backup Automático</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* --- FORMAL SECTION --- */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="text-blue-500" />
                            <h3 className="text-2xl font-bold text-blue-500">Empresa Formal (SUNAT)</h3>
                        </div>

                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-xs uppercase text-gray-500 border-b border-white/10">
                                    <th className="py-2">Plan</th>
                                    <th className="py-2">Mensual</th>
                                    <th className="py-2">Anual <span className="text-green-500">(Ahorro)</span></th>
                                    <th className="py-2">Comprobantes</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-bold">Micro</td>
                                    <td className="py-3">S/ 35.00</td>
                                    <td className="py-3">S/ 350</td>
                                    <td className="py-3 text-gray-400">100 / mes</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-bold">Emprende</td>
                                    <td className="py-3">S/ 42.00</td>
                                    <td className="py-3">S/ 420</td>
                                    <td className="py-3 text-gray-400">300 / mes</td>
                                </tr>
                                <tr className="border-b border-blue-500/20 bg-blue-500/5">
                                    <td className="py-3 font-bold text-blue-400">Control</td>
                                    <td className="py-3">S/ 49.90</td>
                                    <td className="py-3">S/ 500</td>
                                    <td className="py-3 text-gray-300">500 / mes</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-bold">Bacán</td>
                                    <td className="py-3">S/ 59.90</td>
                                    <td className="py-3">S/ 600</td>
                                    <td className="py-3 text-gray-400">600 / mes</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-bold">Súper</td>
                                    <td className="py-3">S/ 79.90</td>
                                    <td className="py-3">S/ 800</td>
                                    <td className="py-3 text-gray-400">800 / mes</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="py-3 font-bold">Mega</td>
                                    <td className="py-3">S/ 99.90</td>
                                    <td className="py-3">S/ 1000</td>
                                    <td className="py-3 text-gray-400">1200 / mes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* --- ADDONS --- */}
                    <div className="grid grid-cols-2 gap-6 mt-auto bg-white/5 p-6 rounded-2xl border border-white/10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Plus size={18} className="text-yellow-400" />
                                <h4 className="font-bold text-lg">Ticketera Bluetooth</h4>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">Imprime comprobantes. Usb + Batería.</p>
                            <div className="text-yellow-400 font-bold text-xl">+ S/ 25.00 <span className="text-xs font-normal text-gray-500">/mes</span></div>
                            <p className="text-xs text-green-500 mt-1">*GRATIS en Plan Anual (Desde Control)</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Plus size={18} className="text-pink-400" />
                                <h4 className="font-bold text-lg">Tienda Virtual</h4>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">Catálogo online para tus clientes.</p>
                            <div className="text-pink-400 font-bold text-xl">+ S/ 29.90 <span className="text-xs font-normal text-gray-500">/mes</span></div>
                            <p className="text-xs text-green-500 mt-1">* Integrada con tu stock real</p>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 3: WEB DEVELOPMENT SERVICES --- */}
                <A4Page>
                    <div className="mb-12 text-center">
                        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm tracking-widest font-bold mb-4">DESARROLLO WEB</div>
                        <h2 className="text-4xl font-bold mb-2">Tu Presencia Digital</h2>
                        <p className="text-gray-400">Estrategia, diseño y tecnología para vender más.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* LANDING PAGE */}
                        <div className="flex bg-[#151515] rounded-2xl overflow-hidden border border-white/5 h-44 group hover:border-purple-500/50 transition-colors">
                            <div className="w-1/3 bg-purple-900/20 flex items-center justify-center p-6 relative">
                                <div className="absolute inset-0 bg-purple-600/10 blur-xl"></div>
                                <div className="text-center relative z-10">
                                    <h3 className="font-bold text-xl mb-1">Landing Page</h3>
                                    <div className="text-2xl font-bold text-purple-400">S/ 500</div>
                                    <div className="text-[10px] text-gray-400">Incluido IGV</div>
                                </div>
                            </div>
                            <div className="w-2/3 p-6 flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-300">
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-500" /> 1 Sección (1 página)</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-500" /> Hosting x 1 año</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-500" /> Dominio x 1 año</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-500" /> Certificado SSL</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-500" /> Entrega: 3 días</div>
                                    <div className="col-span-2 text-white/50 italic text-[10px]">Ideal para campañas de publicidad</div>
                                </div>
                            </div>
                        </div>

                        {/* EMPRESARIAL */}
                        <div className="flex bg-gradient-to-r from-[#1c1c1c] to-[#0d1b2a] rounded-2xl overflow-hidden border border-blue-500/30 h-52 shadow-2xl relative transform scale-105 z-10">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-[10px] uppercase font-bold rounded-bl-xl">Más Vendido</div>
                            <div className="w-1/3 bg-blue-900/20 flex items-center justify-center p-6 relative">
                                <div className="absolute inset-0 bg-blue-600/10 blur-xl"></div>
                                <div className="text-center relative z-10">
                                    <h3 className="font-bold text-xl mb-1">Empresarial</h3>
                                    <div className="text-3xl font-bold text-blue-400">S/ 1200</div>
                                    <div className="text-[10px] text-gray-400">Incluido IGV</div>
                                </div>
                            </div>
                            <div className="w-2/3 p-6 flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-300">
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-500" /> Hasta 12 Secciones</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-500" /> Hosting & Dominio 1 año</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-500" /> Autoadministrable</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-500" /> Cotizador Web</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-500" /> SEO Básico</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-500" /> Entrega: 7 días</div>
                                    <div className="col-span-2 flex items-center gap-2 text-white font-medium bg-blue-500/10 p-1 rounded"><Check size={12} className="text-blue-500" /> Panel Administrativo Incluido</div>
                                </div>
                            </div>
                        </div>

                        {/* E-COMMERCE */}
                        <div className="flex bg-[#151515] rounded-2xl overflow-hidden border border-white/5 h-56 group hover:border-pink-500/50 transition-colors">
                            <div className="w-1/3 bg-pink-900/20 flex items-center justify-center p-6 relative">
                                <div className="absolute inset-0 bg-pink-600/10 blur-xl"></div>
                                <div className="text-center relative z-10">
                                    <h3 className="font-bold text-xl mb-1">E-commerce</h3>
                                    <div className="text-2xl font-bold text-pink-400">S/ 2000</div>
                                    <div className="text-[10px] text-gray-400">Incluido IGV</div>
                                </div>
                            </div>
                            <div className="w-2/3 p-6 flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-300">
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Hasta 14 Secciones</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Carrito + Pagos</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Gestión de Pedidos</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Reportes de Venta</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Entrega: 10 días</div>
                                    <div className="col-span-2 text-[10px] text-gray-500 mt-2 p-2 border border-white/10 rounded bg-white/5">* Incluye carga inicial de productos y capacitación de uso.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 4: PROCESS & WORKFLOW (Adding Professionalism) --- */}
                <A4Page>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-white/20 flex-1"></div>
                        <h2 className="text-3xl font-light uppercase tracking-[0.2em] text-white">Cómo Trabajamos</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-[#0E0E0E] border-2 border-blue-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <Search size={32} className="text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">1. Descubrimiento</h3>
                                    <p className="text-gray-400 max-w-lg">
                                        Analizamos tu negocio, tus competidores y tus objetivos. No solo entregamos software, entregamos una estrategia comercial.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-[#0E0E0E] border-2 border-purple-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                    <Laptop size={32} className="text-purple-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">2. Diseño y Desarrollo</h3>
                                    <p className="text-gray-400 max-w-lg">
                                        Creamos tu plataforma con las últimas tecnologías del mercado (Next.js, Cloud). Priorizamos velocidad, seguridad y estética.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-[#0E0E0E] border-2 border-pink-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(236,72,153,0.5)]">
                                    <Rocket size={32} className="text-pink-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">3. Lanzamiento y Capacitación</h3>
                                    <p className="text-gray-400 max-w-lg">
                                        Desplegamos tu proyecto en servidores de alta velocidad. Te capacitamos a ti y a tu equipo para sacar el máximo provecho.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-[#0E0E0E] border-2 border-green-500 flex items-center justify-center shrink-0 z-10 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                    <Zap size={32} className="text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">4. Soporte Continuo</h3>
                                    <p className="text-gray-400 max-w-lg">
                                        No te dejamos solo. Tendrás soporte técnico directo por WhatsApp y actualizaciones constantes de seguridad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 5: PORTFOLIO / CASOS DE EXITO --- */}
                <A4Page>
                    <div className="flex flex-col h-full items-center justify-center text-center">
                        <div className="mb-10 p-4 border border-white/10 rounded-full bg-white/5 inline-flex backdrop-blur-md">
                            <span className="text-amber-400 font-medium tracking-wide mx-4">EXPERIENCIA DEMOSTRADA</span>
                        </div>

                        <h2 className="text-5xl font-bold mb-12 leading-tight">
                            Proyectos que <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Inspiran Confianza</span>
                        </h2>

                        <div className="grid grid-cols-2 gap-8 w-full">
                            {/* Project 1 */}
                            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden group border border-white/10">
                                <div className="absolute inset-0 bg-gray-800">
                                    <Image
                                        src={mainproject}
                                        alt="Project 1"
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        fill
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-bold text-white">Sistema POS Falconext</h3>
                                    <p className="text-sm text-gray-400">Plataforma SaaS de Facturación</p>
                                </div>
                            </div>

                            {/* Project 2 Placeholder */}
                            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden group border border-white/10 bg-[#151515] flex items-center justify-center">
                                <div className="text-center p-6">
                                    <ShoppingIcon size={48} className="mx-auto mb-4 text-gray-600" />
                                    <h3 className="text-xl font-bold text-white">E-commerce Moda</h3>
                                    <p className="text-sm text-gray-400 mt-2">Tienda online con pasarela de pagos</p>
                                </div>
                            </div>

                            {/* Project 3 Placeholder */}
                            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden group border border-white/10 bg-[#151515] flex items-center justify-center">
                                <div className="text-center p-6">
                                    <GraduationCap size={48} className="mx-auto mb-4 text-gray-600" />
                                    <h3 className="text-xl font-bold text-white">Aula Virtual Corp</h3>
                                    <p className="text-sm text-gray-400 mt-2">Sistema LMS para capacitación</p>
                                </div>
                            </div>

                            {/* Project Stats */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-6">
                                <div className="text-5xl font-bold text-white mb-2">+150</div>
                                <div className="text-sm uppercase tracking-widest text-gray-400 text-center">Proyectos<br />Entregados</div>
                            </div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 6: FAQ --- */}
                <A4Page>
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
                        <p className="text-gray-400">Resuelve tus dudas antes de empezar.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#151515] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿Necesito firmar un contrato de permanencia?</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                No. Nuestros planes son prepago (mensual o anual). Puedes cancelar cuando desees sin penalidades. Queremos que te quedes por la calidad de nuestro servicio, no por obligación.
                            </p>
                        </div>

                        <div className="bg-[#151515] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿El sistema funciona sin internet?</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Falconext es una tecnología Cloud que requiere internet para sincronizar con SUNAT en tiempo real. Sin embargo, está optimizado para funcionar con datos móviles mínimos, consumiendo muy pocos megas.
                            </p>
                        </div>

                        <div className="bg-[#151515] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿Qué incluye el soporte técnico?</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Soporte prioritario via WhatsApp y llamadas. Te ayudamos con dudas de uso, configuración de impresoras y resolución de problemas. En planes Empresariales, incluimos capacitaciones personalizadas.
                            </p>
                        </div>

                        <div className="bg-[#151515] p-6 rounded-2xl border border-white/5">
                            <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿Entregan factura por el servicio?</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Sí, somos una empresa 100% formal. Todos nuestros precios incluyen IGV y emitimos factura electrónica que puedes usar para tu crédito fiscal.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 mt-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-500 p-3 rounded-full text-white"><MessageCircle size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-white">¿Tienes más preguntas?</h4>
                                    <p className="text-sm text-gray-400">Escríbenos al WhatsApp: <strong>991 065 217</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 7: CONTACT (FINAL) --- */}
                <A4Page className="flex flex-col items-center justify-center relative">
                    <div className="absolute top-0 right-0 p-12 opacity-20">
                        {/* Decorative Element */}
                        <div className="w-64 h-64 border-4 border-white/20 rounded-full"></div>
                        <div className="w-64 h-64 border-4 border-white/20 rounded-full absolute top-12 right-12"></div>
                    </div>

                    <div className="text-center z-10 w-full max-w-2xl">
                        <div className="mb-6 mx-auto w-20 h-20 bg-white text-black flex items-center justify-center rounded-2xl font-bold text-3xl">FN</div>
                        <h2 className="text-6xl font-bold mb-8">Empieza Hoy</h2>
                        <p className="text-2xl text-gray-400 mb-16">
                            Transformación digital real para tu empresa.
                            <br />Solicita tu demo gratuita.
                        </p>

                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 w-full">
                            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                                    <Phone size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-sm uppercase tracking-wider">Llámanos o WhatsApp</p>
                                    <p className="text-3xl font-bold text-white">+51 991 065 217</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/10">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400">
                                    <Mail size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-sm uppercase tracking-wider">Correo Electrónico</p>
                                    <p className="text-2xl font-bold text-white">contact@falconext.pe</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                                    <ExternalLink size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-500 text-sm uppercase tracking-wider">Sitio Web</p>
                                    <p className="text-2xl font-bold text-white">www.falconext.pe</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-gray-600 text-sm">
                            <p>© {new Date().getFullYear()} Falconext. Todos los derechos reservados.</p>
                            <p className="mt-2">Lima, Perú</p>
                        </div>
                    </div>
                </A4Page>

            </div>
        </div>
    );
}

function ShoppingIcon(props: any) {
    return <Store {...props} />
}
