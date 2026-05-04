'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, Tablet, ArrowUpRight, SmartphoneNfc, Wallet, Store, Globe } from 'lucide-react';
import Link from 'next/link';

type StoreProduct = {
  id: number;
  name: string;
  description: string | null;
  price: string;
  oldPrice: string | null;
  imageUrl: string | null;
  badge: string | null;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4001/api';

const fallbackHardware = [
  {
    id: 1,
    name: "Falcon 1",
    description: "La solución POS todo en uno. Tu tienda más rápida y organizada con Falcon 1. Pantalla amplia, impresión inmediata y control de inventario en un solo equipo.",
    price: "1995.00",
    oldPrice: null,
    imageUrl: null,
    badge: "Más Vendido"
  },
  {
    id: 2,
    name: "Swift 2",
    description: "Tu POS portátil, para vender donde quieras. Con batería de 10 horas, pantalla táctil e impresora integrada, te permite gestionar ventas en ferias o puntos móviles.",
    price: "850.00",
    oldPrice: null,
    imageUrl: null,
    badge: "Portátil"
  },
  {
    id: 3,
    name: "M2 MAX",
    description: "Optimizado para pedidos a domicilio. Pantalla táctil de 8\" y procesador ultrarrápido para no perder ni un pedido de delivery.",
    price: "1200.00",
    oldPrice: null,
    imageUrl: null,
    badge: "Delivery"
  }
];

const Hardware = () => {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/store-catalog/public`)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json();
      })
      .then((data) => {
        const items = Array.isArray(data) ? data : (data?.data ?? []);
        if (items.length > 0) {
          setProducts(items.slice(0, 3));
        } else {
          setProducts(fallbackHardware);
        }
      })
      .catch(() => {
        setProducts(fallbackHardware);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="relative bg-white overflow-hidden" id="equipos">

      {/* Hero banner background with overlay */}
      <div className="relative w-full pt-28 pb-48 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/bannerhero.png')" }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#1a0a5e]/60" />

        {/* Curved white bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" className="w-full h-20 fill-white" preserveAspectRatio="none">
            <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" />
          </svg>
        </div>

        {/* Text content */}
        <div className="relative z-10 text-center px-6">
          <h4 className="text-white/80 font-bold tracking-widest text-sm uppercase mb-5">SISTEMA POS FALCONEXT</h4>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white max-w-3xl mx-auto leading-[1.15]">
            Construye tu Punto de Venta <br />
            <span className="text-[#a78bfa]">todo en uno</span>
          </h2>
          <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Combos completos de hardware y software listo para operar. Equipa tu tienda, restaurante o local con todo lo que necesitas desde el primer día.
          </p>
        </div>
      </div>


      {/* POS Overview Feature */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="bg-white rounded-[2rem] px-6 py-10 lg:px-12 lg:py-14">

          {/* 3-Column Grid: [Left Text] [Center Image] [Right Text] */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">

            {/* Left Column: 2 text cards */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#f8f9fb] rounded-2xl p-6 text-left"
              >
                <h4 className="font-bold text-[#111827] text-[17px] mb-2">Cobros Rápidos</h4>
                <p className="text-[#6b7280] text-[13px] leading-[1.65]">Cierra ventas rápidamente con un software fácil de usar que mantiene todo organizado.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#f8f9fb] rounded-2xl p-6 text-left"
              >
                <h4 className="font-bold text-[#111827] text-[17px] mb-2">Pagos Fluidos</h4>
                <p className="text-[#6b7280] text-[13px] leading-[1.65]">Acepta pagos con hardware POS confiable diseñado para ventas suaves y sin fricción.</p>
              </motion.div>
            </div>

            {/* Center: The image already has circles, icons and connector lines baked in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <img
                src="/assets/pos.png"
                alt="Falconext POS Sistema"
                className="w-[520px] xl:w-[580px] h-auto object-contain"
              />
            </motion.div>

            {/* Right Column: 2 text cards */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#f8f9fb] rounded-2xl p-6 text-left"
              >
                <h4 className="font-bold text-[#111827] text-[17px] mb-2">Menos Trabajo</h4>
                <p className="text-[#6b7280] text-[13px] leading-[1.65]">Vende en múltiples ubicaciones con un único panel de administración para cada operación.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#f8f9fb] rounded-2xl p-6 text-left"
              >
                <h4 className="font-bold text-[#111827] text-[17px] mb-2">Ventas Online</h4>
                <p className="text-[#6b7280] text-[13px] leading-[1.65]">Vende mejor en tienda física y online con herramientas potentes a precios accesibles.</p>
              </motion.div>
            </div>

          </div>

          {/* Mobile Fallback: Image on top, 2x2 grid below */}
          <div className="lg:hidden">
            <img src="/assets/pos.png" alt="Falconext POS" className="w-full h-auto object-contain mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Cobros Rápidos', desc: 'Cierra ventas rápidamente con un software fácil de usar que mantiene todo organizado.' },
                { title: 'Pagos Fluidos', desc: 'Acepta pagos con hardware POS confiable diseñado para ventas suaves y sin fricción.' },
                { title: 'Menos Trabajo', desc: 'Vende en múltiples ubicaciones con un único panel de administración para cada operación.' },
                { title: 'Ventas Online', desc: 'Vende mejor en tienda física y online con herramientas potentes a precios accesibles.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#f8f9fb] rounded-2xl p-5 text-center">
                  <h4 className="font-bold text-[#111827] text-[15px] mb-1">{item.title}</h4>
                  <p className="text-[#6b7280] text-[12px] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hardware;
