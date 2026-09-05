"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Questions = () => {
    // Forced Dark / Glassmorphism Mode
    const faqData = [
        {
            id: "001",
            question: "¿Qué incluye Krezka?",
            answer:
                "Todo en una sola plataforma: facturación electrónica SUNAT (boletas, facturas y guías), control de inventario por rubro, caja, tienda virtual y un asesor con IA que atiende y vende por WhatsApp. Además desarrollamos soluciones a medida cuando tu negocio lo necesita."
        },
        {
            id: "002",
            question: "¿Qué es la IA de Ventas por WhatsApp?",
            answer:
                "Es un asesor con inteligencia artificial que atiende a tus clientes 24/7 desde tu propio número de WhatsApp: responde con tu catálogo real (precio y stock en vivo), envía fotos de tus productos, califica a cada prospecto, da seguimiento automático a quien no responde y te avisa al instante los leads calientes."
        },
        {
            id: "003",
            question: "¿Le pago algo a Meta por la IA que atiende?",
            answer:
                "No. Tu plan cubre el software y el asesor con IA que atiende, califica y responde — sin cargos por mensaje dentro de tu plan. Solo pagas directo a Meta (como en cualquier plataforma) si tú decides hacer publicidad para traer clientes o programar avisos salientes fuera de la conversación; eso es opcional y con tu propia cuenta."
        },
        {
            id: "004",
            question: "¿La facturación es válida ante SUNAT?",
            answer:
                "Sí. Emitimos comprobantes electrónicos válidos y homologados ante SUNAT (boletas, facturas, notas de crédito/débito y guías de remisión), con envío automático y respaldo de tu CDR."
        },
        {
            id: "005",
            question: "¿Qué tipo de soporte brindan?",
            answer:
                "Soporte técnico continuo vía WhatsApp, correo y llamadas programadas, además de acompañamiento en la puesta en marcha y capacitación de tu equipo."
        },
        {
            id: "006",
            question: "¿Es segura la información que manejo en la plataforma?",
            answer:
                "Sí. Ciframos la comunicación (HTTPS), realizamos copias de seguridad periódicas y tu información está siempre disponible en la nube, con acceso multi-sede y control por usuario."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index: any) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
    };

    return (
        <section
            id="questions"
            className="bg-transparent py-16 md:py-24"
        >
            <div className="mx-auto max-w-screen-md px-4 md:px-6">
                <div className="text-center mb-12">
                    <p className="inline-flex items-center rounded-full bg-violet-500/10 px-4 py-1 text-xs md:text-sm font-semibold text-violet-600 dark:text-violet-300 mb-4">
                        Preguntas frecuentes
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white">
                        Resolvemos tus{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-500 to-emerald-500">
                            dudas
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqData.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleToggle(index)}
                            className={`rounded-3xl border px-6 py-5 cursor-pointer transition-all duration-300
                                ${activeIndex === index
                                    ? "bg-white dark:bg-white/10 border-gray-200 dark:border-white/20 shadow-lg"
                                    : "bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10"
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <p className="font-medium text-base md:text-lg text-gray-900 dark:text-white">
                                    {item.question}
                                </p>
                                <div className="ml-4 flex-shrink-0">
                                    {activeIndex === index ? (
                                        <div className="rounded-full bg-gray-100 dark:bg-white/10 p-2 text-gray-900 dark:text-white">
                                            <Icon
                                                icon="ic:baseline-minus"
                                                width="20"
                                                height="20"
                                                className="text-gray-900 dark:text-white"
                                            />
                                        </div>
                                    ) : (
                                        <div className="rounded-full bg-gray-100 dark:bg-white/5 p-2 text-gray-900 dark:text-white">
                                            <Icon
                                                icon="ic:baseline-plus"
                                                width="20"
                                                height="20"
                                                className="text-gray-900 dark:text-white"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {activeIndex === index && (
                                <div className="mt-4 border-t border-gray-200 dark:border-white/10 pt-4">
                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Questions;