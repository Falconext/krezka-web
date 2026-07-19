import { BRAND } from "@/lib/branding";
import { Shield, Lock, Eye, Bell, Trash2, Mail } from "lucide-react";

export const metadata = {
    title: `Política de Privacidad | ${BRAND.name}`,
    description: "Conoce cómo recopilamos, usamos y protegemos tu información personal.",
};

const sections = [
    {
        icon: Eye,
        title: "1. Información que Recopilamos",
        content: [
            "**Datos de identificación:** Nombre completo, número de RUC/DNI, razón social.",
            "**Datos de contacto:** Correo electrónico, número de teléfono, dirección.",
            "**Datos de uso:** Información sobre cómo interactúas con nuestra aplicación y plataforma web.",
            "**Datos de facturación:** Información necesaria para la emisión de comprobantes electrónicos ante SUNAT.",
            "**Datos del dispositivo:** Modelo, sistema operativo y versión de la aplicación móvil.",
        ],
    },
    {
        icon: Lock,
        title: "2. Cómo Usamos tu Información",
        content: [
            "Proveer, operar y mantener nuestros servicios de facturación electrónica.",
            "Procesar y enviar comprobantes electrónicos a la SUNAT en tu nombre.",
            "Gestionar tu cuenta y brindarte soporte técnico.",
            "Enviarte notificaciones sobre actualizaciones del servicio.",
            "Cumplir con obligaciones legales y regulatorias aplicables en el Perú.",
            "Mejorar nuestra plataforma mediante análisis de uso agregado y anonimizado.",
        ],
    },
    {
        icon: Shield,
        title: "3. Protección de tus Datos",
        content: [
            "Utilizamos cifrado SSL/TLS para toda la transmisión de datos entre tu dispositivo y nuestros servidores.",
            "Tus contraseñas son almacenadas con hash criptográfico (bcrypt) y nunca en texto plano.",
            "Aplicamos controles de acceso estrictos para que solo personal autorizado pueda acceder a tu información.",
            "Realizamos copias de seguridad periódicas de tu información en servidores seguros.",
            "Cumplimos con la Ley N° 29733, Ley de Protección de Datos Personales del Perú.",
        ],
    },
    {
        icon: Bell,
        title: "4. Compartir tu Información",
        content: [
            "**SUNAT:** Compartimos los datos necesarios para la emisión y validación de comprobantes electrónicos.",
            "**Proveedores de servicios:** Utilizamos servicios de nube (almacenamiento de archivos) con proveedores que cumplen estándares de seguridad internacionales.",
            "**Obligaciones legales:** Podemos compartir información cuando sea requerido por ley, orden judicial o autoridad competente.",
            "No vendemos, alquilamos ni compartimos tu información personal con terceros con fines comerciales.",
        ],
    },
    {
        icon: Trash2,
        title: "5. Tus Derechos",
        content: [
            "**Acceso:** Puedes solicitar una copia de los datos personales que tenemos sobre ti.",
            "**Rectificación:** Puedes corregir información incorrecta o incompleta desde tu perfil o contactándonos.",
            "**Cancelación:** Puedes solicitar la eliminación de tu cuenta y datos personales, sujeto a obligaciones legales de retención.",
            "**Oposición:** Puedes oponerte al tratamiento de tus datos para fines de marketing.",
            "Para ejercer cualquiera de estos derechos, contáctanos en el correo indicado al final de esta página.",
        ],
    },
    {
        icon: Mail,
        title: "6. Retención de Datos",
        content: [
            "Conservamos tus datos mientras mantengas una cuenta activa con nosotros.",
            "Los comprobantes electrónicos y registros contables se conservan por el período mínimo exigido por la normativa tributaria peruana (5 años).",
            "Al cancelar tu cuenta, eliminaremos tus datos personales dentro de 30 días, excepto aquellos que debamos conservar por obligación legal.",
        ],
    },
];

export default function PrivacidadPage() {
    const lastUpdated = "15 de mayo de 2026";

    return (
        <main className="min-h-screen bg-slate-50 pt-28 pb-20 text-slate-900">
            {/* Hero */}
            <section className="mx-auto max-w-4xl px-4 md:px-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <Shield size={20} />
                        </div>
                        <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                            Documento Legal
                        </p>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black leading-tight text-slate-900">
                        Política de Privacidad
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                        En <strong>{BRAND.legalName}</strong> nos comprometemos a proteger tu privacidad y la seguridad
                        de tu información personal. Esta política describe cómo recopilamos, usamos y protegemos tus datos.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Última actualización: {lastUpdated}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            Aplica a: Aplicación móvil y plataforma web
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Legislación: Ley N° 29733 — Perú
                        </span>
                    </div>
                </div>
            </section>

            {/* Sections */}
            <section className="mx-auto max-w-4xl px-4 md:px-6 mt-6 space-y-4">
                {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                                    <Icon size={17} />
                                </div>
                                <h2 className="text-base font-bold text-slate-900">{section.title}</h2>
                            </div>
                            <ul className="space-y-2.5">
                                {section.content.map((item, idx) => {
                                    // Render bold markdown-like syntax
                                    const parts = item.split(/\*\*(.*?)\*\*/g);
                                    return (
                                        <li key={idx} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                                            <span>
                                                {parts.map((part, i) =>
                                                    i % 2 === 0 ? part : <strong key={i} className="font-semibold text-slate-800">{part}</strong>
                                                )}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </article>
                    );
                })}
            </section>

            {/* Cookies */}
            <section className="mx-auto max-w-4xl px-4 md:px-6 mt-4">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-base font-bold text-slate-900 mb-3">7. Cookies y Tecnologías Similares</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Nuestra plataforma web utiliza cookies estrictamente necesarias para el funcionamiento del servicio
                        (autenticación, sesión de usuario) y cookies analíticas para entender cómo se usa el sitio.
                        Puedes gestionar las cookies desde la configuración de tu navegador. El uso de la aplicación
                        móvil no requiere cookies; utilizamos almacenamiento local en tu dispositivo para el funcionamiento
                        sin conexión.
                    </p>
                </article>
            </section>

            {/* Cambios a la política */}
            <section className="mx-auto max-w-4xl px-4 md:px-6 mt-4">
                <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-base font-bold text-slate-900 mb-3">8. Cambios a esta Política</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        Podemos actualizar esta Política de Privacidad periódicamente. Cuando realicemos cambios
                        significativos, te notificaremos mediante un aviso visible en nuestra plataforma o por correo
                        electrónico con al menos 7 días de anticipación. El uso continuado del servicio tras la
                        notificación constituye tu aceptación de los cambios.
                    </p>
                </article>
            </section>

            {/* Contacto CTA */}
            <section className="mx-auto max-w-4xl px-4 md:px-6 mt-6">
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-indigo-900 p-6 md:p-8 text-white">
                    <div className="flex items-start gap-3">
                        <Mail className="mt-1 flex-shrink-0" size={20} />
                        <div>
                            <h3 className="text-lg font-bold">¿Tienes dudas sobre tu privacidad?</h3>
                            <p className="mt-1 text-sm text-slate-300 max-w-xl">
                                Si tienes preguntas sobre esta política o deseas ejercer tus derechos de acceso,
                                rectificación o cancelación de datos, contáctanos directamente.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href={`mailto:${BRAND.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                            <Mail size={15} />
                            {BRAND.email}
                        </a>
                        <a
                            href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hola, tengo una consulta sobre mi privacidad de datos.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                        >
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
