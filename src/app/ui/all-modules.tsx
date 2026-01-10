"use client";

import { Icon } from "@iconify/react";

const AllModules = () => {
    const modules = [
        {
            icon: "mdi:file-document-outline",
            title: "Facturación Electrónica",
            desc: "Emite boletas, facturas y notas de venta ilimitadas directo a SUNAT."
        },
        {
            icon: "mdi:package-variant-closed",
            title: "Control de Inventario",
            desc: "Kardex en tiempo real, control de stock mínimo y valoración de almacén."
        },
        {
            icon: "mdi:cash-register",
            title: "Punto de Venta (POS)",
            desc: "Ventas rápidas con lector de barras, compatible con PC, tablet y celular."
        },
        {
            icon: "mdi:store",
            title: "Tienda Virtual Gratis",
            desc: "Tu propio catálogo online integrado automáticamante con tu stock."
        },
        {
            icon: "mdi:finance",
            title: "Finanzas y Caja",
            desc: "Control de flujo de caja, aperturas, cierres y reportes de ganancias."
        },
        {
            icon: "mdi:account-group",
            title: "Clientes y Proveedores",
            desc: "Base de datos completa, historial de compras y cuentas por cobrar."
        },
        {
            icon: "mdi:chart-box",
            title: "Reportes Inteligentes",
            desc: "Dashboard con métricas clave para tomar mejores decisiones."
        },
        {
            icon: "mdi:shield-account",
            title: "Control de Usuarios",
            desc: "Roles y permisos personalizables para tus vendedores y administradores."
        }
    ];

    return (
        <section className="bg-transparent py-16 md:py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5A0EBB]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <p className="uppercase text-[#B76AE0] text-[14px] md:text-[16px] tracking-wider font-semibold">
                        SISTEMA INTEGRAL
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        Todo lo que tu negocio necesita <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B76AE0] to-[#5A0EBB]">
                            sin pagar extra
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Olvídate de pagar por módulos separados. Falconext te da acceso a todas las herramientas profesionales desde el plan más básico.
                    </p>

                    <div className="pt-4 flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20">
                            <Icon icon="logos:google-gemini" width={20} />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                Impulsado por <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 font-bold">Google Gemini AI</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {modules.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 rounded-3xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-xl hover:bg-white hover:dark:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#5A0EBB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#5A0EBB] to-[#8A38F5] flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Icon icon={item.icon} width={24} height={24} />
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 backdrop-blur-md">
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-[#16a34a] dark:text-[#4ade80]">
                            Sistema completo disponible en todos los planes
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllModules;
