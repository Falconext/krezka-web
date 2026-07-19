'use client';

import { Printer, Target, Briefcase, DollarSign, Calendar, CreditCard, AlertCircle, TrendingUp, Handshake, CheckCircle2, XCircle, Info, Users, Check } from 'lucide-react';
import Image from 'next/image';

// --- A4 Container Pattern (Reused) ---
const A4Page = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={`w-full max-w-[210mm] mx-auto bg-white shadow-xl my-4 md:my-8 overflow-hidden relative print:shadow-none print:w-full print:h-full print:my-0 break-after-page page-break-always text-gray-900 font-helvetica ${className}`}
        >
            {/* Background Ambience - HIDDEN IN PRINT */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-30 print:hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-100/50 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col p-4 md:p-[20mm]">
                {children}
            </div>
        </div>
    );
};

export default function AsesoresPage() {

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
                    .print-hidden { display: none !important; }
                    /* Ensure tables fit in print */
                    table { width: 100% !important; }
                }
            `}</style>

            <div className="fixed top-5 right-5 z-50 print-hidden">
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform font-medium"
                >
                    <Printer size={20} />
                    Descargar Guía PDF
                </button>
            </div>

            <div id="brochure-root">

                {/* --- PAGE 1: HERO & CORE CONCEPTS --- */}
                <A4Page>
                    {/* Header Interno */}
                    <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 flex items-center justify-between px-4 md:px-8 print:hidden">
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400">KREZKA PARTNERS</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Confidencial / Uso Interno</span>
                        </div>
                    </div>

                    <div className="pt-8 text-center mb-6 mt-5">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold tracking-widest uppercase shadow-lg mb-6 print:shadow-none print:border print:border-gray-200 print:text-black">
                            <Users size={14} className="text-white print:text-black" />
                            Documento Oficial 2026
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                            Plan de Carrera <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 print:text-purple-600 print:bg-none">Comercial</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Esta guía contiene la estrategia de compensación diseñada exclusivamente para nuestros <span className="text-slate-900 font-bold">Socios Comerciales</span>. La información aquí presentada es privilegiada.
                        </p>
                    </div>

                    {/* 1. MANIFIESTO */}
                    {/* 1. OBJETIVO */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2 border-b border-gray-200 pb-2">
                            <Target className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-800">1. Objetivo</h2>
                        </div>
                        <p className="text-sm text-gray-600 mb-2 text-justify leading-relaxed">
                            Establecer un esquema de comisiones justo, escalable y sostenible para asesores comerciales independientes. Buscamos incentivar tanto la <span className="font-bold text-slate-800">captación rápida</span> como la <span className="font-bold text-slate-800">permanencia de clientes</span>.
                        </p>
                    </div>

                    {/* 2. MODALIDAD */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-2 border-b border-gray-200 pb-2">
                            <Handshake className="text-blue-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-800">2. Modalidad de Trabajo</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                                    <CheckCircle2 size={14} className="text-green-600" /> Relación
                                </h4>
                                <p className="text-xs text-slate-600">Comercial Independiente.</p>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2 text-sm">
                                    <DollarSign size={14} className="text-green-600" /> Pago
                                </h4>
                                <p className="text-xs text-slate-600">Solo por ventas cobradas.</p>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-col md:flex-row gap-3 text-[10px] text-slate-500 bg-red-50 p-2 rounded-lg border border-red-100">
                            <span className="flex items-center gap-1"><XCircle size={10} className="text-red-500" /> Sin Sueldo Fijo</span>
                            <span className="flex items-center gap-1"><XCircle size={10} className="text-red-500" /> Sin Planilla</span>
                            <span className="flex items-center gap-1"><XCircle size={10} className="text-red-500" /> Sin Beneficios</span>
                        </div>
                    </div>

                    {/* 3. SISTEMA MIXTO */}
                    <div className="mb-4">
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-2">
                            <TrendingUp className="text-purple-600" size={24} />
                            <h2 className="text-xl font-bold text-gray-800">3. Sistema Mixto de Comisiones</h2>
                        </div>

                        <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 mb-4 flex gap-3 text-xs text-blue-800">
                            <Info className="shrink-0" size={16} />
                            <div>
                                <p className="font-bold mb-1">⚡ Flexibilidad Total: Tú decides en cada venta.</p>
                                <p>El modelo no es fijo para ti. Puedes elegir <strong>Modelo A</strong> para un cliente y <strong>Modelo B</strong> para otro, según tu estrategia.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                            {/* VS Badge */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white font-black text-xs w-6 h-6 items-center justify-center rounded-full z-10 border-2 border-white">VS</div>

                            {/* MODELO A */}
                            <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm hover:border-blue-500 transition-colors group">
                                <div className="text-center mb-3">
                                    <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Comisión Única</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Pago Inmediato • Sin Seguimiento</span>
                                </div>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                                        <span><strong>Comisión Alta</strong> (1 solo pago).</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                                        <span>Sobre el primer pago (Mensual o Anual).</span>
                                    </li>
                                </ul>
                                <div className="bg-slate-50 p-3 rounded-lg text-center">
                                    <p className="text-[10px] uppercase font-bold text-slate-800 mb-1">Ideal para:</p>
                                    <p className="text-xs text-slate-500 leading-tight">Asesores nuevos, ventas rápidas y alto volumen.</p>
                                </div>
                            </div>

                            {/* MODELO B */}
                            <div className="bg-white p-4 rounded-xl border-2 border-slate-100 shadow-sm hover:border-purple-500 transition-colors group">
                                <div className="text-center mb-3">
                                    <h3 className="text-lg font-black text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">Recurrente Limitada</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Pago Mensual • Requiere Seguimiento</span>
                                </div>
                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                                        <span><strong>Menor Comisión</strong> pero recurrente.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                                        <span>Mensual: <strong>10%</strong> (Max 6 meses).</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm text-slate-600">
                                        <Check className="text-green-500 shrink-0 mt-0.5" size={14} />
                                        <span>Anual: <strong>8%</strong> (Prorrateado).</span>
                                    </li>
                                </ul>
                                <div className="bg-slate-50 p-3 rounded-lg text-center">
                                    <p className="text-[10px] uppercase font-bold text-slate-800 mb-1">Ideal para:</p>
                                    <p className="text-xs text-slate-500 leading-tight">Ventas consultivas y clientes de mayor valor.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER INTERNO */}
                    <div className="mt-auto border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest gap-2 text-center md:text-left">
                        <span>KREZKA &copy; 2026</span>
                        <span>DOCUMENTO CONFIDENCIAL - PROHIBIDA SU DISTRIBUCIÓN</span>
                    </div>
                </A4Page>


                {/* --- PAGE 2: DETALLE COMISIONES (MODELO A - DEFAULT) --- */}
                <A4Page>
                    <div className="mb-4 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-4 gap-2">
                        <div>
                            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1 block">Ejemplo de Ganancias</span>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Aplicación del Modelo A</h2>
                        </div>
                        <div className="text-left md:text-right">
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">COMISIÓN ÚNICA</span>
                        </div>
                    </div>

                    {/* MENSUAL */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-slate-700">Ventas Mensuales</h3>
                        </div>
                        <div className="overflow-x-auto rounded-xl border border-slate-200 pb-2">
                            <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold">
                                    <tr>
                                        <th className="p-3">Plan</th>
                                        <th className="p-3">Precio</th>
                                        <th className="p-3 text-right text-blue-600">Comisión (Única)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-700 text-sm">
                                    <tr className="border-b border-slate-100"><td className="p-3 font-bold">Micro</td><td className="p-3">S/ 35.00</td><td className="p-3 text-right font-bold text-slate-900">S/ 10.00</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-3 font-bold">Emprende</td><td className="p-3">S/ 42.00</td><td className="p-3 text-right font-bold text-slate-900">S/ 12.00</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-3 font-bold">Control</td><td className="p-3">S/ 49.90</td><td className="p-3 text-right font-bold text-slate-900">S/ 15.00</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-3 font-bold">Bacán</td><td className="p-3">S/ 59.90</td><td className="p-3 text-right font-bold text-slate-900">S/ 18.00</td></tr>
                                    <tr className="border-b border-slate-100"><td className="p-3 font-bold">Súper</td><td className="p-3">S/ 79.90</td><td className="p-3 text-right font-bold text-slate-900">S/ 25.00</td></tr>
                                    <tr><td className="p-3 font-bold">Mega</td><td className="p-3">S/ 99.90</td><td className="p-3 text-right font-bold text-slate-900">S/ 30.00</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ANUAL */}
                    <div className="mb-6">
                        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl print:hidden"></div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="text-yellow-400">⚡</span> Ventas Anuales (Modelo A)</h3>

                            <div className="overflow-x-auto pb-2">
                                <table className="w-full text-left border-collapse min-w-[500px]">
                                    <thead className="text-slate-400 text-[10px] uppercase font-bold border-b border-white/10">
                                        <tr>
                                            <th className="py-2">Plan</th>
                                            <th className="py-2">Precio</th>
                                            <th className="py-2 text-right text-green-400">Comisión Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="border-b border-white/5"><td className="py-2 font-bold">Micro</td><td className="py-2 text-slate-400">S/ 350</td><td className="py-2 text-right font-bold text-green-400">S/ 70.00</td></tr>
                                        <tr className="border-b border-white/5"><td className="py-2 font-bold">Emprende</td><td className="py-2 text-slate-400">S/ 420</td><td className="py-2 text-right font-bold text-green-400">S/ 85.00</td></tr>
                                        <tr className="border-b border-white/5"><td className="py-2 font-bold text-white">Control</td><td className="py-2 text-slate-400">S/ 500</td><td className="py-2 text-right font-bold text-green-400">S/ 100.00</td></tr>
                                        <tr className="border-b border-white/5"><td className="py-2 font-bold">Bacán</td><td className="py-2 text-slate-400">S/ 600</td><td className="py-2 text-right font-bold text-green-400">S/ 120.00</td></tr>
                                        <tr><td className="py-2 font-bold">Mega</td><td className="py-2 text-slate-400">S/ 1000</td><td className="py-2 text-right font-bold text-green-400">S/ 200.00</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* SIMULACIÓN REALISTA */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden print:shadow-none print:border print:border-slate-200">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 border-b border-white/20 pb-3">
                                <TrendingUp className="text-yellow-400" size={24} />
                                <h3 className="text-xl font-bold">Proyección Mensual Realista</h3>
                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* ESCENARIO 1: INICIO */}
                                <div className="bg-white/10 rounded-xl p-5 border border-white/10">
                                    <h4 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Etapa 1: Construcción</h4>
                                    <p className="text-xs text-slate-200 mb-4">
                                        Cerrando solo <strong>3 ventas por semana</strong> (12 al mes):
                                    </p>
                                    <ul className="space-y-2 text-xs mb-4">
                                        <li className="flex justify-between"><span>4 x Plan Control</span> <span className="opacity-70">S/ 400</span></li>
                                        <li className="flex justify-between"><span>4 x Plan Bacán</span> <span className="opacity-70">S/ 480</span></li>
                                        <li className="flex justify-between"><span>4 x Plan Mega</span> <span className="opacity-70">S/ 800</span></li>
                                    </ul>
                                    <div className="flex justify-between items-center text-yellow-400 text-xs font-bold pt-2 border-t border-white/10 mt-auto">
                                        <span>+ Bono Cartera (50)</span>
                                        <span>S/ 500</span>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-[10px] text-slate-400 uppercase">Mensual Estimado</p>
                                        <p className="text-3xl font-black text-white">S/ 2,180</p>
                                    </div>
                                </div>

                                {/* ESCENARIO 2: 150 CLIENTES */}
                                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl p-5 border border-yellow-500/30 relative overflow-hidden group">
                                    <div className="absolute top-[-20%] right-[-20%] w-[100px] h-[100px] bg-yellow-500/20 blur-[50px] group-hover:bg-yellow-500/40 transition-all"></div>

                                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                        <div className="bg-yellow-500 text-indigo-900 text-[10px] font-black px-2 py-0.5 rounded">META</div>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">Nivel: Experto</h4>
                                    </div>

                                    <p className="text-xs text-slate-200 mb-4 h-8">
                                        Con <strong>150 Clientes Activos</strong> en tu cartera:
                                    </p>

                                    <ul className="space-y-3 text-xs mb-5">
                                        <li className="flex justify-between items-center bg-black/20 p-2 rounded">
                                            <span className="text-blue-200">Bono Cartera (Fijo)</span>
                                            <span className="font-bold text-yellow-400 text-sm">S/ 1,500</span>
                                        </li>
                                        <li className="flex justify-between items-center text-slate-300 px-2">
                                            <span>Referidos (5 ventas/mes)</span>
                                            <span className="font-bold text-white">~ S/ 750</span>
                                        </li>
                                        <li className="flex justify-between items-center text-slate-300 px-2">
                                            <span>Mentoría (Equipo)</span>
                                            <span className="font-bold text-white">~ S/ 1,200</span>
                                        </li>
                                    </ul>

                                    <div className="mt-auto text-center bg-black/20 rounded-lg p-3 border border-yellow-500/20">
                                        <p className="text-[10px] text-yellow-200 uppercase tracking-widest mb-1">Total Proyectado</p>
                                        <p className="text-3xl font-black text-white">S/ 3,450+</p>
                                        <p className="text-[9px] text-slate-400 mt-1">Sin contar ventas directas nuevas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </A4Page>



                {/* --- PAGE 3: BONOS ESPECIALES & BENEFICIOS --- */}
                <A4Page>
                    {/* 4. REGLAS GENERALES & TERMINOS (Moved here) */}
                    <div className="mb-8 border-b border-slate-100 pb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="text-slate-600" size={24} />
                            <h2 className="text-xl font-bold text-slate-800">Términos del Acuerdo</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-sm text-slate-900 mb-3 uppercase tracking-wide">Reglas Generales</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Comisión solo con pago confirmado.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Un cliente pertenece a un solo asesor.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Cancelación del servicio corta la comisión.</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> Cambios de plan no generan nueva comisión.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-slate-900 mb-3 uppercase tracking-wide">Extinción</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li className="flex items-start gap-2 text-red-600/80"><XCircle size={14} className="mt-0.5 shrink-0" /> Si el cliente cancela.</li>
                                    <li className="flex items-start gap-2 text-red-600/80"><XCircle size={14} className="mt-0.5 shrink-0" /> Si el asesor deja de colaborar.</li>
                                    <li className="flex items-start gap-2 text-red-600/80"><XCircle size={14} className="mt-0.5 shrink-0" /> Si se alcanza el límite de meses (Modelo B).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-slate-50 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                            <span><strong>Jurisdicción:</strong> República del Perú</span>
                            <span><strong>Pagos:</strong> Transferencia, Yape, Plin (Contra RxH)</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                            <Users className="text-indigo-600" size={28} />
                            <h2 className="text-2xl font-bold text-gray-800">Bonos Especiales</h2>
                        </div>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Al alcanzar el nivel de <span className="font-bold text-indigo-700">Líder Comercial</span>, desbloqueas beneficios exclusivos. Diseñamos estos bonos para garantizar la sostenibilidad del negocio y premiar tu retención.
                        </p>

                        <div className="space-y-8">
                            {/* BENEFICIO 1: CARTERA */}
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex flex-col md:flex-row gap-5 items-start">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-100 shrink-0">
                                    <DollarSign className="text-indigo-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">1. Bono de Cartera (Progresivo)</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        Recibe <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">S/ 500.00 fijos</span> por cada bloque de 50 clientes activos que gestiones.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 mb-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <CheckCircle2 size={12} className="text-indigo-500" />
                                            <span className="text-xs font-bold text-indigo-800 uppercase tracking-wide">Escala de Bonos Fijos</span>
                                        </div>
                                        <ul className="text-xs text-slate-600 space-y-1 ml-4">
                                            <li className="flex justify-between w-40"><span>50 Clientes:</span> <span className="font-bold text-slate-900">S/ 500 /mes</span></li>
                                            <li className="flex justify-between w-40"><span>100 Clientes:</span> <span className="font-bold text-slate-900">S/ 1,000 /mes</span></li>
                                            <li className="flex justify-between w-40"><span>150 Clientes:</span> <span className="font-bold text-slate-900">S/ 1,500 /mes</span></li>
                                        </ul>
                                    </div>
                                    <p className="text-[10px] text-slate-400 italic">
                                        * Ingreso 100% residual solo por fidelización.
                                    </p>
                                </div>
                            </div>

                            {/* BENEFICIO 2: LEADS */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col md:flex-row gap-5 items-start">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100 shrink-0">
                                    <Target className="text-blue-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">2. Acceso a Leads Cualificados</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        Olvídate de prospectar en frío. La empresa te asignará <span className="font-bold text-slate-800">Hot Leads</span> provenientes de nuestras campañas de marketing digital.
                                    </p>
                                    <ul className="text-xs text-slate-500 space-y-1">
                                        <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500" /> Clientes que ya mostraron interés.</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-blue-500" /> Mayor tasa de cierre.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* BENEFICIO 3: MENTORÍA */}
                            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 flex flex-col md:flex-row gap-5 items-start">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-purple-100 shrink-0">
                                    <Users className="text-purple-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">3. Mentoría (Camino a Director)</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        Empieza a construir tu equipo. Entrena a nuevos asesores (Juniors) y gana una comisión por sus ventas mientras aprenden.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="px-3 py-1 bg-purple-200 text-purple-800 text-xs font-bold rounded-full">
                                            5% Override
                                        </div>
                                        <span className="text-xs text-slate-500">Sobre las ventas de tus mentoreados.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-t border-slate-100 pt-6"></div>
                </A4Page>



                {/* --- PAGE 4: GROWTH --- */}
                <A4Page>
                    <div className="h-full flex flex-col relative overflow-hidden bg-slate-900 rounded-none p-0">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none print:hidden"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none print:hidden"></div>

                        <div className="relative z-10 p-6 md:p-[20mm] flex flex-col h-full">
                            <div className="mb-12">
                                <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">El Futuro</span>
                                <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Escalabilidad</h1>
                                <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                                    No hay límite para tu crecimiento. Este modelo está diseñado para que construyas tu propio imperio comercial dentro de Krezka.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mb-12">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-2xl shrink-0">1</div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl">Partners</h3>
                                        <p className="text-slate-400 text-sm">Inicia gestionando tu propia cartera de clientes.</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-black text-2xl shrink-0">2</div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl">Líder Comercial</h3>
                                        <p className="text-slate-400 text-sm mb-2">Gestionando +50 clientes activos.</p>
                                        <ul className="text-xs text-blue-200 space-y-1">
                                            <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 size={12} /> Bono de Cartera (Ingreso Residual).</li>
                                            <li className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 size={12} /> Acceso a Leads Cualificados de Empresa.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-2xl transform md:scale-105 border border-white/20 text-center md:text-left transition-transform">
                                    <div className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center font-black text-2xl shrink-0">3</div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl">Director Zonal</h3>
                                        <p className="text-blue-100 text-sm">Gestiona equipos de venta y comisiona por sus resultados.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto text-center border-t border-white/10 pt-8">
                                <p className="text-slate-500 text-sm mb-4">¿Estás listo para comenzar?</p>
                                <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                                    <RocketIcon className="text-blue-600" />
                                    Iniciar Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </A4Page>

            </div>
        </div >
    );
}

function RocketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 5.86-2.05 8a22 22 0 0 1-3.95 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
