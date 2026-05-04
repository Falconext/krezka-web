'use client';

import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MessageCircle, ShieldCheck, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CheckoutPage() {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  
  // Falconext WhatsApp Number
  const WHATSAPP_NUMBER = '51932332556'; // Número oficial de ventas Falconext

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 max-w-2xl mx-auto text-center flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={40} className="text-gray-300" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">Tu carrito está vacío</h1>
        <p className="text-gray-500 mb-8">No puedes proceder al pago sin haber agregado productos a tu carrito primero.</p>
        <Link href="/tienda" className="px-8 py-3 bg-[#3b82f6] text-white font-bold rounded-full hover:bg-blue-600 transition-colors">
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    let message = `*NUEVO PEDIDO DESDE LA TIENDA WEB*%0A%0A`;
    message += `*Cliente:* ${name}%0A`;
    if (company) message += `*Empresa:* ${company}%0A`;
    message += `*Teléfono:* ${phone}%0A%0A`;
    
    message += `*RESUMEN DEL PEDIDO:*%0A`;
    items.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (S/. ${(item.price * item.quantity).toFixed(2)})%0A`;
    });
    
    message += `%0A*Total:* S/. ${getTotalPrice().toFixed(2)}%0A%0A`;
    message += `Por favor, envíenme los métodos de pago y coordinemos la entrega. ¡Gracias!`;

    // Redirigir a WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Opcional: Vaciar carrito después de enviar
    clearCart();
    router.push('/tienda');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        
        <Link href="/tienda" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> Volver a comprar
        </Link>

        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-[#3b82f6]">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900">Finalizar Compra</h1>
            <p className="text-sm text-gray-500">Checkout seguro vía WhatsApp Asesor</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Formulario de Contacto (Izquierda) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs flex items-center justify-center">1</span>
                Datos de Contacto
              </h2>
              
              <form id="checkout-form" onSubmit={handleCheckout} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Nombre Completo *</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Número de WhatsApp *</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] outline-none transition-all"
                      placeholder="Ej. 987 654 321"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Empresa / RUC (Opcional)</label>
                    <input 
                      type="text" 
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#3b82f6]/20 focus:border-[#3b82f6] outline-none transition-all"
                      placeholder="Para tu factura"
                    />
                  </div>
                </div>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex gap-4 items-start"
            >
              <div className="mt-1 w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-emerald-500">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 mb-1">Cierre rápido y seguro</h3>
                <p className="text-sm text-emerald-800/80 leading-relaxed">
                  Al confirmar tu pedido, te contactaremos inmediatamente por WhatsApp para gestionar el pago (Transferencia, Yape/Plin, Tarjeta) y coordinar el envío de tus equipos.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Resumen del Pedido (Derecha) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 shrink-0 border border-gray-100 flex items-center justify-center">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      ) : (
                        <img src="/assets/logo.png" alt="Falconext" className="w-8 opacity-10" />
                      )}
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-gray-500">Cant: {item.quantity}</p>
                    </div>
                    <div className="flex flex-col justify-center text-right">
                      <span className="text-sm font-bold text-gray-900">S/. {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-100 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({getTotalItems()} productos)</span>
                  <span className="font-medium text-gray-900">S/. {getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Envío</span>
                  <span className="text-amber-600 font-bold text-xs uppercase bg-amber-50 px-2 py-0.5 rounded">Por calcular</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-100 mb-8">
                <span className="text-lg font-bold text-gray-900">Total aproximado</span>
                <span className="text-2xl font-black text-gray-900">S/. {getTotalPrice().toFixed(2)}</span>
              </div>

              <button 
                type="submit"
                form="checkout-form"
                className="w-full py-4 bg-[#25d366] hover:bg-[#1fae51] text-white rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#25d366]/20 hover:shadow-[#25d366]/40 hover:-translate-y-0.5"
              >
                <MessageCircle size={20} className="fill-white/20" />
                ENVIAR PEDIDO POR WHATSAPP
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}
