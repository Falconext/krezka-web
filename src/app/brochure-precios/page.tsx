"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/public/assets/logo.png";
import { CheckCircle2, Download, Printer, FileText, Package, Monitor, Store, BarChart3, Users, PieChart, ShieldCheck } from "lucide-react";
import {
    fetchPublicPlansClient,
    mergePricingPlans,
    PRICING_BASE_PLANS,
    type PricingBasePlan,
} from "@/lib/public-pricing";

const formatPrice = (value: number) => `S/ ${value.toFixed(2)} + IGV`;
const cleanUsers = (value: string) => value.replace(/\s+usuarios?$/i, "");

const planById = (plans: PricingBasePlan[], id: PricingBasePlan["id"]) =>
    plans.find((plan) => plan.id === id) ?? PRICING_BASE_PLANS.find((plan) => plan.id === id)!;

export default function BrochurePreciosPage() {
    const [isClient, setIsClient] = useState(false);
    const [plans, setPlans] = useState<PricingBasePlan[]>(PRICING_BASE_PLANS);
    const emprendedor = planById(plans, "plan-emprendedor");
    const negocio = planById(plans, "plan-negocio");
    const corporativo = planById(plans, "plan-corporativo");

    useEffect(() => {
        setIsClient(true);
        let active = true;
        const loadPlans = async () => {
            const remotePlans = await fetchPublicPlansClient();
            if (!active) return;
            setPlans(mergePricingPlans(PRICING_BASE_PLANS, remotePlans));
        };
        void loadPlans();
        return () => {
            active = false;
        };
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
                <div className="brochure-page bg-white w-full md:max-w-[210mm] mx-auto shadow-2xl page-break-after">
                    {/* Elegant Header */}
                    <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-900 to-gray-900"></div>
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative px-6 md:px-12 py-8 md:py-10">
                            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
                                    <div className="bg-white p-0 rounded-full shadow-xl">
                                        <Image src={logo} alt="Falconext" width={80} height={80} />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                            FALCONEXT
                                        </h1>
                                        <p className="text-orange-100 text-lg md:text-xl mt-1 font-medium">
                                            Sistema Inteligente de Facturación
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center md:text-right bg-white/10   px-6 py-3 rounded-xl border border-white/20">
                                    <p className="text-sm text-orange-100 font-medium">
                                        Certificado por
                                    </p>
                                    <p className="text-3xl font-black text-white">SUNAT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabla de Comparación - Planes Formales */}
                    <div className="px-4 md:px-8 py-6">
                        <div className="mb-6 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Planes para Negocios Formales
                            </h3>
                            <p className="text-gray-600">
                                Con RUC · Facturación electrónica SUNAT
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 pb-2">
                            <table className="w-full table-fixed min-w-[620px]">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700">
                                        <th className="py-3 px-3 text-left text-white font-bold text-xs w-[40%]">
                                            Comparación de planes
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Emprendedor
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs bg-green-600">
                                            Negocio
                                        </th>
                                        <th className="py-3 px-2 text-center text-white font-bold text-xs">
                                            Corporativo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-xs">
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Precio mensual</td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">{formatPrice(emprendedor.monthly)}</td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 bg-green-50">{formatPrice(negocio.monthly)}</td>
                                        <td className="py-2 px-2 text-center font-bold text-gray-900">{formatPrice(corporativo.monthly)}</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Precio anual</td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700">{formatPrice(emprendedor.annual)}</td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700 bg-green-50">{formatPrice(negocio.annual)}</td>
                                        <td className="py-2 px-2 text-center font-bold text-green-700">{formatPrice(corporativo.annual)}</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 text-gray-900">
                                            <div className="font-semibold">Comprobantes/mes</div>
                                            <div className="text-[10px] text-gray-500">Boletas y facturas electrónicas</div>
                                        </td>
                                        <td className="py-2 px-2 text-center font-bold text-emerald-600">{emprendedor.docs.replace("Comprobantes ", "")}</td>
                                        <td className="py-2 px-2 text-center font-bold text-emerald-600 bg-green-50">{negocio.docs.replace("Comprobantes ", "")}</td>
                                        <td className="py-2 px-2 text-center font-bold text-emerald-600">{corporativo.docs.replace("Comprobantes ", "")}</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Usuarios</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">{cleanUsers(emprendedor.usersLabel)}</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900 bg-green-50">{cleanUsers(negocio.usersLabel)}</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">{cleanUsers(corporativo.usersLabel)}</td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Sedes</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">{emprendedor.sedesLabel}</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900 bg-green-50">{negocio.sedesLabel}</td>
                                        <td className="py-2 px-2 text-center font-semibold text-gray-900">{corporativo.sedesLabel}</td>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Inventario + Kardex</td>
                                        <td className="py-2 px-2 text-center"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                        <td className="py-2 px-2 text-center bg-green-50"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                        <td className="py-2 px-2 text-center"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Compras y gastos</td>
                                        <td className="py-2 px-2 text-center text-gray-500">No</td>
                                        <td className="py-2 px-2 text-center bg-green-50"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                        <td className="py-2 px-2 text-center"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                    </tr>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Caja y movimientos</td>
                                        <td className="py-2 px-2 text-center text-gray-500">No</td>
                                        <td className="py-2 px-2 text-center bg-green-50"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                        <td className="py-2 px-2 text-center"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="py-2 px-3 font-semibold text-gray-900">Tienda virtual</td>
                                        <td className="py-2 px-2 text-center text-emerald-700 font-semibold">{emprendedor.store}</td>
                                        <td className="py-2 px-2 text-center text-emerald-700 font-semibold bg-green-50">{negocio.store}</td>
                                        <td className="py-2 px-2 text-center text-emerald-700 font-semibold">{corporativo.store}</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-2 px-3 font-semibold text-gray-900 rounded-bl-xl">Soporte</td>
                                        <td className="py-2 px-2 text-center text-gray-700">Estándar</td>
                                        <td className="py-2 px-2 text-center text-indigo-700 font-semibold bg-green-50">Prioritario</td>
                                        <td className="py-2 px-2 text-center text-indigo-700 font-semibold rounded-br-xl">Prioritario</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN: TODOS LOS MÓDULOS (NUEVO) --- */}
                <div className="brochure-page bg-white w-full md:max-w-[210mm] mx-auto shadow-2xl overflow-hidden">
                    <div className="px-4 md:px-8 py-10 md:py-16">
                        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                            <p className="uppercase text-purple-600 text-sm tracking-wider font-bold">
                                SISTEMA INTEGRAL
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Todo lo que tu negocio necesita <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                                    sin pagar extra
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Olvídate de pagar por módulos separados. Falconext te da acceso a todas las herramientas profesionales desde el plan más básico.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Facturación Electrónica", desc: "Emite boletas, facturas y notas de venta ilimitadas directo a SUNAT.", icon: <FileText className="w-6 h-6" /> },
                                { title: "Control de Inventario", desc: "Kardex en tiempo real, control de stock mínimo y valoración de almacén.", icon: <Package className="w-6 h-6" /> },
                                { title: "Punto de Venta (POS)", desc: "Ventas rápidas con lector de barras, compatible con PC, tablet y celular.", icon: <Monitor className="w-6 h-6" /> },
                                { title: "Tienda Virtual Gratis", desc: "Tu propio catálogo online integrado automáticamante con tu stock.", icon: <Store className="w-6 h-6" /> },
                                { title: "Finanzas y Caja", desc: "Control de flujo de caja, aperturas, cierres y reportes de ganancias.", icon: <BarChart3 className="w-6 h-6" /> },
                                { title: "Clientes y Proveedores", desc: "Base de datos completa, historial de compras y cuentas por cobrar.", icon: <Users className="w-6 h-6" /> },
                                { title: "Reportes Inteligentes", desc: "Dashboard con métricas clave para tomar mejores decisiones.", icon: <PieChart className="w-6 h-6" /> },
                                { title: "Control de Usuarios", desc: "Roles y permisos personalizables para tus vendedores y administradores.", icon: <ShieldCheck className="w-6 h-6" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-purple-600 shadow-sm shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 border border-green-100">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-sm font-medium text-green-700">
                                    Sistema completo disponible en todos los planes
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PÁGINA 2: Planes Nuevos + Footer */}
                <div className="brochure-page bg-white w-full md:max-w-[210mm] mx-auto shadow-2xl">
                    {/* Mini Header para continuidad */}
                    <div className="px-4 md:px-8 pt-8 pb-4 border-b-2 border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Image src={logo} alt="Falconext" width={50} height={50} />
                                <h2 className="text-2xl font-bold text-gray-800">FALCONEXT</h2>
                            </div>
                            <div className="text-sm text-gray-600 hidden md:block">
                                Sistema Inteligente de Facturación
                            </div>
                        </div>
                    </div>

                    {/* Tabla de Comparación - Planes Nuevos */}
                    <div className="px-4 md:px-8 py-6">
                        <div className="mb-6 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Resumen de Planes Pro
                            </h3>
                            <p className="text-gray-600">
                                Mismos precios publicados en falconext.pe
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {[emprendedor, negocio, corporativo].map((plan) => (
                                <div key={plan.id} className={`rounded-2xl border p-4 ${plan.popular ? "border-blue-200 bg-blue-50" : "border-gray-200 bg-white"}`}>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Ideal para</p>
                                    <h4 className="mt-1 text-lg font-black text-gray-900">{plan.name}</h4>
                                    <p className="mt-2 text-xs leading-relaxed text-gray-600">{plan.target}</p>
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {plan.modules.slice(0, 5).map((module) => (
                                            <span key={module} className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-bold text-gray-600">
                                                {module}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto rounded-2xl border-2 border-gray-200 shadow-lg pb-2">
                            <table className="w-full table-fixed min-w-[620px]">
                                <thead>
                                    <tr className="bg-gradient-to-r from-blue-500 to-cyan-600">
                                        <th className="py-3 px-4 text-left text-white font-bold text-sm w-[40%]">
                                            Comparación de planes
                                        </th>
                                        <th className="py-3 px-3 text-center text-white font-bold text-sm">
                                            Emprendedor
                                        </th>
                                        <th className="py-3 px-3 text-center text-white font-bold text-sm bg-blue-700">
                                            Negocio
                                        </th>
                                        <th className="py-3 px-3 text-center text-white font-bold text-sm">
                                            Corporativo
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-sm">
                                    {/* Precio Mensual */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Precio mensual
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-gray-900">
                                            {formatPrice(emprendedor.monthly)}
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-gray-900 bg-blue-50">
                                            {formatPrice(negocio.monthly)}
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-gray-900">
                                            {formatPrice(corporativo.monthly)}
                                        </td>
                                    </tr>

                                    {/* Precio Anual */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Precio anual
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700">
                                            {formatPrice(emprendedor.annual)}
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700 bg-blue-50">
                                            {formatPrice(negocio.annual)}
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-green-700">
                                            {formatPrice(corporativo.annual)}
                                        </td>
                                    </tr>

                                    {/* Comprobantes/mes */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Comprobantes/mes
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-emerald-600">
                                            {emprendedor.docs.replace("Comprobantes ", "")}
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-emerald-600 bg-blue-50">
                                            {negocio.docs.replace("Comprobantes ", "")}
                                        </td>
                                        <td className="py-3 px-3 text-center font-bold text-emerald-600">
                                            {corporativo.docs.replace("Comprobantes ", "")}
                                        </td>
                                    </tr>

                                    {/* Usuarios */}
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Usuarios
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900">{cleanUsers(emprendedor.usersLabel)}</td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900 bg-blue-50">
                                            {cleanUsers(negocio.usersLabel)}
                                        </td>
                                        <td className="py-3 px-3 text-center font-semibold text-gray-900">{cleanUsers(corporativo.usersLabel)}</td>
                                    </tr>

                                    {/* Tienda Virtual */}
                                    <tr className="border-b border-gray-200">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Tienda virtual
                                        </td>
                                        <td className="py-3 px-3 text-center text-emerald-700 font-semibold">{emprendedor.store}</td>
                                        <td className="py-3 px-3 text-center text-emerald-700 font-semibold bg-blue-50">{negocio.store}</td>
                                        <td className="py-3 px-3 text-center text-emerald-700 font-semibold">{corporativo.store}</td>
                                    </tr>

                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900">
                                            Inventario + Kardex
                                        </td>
                                        <td className="py-3 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                        <td className="py-3 px-3 text-center bg-blue-50"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                        <td className="py-3 px-3 text-center"><CheckCircle2 className="w-4 h-4 text-green-600 mx-auto" /></td>
                                    </tr>

                                    {/* Soporte */}
                                    <tr className="bg-gray-50">
                                        <td className="py-3 px-4 font-semibold text-gray-900 rounded-bl-xl">
                                            Soporte
                                        </td>
                                        <td className="py-3 px-3 text-center text-gray-700">Estándar</td>
                                        <td className="py-3 px-3 text-center bg-blue-50 text-gray-700">Estándar</td>
                                        <td className="py-3 px-3 text-center text-indigo-700 font-semibold rounded-br-xl">Prioritario</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Premium Footer */}
                    <div className="relative overflow-hidden mt-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute -top-10 -right-10 w-40 md:w-64 h-40 md:h-64 bg-blue-500 rounded-full blur-[80px]"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 md:w-64 h-40 md:h-64 bg-purple-500 rounded-full blur-[80px]"></div>
                        </div>
                        <div className="relative px-6 md:px-12 py-8 md:py-10">
                            <div className="text-center mb-6 md:mb-8">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 md:mb-3 leading-tight">
                                    ¿Listo para impulsar tu negocio?
                                </h3>
                                <p className="text-slate-300 text-sm md:text-lg font-medium">
                                    Únete a miles de empresarios que ya confían en Falconext
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                                <div className="bg-white/5   border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                                        WhatsApp
                                    </p>
                                    <p className="text-lg md:text-xl font-bold text-white">
                                        +51 932 332 556
                                    </p>
                                </div>
                                <div className="bg-white/5   border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-lg md:text-xl font-bold text-white break-words">
                                        soporte@falconext.pe
                                    </p>
                                </div>
                                <div className="bg-white/5   border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">
                                        Sitio Web
                                    </p>
                                    <p className="text-lg md:text-xl font-bold text-white">
                                        www.falconext.pe
                                    </p>
                                </div>
                            </div>

                            <div className="text-center mt-8 pt-6 border-t border-white/10">
                                <p className="text-slate-400 text-xs md:text-sm">
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
