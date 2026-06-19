'use client';

import { useCartStore } from '@/store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, getTotalPrice } = useCartStore();
  const router = useRouter();
  
  // Prevent hydration mismatch for persisted store
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40   z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag size={22} className="text-[#3b82f6]" />
                Tu Carrito
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-gray-300" />
                  </div>
                  <p className="text-lg font-medium text-gray-900 mb-2">Tu carrito está vacío</p>
                  <p className="text-sm">Agrega productos del catálogo para continuar.</p>
                  <button 
                    onClick={() => {
                      closeCart();
                      router.push('/tienda');
                    }}
                    className="mt-6 px-6 py-2.5 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-black transition-colors"
                  >
                    Explorar Catálogo
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Item Image */}
                    <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 shrink-0 border border-gray-100 flex items-center justify-center">
                      {item.imageUrl ? (
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                      ) : (
                        <img src="/assets/logo.png" alt="Falconext" className="w-8 h-8 opacity-10" />
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-bold text-gray-900 line-clamp-2 pr-4">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="text-sm font-black text-gray-900 mb-3">
                        S/. {item.price.toFixed(2)}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-gray-900">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.stock !== null && item.quantity >= item.stock}
                            className={`p-1.5 transition-colors ${item.stock !== null && item.quantity >= item.stock ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-900'}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        {item.stock !== null && item.quantity >= item.stock && (
                          <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">Máx alcanzado</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Subtotal</span>
                  <span className="text-2xl font-black text-gray-900">S/. {getTotalPrice().toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-6">Los impuestos y costos de envío se calcularán al finalizar la compra.</p>
                <button 
                  onClick={() => {
                    closeCart();
                    router.push('/checkout');
                  }}
                  className="w-full py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl font-bold tracking-wide transition-colors shadow-lg shadow-blue-500/20"
                >
                  PROCEDER AL PAGO
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
