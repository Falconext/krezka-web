"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link as ScrollLink } from 'react-scroll';
import logowhite from '@/app/public/assets/fnlogo.png';

const Footer = () => {
    // Forced Dark Mode / Glassmorphism
    interface IFormSub {
        email: string;
    }

    interface IFormErrors {
        email: string;
    }

    const initialForm: IFormSub = {
        email: "",
    };

    const initialErrors: IFormErrors = {
        email: "",
    };

    const [formValues, setFormValues] = useState<IFormSub>(initialForm);
    const [errors, setErrors] = useState<IFormErrors>(initialErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const validateForm = () => {
        const newErrors: IFormErrors = {
            email:
                formValues.email.trim() !== ""
                    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
                        ? ""
                        : "Ingrese un correo electrónico válido"
                    : "El correo electrónico es obligatorio",
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        const plainTextMessage = `
            Falconext - Nuevo Mensaje
            ----------------------------------------
            
            ¡Hola!
            
            Has recibido un nuevo mensaje a través de suscripción de contacto de Falconext. Aquí están los detalles:
            
            Email: ${formValues.email}
            
            ----------------------------------------
            Este mensaje fue enviado desde el formulario de contacto de www.falconext.pe.
            Powered by Web3Forms
              `;

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "9e8b5b39-7603-4a4c-90d7-1976f8d968d4",
                    subject: `Nuevo mensaje de suscripcion - Falconext`,
                    from_name: "Suscripcion de Falconext",
                    reply_to: formValues.email,
                    email_template: plainTextMessage
                }),
            });

            const result = await response.json();
            if (response.ok && result.success) {
                setSubmitMessage("Correo enviado con éxito!");
                setFormValues(initialForm);
                setErrors(initialErrors);

                // @ts-ignore
                if (typeof window !== "undefined" && window.gtag) {
                    // @ts-ignore
                    window.gtag("event", "conversion", {
                        send_to: "AW-17010708778/7iqxCMqLk7kaEKqiq68_",
                        value: 1.0,
                        currency: "PEN",
                    });
                }
            } else {
                setSubmitMessage(
                    result.message || "Hubo un error al enviar el mensaje. Intenta de nuevo."
                );
            }
        } catch (error) {
            setSubmitMessage("Error de conexión. Intenta de nuevo más tarde.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    return (
        <div className="bg-transparent backdrop-blur-lg border-t border-gray-200 dark:border-white/5 mt-0 relative z-10 transition-colors duration-300">
            <div className="max-w-screen-xl px-5 mx-auto pt-12 md:pt-20">
                {/* CTA superior */}
                <div className="rounded-3xl p-8 md:p-14 text-center bg-gradient-to-br from-[#ef4444] via-[#f97316] to-[#ef4444] relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] mix-blend-overlay"></div>
                    <div className="relative z-10">
                        <h3 className="text-white text-3xl md:text-4xl font-semibold">¿Listo para elevar la experiencia de tus clientes?</h3>
                        <p className="text-white/90 mt-2 md:text-base text-sm">Empieza a tomar decisiones con datos usando los sistemas de Falconext.</p>
                        <ScrollLink
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm md:text-base font-bold text-[#f97316] hover:bg-gray-100 cursor-pointer shadow-lg transition-transform hover:scale-105"
                        >
                            Comienza ahora
                        </ScrollLink>
                    </div>
                </div>

                {/* Contenido principal del footer */}
                <div className="grid grid-cols-12 gap-6 md:gap-10 pt-12 md:pt-16 pb-10">
                    {/* Brand y descripción */}
                    <div className="col-span-12 md:col-span-4">
                        <p className="font-bold mb-3 flex items-center text-2xl md:text-3xl text-gray-900 dark:text-white">
                            <Image className="mr-3" src={logowhite} width={40} height={40} alt="logo" />FALCONEXT
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                            Construimos sistemas, webs y ecommerce para acelerar tu negocio con datos y automatización.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-3 mt-6">
                            <a href="https://www.facebook.com/profile.php?id=61576185915016" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer" aria-label="Facebook">
                                <Icon icon="mdi:facebook" width={20} height={20} className="text-gray-700 dark:text-white" />
                            </a>
                            <a className="rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer" aria-label="Twitter">
                                <Icon icon="mdi:twitter" width={20} height={20} className="text-gray-700 dark:text-white" />
                            </a>
                            <a className="rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer" aria-label="LinkedIn">
                                <Icon icon="mdi:linkedin" width={20} height={20} className="text-gray-700 dark:text-white" />
                            </a>
                            <a className="rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer" aria-label="Instagram">
                                <Icon icon="mdi:instagram" width={20} height={20} className="text-gray-700 dark:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Columnas de enlaces */}
                    <div className="col-span-6 md:col-span-2 text-gray-600 dark:text-gray-400">
                        <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Plataforma</h4>
                        <ul className="space-y-3 text-sm md:text-base">
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Overview</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Analítica</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Integraciones</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Precios</li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-2 text-gray-600 dark:text-gray-400">
                        <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Casos de uso</h4>
                        <ul className="space-y-3 text-sm md:text-base">
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Retail</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Restaurantes</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Servicios</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Ecommerce</li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-2 text-gray-600 dark:text-gray-400">
                        <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Recursos</h4>
                        <ul className="space-y-3 text-sm md:text-base">
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Blog</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Recursos</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Docs</li>
                        </ul>
                    </div>
                    <div className="col-span-6 md:col-span-2 text-gray-600 dark:text-gray-400">
                        <h4 className="font-medium mb-4 text-gray-900 dark:text-white">Compañía</h4>
                        <ul className="space-y-3 text-sm md:text-base">
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Nosotros</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Partners</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Contacto</li>
                            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Seguridad</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-12 mt-6">
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-2xl px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row items-center gap-3 md:gap-4 transition-colors">
                            <div className="flex-1 w-full">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleChange}
                                    value={formValues.email}
                                    placeholder="Ingresa tu email para recibir novedades"
                                    className="bg-gray-100 dark:bg-black/20 text-gray-900 dark:text-white placeholder-gray-500 w-full rounded-xl px-4 py-3 outline-none border border-gray-200 dark:border-white/10 focus:border-[#22c55e] transition-colors"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                            </div>
                            <button disabled={isSubmitting} type="submit" className="rounded-full px-6 py-3 text-sm font-bold bg-[#22c55e] text-[#052e16] hover:bg-[#16a34a] hover:text-white transition-all shadow-lg shadow-green-500/20">
                                {isSubmitting ? "Enviando..." : "Suscribirse"}
                            </button>
                        </form>
                        {submitMessage && (
                            <p className="mt-2 text-sm text-[#22c55e] text-center md:text-left">{submitMessage}</p>
                        )}
                    </div>

                    <div className="col-span-12 mt-6 border-t border-gray-200 dark:border-white/5 pt-8 text-center md:text-left">
                        <h4 className="text-gray-500 font-light text-sm md:text-base">
                            © 2026 Falconext Inc. Todos los derechos reservados
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;