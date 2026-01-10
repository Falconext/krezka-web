'use client';

import { Printer, Target, Briefcase, DollarSign, Calendar, CreditCard, AlertCircle, TrendingUp, Handshake, CheckCircle2, XCircle, Info, Users, Check } from 'lucide-react';
import Image from 'next/image';

// --- A4 Container Pattern (Reused) ---
const A4Page = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={`w-[210mm] min-h-[297mm] mx-auto bg-white shadow-2xl my-8 overflow-hidden relative print:shadow-none print:w-full print:h-full print:my-0 break-after-page page-break-always text-gray-900 font-helvetica ${className}`}
        >
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-30">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-100/50 blur-[100px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full h-full flex flex-col p-[20mm]">
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
                    Descargar Guía PDF
                </button>
            </div>

            <div id="brochure-root">

                {/* --- PAGE 1: HERO & CORE CONCEPTS --- */}
                <A4Page>
                    {/* Header Interno */}
                    <div className="absolute top-0 left-0 w-full h-12 bg-gray-900 flex items-center justify-between px-8 print:hidden">
                        <span className="text-xs font-bold tracking-[0.2em] text-gray-400">FALCONEXT PARTNERS</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Confidencial / Uso Interno</span>
                        </div>
                    </div>

                    <div className="pt-12 text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold tracking-widest uppercase shadow-lg mb-6">
                            <Users size={14} className="text-white" />
                            Documento Oficial 2026
                        </div>
                        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                            Plan de Carrera <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Comercial</span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
                            Esta guía contiene la estrategia de compensación diseñada exclusivamente para nuestros <span className="text-slate-900 font-bold">Socios Comerciales</span>. La información aquí presentada es privilegiada.
                        </p>
                    </div>

                    {/* 1. MANIFIESTO */}
                    {/* 1. OBJETIVO */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-2">
                            <Target className="text-blue-600" size={28} />
                            <h2 className="text-2xl font-bold text-gray-800">1. Objetivo</h2>
                        </div>
                        <p className="text-gray-600 mb-4 text-justify leading-relaxed">
                            Establecer un esquema de comisiones justo, escalable y sostenible para asesores comerciales independientes. Buscamos incentivar tanto la <span className="font-bold text-slate-800">captación rápida</span> como la <span className="font-bold text-slate-800">permanencia de clientes</span> a largo plazo.
                        </p>
                    </div>

                    {/* 2. MODALIDAD */}
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4 border-b border-gray-200 pb-2">
                            <Handshake className="text-blue-600" size={28} />
                            <h2 className="text-2xl font-bold text-gray-800">2. Modalidad de Trabajo</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-600" /> Relación
                                </h4>
                                <p className="text-sm text-slate-600">Comercial Independiente.</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <DollarSign size={16} className="text-green-600" /> Pago
                                </h4>
                                <p className="text-sm text-slate-600">Solo por ventas efectivamente cobradas.</p>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4 text-xs text-slate-500 bg-red-50 p-3 rounded-lg border border-red-100">
                            <span className="flex items-center gap-1"><XCircle size={12} className="text-red-500" /> Sin Sueldo Fijo</span>
                            <span className="flex items-center gap-1"><XCircle size={12} className="text-red-500" /> Sin Planilla</span>
                            <span className="flex items-center gap-1"><XCircle size={12} className="text-red-500" /> Sin Beneficios Laborales</span>
                        </div>
                    </div>

                    {/* 3. SISTEMA MIXTO */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-200 pb-2">
                            <TrendingUp className="text-purple-600" size={28} />
                            <h2 className="text-2xl font-bold text-gray-800">3. Sistema Mixto de Comisiones</h2>
                        </div>

                        <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 mb-6 flex gap-3 text-sm text-blue-800">
                            <Info className="shrink-0" size={20} />
                            <div>
                                <p className="font-bold mb-1">⚡ Flexibilidad Total: Tú decides en cada venta.</p>
                                <p>El modelo no es fijo para ti. Puedes elegir <strong>Modelo A</strong> para un cliente y <strong>Modelo B</strong> para otro, según tu estrategia.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 relative">
                            {/* VS Badge */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 text-white font-black text-sm w-8 h-8 flex items-center justify-center rounded-full z-10 border-4 border-white">VS</div>

                            {/* MODELO A */}
                            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-blue-500 transition-colors group">
                                <div className="text-center mb-4">
                                    <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">MODELO A</div>
                                    <h3 className="text-xl font-bold text-slate-900">Comisión Única</h3>
                                    <p className="text-xs text-slate-500 mt-1">Pago Inmediato • Sin Seguimiento</p>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-700 mb-6">
                                    <li className="flex items-start gap-2">
                                        <Check className="text-green-500 mt-0.5" size={16} />
                                        <span><strong>Comisión Alta</strong> (1 solo pago).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="text-green-500 mt-0.5" size={16} />
                                        <span>Sobre el primer pago (Mensual o Anual).</span>
                                    </li>
                                </ul>
                                <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500 text-center">
                                    <span className="font-bold block text-slate-900 mb-1">Ideal para:</span>
                                    Asesores nuevos, ventas rápidas y alto volumen.
                                </div>
                            </div>

                            {/* MODELO B */}
                            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm hover:border-purple-500 transition-colors group">
                                <div className="text-center mb-4">
                                    <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-2">MODELO B</div>
                                    <h3 className="text-xl font-bold text-slate-900">Recurrente Limitada</h3>
                                    <p className="text-xs text-slate-500 mt-1">Pago Mensual • Requiere Seguimiento</p>
                                </div>
                                <ul className="space-y-3 text-sm text-slate-700 mb-6">
                                    <li className="flex items-start gap-2">
                                        <Check className="text-green-500 mt-0.5" size={16} />
                                        <span><strong>Menor Comisión</strong> pero recurrente.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="text-green-500 mt-0.5" size={16} />
                                        <span>Mensual: <strong>10%</strong> (Max 6 meses).</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="text-green-500 mt-0.5" size={16} />
                                        <div className="flex flex-col">
                                            <span>Anual: <strong>8%</strong> (Prorrateado).</span>
                                            <span className="text-[10px] text-slate-400 leading-tight mt-1">* Se divide la comisión total entre 12 y se paga mes a mes para asegurar el soporte al cliente.</span>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-500 text-center">
                                    <span className="font-bold block text-slate-900 mb-1">Ideal para:</span>
                                    Ventas consultivas y clientes de mayor valor.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER INTERNO */}
                    <div className="mt-auto border-t border-slate-100 pt-6 flex justify-between items-center text-[10px] text-slate-400 uppercase tracking-widest">
                        <span>FALCONEXT &copy; 2026</span>
                        <span>DOCUMENTO CONFIDENCIAL - PROHIBIDA SU DISTRIBUCIÓN</span>
                    </div>
                </A4Page>


                {/* --- PAGE 2: DETALLE COMISIONES (MODELO A - DEFAULT) --- */}
                <A4Page>
                    <div className="mb-4 flex items-end justify-between border-b border-slate-100 pb-4">
                        <div>
                            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1 block">Ejemplo de Ganancias</span>
                            <h2 className="text-3xl font-black text-slate-900">Aplicación del Modelo A</h2>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-3 py-1 rounded-full">COMISIÓN ÚNICA</span>
                        </div>
                    </div>

                    {/* MENSUAL */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-slate-700">Ventas Mensuales</h3>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-slate-200">
                            <table className="w-full text-left border-collapse">
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
                    <div className="mb-10">
                        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl"></div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><span className="text-yellow-400">⚡</span> Ventas Anuales (Modelo A)</h3>

                            <table className="w-full text-left border-collapse">
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

                    {/* 4. REGLAS GENERALES & TERMINOS */}
                    <div className="mt-8 border-t border-slate-100 pt-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <Briefcase size={20} className="text-slate-400" />
                            Términos del Acuerdo
                        </h2>

                        <div className="grid grid-cols-2 gap-8">
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

                        <div className="mt-6 bg-slate-50 p-4 rounded-lg flex items-center justify-between text-xs text-slate-500">
                            <span><strong>Jurisdicción:</strong> República del Perú</span>
                            <span><strong>Pagos:</strong> Transferencia, Yape, Plin (Contra RxH)</span>
                        </div>
                    </div>
                </A4Page>



                {/* --- PAGE 3: BONOS ESPECIALES & BENEFICIOS --- */}
                <A4Page>
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
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 flex gap-5 items-start">
                                <div className="bg-white p-3 rounded-xl shadow-sm border border-indigo-100 shrink-0">
                                    <DollarSign className="text-indigo-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">1. Bono de Cartera (Residual)</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                                        Recibe un bono fijo de <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">S/ 500.00 / mes</span> adicionales por mantener activa tu cartera de clientes.
                                    </p>
                                    <div className="bg-white p-3 rounded-lg border border-indigo-100 mb-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <CheckCircle2 size={12} className="text-indigo-500" />
                                            <span className="text-xs font-bold text-indigo-800 uppercase tracking-wide">Requisito para Calificar</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-2">
                                            Para desbloquear este bono mensual, tu cartera debe cumplir <strong>cualquiera</strong> de estas dos metas:
                                        </p>
                                        <ul className="text-xs text-slate-600 space-y-1 ml-4 list-disc">
                                            <li>Gestionar más de <strong>50 clientes activos</strong> <span className="text-slate-400 font-normal">(Modelo A + Modelo B)</span>.</li>
                                            <li className="list-none text-[10px] font-bold text-indigo-300 py-0.5 ml-[-10px] tracking-widest">--- Ó ---</li>
                                            <li>Generar una facturación mensual superior a <strong>S/ 2,500</strong>.</li>
                                        </ul>
                                    </div>
                                    <p className="text-[10px] text-slate-400 italic">
                                        * Este bono premia la consistencia y el volumen de tu cartera.
                                    </p>
                                </div>
                            </div>

                            {/* BENEFICIO 2: LEADS */}
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex gap-5 items-start">
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
                            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100 flex gap-5 items-start">
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
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

                        <div className="relative z-10 p-[20mm] flex flex-col h-full">
                            <div className="mb-12">
                                <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-2 block">El Futuro</span>
                                <h1 className="text-5xl font-black text-white mb-6">Escalabilidad</h1>
                                <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                                    No hay límite para tu crecimiento. Este modelo está diseñado para que construyas tu propio imperio comercial dentro de Falconext.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mb-12">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-2xl">1</div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl">Partners</h3>
                                        <p className="text-slate-400 text-sm">Inicia gestionando tu propia cartera de clientes.</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-black text-2xl">2</div>
                                    <div>
                                        <h3 className="text-white font-bold text-xl">Líder Comercial</h3>
                                        <p className="text-slate-400 text-sm mb-2">Gestionando +50 clientes activos.</p>
                                        <ul className="text-xs text-blue-200 space-y-1">
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Bono de Cartera (Ingreso Residual).</li>
                                            <li className="flex items-center gap-2"><CheckCircle2 size={12} /> Acceso a Leads Cualificados de Empresa.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl flex items-center gap-6 shadow-2xl transform scale-105 border border-white/20">
                                    <div className="w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center font-black text-2xl">3</div>
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
