import Link from "next/link";
import { ArrowRight, CircleCheck, Globe, Handshake, Layers3, Sparkles, Users } from "lucide-react";
import { BRAND } from "@/lib/branding";

const benefits = [
    {
        title: "Activa empresas en minutos",
        description: "Proceso de incorporación ágil para que puedas empezar a vender y activar clientes rápidamente.",
    },
    {
        title: "Tu marca, tu posicionamiento",
        description: "Presenta la solución a tus clientes con una experiencia profesional alineada a tu propuesta comercial.",
    },
    {
        title: "Portafolio escalable",
        description: "Ofrece planes para negocios que inician, crecen y escalan, manteniendo una oferta clara.",
    },
    {
        title: "Acompañamiento continuo",
        description: "Soporte y guía comercial para ayudarte a mantener una operación estable con tu cartera.",
    },
];

const processSteps = [
    {
        title: "1. Postula al programa",
        description: "Cuéntanos tu perfil comercial y el tipo de clientes con los que trabajas actualmente.",
    },
    {
        title: "2. Configuración inicial",
        description: "Te ayudamos a dejar listo el entorno para empezar a vender y activar clientes sin fricción.",
    },
    {
        title: "3. Lanzamiento comercial",
        description: "Recibes materiales y estructura de oferta para presentar los planes de forma clara al cliente final.",
    },
    {
        title: "4. Escala tu cartera",
        description: "Expande tu base de empresas con una ruta ordenada de activación, seguimiento y crecimiento.",
    },
];

const faqs = [
    {
        q: "¿Qué tipo de negocio puede ser reseller?",
        a: "Agencias, consultores, estudios contables, equipos comerciales y empresas que gestionan una cartera de clientes empresariales.",
    },
    {
        q: "¿Necesito experiencia técnica para comenzar?",
        a: "No es obligatorio. El programa está pensado para que puedas operar con guía comercial y soporte durante la implementación.",
    },
    {
        q: "¿Puedo vender a diferentes rubros?",
        a: "Sí. Puedes atender distintos tipos de negocios y recomendar el plan más adecuado según el volumen y operación de cada cliente.",
    },
    {
        q: "¿Cómo inicio el proceso?",
        a: "Completa la solicitud y nuestro equipo te contacta para validar tu perfil y acompañarte en el onboarding.",
    },
];

export default function ResellersPage() {
    const resellerWhatsappLink = `https://wa.me/${BRAND.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
        `Hola, quiero unirme al programa Reseller de ${BRAND.name}. Por favor envíenme: 1) requisitos de ingreso, 2) esquema comercial y comisiones, 3) proceso de onboarding, 4) tiempos de activación, 5) materiales de venta y soporte. Mis datos: [Nombre] [Empresa] [Ciudad] [Rubro] [Cantidad estimada de clientes].`
    )}`;

    const plansWhatsappLink = `https://wa.me/${BRAND.phone.replace(/\D/g, '')}?text=${encodeURIComponent(
        `Hola, quiero ayuda para elegir el mejor plan ${BRAND.name} para mi cliente.`
    )}`;

    return (
        <main className="min-h-screen bg-slate-50 pt-28 pb-16 text-slate-900">
            <section className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                    <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                        {BRAND.name} Partners
                    </p>
                    <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900">
                        Programa Resellers para crecer con una oferta profesional
                    </h1>
                    <p className="mt-4 max-w-3xl text-sm md:text-base text-slate-600 leading-relaxed">
                        Conviértete en socio comercial de {BRAND.name} y ofrece una solución completa de facturación electrónica,
                        gestión y crecimiento digital para empresas. Diseñamos una experiencia clara para que puedas vender,
                        activar y escalar tu cartera con confianza.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a href={resellerWhatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                            Quiero ser reseller
                            <ArrowRight size={16} />
                        </a>
                        <a href={plansWhatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                            Ver planes para clientes
                        </a>
                        <Link href="#proceso" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                            Ver cómo funciona
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 md:px-6 mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {benefits.map((item) => (
                        <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                                <Sparkles size={18} />
                            </div>
                            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="proceso" className="mx-auto max-w-7xl px-4 md:px-6 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Layers3 size={18} />
                            ¿Cómo funciona el programa?
                        </h3>
                        <div className="mt-4 space-y-3">
                            {processSteps.map((step) => (
                                <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                    <h4 className="font-semibold text-slate-900 text-sm">{step.title}</h4>
                                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">{step.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Handshake size={18} />
                            ¿Qué recibes como reseller?
                        </h3>
                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                            <li className="flex gap-2"><CircleCheck size={16} className="mt-0.5 text-emerald-600" />Acceso al portafolio de planes para empresas.</li>
                            <li className="flex gap-2"><CircleCheck size={16} className="mt-0.5 text-emerald-600" />Soporte para onboarding y activación de clientes.</li>
                            <li className="flex gap-2"><CircleCheck size={16} className="mt-0.5 text-emerald-600" />Material comercial para una presentación profesional.</li>
                            <li className="flex gap-2"><CircleCheck size={16} className="mt-0.5 text-emerald-600" />Ruta de crecimiento para ampliar tu cartera.</li>
                            <li className="flex gap-2"><CircleCheck size={16} className="mt-0.5 text-emerald-600" />Acompañamiento continuo del equipo {BRAND.name}.</li>
                        </ul>

                        <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-4 text-xs text-indigo-700">
                            Ideal para quienes quieren ofrecer una solución robusta a múltiples clientes,
                            manteniendo una experiencia de venta clara y confiable.
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 md:px-6 mt-8">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <Users size={20} />
                        Preguntas frecuentes para resellers
                    </h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {faqs.map((faq) => (
                            <article key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <h4 className="text-sm font-semibold text-slate-900">{faq.q}</h4>
                                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href={resellerWhatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors">
                            Solicitar información
                        </a>
                        <a href={plansWhatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
                            Ver planes para clientes
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 md:px-6 mt-8">
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-indigo-900 p-6 md:p-8 text-white">
                    <div className="flex items-start gap-3">
                        <Globe className="mt-1" size={20} />
                        <div>
                            <h3 className="text-xl font-bold">Construye tu canal reseller con {BRAND.name}</h3>
                            <p className="mt-2 text-sm text-slate-200 max-w-3xl">
                                Si ya atiendes empresas y quieres una oferta sólida para facturación electrónica y gestión,
                                este programa está diseñado para ayudarte a crecer con orden y una imagen profesional.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <a href={resellerWhatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                            Empezar ahora
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
