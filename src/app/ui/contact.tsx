"use client";
import InputCustom from "../components/InputCustom";
import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, Map, Phone } from "lucide-react";

const Contact = () => {
    // Forced Dark / Glassmorphism Mode
    interface IFormContact {
        fullName: string;
        company: string;
        phone: string;
        email: string;
        servicesSelect: string[];
        message: string;
    }

    interface IFormErrors {
        fullName: string;
        company: string;
        phone: string;
        email: string;
        servicesSelect: string;
        message: string;
    }

    const initialForm: IFormContact = {
        company: "",
        email: "",
        fullName: "",
        message: "",
        phone: "",
        servicesSelect: [],
    };

    const initialErrors: IFormErrors = {
        company: "",
        email: "",
        fullName: "",
        message: "",
        phone: "",
        servicesSelect: "",
    };

    const [formValues, setFormValues] = useState<IFormContact>(initialForm);
    const [errors, setErrors] = useState<IFormErrors>(initialErrors);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const validateForm = () => {
        const newErrors: IFormErrors = {
            fullName:
                formValues.fullName.trim() !== ""
                    ? ""
                    : "Sus nombres completos son obligatorios",
            company: "",
            phone: "",
            email:
                formValues.email.trim() !== ""
                    ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
                        ? ""
                        : "Ingrese un correo electrónico válido"
                    : "El correo electrónico es obligatorio",
            servicesSelect:
                formValues.servicesSelect.length > 0
                    ? ""
                    : "Seleccione al menos un servicio",
            message:
                formValues.message.trim() !== ""
                    ? ""
                    : "El mensaje es obligatorio",
        };

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
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

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormValues((prev) => {
            if (checked) {
                return {
                    ...prev,
                    servicesSelect: [...prev.servicesSelect, value],
                };
            } else {
                return {
                    ...prev,
                    servicesSelect: prev.servicesSelect.filter(
                        (service) => service !== value
                    ),
                };
            }
        });
        setErrors((prev) => ({ ...prev, servicesSelect: "" }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        if (!validateForm()) {
            setIsSubmitting(false);
            setSubmitMessage("Por favor, corrige los errores en el formulario.");
            return;
        }

        const plainTextMessage = `
        Arcanight - Nuevo Mensaje
        ----------------------------------------
        
        ¡Hola!
        
        Has recibido un nuevo mensaje a través del formulario de contacto de Arcanight. Aquí están los detalles:
        
        Nombre Completo: ${formValues.fullName}
        Compañía: ${formValues.company || "No especificado"}
        Email: ${formValues.email}
        Teléfono: ${formValues.phone || "No especificado"}
        Servicios Seleccionados: ${formValues.servicesSelect.join(", ")}
        Mensaje: ${formValues.message}
        
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
                    subject: `Nuevo mensaje de ${formValues.fullName} - Falconext`,
                    from_name: "Formulario de Falconext",
                    reply_to: formValues.email,
                    email_template: plainTextMessage
                }),
            });

            const result = await response.json();
            if (response.ok && result.success) {
                setSubmitMessage("¡Mensaje enviado con éxito!");
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

    return (
        <div className="bg-transparent py-16 md:py-24" id="contact">
            <div className="max-w-screen-xl mx-auto pt-0 md:pt-0 px-6">
                <p className="uppercase text-[#B76AE0] text-center text-[19px] md:text-[20px] pt-10 mb-5 tracking-widest font-semibold">PONGAMONOS EN MARCHA</p>
                <h2 className="font-bold px-3 md:px-0 w-full xl:text-[50px] text-[35px] md:text-[60px] leading-[32px] md:leading-[60px] md:w-[800px] mx-auto text-center text-white">
                    Contáctanos
                </h2>
                <p className="text-center mx-auto mt-5 md:mt-5 text-[20px] xl:text-[21px] md:text-[20px] md:w-[400px] w-full xl:w-9/12 text-gray-400">
                    Ingresa tus datos y el detalle de lo que deseas automaticamente nos comunicaremos con usted.
                </p>
            </div>
            <div className="mt-20 overflow-hidden md:overflow-visible mx-auto max-w-screen-xl">
                <div className="grid-cols-12 grid px-3 md:gap-10">
                    <div className="md:col-start-1 md:col-end-6 col-span-12 order-2 md:order-1 flex flex-col gap-4">
                        <div className="px-5 py-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center">
                                <div className="bg-white/10 border border-white/10 mr-4 w-fit p-4 rounded-full">
                                    <Mail color="#fff" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Puedes mandarnos mensaje a este correo</p>
                                    <label className="font-medium text-[16px] md:text-[18px] text-white">
                                        diego.ortega.dev@gmail.com
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center">
                                <div className="bg-white/10 border border-white/10 mr-4 w-fit p-4 rounded-full">
                                    <Phone color="#fff" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Llámanos para cualquier consulta</p>
                                    <label className="font-medium text-[16px] md:text-[18px] text-white">
                                        +51 991065217
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="px-5 py-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-center">
                                <div className="bg-white/10 border border-white/10 mr-4 w-fit p-4 rounded-full">
                                    <Map color="#fff" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Ubicados en</p>
                                    <label className="font-medium text-[16px] md:text-[18px] text-white">
                                        Calle Los Crisantemos - Callao - Perú
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="p-8 md:p-10 md:order-2 mb-10 md:mb-0 rounded-3xl md:col-start-6 md:col-end-13 col-span-12 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">

                        <h4 className="text-[24px] md:text-[30px] font-bold mb-8 text-white">Ingresas tus datos</h4>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-5">
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm mb-2 text-gray-300">Nombre completo</label>
                                    <InputCustom
                                        autocomplete="off"
                                        error={errors.fullName}
                                        value={formValues.fullName}
                                        name="fullName"
                                        onChange={handleChange}
                                        className="bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] outline-none transition rounded-xl"
                                        placeholder="Ingresa tu nombre completo"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm mb-2 text-gray-300">Compañía (Opcional)</label>
                                    <InputCustom
                                        autocomplete="off"
                                        error={errors.company}
                                        value={formValues.company}
                                        name="company"
                                        onChange={handleChange}
                                        className="bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] outline-none transition rounded-xl"
                                        placeholder="Nombre de tu empresa"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm mb-2 text-gray-300">Email</label>
                                    <InputCustom
                                        autocomplete="off"
                                        error={errors.email}
                                        value={formValues.email}
                                        name="email"
                                        onChange={handleChange}
                                        className="bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] outline-none transition rounded-xl"
                                        placeholder="tu@correo.com"
                                    />
                                </div>
                                <div className="col-span-2 md:col-span-1">
                                    <label className="block text-sm mb-2 text-gray-300">Celular</label>
                                    <InputCustom
                                        autocomplete="off"
                                        error={errors.phone}
                                        value={formValues.phone}
                                        name="phone"
                                        onChange={handleChange}
                                        className="bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] outline-none transition rounded-xl"
                                        placeholder="Tu número de contacto"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor=""
                                        className="text-[16px] font-medium text-gray-300"
                                    >
                                        ¿Por qué nos contactas?
                                    </label>
                                    <div className="grid md:grid-cols-3 gap-4 mt-4 grid-cols-2">
                                        {[
                                            "Página Web",
                                            "Software a medida",
                                            "Posicionamiento",
                                            "Marketing",
                                            "Apps móviles",
                                            "Otros",
                                        ].map((service) => (
                                            <div key={service} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value={service}
                                                    checked={formValues.servicesSelect.includes(service)}
                                                    onChange={handleCheckboxChange}
                                                    className="w-4 h-4 rounded border-gray-600 text-[#22c55e] bg-black/40 focus:ring-[#22c55e]"
                                                />
                                                <label
                                                    htmlFor=""
                                                    className="text-[14px] ml-2 text-gray-300"
                                                >
                                                    {service}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    {errors.servicesSelect && (
                                        <p className="text-[#D35230] text-[15px] mt-2">
                                            {errors.servicesSelect}
                                        </p>
                                    )}
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm mb-2 text-gray-300">¿Cómo podemos ayudarte?</label>
                                    <InputCustom
                                        type="textarea"
                                        name="message"
                                        value={formValues.message}
                                        error={errors.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] outline-none transition rounded-xl w-full p-3"
                                        placeholder="Cuéntanos sobre tu proyecto..."
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#22C55F] text-white font-semibold cursor-pointer px-6 py-3 rounded-xl hover:bg-[#16a34a] disabled:opacity-60 transition-colors shadow-lg shadow-[#22c55e]/20"
                                >
                                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                </button>
                                {submitMessage && (
                                    <p
                                        className={`mt-4 text-[15px] font-medium text-center ${submitMessage.includes("éxito")
                                            ? "text-green-400"
                                            : "text-red-400"
                                            }`}
                                    >
                                        {submitMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;