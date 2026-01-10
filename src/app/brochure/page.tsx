'use client';

import { useRef } from 'react';
import Image from "next/image";
import logo from "@/app/public/assets/fnlogo.png";
import { Check, Phone, Globe, Package, ShoppingCart, BarChart3, Users, Monitor, FileText, Store, PieChart, ShieldCheck, Printer, Shield, Plus, Search, Laptop, Rocket, Zap, MessageCircle, Mail, ExternalLink, CheckCircle2 } from "lucide-react";
import mainproject from '@/app/public/assets/mainproject.png';

// --- A4 Container ---
const A4Page = ({ children, className = '', lastPage = false }: { children: React.ReactNode; className?: string; lastPage?: boolean }) => {
    return (
        <div
            className={`w-full max-w-[210mm] md:w-[210mm] h-auto md:h-[297mm] mx-auto bg-white shadow-2xl my-4 md:my-8 relative print:shadow-none print:w-full print:h-full print:my-0 ${!lastPage ? 'break-after-page page-break-always' : ''} text-gray-900 font-helvetica ${className}`}
        >
            {/* Background Ambience - HIDDEN IN PRINT */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40 print:hidden">
                <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-100/50 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/50 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col p-6 md:p-[15mm]">
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
        <div className="bg-gray-100 min-h-screen py-8 print:bg-white print:py-0 font-helvetica text-gray-900">
            <style jsx global>{`
                @media print {
                    @page {
                        size: A4;
                        margin: 0;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        background: white !important;
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
                    className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-medium"
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
                            <div className="text-2xl font-bold tracking-widest text-gray-900">FALCONEXT</div>
                        </div>
                        <div className="text-sm font-medium tracking-widest text-gray-500">BROCHURE {new Date().getFullYear()}</div>
                    </div>

                    <div className="flex flex-col items-center text-center mt-6">
                        <h1 className="text-5xl md:text-[5rem] leading-[0.9] font-bold text-gray-900 mb-6">
                            IMPULSA TU<br />NEGOCIO
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide max-w-lg mb-10">
                            Software de Facturación & Desarrollo Web Profesional
                        </p>

                        <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-gray-200 group">
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

                    <div className="flex justify-between items-end border-t border-gray-200 pt-8 mt-auto">
                        <div className="flex gap-8">
                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Ecosistema</p>
                                <p className="font-medium text-gray-800">Web + Móvil + Facturación</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm font-bold bg-gray-900 text-white px-4 py-1 rounded-full">FALCONEXT.PE</div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 2: SAAS PRICING (Formal & Informal) --- */}
                <A4Page>
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold mb-2 text-gray-900">Planes de Software</h2>
                        <p className="text-gray-500">Control total para tu negocio, seas formal o no.</p>
                    </div>

                    {/* --- INFORMAL SECTION --- */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <Store className="text-green-600" />
                            <h3 className="text-2xl font-bold text-green-600">Negocio nuevo / Emprendedor</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Free */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-200">
                                <h4 className="font-bold text-lg mb-1 text-gray-900">Emprende</h4>
                                <div className="text-3xl font-bold mb-2 text-gray-900">GRATIS</div>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• 200 Ventas/mes</li>
                                    <li>• 1 Usuario</li>
                                    <li>• PDF / WhatsApp</li>
                                </ul>
                            </div>
                            {/* Crecimiento */}
                            <div className="bg-green-50 p-5 rounded-2xl border border-green-200 border-l-4 border-l-green-500">
                                <h4 className="font-bold text-lg mb-1 text-green-900">Crecimiento</h4>
                                <div className="text-3xl font-bold mb-2 text-green-700">S/ 10</div>
                                <p className="text-xs text-green-600 mb-2 font-semibold">Anual: S/ 99</p>
                                <ul className="text-sm text-green-800 space-y-2">
                                    <li>• Ventas ilimitadas</li>
                                    <li>• 2 Usuarios</li>
                                    <li>• Inventario Básico</li>
                                </ul>
                            </div>
                            {/* Pro */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-200">
                                <h4 className="font-bold text-lg mb-1 text-gray-900">Pro</h4>
                                <div className="text-3xl font-bold mb-2 text-gray-900">S/ 20</div>
                                <p className="text-xs text-gray-500 mb-2">Anual: S/ 199</p>
                                <ul className="text-sm text-gray-600 space-y-2">
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
                            <Shield className="text-blue-600" />
                            <h3 className="text-2xl font-bold text-blue-600">Empresa Formal (SUNAT)</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead>
                                    <tr className="text-xs uppercase text-gray-500 border-b border-gray-200">
                                        <th className="py-2">Plan</th>
                                        <th className="py-2">Mensual</th>
                                        <th className="py-2">Anual <span className="text-green-600">(Ahorro)</span></th>
                                        <th className="py-2">Comprobantes</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-bold text-gray-900">Micro</td>
                                        <td className="py-3 text-gray-700">S/ 35.00</td>
                                        <td className="py-3 text-gray-700">S/ 350</td>
                                        <td className="py-3 text-gray-500">100 / mes</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-bold text-gray-900">Emprende</td>
                                        <td className="py-3 text-gray-700">S/ 42.00</td>
                                        <td className="py-3 text-gray-700">S/ 420</td>
                                        <td className="py-3 text-gray-500">300 / mes</td>
                                    </tr>
                                    <tr className="border-b border-blue-100 bg-blue-50/50">
                                        <td className="py-3 font-bold text-blue-600">Control</td>
                                        <td className="py-3 text-blue-900">S/ 49.90</td>
                                        <td className="py-3 text-blue-900">S/ 500</td>
                                        <td className="py-3 text-blue-700">500 / mes</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-bold text-gray-900">Bacán</td>
                                        <td className="py-3 text-gray-700">S/ 59.90</td>
                                        <td className="py-3 text-gray-700">S/ 600</td>
                                        <td className="py-3 text-gray-500">600 / mes</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-bold text-gray-900">Súper</td>
                                        <td className="py-3 text-gray-700">S/ 79.90</td>
                                        <td className="py-3 text-gray-700">S/ 800</td>
                                        <td className="py-3 text-gray-500">800 / mes</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 font-bold text-gray-900">Mega</td>
                                        <td className="py-3 text-gray-700">S/ 99.90</td>
                                        <td className="py-3 text-gray-700">S/ 1000</td>
                                        <td className="py-3 text-gray-500">1200 / mes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* --- ADDONS --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto bg-gray-50 p-6 rounded-2xl border border-gray-200">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Plus size={18} className="text-yellow-500" />
                                <h4 className="font-bold text-lg text-gray-900">Ticketera Bluetooth</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Imprime comprobantes. Usb + Batería.</p>
                            <div className="text-yellow-600 font-bold text-xl">+ S/ 25 <span className="text-xs font-normal text-gray-500">/mes</span></div>
                            <p className="text-xs text-green-600 mt-1">*GRATIS en Plan Anual (Todos los planes)</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Plus size={18} className="text-pink-500" />
                                <h4 className="font-bold text-lg text-gray-900">Tienda Virtual</h4>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Catálogo online para tus clientes.</p>
                            <div className="text-pink-500 font-bold text-xl">Desde S/ 40 <span className="text-xs font-normal text-gray-500">/mes</span></div>
                            <p className="text-xs text-green-600 mt-1">* S/40 a S/120 según plan</p>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 3: ALL MODULES (NEW LOCATION) --- */}
                <A4Page className="flex flex-col relative">
                    {/* Header */}
                    <div className="text-center mb-10 mt-4">
                        <p className="uppercase text-purple-600 text-sm tracking-wider font-bold mb-2">SISTEMA INTEGRAL</p>
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                            Todo lo que tu negocio necesita<br />
                            <span className="text-purple-600">sin pagar extra</span>
                        </h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Olvídate de pagar por módulos separados. Falconext te da acceso a todas las herramientas profesionales desde el plan más básico.
                        </p>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 px-4">
                        {/* Module 1 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Facturación Electrónica</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Emite boletas, facturas y notas de venta ilimitadas directo a SUNAT.</p>
                            </div>
                        </div>
                        {/* Module 2 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <Package size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Control de Inventario</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Kardex en tiempo real, control de stock mínimo y valoración de almacén.</p>
                            </div>
                        </div>
                        {/* Module 3 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <Monitor size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Punto de Venta (POS)</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Ventas rápidas con lector de barras, compatible con PC, tablet y celular.</p>
                            </div>
                        </div>
                        {/* Module 4 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <Store size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Tienda Virtual Gratis</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Tu propio catálogo online integrado automáticamente con tu stock.</p>
                            </div>
                        </div>
                        {/* Module 5 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Finanzas y Caja</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Control de flujo de caja, aperturas, cierres y reportes de ganancias.</p>
                            </div>
                        </div>
                        {/* Module 6 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Clientes y Proveedores</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Base de datos completa, historial de compras y cuentas por cobrar.</p>
                            </div>
                        </div>
                        {/* Module 7 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <PieChart size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Reportes Inteligentes</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Dashboard con métricas clave para tomar mejores decisiones.</p>
                            </div>
                        </div>
                        {/* Module 8 */}
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">Control de Usuarios</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Roles y permisos personalizables para tus vendedores y administradores.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto mb-8 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
                        <p className="text-blue-800 font-medium">
                            🚀 Todos estos módulos están incluidos desde nuestros planes más económicos.
                        </p>
                    </div>
                </A4Page>


                {/* --- PAGE 4: WEB DEVELOPMENT SERVICES --- */}
                <A4Page>
                    <div className="mb-12 text-center">
                        <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm tracking-widest font-bold mb-4">DESARROLLO WEB</div>
                        <h2 className="text-4xl font-bold mb-2 text-gray-900">Tu Presencia Digital</h2>
                        <p className="text-gray-500">Estrategia, diseño y tecnología para vender más.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* LANDING PAGE */}
                        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 h-auto md:h-44 group hover:border-purple-300 transition-all">
                            <div className="w-full md:w-1/3 bg-purple-50 flex items-center justify-center p-6 relative">
                                <div className="text-center relative z-10">
                                    <h3 className="font-bold text-xl mb-1 text-purple-900">Landing Page</h3>
                                    <div className="text-2xl font-bold text-purple-600">S/ 500</div>
                                    <div className="text-[10px] text-gray-500">Incluido IGV</div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-600">
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-600" /> 1 Sección (1 página)</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-600" /> Hosting x 1 año</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-600" /> Dominio x 1 año</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-600" /> Certificado SSL</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-purple-600" /> Entrega: 3 días</div>
                                    <div className="col-span-2 text-gray-400 italic text-[10px]">Ideal para campañas de publicidad</div>
                                </div>
                            </div>
                        </div>

                        {/* EMPRESARIAL */}
                        <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-blue-500/30 h-auto md:h-52 relative transform md:scale-105 z-10 text-white">
                            <div className="absolute top-0 right-0 px-3 py-1 bg-blue-600 text-white text-[10px] uppercase font-bold rounded-bl-xl">Más Vendido</div>
                            <div className="w-full md:w-1/3 bg-blue-900/40 flex items-center justify-center p-6 relative">
                                <div className="text-center relative z-10">
                                    <h3 className="font-bold text-xl mb-1 text-white">Empresarial</h3>
                                    <div className="text-3xl font-bold text-blue-400">S/ 1200</div>
                                    <div className="text-[10px] text-gray-300">Incluido IGV</div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center text-gray-100">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-400" /> Hasta 12 Secciones</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-400" /> Hosting & Dominio 1 año</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-400" /> Autoadministrable</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-400" /> Cotizador Web</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-400" /> SEO Básico</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-blue-400" /> Entrega: 7 días</div>
                                    <div className="col-span-2 flex items-center gap-2 text-white font-medium bg-blue-500/20 p-1 rounded"><Check size={12} className="text-blue-400" /> Panel Administrativo Incluido</div>
                                </div>
                            </div>
                        </div>

                        {/* E-COMMERCE */}
                        <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 h-auto md:h-56 group hover:border-pink-300 transition-all">
                            <div className="w-full md:w-1/3 bg-pink-50 flex items-center justify-center p-6 relative">
                                <div className="text-center relative z-10">
                                    <h3 className="font-bold text-xl mb-1 text-pink-900">E-commerce</h3>
                                    <div className="text-2xl font-bold text-pink-600">S/ 2000</div>
                                    <div className="text-[10px] text-gray-500">Incluido IGV</div>
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-600">
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Hasta 14 Secciones</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Carrito + Pagos</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Gestión de Pedidos</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Reportes de Venta</div>
                                    <div className="flex items-center gap-2"><Check size={12} className="text-pink-500" /> Entrega: 10 días</div>
                                    <div className="col-span-2 text-[10px] text-gray-500 mt-2 p-2 border border-gray-200 rounded bg-gray-50">* Incluye carga inicial de productos y capacitación de uso.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 4: PROCESS & WORKFLOW (Adding Professionalism) --- */}
                <A4Page>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        <h2 className="text-3xl font-light uppercase tracking-[0.2em] text-gray-900">Cómo Trabajamos</h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30"></div>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shrink-0 z-10">
                                    <Search size={32} className="text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1. Descubrimiento</h3>
                                    <p className="text-gray-500 max-w-lg">
                                        Analizamos tu negocio, tus competidores y tus objetivos. No solo entregamos software, entregamos una estrategia comercial.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center shrink-0 z-10">
                                    <Laptop size={32} className="text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">2. Diseño y Desarrollo</h3>
                                    <p className="text-gray-500 max-w-lg">
                                        Creamos tu plataforma con las últimas tecnologías del mercado (Next.js, Cloud). Priorizamos velocidad, seguridad y estética.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-white border-2 border-pink-500 flex items-center justify-center shrink-0 z-10">
                                    <Rocket size={32} className="text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">3. Lanzamiento y Capacitación</h3>
                                    <p className="text-gray-500 max-w-lg">
                                        Desplegamos tu proyecto en servidores de alta velocidad. Te capacitamos a ti y a tu equipo para sacar el máximo provecho.
                                    </p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex gap-8 relative">
                                <div className="w-20 h-20 rounded-full bg-white border-2 border-green-500 flex items-center justify-center shrink-0 z-10">
                                    <Zap size={32} className="text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">4. Soporte Continuo</h3>
                                    <p className="text-gray-500 max-w-lg">
                                        No te dejamos solo. Tendrás soporte técnico directo por WhatsApp y actualizaciones constantes de seguridad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>


                {/* --- PAGE 6: FAQ --- */}
                <A4Page>
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900">Preguntas Frecuentes</h2>
                        <p className="text-gray-500">Resuelve tus dudas antes de empezar.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿Necesito firmar un contrato de permanencia?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                No. Nuestros planes son prepago (mensual o anual). Puedes cancelar cuando desees sin penalidades. Queremos que te quedes por la calidad de nuestro servicio, no por obligación.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿El sistema funciona sin internet?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Falconext es una tecnología Cloud que requiere internet para sincronizar con SUNAT en tiempo real. Sin embargo, está optimizado para funcionar con datos móviles mínimos, consumiendo muy pocos megas.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿Qué incluye el soporte técnico?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Soporte prioritario via WhatsApp y llamadas. Te ayudamos con dudas de uso, configuración de impresoras y resolución de problemas. En planes Empresariales, incluimos capacitaciones personalizadas.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-200">
                            <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div>¿Entregan factura por el servicio?</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Sí, somos una empresa 100% formal. Todos nuestros precios incluyen IGV y emitimos factura electrónica que puedes usar para tu crédito fiscal.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-blue-200 bg-blue-50 mt-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 p-3 rounded-full text-white"><MessageCircle size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">¿Tienes más preguntas?</h4>
                                    <p className="text-sm text-gray-600">Escríbenos al WhatsApp: <strong>991 065 217</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>




                {/* --- PAGE 7: CONTACT (FINAL) --- */}
                <A4Page className="flex flex-col items-center justify-center relative" lastPage={true}>
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        {/* Decorative Element */}
                        <div className="w-64 h-64 border-4 border-gray-300 rounded-full"></div>
                        <div className="w-64 h-64 border-4 border-gray-300 rounded-full absolute top-12 right-12"></div>
                    </div>

                    <div className="text-center z-10 w-full max-w-2xl">
                        <div className="mb-6 mx-auto w-20 h-20 bg-gray-900 text-white flex items-center justify-center rounded-2xl font-bold text-3xl">FN</div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Empieza Hoy</h2>
                        <p className="text-2xl text-gray-500 mb-16">
                            Transformación digital real para tu empresa.
                            <br />Solicita tu demo gratuita.
                        </p>

                        <div className="bg-white/80 rounded-3xl p-10 border border-gray-200 w-full">
                            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <Phone size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">Llámanos o WhatsApp</p>
                                    <p className="text-xl md:text-2xl font-bold text-gray-900">+51 932 332 556</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-100">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Mail size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">Correo Electrónico</p>
                                    <p className="text-xl md:text-2xl font-bold text-gray-900">soporte@falconext.pe</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                    <ExternalLink size={32} />
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">Sitio Web</p>
                                    <p className="text-xl md:text-2xl font-bold text-gray-900">www.falconext.pe</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-gray-400 text-sm">
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
