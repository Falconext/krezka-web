"use client";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/branding";

const advisors = [
    {
        initials: "BD",
        name: "Bratfor Deudor N.",
        role: "Asesor Comercial",
        specialty: "Bodegas y Minimarkets",
        from: "#673AB7",
        to: "#9C27B0",
        msg: `Hola Diego, me interesa ${BRAND.name} para mi bodega/minimarket. ¿Me puedes dar más información?`,
    },
    {
        initials: "YG",
        name: "Yan Gamonal S.",
        role: "Asesor Comercial",
        specialty: "Farmacias y Boticas",
        from: "#6366f1",
        to: "#8b5cf6",
        msg: `Hola Ana, me interesa ${BRAND.name} para mi farmacia/botica. ¿Me puedes dar más información?`,
    },
    {
        initials: "DO",
        name: "Diego Ortega R.",
        role: "Asesor Comercial",
        specialty: "Ferreterías y Distribuidoras",
        from: "#0284c7",
        to: "#6366f1",
        msg: `Hola Diego, me interesa ${BRAND.name} para mi ferretería. ¿Me puedes dar más información?`,
    },
    {
        initials: "MS",
        name: "Moroni S.",
        role: "Asesor Comercial",
        specialty: "Restaurantes y Servicios",
        from: "#7c3aed",
        to: "#db2777",
        msg: `Hola María, me interesa ${BRAND.name} para mi restaurante/negocio de servicios. ¿Me puedes dar más información?`,
    },
];

const Advisors = () => {
    return (
        <section className="bg-transparent py-16 md:py-24">
            <div className="mx-auto max-w-screen-xl px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="inline-flex items-center rounded-full bg-[#5A0EBB]/10 px-4 py-1 text-xs md:text-sm text-[#5A0EBB] dark:text-[#8A38F5] mb-4">
                        Equipo de asesores
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white transition-colors">
                        Habla con un asesor<br />especializado
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm md:text-base">
                        Cada asesor conoce a profundidad el tipo de negocio que atiende. Contáctanos y te ayudamos a elegir el plan ideal para ti.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                    {advisors.map((advisor) => (
                        <div
                            key={advisor.initials}
                            className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 backdrop-blur-md shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center gap-4"
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg"
                                style={{ background: `linear-gradient(135deg, ${advisor.from}, ${advisor.to})` }}
                            >
                                {advisor.initials}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900 dark:text-white transition-colors">{advisor.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{advisor.role}</p>
                                <span className="mt-2 inline-block rounded-full bg-gray-100 dark:bg-white/10 px-3 py-1 text-xs text-gray-600 dark:text-gray-300 transition-colors">
                                    {advisor.specialty}
                                </span>
                            </div>
                            <a
                                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(advisor.msg)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors"
                            >
                                <MessageCircle size={16} />
                                Chatear ahora
                            </a>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
                    También puedes escribirnos directo al{" "}
                    <a
                        href={`https://wa.me/${BRAND.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline font-medium"
                    >
                        {BRAND.phone}
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Advisors;
