"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/public/assets/fnlogo.png";
import { CheckCircle2, Download, Printer } from "lucide-react";

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
                        className="bg-[#1c1c1c] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-all flex items-center gap-2 font-semibold"
                    >
                        <Download className="w-5 h-5" />
                        Descargar PDF
                    </button>
                    <button
                        onClick={handlePrint}
                        className="bg-white border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2 font-semibold"
                    >
                        <Printer className="w-5 h-5" />
                        Imprimir
                    </button>
                </div>
            )}

            {/* A4 Paper Container */}
            <div className="brochure-container bg-gray-100 min-h-screen py-8">
                <div className="brochure-page bg-white max-w-[21cm] mx-auto shadow-2xl">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-3 rounded-xl">
                                    <Image src={logo} alt="Falconext" width={50} height={50} />
                                </div>
                                <div>
                                    <h1 className="text-4xl font-bold">FALCONEXT</h1>
                                    <p className="text-orange-100 text-lg">
                                        Sistema de Facturación Electrónica
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-orange-100">Homologado con</p>
                                <p className="text-2xl font-bold">SUNAT</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Title */}
                    <div className="px-12 pt-10 pb-6 text-center border-b-4 border-orange-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Planes Flexibles para Cada Tipo de Negocio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Emite comprobantes electrónicos ilimitados, controla tu inventario
                            y gestiona tus ventas con el mejor sistema POS del mercado
                        </p>
                    </div>

                    {/* Planes Formales Section */}
                    <div className="px-12 py-8">
                        <div className="mb-8">
                            <div className="inline-block bg-orange-50 border-l-4 border-orange-500 px-6 py-3 rounded-r-lg">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Planes para Negocios Formales (con RUC)
                                </h3>
                            </div>
                        </div>

                        {/* Plans Grid */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {/* Plan Micro */}
                            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-all">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Micro
                                    </h4>
                                    <p className="text-sm text-gray-500">100% Digital</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 35
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 350
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año (ahorra 2)</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>100 Comprobantes/mes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Notas de venta ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Inventario completo</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Reportes detallados</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Emprende */}
                            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-orange-300 transition-all">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Emprende
                                    </h4>
                                    <p className="text-sm text-gray-500">100% Digital</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 42
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 420
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año (ahorra 2)</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>300 Comprobantes/mes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Notas de venta ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Inventario completo</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Reportes detallados</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Control - DESTACADO */}
                            <div className="border-4 border-green-500 rounded-xl p-6 relative shadow-xl bg-green-50">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                                    MÁS POPULAR
                                </div>
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Control
                                    </h4>
                                    <p className="text-sm text-gray-500">+ Impresora Térmica</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-green-200">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 49.90
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 500
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        / año (ahorra S/.99)
                                    </div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold">
                                            500 Comprobantes/mes
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold">
                                            Impresora Térmica incluida
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Notas de venta ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>Inventario completo</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* More Plans Row */}
                        <div className="grid grid-cols-3 gap-6">
                            {/* Plan Bacán */}
                            <div className="border-2 border-indigo-200 rounded-xl p-6 bg-indigo-50">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900 mb-1">
                                        Bacán
                                    </h4>
                                    <p className="text-sm text-indigo-600">Para quienes crecen</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 59.90
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 600
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>600 Comprobantes/mes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Impresora Térmica incluida</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Todas las funciones</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Súper */}
                            <div className="border-2 border-indigo-200 rounded-xl p-6 bg-indigo-50">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900 mb-1">
                                        Súper
                                    </h4>
                                    <p className="text-sm text-indigo-600">Rey de las ventas</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 79.90
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 800
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>800 Comprobantes/mes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Impresora Térmica incluida</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Todas las funciones</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Mega */}
                            <div className="border-2 border-indigo-200 rounded-xl p-6 bg-indigo-50">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900 mb-1">
                                        Mega
                                    </h4>
                                    <p className="text-sm text-indigo-600">
                                        Facturación gigante
                                    </p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 99.90
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 1000
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>1200 Comprobantes/mes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Impresora Térmica incluida</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Todas las funciones</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Page Break */}
                    <div className="page-break"></div>

                    {/* Planes Informales Section */}
                    <div className="px-12 py-8">
                        <div className="mb-8">
                            <div className="inline-block bg-blue-50 border-l-4 border-blue-500 px-6 py-3 rounded-r-lg">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Planes para Negocios Informales (sin RUC)
                                </h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {/* Plan Emprende Free */}
                            <div className="border-2 border-gray-200 rounded-xl p-6">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Emprende
                                    </h4>
                                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                        GRATIS
                                    </div>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                                    <div className="text-4xl font-bold text-green-600">S/ 0</div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>200 ventas/mes</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>1 usuario</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span>PDF / WhatsApp</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Crecimiento */}
                            <div className="border-4 border-blue-500 rounded-xl p-6 bg-blue-50 shadow-lg">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                                        Crecimiento
                                    </h4>
                                    <p className="text-sm text-gray-500">Recomendado</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-blue-200">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 9.90
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 99
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="font-semibold">Ventas ilimitadas</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Inventario básico</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>2 usuarios</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span>Reportes simples</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Plan Pro */}
                            <div className="border-2 border-indigo-200 rounded-xl p-6 bg-indigo-50">
                                <div className="text-center mb-4">
                                    <h4 className="text-2xl font-bold text-indigo-900 mb-1">
                                        Pro
                                    </h4>
                                    <p className="text-sm text-indigo-600">Máximo control</p>
                                </div>
                                <div className="text-center mb-6 pb-6 border-b-2 border-indigo-200">
                                    <div className="text-4xl font-bold text-orange-600">
                                        S/ 19.90
                                    </div>
                                    <div className="text-gray-500 text-sm">/ mes</div>
                                    <div className="text-3xl font-bold text-green-600 mt-2">
                                        S/ 199
                                    </div>
                                    <div className="text-gray-500 text-sm">/ año</div>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Inventario avanzado</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Control de fiados</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>5 usuarios</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        <span>Integración impresora</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="px-12 py-8 bg-gray-50">
                        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                            Todas las funciones incluidas
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">
                                    Facturación electrónica SUNAT
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Control de inventario</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Punto de Venta (POS)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Reportes en tiempo real</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Gestión de clientes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Control de caja</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">Soporte técnico</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <span className="text-gray-700">
                                    Actualizaciones automáticas
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2">
                                ¿Listo para transformar tu negocio?
                            </h3>
                            <p className="text-orange-100 mb-4">
                                Contáctanos y empieza tu prueba gratuita hoy mismo
                            </p>
                            <div className="flex justify-center gap-8 mt-6">
                                <div>
                                    <p className="text-sm text-orange-100">WhatsApp</p>
                                    <p className="text-xl font-bold">+51 932 332 556</p>
                                </div>
                                <div>
                                    <p className="text-sm text-orange-100">Email</p>
                                    <p className="text-xl font-bold">soporte@falconext.pe</p>
                                </div>
                                <div>
                                    <p className="text-sm text-orange-100">Web</p>
                                    <p className="text-xl font-bold">www.falconext.pe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Print Styles */}
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
      `}</style>
        </>
    );
}
