"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/public/assets/fnlogo.png";
import { CheckCircle2, Download, Printer, X, Circle } from "lucide-react";

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

            {/* Brochure Container */}
            <div className="brochure-container bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">

                {/* PÁGINA 1: Header + Tabla Planes Formales */}
                <div className="brochure-page bg-white max-w-[210mm] mx-auto shadow-2xl page-break-after">
                    {/* Elegant Header */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-900"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative px-12 py-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-xl">
                                        <Image src={logo} alt="Falconext" width={80} height={80} />
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

                    {/* Tabla de Comparación - Planes Formales */}
                    <div className="px-8 py-6">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Planes para Negocios Formales
                            </h3>
                            <p className="text-gray-600">
                                Con RUC · Facturación electrónica SUNAT
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg">
                            <table className="w-full table-fixed">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                                        <th className="py-3 px-3 text-left text-white font-bold text-xs w-[20%]">
                                            Comparación de planes
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Micro
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Emprende
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs bg-green-600">
                                            Control
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Bacán
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Súper
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Mega
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-xs">
                                    {/* Precio Mensual */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Precio Mensual
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">
                                            S/ 35
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">
                                            S/ 42
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 bg-green-50">
                                            S/ 49.90
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">
                                            S/ 59.90
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">
                                            S/ 79.90
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">
                                            S/ 99.90
                                        </td>
                                    </tr>

                                    {/* Precio Anual */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Precio Anual
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 text-[11px]">
                                            S/ 350
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 text-[11px]">
                                            S/ 420
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 bg-green-50 text-[11px]">
                                            S/ 500
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 text-[11px]">
                                            S/ 600
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 text-[11px]">
                                            S/ 800
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 text-[11px]">
                                            S/ 1000
                                        </td>
                                    </tr>

                                    {/* Comprobantes/mes */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 text-gray-900">
                                            <div className="font-semibold">Comprobantes/mes</div>
                                            <div className="text-[10px] text-gray-500">
                                                Boletas, Facturas...
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            100
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            300
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900 bg-green-50">
                                            500
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            600
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            800
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            1200
                                        </td>
                                    </tr>

                                    {/* Notas de Venta */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Notas de Venta
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600">
                                            ilimitado
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600">
                                            ilimitado
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600 bg-green-50">
                                            ilimitado
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600">
                                            ilimitado
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600">
                                            ilimitado
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600">
                                            ilimitado
                                        </td>
                                    </tr>

                                    {/* Inventario */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Inventario
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                    </tr>

                                    {/* Reportes */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Reportes
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                    </tr>

                                    {/* Funciones */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Funciones
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                    </tr>

                                    {/* Tienda Virtual */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 text-gray-900">
                                            <div className="font-semibold">Tienda Virtual</div>
                                            <div className="text-[10px] text-gray-500">
                                                Catálogo, Carrito...
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <Circle className="w-4 h-4 text-blue-500 mx-auto" />
                                            <div className="text-[10px] text-orange-600 font-bold mt-0.5">
                                                S/40
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <Circle className="w-4 h-4 text-blue-500 mx-auto" />
                                            <div className="text-[10px] text-orange-600 font-bold mt-0.5">
                                                S/45
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <Circle className="w-4 h-4 text-blue-500 mx-auto" />
                                            <div className="text-[10px] text-orange-600 font-bold mt-0.5">
                                                S/60
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <Circle className="w-4 h-4 text-blue-500 mx-auto" />
                                            <div className="text-[10px] text-orange-600 font-bold mt-0.5">
                                                S/80
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <Circle className="w-4 h-4 text-blue-500 mx-auto" />
                                            <div className="text-[10px] text-orange-600 font-bold mt-0.5">
                                                S/100
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <Circle className="w-4 h-4 text-blue-500 mx-auto" />
                                            <div className="text-[10px] text-orange-600 font-bold mt-0.5">
                                                S/120
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Usuarios */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Usuarios
                                        </td>
                                        <td className="py-2 px-2 text-center text-gray-600">-</td>
                                        <td className="py-2 px-2 text-center text-gray-600">-</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900 bg-green-50">
                                            2
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            4
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            6
                                        </td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">
                                            10
                                        </td>
                                    </tr>

                                    {/* + Ticketera */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 text-gray-900">
                                            <div className="font-semibold">+ Ticketera</div>
                                            <div className="text-[10px] text-gray-500">
                                                Portátil, batería...
                                            </div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                            <div className="text-[10px] text-green-700 font-bold mt-0.5">
                                                GRATIS
                                            </div>
                                            <div className="text-[9px] text-gray-500">(Anual)</div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                            <div className="text-[10px] text-green-700 font-bold mt-0.5">
                                                GRATIS
                                            </div>
                                            <div className="text-[9px] text-gray-500">(Anual)</div>
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                            <div className="text-[10px] text-green-700 font-bold mt-0.5">
                                                GRATIS
                                            </div>
                                            <div className="text-[9px] text-gray-500">(Anual)</div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                            <div className="text-[10px] text-green-700 font-bold mt-0.5">
                                                GRATIS
                                            </div>
                                            <div className="text-[9px] text-gray-500">(Anual)</div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                            <div className="text-[10px] text-green-700 font-bold mt-0.5">
                                                GRATIS
                                            </div>
                                            <div className="text-[9px] text-gray-500">(Anual)</div>
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                            <div className="text-[10px] text-green-700 font-bold mt-0.5">
                                                GRATIS
                                            </div>
                                            <div className="text-[9px] text-gray-500">(Anual)</div>
                                        </td>
                                    </tr>

                                    {/* Soporte Técnico */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">
                                            Soporte Técnico
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                    </tr>

                                    {/* Actualizaciones */}
                                    <tr className="bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900 rounded-bl-xl">
                                            Actualizaciones
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center bg-green-50">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-2 px-2 text-center rounded-br-xl">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* PÁGINA 2: Planes Nuevos + Footer */}
                <div className="brochure-page bg-white max-w-[210mm] mx-auto shadow-2xl">
                    {/* Mini Header para continuidad */}
                    <div className="px-8 pt-8 pb-4 border-b-2 border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Image src={logo} alt="Falconext" width={50} height={50} />
                                <h2 className="text-2xl font-bold text-gray-800">FALCONEXT</h2>
                            </div>
                            <div className="text-sm text-gray-600">
                                Sistema Inteligente de Facturación
                            </div>
                        </div>
                    </div>

                    {/* Tabla de Comparación - Planes Nuevos */}
                    <div className="px-8 py-6">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Planes para Negocios Nuevos
                            </h3>
                            <p className="text-gray-600">
                                Sin RUC · Empieza sin complicaciones
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg">
                            <table className="w-full table-fixed">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-500 to-cyan-600">
                                        <th className="py-3 px-4 text-left text-white font-bold text-sm w-[35%]">
                                            Comparación de planes
                                        </th>
                                        <th className="py-3 px-3 text-center text-white font-bold text-sm">
                                            Emprende
                                        </th>
                                        <th className="py-3 px-3 text-center text-white font-bold text-sm bg-blue-700">
                                            Crecimiento
                                        </th>
                                        <th className="py-3 px-3 text-center text-white font-bold text-sm">
                                            Pro
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-sm">
                                    {/* Precio Mensual */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Precio Mensual
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700">
                                            GRATIS
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-gray-900 bg-blue-50">
                                            S/ 10
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-gray-900">
                                            S/ 20
                                        </td>
                                    </tr>

                                    {/* Precio Anual */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Precio Anual
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700">
                                            S/ 0
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700 bg-blue-50">
                                            S/ 99
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700">
                                            S/ 199
                                        </td>
                                    </tr>

                                    {/* Ventas/mes */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Ventas/mes
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900">
                                            200
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900 bg-blue-50">
                                            ilimitado
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900">
                                            ilimitado
                                        </td>
                                    </tr>

                                    {/* Inventario */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Inventario
                                        </td>
                                        <td className="py-3 px-3 text-center text-gray-600">Básico</td>
                                        <td className="py-3 px-3 text-center text-gray-600 bg-blue-50">
                                            Básico
                                        </td>
                                        <td className="py-3 px-3 text-center text-gray-600">Avanzado</td>
                                    </tr>

                                    {/* Usuarios */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Usuarios
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900">
                                            1
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900 bg-blue-50">
                                            2
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900">
                                            5
                                        </td>
                                    </tr>

                                    {/* Reportes */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Reportes
                                        </td>
                                        <td className="py-3 px-3 text-center">
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        </td>
                                        <td className="py-3 px-3 text-center bg-blue-50">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                                        </td>
                                        <td className="py-3 px-3 text-center">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                                        </td>
                                    </tr>

                                    {/* Control de Fiados */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Control de Fiados
                                        </td>
                                        <td className="py-3 px-3 text-center">
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        </td>
                                        <td className="py-3 px-3 text-center bg-blue-50">
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        </td>
                                        <td className="py-3 px-3 text-center">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                                        </td>
                                    </tr>

                                    {/* Integración Impresora */}
                                    <tr className="bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900 rounded-bl-xl">
                                            Integración Impresora
                                        </td>
                                        <td className="py-3 px-3 text-center">
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        </td>
                                        <td className="py-3 px-3 text-center bg-blue-50">
                                            <X className="w-5 h-5 text-red-500 mx-auto" />
                                        </td>
                                        <td className="py-3 px-3 text-center rounded-br-xl">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Premium Footer */}
                    <div className="relative overflow-hidden mt-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative px-12 py-8">
                            <div className="text-center mb-5">
                                <h3 className="text-3xl font-black text-white mb-3">
                                    ¿Listo para impulsar tu negocio?
                                </h3>
                                <p className="text-gray-100 text-lg font-medium">
                                    Únete a miles de empresarios que ya confían en Falconext
                                </p>
                            </div>
                            <div className="flex justify-center gap-12 mt-6">
                                <div className="text-center">
                                    <p className="text-sm text-gray-200 font-medium mb-1">
                                        WhatsApp
                                    </p>
                                    <p className="text-2xl font-black text-white">
                                        +51 932 332 556
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-200 font-medium mb-1">Email</p>
                                    <p className="text-2xl font-black text-white">
                                        soporte@falconext.pe
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-200 font-medium mb-1">
                                        Sitio Web
                                    </p>
                                    <p className="text-2xl font-black text-white">
                                        www.falconext.pe
                                    </p>
                                </div>
                            </div>
                            <div className="text-center mt-6 pt-4 border-t border-white/20">
                                <p className="text-gray-200 text-sm">
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
            width: 210mm !important;
            min-height: 297mm !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .page-break-after {
            page-break-after: always;
            break-after: page;
          }

          @page {
            size: A4 portrait;
            margin: 0;
          }

          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          table {
            page-break-inside: avoid;
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
