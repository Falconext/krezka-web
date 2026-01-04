"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/public/assets/fnlogo.png";
import { CheckCircle2, Download, Printer, Store, ShoppingCart } from "lucide-react";

export default function BrochurePreciosPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            {/* Print button - only visible on screen */}
            {isClient && (
                <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
                    <button
                        onClick={handlePrint}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center gap-2 font-semibold"
                    >
                        <Download className="w-5 h-5" />
                        Descargar PDF
                    </button>
                    <button
                        onClick={handlePrint}
                        className="bg-white border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-xl shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2 font-semibold"
                    >
                        <Printer className="w-5 h-5" />
                        Imprimir
                    </button>
                </div>
            )}

            {/* A4 Paper Container */}
            <div className="brochure-container bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8">
                <div className="brochure-page bg-white max-w-[25cm] mx-auto shadow-2xl">
                    {/* Elegant Header */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-900"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative px-12 py-12">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-xl">
                                        <Image src={logo} alt="Falconext" width={60} height={60} />
                                    </div>
                                    <div>
                                        <h1 className="text-5xl font-extrabold text-white tracking-tight">
                                            FALCONEXT
                                        </h1>
                                        <p className="text-orange-100 text-xl mt-1 font-medium">
                                            Sistema Inteligente de Facturación
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                                    <p className="text-sm text-orange-100 font-medium">
                                        Certificado por
                                    </p>
                                    <p className="text-3xl font-black text-white">SUNAT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Premium Title Section */}
                    <div className="px-12 pt-12 pb-8">
                        <div className="text-center">
                            <div className="inline-block">
                                <h2 className="text-4xl font-black text-gray-900 mb-3 bg-gradient-to-r from-gray-600 to-gray-500 bg-clip-text text-transparent">
                                    Planes Flexibles para Cada Negocio
                                </h2>
                                <div className="h-1.5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full w-full"></div>
                            </div>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
                                Potencia tu negocio con el sistema #1 de facturación electrónica
                                en Perú. Controla inventario, emite comprobantes y gestiona
                                ventas desde cualquier dispositivo.
                            </p>
                        </div>
                    </div>

                    {/* Planes Formales Section */}
                    <div className="px-12 py-8">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                                <Store className="w-7 h-7" />
                                <h3 className="text-2xl font-bold">
                                    Planes para Negocios Formales
                                </h3>
                            </div>
                            <p className="text-gray-600 mt-3 ml-1">
                                Con RUC · Facturación electrónica SUNAT
                            </p>
                        </div>

                        {/* Premium Plans Grid - Top 3 */}
                        <div className="grid grid-cols-3 gap-6 mb-6">
                            {/* Plan Micro */}
                            <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-7 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-center mb-5">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Micro
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium">
                                        100% Digital
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                                    <div className="mb-3">
                                        <span className="text-gray-500 text-sm">Desde</span>
                                        <div className="text-5xl font-black text-gray-900">
                                            S/ 35
                                        </div>
                                        <div className="text-gray-500 text-sm font-medium">
                                            mensual
                                        </div>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-3">
                                        <div className="text-2xl font-bold text-green-700">
                                            S/ 350
                                        </div>
                                        <div className="text-green-600 text-xs font-bold">
                                            PAGO ANUAL · AHORRA S/70
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <strong>100</strong> Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Notas ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Inventario completo</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Reportes avanzados</span>
                                    </li>
                                </ul>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2 text-xs text-orange-600 font-bold">
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>+ Tienda Virtual: S/40/mes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Plan Emprende */}
                            <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-7 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="text-center mb-5">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Emprende
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium">
                                        100% Digital
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                                    <div className="mb-3">
                                        <span className="text-gray-500 text-sm">Desde</span>
                                        <div className="text-5xl font-black text-gray-900">
                                            S/ 42
                                        </div>
                                        <div className="text-gray-500 text-sm font-medium">
                                            mensual
                                        </div>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-2 mt-3">
                                        <div className="text-2xl font-bold text-green-700">
                                            S/ 420
                                        </div>
                                        <div className="text-green-600 text-xs font-bold">
                                            PAGO ANUAL · AHORRA S/84
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <strong>300</strong> Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Notas ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Inventario completo</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Reportes avanzados</span>
                                    </li>
                                </ul>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2 text-xs text-orange-600 font-bold">
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>+ Tienda Virtual: S/45/mes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Plan Control - DESTACADO */}
                            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border-4 border-green-500 rounded-2xl p-7 shadow-2xl transform scale-105">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-xs font-black shadow-lg">
                                        ⭐ MÁS POPULAR
                                    </div>
                                </div>
                                <div className="text-center mb-5 mt-2">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Control
                                    </h4>
                                    <p className="text-sm text-green-700 font-bold">
                                        + Impresora Térmica 🎁
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-green-200">
                                    <div className="mb-3">
                                        <span className="text-gray-500 text-sm">Desde</span>
                                        <div className="text-5xl font-black text-gray-900">
                                            S/ 49
                                            <sup className="text-2xl">.90</sup>
                                        </div>
                                        <div className="text-gray-500 text-sm font-medium">
                                            mensual
                                        </div>
                                    </div>
                                    <div className="bg-green-100 border-2 border-green-300 rounded-lg p-2 mt-3">
                                        <div className="text-2xl font-bold text-green-800">
                                            S/ 500
                                        </div>
                                        <div className="text-green-700 text-xs font-black">
                                            PAGO ANUAL · AHORRA S/99
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-900 font-bold">
                                            500 Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-900 font-bold">
                                            Impresora Térmica GRATIS
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Notas ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Todo incluido</span>
                                    </li>
                                </ul>
                                <div className="mt-4 pt-4 border-t border-green-300">
                                    <div className="flex items-center gap-2 text-xs text-orange-600 font-bold">
                                        <ShoppingCart className="w-4 h-4" />
                                        <span>+ Tienda Virtual: S/60/mes</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-2xl p-6">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900">Bacán</h4>
                                    <p className="text-sm text-indigo-600 font-semibold">
                                        Para crecer rápido
                                    </p>
                                </div>
                                <div className="text-center mb-5 pb-5 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-black text-gray-900">
                                        S/ 59
                                        <sup className="text-xl">.90</sup>
                                    </div>
                                    <div className="text-gray-500 text-sm">mensual</div>
                                    <div className="bg-indigo-100 rounded-lg p-2 mt-2">
                                        <div className="text-xl font-bold text-indigo-700">
                                            S/ 600/año
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                        <span>
                                            <strong>600</strong> Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                        <span>+ Impresora incluida</span>
                                    </li>
                                </ul>
                                <div className="mt-3 pt-3 border-t border-indigo-200">
                                    <div className="text-xs text-orange-600 font-bold">
                                        + Tienda: S/64.90/mes
                                    </div>
                                </div>
                            </div>

                            {/* Plan Súper */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-2xl p-6">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900">Súper</h4>
                                    <p className="text-sm text-indigo-600 font-semibold">
                                        Alto volumen
                                    </p>
                                </div>
                                <div className="text-center mb-5 pb-5 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-black text-gray-900">
                                        S/ 79
                                        <sup className="text-xl">.90</sup>
                                    </div>
                                    <div className="text-gray-500 text-sm">mensual</div>
                                    <div className="bg-indigo-100 rounded-lg p-2 mt-2">
                                        <div className="text-xl font-bold text-indigo-700">
                                            S/ 800/año
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                        <span>
                                            <strong>800</strong> Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                        <span>+ Impresora incluida</span>
                                    </li>
                                </ul>
                                <div className="mt-3 pt-3 border-t border-indigo-200">
                                    <div className="text-xs text-orange-600 font-bold">
                                        + Tienda: S/84.90/mes
                                    </div>
                                </div>
                            </div>

                            {/* Plan Mega */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-2xl p-6">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900">Mega</h4>
                                    <p className="text-sm text-indigo-600 font-semibold">
                                        Máxima potencia
                                    </p>
                                </div>
                                <div className="text-center mb-5 pb-5 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-black text-gray-900">
                                        S/ 99
                                        <sup className="text-xl">.90</sup>
                                    </div>
                                    <div className="text-gray-500 text-sm">mensual</div>
                                    <div className="bg-indigo-100 rounded-lg p-2 mt-2">
                                        <div className="text-xl font-bold text-indigo-700">
                                            S/ 1000/año
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                        <span>
                                            <strong>1200</strong> Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                        <span>+ Impresora incluida</span>
                                    </li>
                                </ul>
                                <div className="mt-3 pt-3 border-t border-indigo-200">
                                    <div className="text-xs text-orange-600 font-bold">
                                        + Tienda: S/104.90/mes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Page Break */}
                    <div className="page-break"></div>

                    {/* Planes Nuevos Section */}
                    <div className="px-12 py-8">
                        <div className="mb-10">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                                <Store className="w-7 h-7" />
                                <h3 className="text-2xl font-bold">
                                    Planes para Negocios Nuevos
                                </h3>
                            </div>
                            <p className="text-gray-600 mt-3 ml-1">
                                Sin RUC · Empieza sin complicaciones
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            {/* Plan Emprende Free */}
                            <div className="group relative bg-white border-2 border-gray-200 rounded-2xl p-7 hover:shadow-xl transition-all">
                                <div className="absolute -top-3 right-4">
                                    <div className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
                                        GRATIS
                                    </div>
                                </div>
                                <div className="text-center mb-5 mt-2">
                                    <h4 className="text-2xl font-bold text-gray-900">
                                        Emprende
                                    </h4>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Ideal para iniciar
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                                    <div className="text-5xl font-black text-green-600">S/ 0</div>
                                    <div className="text-gray-500 text-sm font-medium">
                                        por siempre
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">
                                            <strong>200 ventas/mes</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">1 usuario</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">PDF / WhatsApp</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Inventario básico</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Crecimiento */}
                            <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border-4 border-blue-500 rounded-2xl p-7 shadow-xl">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-5 py-2 rounded-full text-xs font-black shadow-lg">
                                        RECOMENDADO
                                    </div>
                                </div>
                                <div className="text-center mb-5 mt-2">
                                    <h4 className="text-2xl font-bold text-gray-900">
                                        Crecimiento
                                    </h4>
                                    <p className="text-sm text-blue-700 font-bold">
                                        El mejor valor
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-blue-200">
                                    <div className="mb-3">
                                        <span className="text-gray-500 text-sm">Solo</span>
                                        <div className="text-5xl font-black text-gray-900">
                                            S/ 9
                                            <sup className="text-2xl">.90</sup>
                                        </div>
                                        <div className="text-gray-500 text-sm font-medium">
                                            al mes
                                        </div>
                                    </div>
                                    <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-2 mt-3">
                                        <div className="text-2xl font-bold text-blue-800">
                                            S/ 99
                                        </div>
                                        <div className="text-blue-700 text-xs font-bold">
                                            PAGO ANUAL
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-900 font-bold">
                                            Ventas ilimitadas
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Inventario básico</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">2 usuarios</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Reportes simples</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Pro */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-7">
                                <div className="text-center mb-5">
                                    <h4 className="text-2xl font-bold text-purple-900">Pro</h4>
                                    <p className="text-sm text-purple-600 font-semibold">
                                        Control total
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-purple-200">
                                    <div className="mb-3">
                                        <span className="text-gray-500 text-sm">Desde</span>
                                        <div className="text-5xl font-black text-gray-900">
                                            S/ 19
                                            <sup className="text-2xl">.90</sup>
                                        </div>
                                        <div className="text-gray-500 text-sm font-medium">
                                            al mes
                                        </div>
                                    </div>
                                    <div className="bg-purple-100 border border-purple-300 rounded-lg p-2 mt-3">
                                        <div className="text-2xl font-bold text-purple-800">
                                            S/ 199
                                        </div>
                                        <div className="text-purple-700 text-xs font-bold">
                                            PAGO ANUAL
                                        </div>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-semibold">
                                            Inventario avanzado
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Control de fiados</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">5 usuarios</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Integración impresora</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Premium Features Grid */}
                    <div className="px-12 py-10 bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-black text-gray-900 mb-2">
                                Todo lo que necesitas incluido
                            </h3>
                            <p className="text-gray-600">
                                Sin costos ocultos · Sin permanencia
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Facturación electrónica SUNAT
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Control de inventario en tiempo real
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Punto de Venta (POS) profesional
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Reportes y analíticas avanzadas
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Gestión completa de clientes
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Control de caja y cierre diario
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Soporte técnico especializado
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-gray-700 font-medium">
                                    Actualizaciones automáticas gratis
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Footer */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative px-12 py-10">
                            <div className="text-center mb-6">
                                <h3 className="text-3xl font-black text-white mb-3">
                                    ¿Listo para impulsar tu negocio?
                                </h3>
                                <p className="text-orange-100 text-lg font-medium">
                                    Únete a miles de empresarios que ya confían en Falconext
                                </p>
                            </div>
                            <div className="flex justify-center gap-12 mt-8">
                                <div className="text-center">
                                    <p className="text-sm text-orange-100 font-medium mb-1">
                                        WhatsApp
                                    </p>
                                    <p className="text-2xl font-black text-white">
                                        +51 932 332 556
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-orange-100 font-medium mb-1">
                                        Email
                                    </p>
                                    <p className="text-2xl font-black text-white">
                                        soporte@falconext.pe
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-orange-100 font-medium mb-1">
                                        Sitio Web
                                    </p>
                                    <p className="text-2xl font-black text-white">
                                        www.falconext.pe
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-8 pt-6 border-t border-white/20">
                                <p className="text-orange-100 text-sm">
                                    © 2026 Falconext · Todos los derechos reservados
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Print Styles */}
            <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }

          .brochure-container {
            background: white !important;
            padding: 0 !important;
            min-height: auto !important;
          }

          .brochure-page {
            max-width: 100% !important;
            width: 100% !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .page-break {
            page-break-before: always;
            break-before: always;
          }

          @page {
            size: A4;
            margin: 0;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }

        /* Smooth gradients */
        .brochure-page {
          font-feature-settings: "kern" 1;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
        </>
    );
}
