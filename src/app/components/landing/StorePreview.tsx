'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, ChevronLeft, ChevronRight, Tag, AlertCircle, CheckCircle2 } from 'lucide-react';

type StoreProduct = {
  id: number;
  name: string;
  description: string | null;
  price: string;
  oldPrice: string | null;
  imageUrl: string | null;
  badge: string | null;
  stock?: number | null;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4001/api';

const fallbackProducts: StoreProduct[] = [
  { id: 1, name: 'CBX Gaveta Cajón Dinero 30cm', description: null, price: '150.00', oldPrice: '159.90', imageUrl: null, badge: null, stock: 2 },
  { id: 2, name: 'Papel Térmico 80mm (x5 rollos)', description: null, price: '50.00', oldPrice: null, imageUrl: null, badge: 'Nuevo', stock: 50 },
  { id: 3, name: 'Mini CPU Reacondicionado DELL', description: null, price: '820.00', oldPrice: '999.00', imageUrl: null, badge: null, stock: 8 },
  { id: 4, name: 'CBX Gaveta Cajón Dinero 40cm', description: null, price: '250.00', oldPrice: '329.00', imageUrl: null, badge: null, stock: 3 },
  { id: 5, name: 'Lector de Código de Barras', description: null, price: '180.00', oldPrice: '220.00', imageUrl: null, badge: 'Popular', stock: 15 },
];

const ProductCard = ({ product, index }: { product: StoreProduct; index: number }) => {
  const price = parseFloat(product.price);
  const oldPrice = product.oldPrice ? parseFloat(product.oldPrice) : null;
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;
  const isLowStock = product.stock != null && product.stock <= 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="flex-none w-[240px] bg-white rounded-2xl border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:border-blue-100 transition-all duration-300 group overflow-hidden flex flex-col"
    >
      {/* Image Area */}
      <div className="relative h-[180px] bg-[#f8fafc] flex items-center justify-center p-5 border-b border-gray-50 shrink-0">
        {discount && (
          <span className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 bg-[#be185d] text-white text-[10px] font-bold rounded-md z-10">
            <Tag size={10} /> {discount}% desc.
          </span>
        )}
        {!discount && product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-[#3b82f6] text-white text-[10px] font-bold rounded-md z-10">
            {product.badge}
          </span>
        )}
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img
            src="/assets/logo.png"
            alt="Falconext"
            className="w-14 h-14 object-contain opacity-[0.12] group-hover:scale-110 transition-transform duration-500"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Falconext</span>
        <h3 className="text-[14px] font-bold text-[#111827] leading-snug mb-3 line-clamp-2 min-h-[40px] group-hover:text-[#3b82f6] transition-colors">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-[18px] font-black text-[#111827]">S/. {price.toFixed(2)}</span>
          {oldPrice && (
            <span className="text-[13px] text-gray-400 line-through">S/. {oldPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Stock */}
        <div className="flex items-center gap-1.5 mb-4">
          {isLowStock ? (
            <>
              <AlertCircle size={12} className="text-red-500 shrink-0" />
              <span className="text-[11px] text-red-500 font-medium">
                Poca disponibilidad ({product.stock} uds.)
              </span>
            </>
          ) : (
            <>
              <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
              <span className="text-[11px] text-emerald-600 font-medium">En existencia</span>
            </>
          )}
        </div>

        {/* CTA */}
        <Link href="/tienda" className="mt-auto">
          <button className="w-full flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-[12px] font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm shadow-blue-500/20">
            <ShoppingCart size={14} />
            AÑADIR AL CARRITO
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const StorePreview = () => {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`${API_URL}/store-catalog/public`)
      .then((r) => { if (!r.ok) throw new Error('failed'); return r.json(); })
      .then((data) => {
        const items: StoreProduct[] = Array.isArray(data) ? data : (data?.data ?? []);
        setProducts(items.length > 0 ? items : fallbackProducts);
      })
      .catch(() => setProducts(fallbackProducts))
      .finally(() => setLoading(false));
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#f8fafc]" id="tienda-preview">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[12px] font-bold tracking-widest uppercase text-[#5F54D0] mb-2">Catálogo Falconext</p>
            <h2 className="text-3xl md:text-4xl text-[#111827] tracking-tight">
              Equipos y accesorios <span className="text-[#3b82f6]">para tu negocio</span>
            </h2>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Scroll controls */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-[#3b82f6] hover:text-white hover:border-[#3b82f6] flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <Link
              href="/tienda"
              className="text-[14px] font-bold text-[#3b82f6] hover:underline underline-offset-4 transition-all"
            >
              Ver todos →
            </Link>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex gap-6 overflow-hidden">

          {/* Featured Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-none w-[220px] rounded-2xl overflow-hidden relative bg-gradient-to-br from-[#5F54D0] via-[#5F54D0] to-[#5F54D0] shadow-lg shadow-blue-500/20 flex flex-col justify-between p-6"
          >
            {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />

            <div className="relative z-10">
              <img src="/assets/logowhite.png" alt="Falconext" className="h-8 w-auto brightness-200 mb-6" />
              <h3 className="text-white text-[20px] font-black leading-snug mb-3">
                Equipa tu negocio para el <span className="text-[#bfdbfe]">éxito</span>
              </h3>
              <p className="text-blue-100 text-[13px] leading-[1.65]">
                Elige el punto de venta ideal para tu tienda, restaurante o local. Todos incluyen sistema activado y soporte personalizado.
              </p>
            </div>

            <Link href="/tienda" className="relative z-10 mt-8">
              <button className="w-full bg-white text-[#1e3a8a] font-black text-[13px] py-3 rounded-xl hover:bg-[#bfdbfe] transition-colors shadow-md">
                VER TODO
              </button>
            </Link>
          </motion.div>

          {/* Scrollable Product List */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-2 flex-1 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex-none w-[240px] h-[380px] bg-gray-100 rounded-2xl animate-pulse" />
              ))
              : products.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
            }
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorePreview;
