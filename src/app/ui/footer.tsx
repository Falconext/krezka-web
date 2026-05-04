"use client";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import logowhite from '../../../public/assets/logowhite.png';
import { ArrowRight } from 'lucide-react';

const footerColumns = [
    {
        title: 'POS SOLUCIONES',
        links: [
            { label: 'POS Todo en Uno', href: '/tienda' },
            { label: 'POS Portátil', href: '/tienda' },
            { label: 'POS Delivery', href: '/tienda' },
            { label: 'Software de Ventas', href: '/sistemas' },
            { label: 'Gestión de Inventario', href: '/sistemas' },
            { label: 'Facturación SUNAT', href: '/sistemas' },
        ],
    },
    {
        title: 'HARDWARE',
        links: [
            { label: 'Impresoras Térmicas', href: '/tienda' },
            { label: 'Cajones de Dinero', href: '/tienda' },
            { label: 'Lectores de Código', href: '/tienda' },
            { label: 'Pantallas Touch', href: '/tienda' },
            { label: 'Combos Completos', href: '/tienda' },
        ],
    },
    {
        title: 'SOFTWARE',
        links: [
            { label: 'Facturación Electrónica', href: '/sistemas' },
            { label: 'E-Commerce', href: '/sistemas' },
            { label: 'Software a Medida', href: '/sistemas' },
            { label: 'App Móvil', href: '/sistemas' },
            { label: 'Integraciones API', href: '/sistemas' },
        ],
    },
    {
        title: 'EMPRESA',
        links: [
            { label: 'Sobre Nosotros', href: '#' },
            { label: 'Blog', href: '#' },
            { label: 'Casos de Éxito', href: '#' },
            { label: 'Partners', href: '/asesores' },
        ],
    },
    {
        title: 'SOPORTE',
        links: [
            { label: 'Centro de Ayuda', href: '#' },
            { label: 'Contacto', href: '#' },
            { label: 'WhatsApp Soporte', href: 'https://wa.me/51932332556' },
            { label: 'Términos de Uso', href: '#' },
            { label: 'Política de Privacidad', href: '#' },
        ],
    },
];

const socialLinks = [
    { icon: "mdi:twitter", label: "Twitter", href: "#" },
    { icon: "mdi:instagram", label: "Instagram", href: "https://www.instagram.com/falconext.pe/" },
    { icon: "mdi:linkedin", label: "LinkedIn", href: "#" },
    { icon: "mdi:facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61576185915016" },
    { icon: "mdi:youtube", label: "YouTube", href: "#" },
];

const legalLinks = ['Términos y Condiciones', 'Política de Privacidad', 'Libro de Reclamaciones', 'Política de Cookies'];

const Footer = () => {
    interface IFormSub { email: string; }
    interface IFormErrors { email: string; }

    const initialForm: IFormSub = { email: "" };
    const initialErrors: IFormErrors = { email: "" };

    const [formValues, setFormValues] = useState<IFormSub>(initialForm);
    const [errors, setErrors] = useState<IFormErrors>(initialErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const validateForm = () => {
        const newErrors: IFormErrors = {
            email: formValues.email.trim() !== ""
                ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) ? "" : "Ingrese un correo electrónico válido"
                : "El correo electrónico es obligatorio",
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");
        if (!validateForm()) { setIsSubmitting(false); return; }
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "9e8b5b39-7603-4a4c-90d7-1976f8d968d4",
                    subject: `Nuevo mensaje de suscripcion - Falconext`,
                    from_name: "Suscripcion de Falconext",
                    reply_to: formValues.email,
                }),
            });
            const result = await response.json();
            if (response.ok && result.success) {
                setSubmitMessage("¡Suscrito con éxito!");
                setFormValues(initialForm);
                setErrors(initialErrors);
            } else {
                setSubmitMessage(result.message || "Hubo un error. Intenta de nuevo.");
            }
        } catch {
            setSubmitMessage("Error de conexión. Intenta de nuevo más tarde.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    return (
        <footer className="bg-[#0c0a1a] text-white">

            {/* Main body */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 pb-12 border-b border-white/10">

                    {/* Left: Brand + newsletter */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src={logowhite} width={1000} height={1000} alt="Falconext" className="w-48 h-14 object-contain" />
                        </Link>
                        <Link
                            href="/tienda"
                            className="inline-flex items-center gap-3 self-start border border-white/30 hover:border-white text-white text-[14px] font-semibold px-5 py-3 rounded-full transition-all hover:bg-white/5 group"
                        >
                            Ver Tienda
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Newsletter */}
                        <div>
                            <p className="text-white text-[13px] font-semibold mb-3">Suscríbete a nuestro boletín</p>
                            <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-full border border-white/20 focus-within:border-white/40 transition-all">
                                <input
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    value={formValues.email}
                                    placeholder="tu@email.com"
                                    className="bg-transparent w-full px-4 py-2.5 outline-none text-[13px] text-white placeholder-[#8b8fa8]"
                                />
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="bg-white text-[#0c0a1a] px-5 py-2.5 text-[12px] font-bold hover:bg-[#a78bfa] hover:text-white transition-all whitespace-nowrap shrink-0"
                                >
                                    {isSubmitting ? "..." : "Enviar"}
                                </button>
                            </form>
                            {errors.email && <p className="text-xs text-red-400 mt-2">{errors.email}</p>}
                            {submitMessage && <p className="text-xs text-green-400 mt-2">{submitMessage}</p>}
                        </div>

                        {/* Social */}
                        <div>
                            <p className="text-[#8b8fa8] text-[11px] font-semibold mb-3 uppercase tracking-widest">Síguenos</p>
                            <div className="flex gap-2">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="w-9 h-9 rounded-xl border border-white/15 hover:border-white/40 hover:bg-white/10 flex items-center justify-center transition-all"
                                    >
                                        <Icon icon={s.icon} width={16} height={16} className="text-[#8b8fa8]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Link columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                        {footerColumns.map((col) => (
                            <div key={col.title}>
                                <h5 className="text-white text-[11px] font-bold tracking-[0.12em] uppercase mb-5">
                                    {col.title}
                                </h5>
                                <ul className="space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-[#8b8fa8] hover:text-white text-[13px] leading-snug transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#555870] text-[12px]">
                        Falconext © {new Date().getFullYear()} | Todos los derechos reservados.
                    </p>
                    <div className="flex flex-wrap items-center gap-5">
                        {legalLinks.map((item) => (
                            <Link key={item} href="#" className="text-[#555870] hover:text-white text-[12px] transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;

