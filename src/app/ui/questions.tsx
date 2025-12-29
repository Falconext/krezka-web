"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Questions = () => {
    // Forced Dark / Glassmorphism Mode
    const faqData = [
        {
            id: "001",
            question: "¿Qué servicios ofrecen en su plataforma?",
            answer:
                "Sistemas para cualquier tipo de negocio, tienda virtual, proporcionamos soluciones a medida en desarrollo de páginas web, landing pages, creación de sistemas personalizados y gestión de contenidos."
        },
        {
            id: "002",
            question: "¿Cómo mejoran la eficiencia de mi negocio?",
            answer:
                "Nuestras soluciones automatizan procesos, optimizan flujos de trabajo y unifican la información, reduciendo tiempos y facilitando la toma de decisiones."
        },
        {
            id: "003",
            question: "¿Qué tipo de soporte brindan?",
            answer:
                "Ofrecemos soporte técnico continuo vía correo electrónico, chat y llamadas programadas."
        },
        {
            id: "004",
            question: "¿Es segura es la información que manejo en la plataforma?",
            answer:
                "Nos tomamos muy en serio la seguridad de tus datos. Implementamos cifrado de extremo a extremo, protocolos HTTPS y copias de seguridad periódicas para garantizar la integridad y confidencialidad de tu información."
        },
        {
            id: "005",
            question: "¿Pueden integrarse con sistemas o plataformas existentes?",
            answer:
                "Sí, nuestras soluciones se diseñan para ser fácilmente integrables con otros sistemas. Si ya cuentas con CRM, ERP o cualquier plataforma de terceros, podemos crear conectores o APIs para sincronizar toda la información sin fricciones."
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white">
                        Respondiendo preguntas
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