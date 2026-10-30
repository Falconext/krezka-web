"use client";

import { useState, type KeyboardEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import { BarChart3, Boxes, Check, ScanBarcode, Wallet, type LucideIcon } from "lucide-react";
import puntoDeVenta from "@/app/public/assets/sistema/punto-de-venta.webp";
import cobro from "@/app/public/assets/sistema/cobro.webp";
import productos from "@/app/public/assets/sistema/productos.webp";
import inventario from "@/app/public/assets/sistema/inventario.webp";

type Vista = {
    id: string;
    tab: string;
    Icon: LucideIcon;
    titulo: string;
    texto: string;
    puntos: string[];
    img: StaticImageData;
    alt: string;
    ruta: string;
    /** La captura del cobro es un modal: se muestra centrada sobre fondo, no a todo el ancho. */
    centrada?: boolean;
};

// Capturas reales del sistema (cuenta demo). Cada punto describe algo que el sistema hace hoy.
const VISTAS: Vista[] = [
    {
        id: "vender",
        tab: "Vender",
        Icon: ScanBarcode,
        titulo: "Un punto de venta que no te hace esperar",
        texto: "Busca el producto o escanea su código, súmalo al carrito y emite en segundos.",
        puntos: [
            "Boletas, facturas, notas de venta y tickets",
            "Lector de código de barras y catálogo con fotos",
            "Funciona en PC, tablet y celular",
        ],
        img: puntoDeVenta,
        alt: "Punto de venta de Krezka con catálogo de productos y carrito de venta",
        ruta: "facturacion/nuevo",
    },
    {
        id: "cobrar",
        tab: "Cobrar",
        Icon: Wallet,
        titulo: "Cobra como te paga tu cliente",
        texto: "Elige el medio de pago y revisa el comprobante antes de emitirlo.",
        puntos: [
            "Efectivo, Yape, Plin, transferencia y tarjeta",
            "Pago mixto en una misma venta",
            "Ticket o A4, y envío del comprobante por WhatsApp",
        ],
        img: cobro,
        alt: "Pantalla de cobro con Yape, Plin, efectivo, transferencia y tarjeta, y vista previa del ticket",
        ruta: "facturacion/nuevo",
        centrada: true,
    },
    {
        id: "inventario",
        tab: "Inventario",
        Icon: Boxes,
        titulo: "Tu stock siempre cuadrado",
        texto: "Cada venta y cada compra mueven el kardex solas: sabes qué tienes y cuánto vale.",
        puntos: [
            "Costo, valor de inventario y ubicación por producto",
            "Categorías, marcas, series y garantías",
            "Stock por sede y traslados entre almacenes",
        ],
        img: productos,
        alt: "Lista de productos con stock, costo, valor de inventario y ubicación",
        ruta: "kardex/productos",
    },
    {
        id: "reportes",
        tab: "Reportes",
        Icon: BarChart3,
        titulo: "Decide con números reales",
        texto: "Mira qué se vende, qué deja más ganancia y qué está por agotarse.",
        puntos: [
            "Productos más vendidos y más rentables",
            "Alertas de stock crítico y productos agotados",
            "Ventas por método de pago y por canal",
        ],
        img: inventario,
        alt: "Dashboard de inventario con stock crítico y los productos más vendidos",
        ruta: "kardex/dashboard",
    },
];

const WhatWeDo = () => {
    const [activa, setActiva] = useState(0);
    const vista = VISTAS[activa];

    // Flechas izquierda/derecha entre pestañas (patrón tablist de WAI-ARIA).
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        const siguiente = (activa + (e.key === "ArrowRight" ? 1 : VISTAS.length - 1)) % VISTAS.length;
        setActiva(siguiente);
        document.getElementById(`tab-${VISTAS[siguiente].id}`)?.focus();
    };

    return (
        <section id="service" className="relative py-16 md:py-24">
            <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-[420px] max-w-5xl rounded-full bg-[#6c5ce7]/10 blur-[120px]" />

            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex items-center rounded-full border border-[#6c5ce7]/20 bg-[#6c5ce7]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#5b4bd6] dark:text-[#a99df8]">
                        Así se ve por dentro
                    </span>
                    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl dark:text-white">
                        Vende, cobra y controla tu negocio{" "}
                        <span className="bg-gradient-to-r from-[#7b6af2] to-[#5b4bd6] bg-clip-text text-transparent">
                            desde una sola pantalla
                        </span>
                    </h2>
                    <p className="mt-4 text-base text-gray-600 md:text-lg dark:text-gray-400">
                        Estas son pantallas reales de Krezka. Sin comprobantes limitados en ningún plan.
                    </p>
                </div>

                {/* Pestañas */}
                <div
                    role="tablist"
                    aria-label="Partes del sistema"
                    onKeyDown={onKeyDown}
                    className="mx-auto mt-10 flex w-full max-w-2xl gap-1.5 overflow-x-auto rounded-2xl border border-gray-200 bg-white/70 p-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                >
                    {VISTAS.map((v, i) => {
                        const on = i === activa;
                        return (
                            <button
                                key={v.id}
                                id={`tab-${v.id}`}
                                role="tab"
                                type="button"
                                aria-selected={on}
                                aria-controls={`panel-${v.id}`}
                                tabIndex={on ? 0 : -1}
                                onClick={() => setActiva(i)}
                                className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6c5ce7] ${on
                                    ? "bg-[#6c5ce7] text-white shadow-md shadow-[#6c5ce7]/30"
                                    : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                                    }`}
                            >
                                <v.Icon size={17} strokeWidth={2.2} aria-hidden="true" />
                                {v.tab}
                            </button>
                        );
                    })}
                </div>

                {/* Panel */}
                <div
                    id={`panel-${vista.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${vista.id}`}
                    className="mt-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
                >
                    <div className="lg:col-span-4">
                        <h3 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl dark:text-white">{vista.titulo}</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">{vista.texto}</p>
                        <ul className="mt-6 space-y-3.5">
                            {vista.puntos.map((p) => (
                                <li key={p} className="flex items-start gap-3 text-[15px] text-gray-800 dark:text-gray-200">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/15 text-[#16a34a]">
                                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_40px_80px_-30px_rgba(75,63,190,0.45)] dark:border-white/10">
                            <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-gray-400 shadow-inner">
                                    app.krezka.com/administrador/{vista.ruta}
                                </span>
                            </div>
                            {vista.centrada ? (
                                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-[#eef0ff] to-[#f7f5ff] p-4 sm:p-6">
                                    <Image
                                        key={vista.id}
                                        src={vista.img}
                                        alt={vista.alt}
                                        quality={90}
                                        sizes="(min-width: 1024px) 520px, 90vw"
                                        className="h-full w-auto max-w-full rounded-2xl object-contain shadow-xl ring-1 ring-black/5"
                                    />
                                </div>
                            ) : (
                                // Alto fijo: si cada captura tuviera su propia proporción, la página saltaría al cambiar de pestaña.
                                <div className="aspect-[16/10] overflow-hidden bg-white">
                                    <Image
                                        key={vista.id}
                                        src={vista.img}
                                        alt={vista.alt}
                                        quality={90}
                                        sizes="(min-width: 1280px) 820px, (min-width: 1024px) 66vw, 100vw"
                                        className="h-full w-full object-cover object-top"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
