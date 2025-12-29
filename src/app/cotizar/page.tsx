"use client";
import { useMemo, useState, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import InputCustom from "../components/InputCustom";
import { CheckCircle2, XCircle, PhoneCall, CreditCard } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

type Billing = "monthly" | "annual";
type CustomerType = "formal" | "informal";

type Feature = { label: string; included: boolean };

type Plan = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  includesPrinter?: boolean;
  features: Feature[];
};

const formalPlans: Plan[] = [
  {
    id: "micro",
    name: "Micro",
    monthlyPrice: 35.0,
    annualPrice: 350,
    includesPrinter: false,
    features: [
      { label: "100 Comprobantes/mes", included: true },
      { label: "Notas de venta ilimitadas", included: true },
      { label: "Inventario", included: true },
      { label: "Reportes", included: true },
      { label: "Todas las demás funciones", included: true },
    ],
  },
  {
    id: "emprende",
    name: "Emprende",
    monthlyPrice: 42.0,
    annualPrice: 420,
    includesPrinter: false,
    features: [
      { label: "300 Comprobantes/mes", included: true },
      { label: "Notas de venta ilimitadas", included: true },
      { label: "Inventario", included: true },
      { label: "Reportes", included: true },
      { label: "Todas las demás funciones", included: true },
    ],
  },
  {
    id: "control",
    name: "Control",
    monthlyPrice: 49.9,
    annualPrice: 500,
    includesPrinter: true,
    features: [
      { label: "500 Comprobantes/mes", included: true },
      { label: "Notas de venta ilimitadas", included: true },
      { label: "Inventario", included: true },
      { label: "Reportes", included: true },
      { label: "Todas las demás funciones", included: true },
    ],
  },
  {
    id: "bacan",
    name: "Bacán",
    monthlyPrice: 59.9,
    annualPrice: 600,
    includesPrinter: true,
    features: [
      { label: "600 Comprobantes/mes", included: true },
      { label: "Notas de venta ilimitadas", included: true },
      { label: "Inventario", included: true },
      { label: "Reportes", included: true },
      { label: "Todas las demás funciones", included: true },
    ],
  },
  {
    id: "super",
    name: "Súper",
    monthlyPrice: 79.9,
    annualPrice: 800,
    includesPrinter: true,
    features: [
      { label: "800 Comprobantes/mes", included: true },
      { label: "Notas de venta ilimitadas", included: true },
      { label: "Inventario", included: true },
      { label: "Reportes", included: true },
      { label: "Todas las demás funciones", included: true },
    ],
  },
  {
    id: "mega",
    name: "Mega",
    monthlyPrice: 99.9,
    annualPrice: 1000,
    includesPrinter: true,
    features: [
      { label: "1200 Comprobantes/mes", included: true },
      { label: "Notas de venta ilimitadas", included: true },
      { label: "Inventario", included: true },
      { label: "Reportes", included: true },
      { label: "Todas las demás funciones", included: true },
    ],
  },
];

const informalPlans: Plan[] = [
  {
    id: "emprende-informal-free",
    name: "Emprende",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { label: "200 ventas/mes", included: true },
      { label: "1 usuario", included: true },
      { label: "PDF / WhatsApp", included: true },
      { label: "Inventario avanzado", included: false },
    ],
  },
  {
    id: "crecimiento-informal",
    name: "Crecimiento",
    monthlyPrice: 9.9,
    annualPrice: 99,
    features: [
      { label: "Ventas ilimitadas", included: true },
      { label: "Inventario básico", included: true },
      { label: "2 usuarios", included: true },
      { label: "Reportes simples", included: true },
    ],
  },
  {
    id: "pro-informal",
    name: "Pro",
    monthlyPrice: 19.9,
    annualPrice: 199,
    features: [
      { label: "Inventario avanzado", included: true },
      { label: "Control de fiados", included: true },
      { label: "5 usuarios", included: true },
      { label: "Integración impresora", included: true },
      { label: "Backup automático", included: true },
    ],
  },
];

