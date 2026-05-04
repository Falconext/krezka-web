"use client"
import Image from "next/image";
import mainproject from '@/app/public/assets/mainproject.png'
import Link from "next/link";
import { Monitor, ArrowRight } from 'lucide-react'

const Banner = () => {
    return (
        <div className="relative isolate pt-24 md:pt-32 pb-16 overflow-hidden" id="home">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 flex justify-center">
                        <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-white/20 hover:ring-gray-900/20 dark:hover:ring-white/30 bg-white/50 dark:bg-white/5 backdrop-blur-sm transition-all">
                            Potencia tu empresa con Facturación Electrónica SUNAT{' '}
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-balance">
                        Sistema de Facturación y Gestión para tu Negocio
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Emite tus comprobantes electrónicos con control total, gestiona inventario y ventas y escala tus operaciones con el mejor sistema POS del mercado. ¡Prueba Falconext hoy!
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="https://app.falconext.pe"
                            target="_blank"
                            className="bg-[#1c1c1c] dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-all flex items-center gap-2"
                        >
                            <Monitor className="w-4 h-4" />
                            Mirar demo
                        </Link>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <div className="inline-flex items-center rounded-lg bg-gray-50 dark:bg-white/5 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10 dark:ring-white/10">
                            <span className="mr-2 opacity-70">Credenciales:</span>
                            <span className="font-mono font-bold mr-3">demo@falconext.com</span> / <span className="font-mono font-bold ml-1">demo2026</span>
                        </div>
                    </div>

                    {/* Social proof stats */}
                    <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-14">
                        {[
                            { value: "+500", label: "Negocios activos" },
                            { value: "SUNAT", label: "100% Certificado" },
                            { value: "S/19.90", label: "Desde / mes" },
                            { value: "Soporte", label: "100% en español" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col items-center gap-0.5">
                                <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors">{stat.value}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 flow-root sm:mt-24">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:-m-4 lg:rounded-2xl lg:p-4 bg-white/40 dark:bg-white/5 backdrop-blur-3xl">
                        <Image
                            src={mainproject}
                            alt="Dashboard Preview"
                            width={2400}
                            height={1600}
                            className="rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;