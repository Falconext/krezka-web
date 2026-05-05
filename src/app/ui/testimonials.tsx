"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BRAND } from "@/lib/branding";
import men from '@/app/public/assets/men.webp';
import pharmacyWoman from '@/app/public/assets/peruvian_pharmacy_woman_1767478388764.png';
import hardwareMan from '@/app/public/assets/peruvian_hardware_man_1767478402330.png';
import bodegaWoman from '@/app/public/assets/peruvian_bodega_woman_1767478415860.png';
import pharmacyMan from '@/app/public/assets/peruvian_pharmacy_man_1767478428804.png';
const Testimonials = () => {
    // Forced Dark / Glassmorphism Mode
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement | null>(null);

    const testimonials = [
        {
            id: 1,
            name: "Juan Quispe",
            role: "Dueño de Bodega 'El Vecino'",
            avatarImg: hardwareMan,
            quote: "Control total de mi inventario",
            description: `Antes se me perdía mercadería y no sabía cuánto ganaba. Con ${BRAND.name} ahora tengo todo cuadrado al centavo y puedo ver mis ventas desde mi celular.`
        },
        {
            id: 2,
            name: "María Flores",
            role: "Gerente de Farmacia 'Santa Rosa'",
            avatarImg: pharmacyWoman,
            quote: "Ideal para farmacias",
            description: "El sistema maneja perfectamente los lotes y fechas de vencimiento. Me avisa qué productos están por vencer, lo cual me ha ahorrado mucho dinero."
        },
        {
            id: 3,
            name: "Luis Mamani",
            role: "Administrador de Ferretería 'El Constructor'",
            avatarImg: hardwareMan,
            quote: "Facturación rápida y sin errores",
            description: "Mis clientes necesitan facturas al instante. El sistema es veloz y muy fácil de usar para mis vendedores. Ya no hacemos colas en caja."
        },
        {
            id: 4,
            name: "Ana Sánchez",
            role: "Dueña de Botica 'Salud Total'",
            avatarImg: pharmacyWoman,
            quote: "Soporte técnico A1",
            description: "Lo mejor es que cuando tengo una duda me responden al toque por WhatsApp. Me siento acompañada y segura de que mi negocio no va a parar."
        },
        {
            id: 5,
            name: "Pedro Castillo",
            role: "Dueño de Bodega 'Don Pedro'",
            avatarImg: pharmacyMan,
            quote: "Muy fácil de aprender",
            description: "Yo no soy muy tecnológico, pero este sistema es intuitivo. En una tarde ya estaba emitiendo boletas electrónicas sin problemas."
        },
        {
            id: 6,
            name: "Carmen Ruiz",
            role: "Gerente Comercial de Ferretería 'Acero'",
            avatarImg: bodegaWoman,
            quote: "Reportes que ayudan a crecer",
            description: "Saber qué productos se venden más y cuáles no me ha permitido comprar mejor y aumentar mis ganancias. Los reportes son clarísimos."
        },
        {
            id: 7,
            name: "Jorge Vargas",
            role: "Propietario de Market 'La Esquina'",
            avatarImg: hardwareMan,
            quote: "Todo en la nube",
            description: "Puedo viajar a provincia y seguir viendo cómo van las ventas de mi tienda en Lima. La tranquilidad de tener el control no tiene precio."
        },
        {
            id: 8,
            name: "Rosa Medina",
            role: "Administradora de Farmacia 'Vida'",
            avatarImg: pharmacyWoman,
            quote: "Cumple con todo lo de SUNAT",
            description: "Me olvidé de los problemas con SUNAT. El sistema se actualiza solo con las nuevas normas y mis contadores están felices con la información."
        },
        {
            id: 9,
            name: "Miguel Torres",
            role: "Dueño de Ferretería 'Torres'",
            avatarImg: pharmacyMan,
            quote: "Excelente relación precio-calidad",
            description: `Probé otros sistemas más caros que hacían menos. ${BRAND.name} tiene todo lo que necesito a un precio justo para un emprendedor peruano.`
        },
        {
            id: 10,
            name: "Patricia Alarcón",
            role: "Dueña de Minimarket 'Paty'",
            avatarImg: bodegaWoman,
            quote: "Ventas más rápidas",
            description: "Con el lector de código de barras y la interfaz táctil, atendemos a los clientes volando. Hemos mejorado mucho la atención en horas punta."
        }
    ];

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const child = track.children[index] as HTMLElement | undefined;
        if (!child) return;
        const left = child.offsetLeft - 16;
        track.scrollTo({ left, behavior: "smooth" });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const next = prev === 0 ? testimonials.length - 1 : prev - 1;
            return next;
        });
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const next = prev === testimonials.length - 1 ? 0 : prev + 1;
            return next;
        });
    };

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    // Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <section
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white transition-colors">
                            Mira lo que dicen
                            <br />
                            <span>Nuestros clientes</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={handlePrev}
                            className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                        >
                            <Icon icon="ic:baseline-arrow-back" width={24} height={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                        >
                            <Icon icon="ic:baseline-arrow-forward" width={24} height={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={trackRef}
                    className="relative flex gap-4 overflow-x-hidden md:overflow-x-hidden scrollbar-hide"
                >
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={testimonial.id}
                                className={`min-w-[85%] md:min-w-[55%] lg:min-w-[42%] rounded-3xl border px-6 py-7 transition-all duration-500
                                bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 backdrop-blur-xl
                                    ${isActive ? "scale-100 border-gray-300 dark:border-white/20 shadow-xl" : "opacity-60 blur-[1px] scale-95"}`}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                                    {/* Left: avatar + name/role */}
                                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                                        <div className="shrink-0 rounded-full ring-2 ring-gray-200 dark:ring-white/10 p-1 bg-gray-100 dark:bg-white/5 transition-colors">
                                            <Image src={testimonial.avatarImg} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg text-gray-900 dark:text-white transition-colors">{testimonial.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    {/* Right: inner panel */}
                                    <div className="md:col-span-3 w-full">
                                        <div className="rounded-2xl border border-gray-100 dark:border-white/5 p-1 bg-gray-50 dark:bg-black/20 transition-colors">
                                            <div className="relative rounded-xl border border-white/5 p-5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none transition-colors">
                                                <p className="font-semibold text-lg md:text-xl mb-3 text-gray-900 dark:text-white italic transition-colors">"{testimonial.quote}"</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">{testimonial.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex md:hidden justify-center gap-3 mt-8">
                    <button
                        onClick={handlePrev}
                        className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                    >
                        <Icon icon="ic:baseline-arrow-back" width={24} height={24} />
                    </button>
                    <button
                        onClick={handleNext}
                        className="rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-3 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white shadow-sm dark:shadow-none"
                    >
                        <Icon icon="ic:baseline-arrow-forward" width={24} height={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
