"use client";

import { X, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import yapeImg from "@/app/public/assets/yape.png";
import plinImg from "@/app/public/assets/plin.png";

interface Plan {
    id: string;
    name: string;
    price: number;
    billingPeriod: "monthly" | "annual";
}

interface PurchaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: Plan | null;
}

const PurchaseModal = ({ isOpen, onClose, plan }: PurchaseModalProps) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen || !plan) return null;

    const phoneNumber = "991065217";
    const contactName = "Diego Jesus Ortega Roldan";
    const formattedPrice = plan.price.toLocaleString("es-PE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const periodText = plan.billingPeriod === "annual" ? "por año" : "por mes";

    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsApp = () => {
        const message = `Hola, quiero enviar mi comprobante para activar el plan ${plan.name} (${periodText}) de S/${formattedPrice}`;
        window.open(`https://wa.me/51${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-md bg-white dark:bg-[#1a1b1e] rounded-3xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Header Price */}
                <div className="text-center mb-8">
                    <div className="bg-cyan-50 dark:bg-cyan-900/10 border border-cyan-100 dark:border-cyan-500/20 rounded-2xl p-6 mb-2">
                        <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">
                            S/{formattedPrice}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                            {periodText} / por empresa
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500 text-white text-sm font-bold">1</span>
                            <span className="font-bold text-gray-900 dark:text-white">Realiza el pago</span>
                        </div>

                        <div className="text-center">
                            <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">Yape - Plin</p>
                            <div className="flex justify-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden shadow-sm bg-[#742284]">
                                    <Image src={yapeImg} alt="Yape" width={64} height={64} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden shadow-sm bg-[#00d0d4]">
                                    <Image src={plinImg} alt="Plin" width={64} height={64} className="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl p-4 relative group">
                                <div className="flex items-center justify-center gap-3 mb-1">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white tabular-nums tracking-wide">
                                        {phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")}
                                    </span>
                                    <button
                                        onClick={handleCopy}
                                        className="text-gray-400 hover:text-cyan-500 transition-colors p-1"
                                        title="Copiar número"
                                    >
                                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    A nombre de: {contactName}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500 text-white text-sm font-bold shrink-0 mt-0.5">2</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Toma captura de tu comprobante
                        </span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500 text-white text-sm font-bold shrink-0 mt-0.5">3</span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Toca el botón de abajo para enviarnos tu comprobante de pago y activar tu suscripción.
                        </span>
                    </div>

                    <button
                        onClick={handleWhatsApp}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                        <Icon icon="mdi:whatsapp" width={24} height={24} />
                        Enviar Comprobante por WhatsApp
                    </button>

                    <p className="text-[10px] text-center text-[#eab308] font-medium flex items-center justify-center gap-1.5">
                        <Icon icon="mdi:lightning-bolt" width={12} />
                        Activamos tu cuenta en menos de 5 minutos después de verificar tu pago
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;