const QuotePage = () => {
  // Forced Dark Mode Logic
  const search = useSearchParams();
  const planParam = (search.get("plan") as string) || "pro";
  const billingParam = (search.get("billing") as Billing) || "monthly";
  const typeParam = (search.get("type") as CustomerType) || "formal";
  const printerParam = search.get("printer") === "1";

  const plans = typeParam === "formal" ? formalPlans : informalPlans;
  const selectedPlan = useMemo(() => plans.find(p => p.id === planParam) || plans[0], [plans, planParam]);
  const isAnnual = billingParam === "annual";
  const basePrice = isAnnual ? selectedPlan.annualPrice : selectedPlan.monthlyPrice;
  const addonFor = (planId: string) => {
    const isInformal = planId.includes("informal");
    if (isInformal) {
      if (planId.startsWith("basic")) return isAnnual ? 99 : 10;
      if (planId.startsWith("pro")) return isAnnual ? 149 : 15;
      return isAnnual ? 199 : 20;
    } else {
      // Formales (6 planes)
      if (planId === "micro") return isAnnual ? 199 : 20;
      if (planId === "emprende") return isAnnual ? 249 : 25;
      // Desde control en adelante la ticketera ya está incluida
      return 0;
    }
  };
  const finalPrice = basePrice + (printerParam && !selectedPlan.includesPrinter ? addonFor(selectedPlan.id) : 0);

  interface FormState {
    fullName: string;
    company: string;
    ruc: string;
    email: string;
    phone: string;
    message: string;
  }
  interface FormErrors {
    fullName: string;
    email: string;
    phone: string;
  }

  const [formValues, setFormValues] = useState<FormState>({
    fullName: "",
    company: "",
    ruc: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({ fullName: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = () => {
    const e: FormErrors = {
      fullName: formValues.fullName.trim() ? "" : "Nombre obligatorio",
      email: formValues.email.trim()
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
          ? ""
          : "Correo inválido"
        : "Correo obligatorio",
      phone: "",
    };
    setErrors(e);
    return Object.values(e).every(v => v === "");
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    if (name in errors) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitMessage("");

    const template = `\nNueva Cotización\n------------------------------\nTipo: ${typeParam === "formal" ? "Empresa formal" : "Emprendedor informal"}\nPlan: ${selectedPlan.name} (${selectedPlan.id})\nTicketera: ${printerParam ? "Sí" : "No"}\nPeriodo: ${isAnnual ? "Anual" : "Mensual"}\nPrecio: S/ ${finalPrice.toFixed(2)}\n\nNombre: ${formValues.fullName}\nEmpresa: ${formValues.company || "N/E"}\nRUC: ${formValues.ruc || "N/E"}\nEmail: ${formValues.email}\nTeléfono: ${formValues.phone || "N/E"}\nMensaje: ${formValues.message || "N/E"}\n`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9e8b5b39-7603-4a4c-90d7-1976f8d968d4",
          subject: `Cotización - ${selectedPlan.name} (${isAnnual ? "Anual" : "Mensual"})`,
          from_name: "Cotización Falconext",
          reply_to: formValues.email,
          email_template: template,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setSubmitMessage("¡Cotización enviada! Te contactaremos pronto.");
        setFormValues({ fullName: "", company: "", ruc: "", email: "", phone: "", message: "" });
      } else {
        setSubmitMessage(json.message || "Hubo un error. Intenta de nuevo.");
      }
    } catch (err) {
      setSubmitMessage("Error de conexión. Intenta de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/30 outline-none transition rounded-xl";
  const cardClass = "bg-white/5 border border-white/10 backdrop-blur-md";

  return (
    <>
      {/* Background Ambience - FIXED GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#0E0E0E]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#5A0EBB] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8A38F5] rounded-full mix-blend-screen filter blur-[100px] opacity-15" />
        <div className="absolute inset-0 bg-[#0E0E0E]/20 -z-10" />
      </div>

      <section className="relative bg-transparent py-16 md:py-24">
        <div className="mx-auto max-w-screen-xl px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center rounded-full bg-[#22c55e]/10 px-4 py-1 text-xs md:text-sm text-[#22c55e] border border-[#22c55e]/20">Contrata tu plan</p>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Completa tus datos para avanzar</h1>
            <p className="mt-3 text-sm md:text-base text-gray-400">Te enviaremos la orden y los pasos para activar tu cuenta.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            <div className="md:col-span-7">
              <div className={`rounded-3xl p-6 md:p-8 ${cardClass}`}>
                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">Nombre completo</label>
                      <InputCustom name="fullName" value={formValues.fullName} onChange={handleChange} autocomplete="off" className={inputClass} />
                      {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">Empresa</label>
                      <InputCustom name="company" value={formValues.company} onChange={handleChange} autocomplete="off" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">RUC (opcional)</label>
                      <InputCustom name="ruc" value={formValues.ruc} onChange={handleChange} autocomplete="off" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm mb-2 text-gray-300">Email</label>
                      <InputCustom name="email" value={formValues.email} onChange={handleChange} autocomplete="off" className={inputClass} />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2 text-gray-300">Celular / WhatsApp</label>
                      <InputCustom name="phone" value={formValues.phone} onChange={handleChange} autocomplete="off" className={inputClass} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm mb-2 text-gray-300">Mensaje</label>
                      <InputCustom name="message" type="textarea" value={formValues.message} onChange={handleChange} rows={6} className={`full ${inputClass}`} />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button disabled={isSubmitting} type="submit" className="bg-[#22c55e] text-[#052e16] rounded-full px-6 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-60 transition-colors shadow-lg shadow-green-500/20">
                      {isSubmitting ? "Enviando..." : "Solicitar cotización"}
                    </button>
                    {submitMessage && <span className="text-sm text-[#22c55e]">{submitMessage}</span>}
                  </div>
                </form>
              </div>
            </div>

            <div className="md:col-span-5 space-y-6">
              <div className={`rounded-3xl p-6 md:p-8 ${cardClass} shadow-lg shadow-white/5`}>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Resumen</p>
                  <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-gray-300">{typeParam === "formal" ? "Formal" : "Informal"} · {isAnnual ? "Anual" : "Mensual"} {printerParam ? "· Ticketera" : ""}</span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-white">{selectedPlan.name}</h3>
                <p className="mt-1 text-3xl font-bold text-white">S/ {finalPrice.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <div className="mt-4 space-y-2 text-sm">
                  {selectedPlan.features.map((f, i) => (
                    <p key={i} className="flex items-center gap-2">
                      {f.included ? (
                        <CheckCircle2 size={16} className="text-[#22c55e]" />
                      ) : (
                        <XCircle size={16} className="text-gray-500" />
                      )}
                      <span className={`${f.included ? "text-gray-300" : "text-gray-500 line-through"}`}>{f.label}</span>
                    </p>
                  ))}
                  <p className="flex items-center gap-2">
                    {printerParam ? (
                      <CheckCircle2 size={16} className="text-[#22c55e]" />
                    ) : (
                      <XCircle size={16} className="text-gray-500" />
                    )}
                    <span className={`${printerParam ? "text-gray-300" : "text-gray-500 line-through"}`}>Ticketera térmica 58mm incluida</span>
                  </p>
                </div>
              </div>

              <div className={`rounded-3xl p-6 md:p-8 ${cardClass}`}>
                <p className="mb-3 font-medium text-white">Métodos de pago</p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="flex items-center gap-2"><CreditCard size={16} className="text-[#22c55e]" />BCP: 123-45678901-0-00</p>
                  <p className="flex items-center gap-2"><CreditCard size={16} className="text-[#22c55e]" />Interbank: 123-45678901-0-00</p>
                  <p className="flex items-center gap-2"><Icon icon="mdi:qrcode" width={16} height={16} className="text-[#22c55e]" />Yape/Plin: 991 065 217</p>
                  <p className="text-xs text-gray-500 mt-2">Envíanos el voucher por email o WhatsApp con tu RUC y datos de facturación.</p>
                </div>
              </div>

              <a
                target="_blank"
                href={`https://wa.me/51991065217?text=${encodeURIComponent(
                  `Hola, quiero contratar el plan ${selectedPlan.name} (${typeParam === "formal" ? "Formal" : "Informal"}, ${isAnnual ? "Anual" : "Mensual"}${printerParam ? ", con ticketera" : ""}) por S/ ${finalPrice.toFixed(2)}.`
                )}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#22c55e] px-5 py-3 text-sm font-medium text-[#22c55e] hover:bg-[#22c55e]/10 transition-colors bg-white/5"
              >
                <PhoneCall size={16} /> Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuotePage;
