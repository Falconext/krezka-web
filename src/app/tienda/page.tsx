'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Search, SlidersHorizontal, ChevronDown, Check, LayoutGrid, List, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { BRAND } from '@/lib/branding';

type StoreProduct = {
  id: number;
  name: string;
  description: string | null;
  price: string;
  oldPrice: string | null;
  imageUrl: string | null;
  badge: string | null;
  category: string | null;
  stock: number | null;
};

type MetaData = {
  categories: { name: string; count: number }[];
  availability: { inStock: number; outOfStock: number };
  priceRange: { min: number; max: number };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4001/api';

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function TiendaPage() {
  const [products, setProducts] = useState<StoreProduct[]>([]);
  const [meta, setMeta] = useState<MetaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Filtros
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [sortBy, setSortBy] = useState<'name_asc' | 'name_desc' | 'price_asc' | 'price_desc'>('name_asc');
  
  // Vistas y estado de UI
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOpen, setSortOpen] = useState(false);

  // Comparador
  const [compareList, setCompareList] = useState<StoreProduct[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  
  // Carrito
  const { addToCart } = useCartStore();

  const fetchMeta = async () => {
    try {
      const res = await fetch(`${API_URL}/store-catalog/public/meta`);
      if (res.ok) {
        const json = await res.json();
        setMeta(json.data || json);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategories.length > 0) {
        // Asumiendo que el backend soporta múltiples categorías o solo la primera (actualmente backend soporta 1, podemos mandar la primera o modificar backend, por simplicidad enviamos la primera)
        params.append('category', selectedCategories[0]); 
      }
      if (inStockOnly && !outOfStockOnly) params.append('inStock', 'true');
      if (outOfStockOnly && !inStockOnly) params.append('inStock', 'false');
      if (minPrice !== '') params.append('minPrice', minPrice.toString());
      if (maxPrice !== '') params.append('maxPrice', maxPrice.toString());
      params.append('sortBy', sortBy);

      const res = await fetch(`${API_URL}/store-catalog/public?${params.toString()}`);
      if (!res.ok) throw new Error('fetch failed');
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : (data?.data ?? []));
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeta();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
    }, 300); // debounce para los filtros de input
    return () => clearTimeout(timer);
  }, [selectedCategories, inStockOnly, outOfStockOnly, minPrice, maxPrice, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [cat] // El backend actualmente solo filtra por 1, reemplazamos. Si el backend soportara array sería [...prev, cat]
    );
  };

  const toggleCompare = (product: StoreProduct) => {
    setCompareList(prev => {
      if (prev.find(p => p.id === product.id)) return prev.filter(p => p.id !== product.id);
      if (prev.length >= 2) return [prev[1], product]; // Máximo 2, si hay 2, quita el primero
      return [...prev, product];
    });
  };

  const isComparing = (id: number) => compareList.some(p => p.id === id);

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-20">

      {/* Top Banner */}
      <div className="bg-[#fafafa] border-b border-gray-100 py-10 px-6 mb-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[#111827] mb-2">
              Hardware y Equipos
            </h1>
            <p className="text-[#6b7280] text-sm">Mostrando el catálogo oficial de {BRAND.name}.</p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#eff6ff] text-[#3b82f6] text-[11px] font-bold uppercase tracking-widest border border-blue-100">
            <Zap size={14} className="stroke-[2.5]" /> Tienda Oficial
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-32 relative">
        
        {/* TopBar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-200">
          <button className="flex items-center gap-2 text-[15px] font-bold text-[#111827] hover:text-[#258ecb] transition-colors group lg:hidden">
            Filtro <SlidersHorizontal size={18} className="text-gray-400 group-hover:text-[#258ecb] transition-colors" />
          </button>
          <div className="hidden lg:block text-sm text-gray-500">
            Mostrando {products.length} productos
          </div>

          <div className="flex items-center gap-6 z-20">
            {/* Sort */}
            <div className="relative">
              <button 
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-[14px] text-gray-500 hover:text-gray-900 transition-colors group"
              >
                Ordenar por <ChevronDown size={16} className={`text-gray-400 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-50">
                  <button onClick={() => { setSortBy('name_asc'); setSortOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortBy === 'name_asc' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>Alfabéticamente, A-Z</button>
                  <button onClick={() => { setSortBy('name_desc'); setSortOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortBy === 'name_desc' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>Alfabéticamente, Z-A</button>
                  <button onClick={() => { setSortBy('price_asc'); setSortOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortBy === 'price_asc' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>Precio, menor a mayor</button>
                  <button onClick={() => { setSortBy('price_desc'); setSortOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${sortBy === 'price_desc' ? 'text-blue-600 font-bold' : 'text-gray-700'}`}>Precio, mayor a menor</button>
                </div>
              )}
            </div>

            <div className="hidden sm:flex items-center gap-6 border-l border-gray-200 pl-6">
              <button 
                onClick={() => setShowCompareModal(true)}
                disabled={compareList.length === 0}
                className={`flex items-center gap-3 transition-colors ${compareList.length > 0 ? 'text-[#3b82f6] font-bold cursor-pointer' : 'text-gray-400 cursor-not-allowed'}`}
              >
                <span className="text-[14px]">Comparar ({compareList.length})</span>
              </button>

              <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                <span className="text-[14px] font-bold text-[#111827]">Vista</span>
                <button onClick={() => setViewMode('list')} className={`${viewMode === 'list' ? 'text-[#111827]' : 'text-gray-400 hover:text-gray-900'} transition-colors`}><List size={20} /></button>
                <button onClick={() => setViewMode('grid')} className={`${viewMode === 'grid' ? 'text-[#111827]' : 'text-gray-400 hover:text-gray-900'} transition-colors`}><LayoutGrid size={20} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-14">
          
          {/* Sidebar */}
          <div className="col-span-1 hidden lg:block">
            <div className="w-full space-y-8 pr-6 border-r border-gray-100 sticky top-32">
              {/* Disponibilidad */}
              <div>
                <h4 className="font-bold text-[15px] text-[#111827] mb-5">Disponibilidad</h4>
                <div className="space-y-3.5">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={inStockOnly}
                        onChange={(e) => setInStockOnly(e.target.checked)}
                        className="w-4 h-4 rounded-[3px] border-gray-300 text-[#258ecb] focus:ring-[#258ecb] cursor-pointer" 
                      />
                      <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">En existencia</span>
                    </div>
                    <span className="text-[13px] text-gray-400">({meta?.availability.inStock ?? 0})</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        checked={outOfStockOnly}
                        onChange={(e) => setOutOfStockOnly(e.target.checked)}
                        className="w-4 h-4 rounded-[3px] border-gray-300 text-[#258ecb] focus:ring-[#258ecb] cursor-pointer" 
                      />
                      <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">Agotado</span>
                    </div>
                    <span className="text-[13px] text-gray-400">({meta?.availability.outOfStock ?? 0})</span>
                  </label>
                </div>
              </div>

              {/* Precio */}
              <div className="pt-7 border-t border-gray-100">
                <h4 className="font-bold text-[15px] text-[#111827] mb-5">Precio</h4>
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">S/</span>
                    <input 
                      type="number" 
                      placeholder={meta?.priceRange.min.toString() ?? "0"} 
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full pl-8 pr-3 py-2 text-[13px] font-medium border border-gray-200 rounded-full focus:outline-none focus:border-[#258ecb] focus:ring-1 focus:ring-[#258ecb] transition-all" 
                    />
                  </div>
                  <span className="text-gray-300 font-medium">-</span>
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-medium">S/</span>
                    <input 
                      type="number" 
                      placeholder={meta?.priceRange.max.toString() ?? "9999"} 
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full pl-8 pr-3 py-2 text-[13px] font-medium border border-gray-200 rounded-full focus:outline-none focus:border-[#258ecb] focus:ring-1 focus:ring-[#258ecb] transition-all" 
                    />
                  </div>
                </div>
              </div>

              {/* Categorías */}
              {meta?.categories && meta.categories.length > 0 && (
                <div className="pt-7 border-t border-gray-100">
                  <h4 className="font-bold text-[15px] text-[#111827] mb-5">Tipo de producto</h4>
                  <div className="space-y-3.5">
                    {meta.categories.map((cat) => (
                      <label key={cat.name} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox" 
                            checked={selectedCategories.includes(cat.name)}
                            onChange={() => toggleCategory(cat.name)}
                            className="w-4 h-4 rounded-[3px] border-gray-300 text-[#258ecb] focus:ring-[#258ecb] cursor-pointer" 
                          />
                          <span className="text-[14px] text-gray-600 group-hover:text-gray-900 transition-colors">{cat.name}</span>
                        </div>
                        <span className="text-[13px] text-gray-400">({cat.count})</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Product Grid / List */}
          <div className="col-span-1 lg:col-span-3">
            {loading ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className={`${viewMode === 'grid' ? 'h-[400px]' : 'h-[200px]'} rounded-[1.5rem] bg-gray-50 border border-gray-100 animate-pulse`} />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-24 bg-white rounded-[1.5rem] border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Problemas de conexión</h3>
                <p className="text-gray-500">No se pudo cargar el catálogo. Intenta nuevamente más tarde.</p>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-[1.5rem] border border-gray-200 shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sin resultados</h3>
                <p className="text-gray-500">No encontramos productos con los filtros seleccionados.</p>
                <button 
                  onClick={() => { setSelectedCategories([]); setInStockOnly(false); setOutOfStockOnly(false); setMinPrice(''); setMaxPrice(''); }}
                  className="mt-6 px-6 py-2 bg-gray-900 text-white font-bold rounded-xl text-sm"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 xl:gap-8 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {products.map((product, i) => {
                  const price = parseFloat(product.price);
                  const oldPrice = product.oldPrice ? parseFloat(product.oldPrice) : null;
                  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;
                  const isOutOfStock = product.stock === 0;
                  const isLowStock = product.stock !== null && product.stock > 0 && product.stock <= 5;
                  const comparing = isComparing(product.id);

                  if (viewMode === 'list') {
                    return (
                      <motion.div
                        key={product.id}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#3b82f6]/30 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center"
                      >
                        <Link href={`/tienda/${product.id}`} className="relative w-full sm:w-48 h-48 bg-[#f8fafc] rounded-xl shrink-0 p-4 flex items-center justify-center cursor-pointer group-hover:bg-blue-50 transition-colors">
                          {discount && <span className="absolute top-2 left-2 px-2 py-1 bg-[#be185d] text-white text-[10px] font-bold rounded shadow-sm z-10">{discount}% desc.</span>}
                          {product.imageUrl ? <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" /> : <img src={BRAND.logo} alt={BRAND.name} className="w-16 h-16 object-contain opacity-10 group-hover:scale-110 transition-transform duration-500" />}
                        </Link>
                        <div className="flex-1 flex flex-col items-start w-full">
                          <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{product.category || BRAND.name}</span>
                          <Link href={`/tienda/${product.id}`} className="text-[18px] font-bold text-[#111827] mb-2 hover:text-blue-600 transition-colors">{product.name}</Link>
                          {product.description && <p className="text-sm text-gray-500 line-clamp-2 mb-4" dangerouslySetInnerHTML={{__html: product.description}}></p>}
                          <div className="flex items-center gap-3 mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input type="checkbox" checked={comparing} onChange={() => toggleCompare(product)} className="w-4 h-4 rounded-[3px] border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6]" />
                              <span className="text-[13px] font-medium text-gray-500">Comparar</span>
                            </label>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            {isOutOfStock ? (
                              <span className="text-[12px] text-red-500 font-bold">Agotado</span>
                            ) : isLowStock ? (
                              <span className="text-[12px] text-amber-500 font-bold">Últimas {product.stock} unidades</span>
                            ) : (
                              <span className="text-[12px] text-emerald-500 font-bold">En stock</span>
                            )}
                          </div>
                        </div>
                        <div className="sm:w-48 w-full flex flex-col items-center justify-center sm:border-l sm:border-gray-100 sm:pl-6 h-full gap-4">
                          <div className="text-center">
                            {oldPrice && <div className="text-[14px] text-gray-400 line-through mb-1">S/. {oldPrice.toFixed(2)}</div>}
                            <div className="text-[24px] font-black text-[#111827]">S/. {price.toFixed(2)}</div>
                          </div>
                          <button onClick={() => addToCart({ id: product.id, name: product.name, price, imageUrl: product.imageUrl, stock: product.stock }, 1)} disabled={isOutOfStock} className={`w-full py-3 rounded-xl font-bold text-[12px] transition-colors ${isOutOfStock ? 'bg-gray-100 text-gray-400' : 'bg-[#258ecb] hover:bg-[#1c75a9] text-white shadow-sm shadow-[#258ecb]/20'}`}>
                            {isOutOfStock ? 'AGOTADO' : 'AÑADIR AL CARRITO'}
                          </button>
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={product.id}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      className="bg-white rounded-2xl p-0 border border-gray-100 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#3b82f6]/30 transition-all duration-300 flex flex-col h-full group overflow-hidden"
                    >
                      <div className="relative w-full h-56 bg-white shrink-0 flex items-center justify-center p-6 border-b border-gray-50 group-hover:bg-[#f8fafc] transition-colors duration-300">
                        <label className="absolute top-4 left-4 flex items-center gap-2 z-10 cursor-pointer">
                          <input type="checkbox" checked={comparing} onChange={() => toggleCompare(product)} className="w-4 h-4 rounded-[3px] border-gray-300 text-[#3b82f6] focus:ring-[#3b82f6] cursor-pointer" />
                          <span className="text-[12px] font-medium text-gray-500">Comparar</span>
                        </label>
                        {discount && <span className="absolute top-11 left-4 px-2 py-1 bg-[#be185d] text-white text-[11px] font-bold tracking-wide rounded-[3px] shadow-sm z-10">{discount}% desc.</span>}
                        {!discount && product.badge && <span className="absolute top-11 left-4 px-2 py-1 bg-[#3b82f6] text-white text-[11px] font-bold tracking-wide rounded-[3px] shadow-sm z-10">{product.badge}</span>}
                        <Link href={`/tienda/${product.id}`} className="w-full h-full cursor-pointer flex items-center justify-center">
                          {product.imageUrl ? <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" /> : <img src={BRAND.logo} alt={BRAND.name} className="w-16 h-16 object-contain opacity-10 group-hover:scale-110 transition-transform duration-500" />}
                        </Link>
                      </div>

                      <div className="flex flex-col flex-1 p-5 text-left bg-white">
                        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{product.category || BRAND.name}</span>
                        <Link href={`/tienda/${product.id}`} className="text-[15px] font-bold text-[#111827] mb-4 leading-snug line-clamp-2 min-h-[44px] group-hover:text-[#3b82f6] transition-colors">{product.name}</Link>
                        
                        <div className="flex items-end gap-2.5 mb-4">
                          <span className="text-[20px] font-black text-[#111827] tracking-tight">S/. {price.toFixed(2)}</span>
                          {oldPrice && <span className="text-[14px] font-medium text-gray-400 line-through mb-[3px]">S/. {oldPrice.toFixed(2)}</span>}
                        </div>

                        <div className="flex items-center gap-2 mb-5 mt-auto">
                          {isOutOfStock ? (
                            <><span className="w-2 h-2 rounded-full bg-red-500"></span><span className="text-[12px] text-red-500 font-bold">Agotado</span></>
                          ) : isLowStock ? (
                            <><span className="w-2 h-2 rounded-full bg-amber-500"></span><span className="text-[12px] text-amber-600 font-medium">Solo {product.stock} disponibles</span></>
                          ) : (
                            <><span className="w-2 h-2 rounded-full bg-emerald-500"></span><span className="text-[12px] text-emerald-600 font-medium">En stock</span></>
                          )}
                        </div>

                        <button onClick={() => addToCart({ id: product.id, name: product.name, price, imageUrl: product.imageUrl, stock: product.stock }, 1)} disabled={isOutOfStock} className={`w-full py-3 rounded-xl font-bold text-[12px] tracking-wide transition-colors ${isOutOfStock ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-[#258ecb] hover:bg-[#1c75a9] text-white shadow-sm shadow-[#258ecb]/20'}`}>
                          {isOutOfStock ? 'AGOTADO' : 'AÑADIR AL CARRITO'}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Compare Modal Overlay */}
      <AnimatePresence>
        {showCompareModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setShowCompareModal(false)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 bg-gray-50 rounded-full transition-colors">
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-black text-gray-900 mb-8">Comparación de Productos</h2>

              <div className="grid grid-cols-2 gap-8 divide-x divide-gray-100">
                {compareList.map((p) => (
                  <div key={p.id} className="flex flex-col px-4 first:pl-0 last:pr-0">
                    <div className="h-48 bg-gray-50 rounded-2xl p-4 mb-6 flex items-center justify-center relative">
                      <button onClick={() => toggleCompare(p)} className="absolute top-3 right-3 text-red-400 hover:text-red-600">
                        <X size={16} />
                      </button>
                      {p.imageUrl ? <img src={p.imageUrl} className="w-full h-full object-contain mix-blend-multiply" /> : <img src={BRAND.logo} className="w-16 opacity-10" />}
                    </div>
                    <span className="text-xs font-bold text-[#3b82f6] uppercase tracking-wider mb-2">{p.category || 'Producto'}</span>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{p.name}</h3>
                    <div className="text-2xl font-black text-gray-900 mb-6">S/. {parseFloat(p.price).toFixed(2)}</div>
                    
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-500 uppercase mb-2 border-b pb-2">Disponibilidad</h4>
                      <p className={`text-sm font-medium mb-6 ${p.stock === 0 ? 'text-red-500' : p.stock && p.stock <= 5 ? 'text-amber-500' : 'text-emerald-500'}`}>
                        {p.stock === 0 ? 'Agotado' : p.stock && p.stock <= 5 ? `Últimas ${p.stock} unidades` : 'En stock'}
                      </p>

                      {p.description && (
                        <>
                          <h4 className="text-sm font-bold text-gray-500 uppercase mb-2 border-b pb-2">Descripción</h4>
                          <div className="text-sm text-gray-600 prose prose-sm max-w-none" dangerouslySetInnerHTML={{__html: p.description}}></div>
                        </>
                      )}
                    </div>

                    <button onClick={() => addToCart({ id: p.id, name: p.name, price: parseFloat(p.price), imageUrl: p.imageUrl, stock: p.stock }, 1)} disabled={p.stock === 0} className={`w-full py-3 mt-8 rounded-xl font-bold flex items-center justify-center gap-2 ${p.stock === 0 ? 'bg-gray-100 text-gray-400' : 'bg-gray-900 hover:bg-black text-white'}`}>
                      <ShoppingCart size={16} /> {p.stock === 0 ? 'Agotado' : 'Añadir al carrito'}
                    </button>
                  </div>
                ))}
                {compareList.length === 1 && (
                  <div className="flex flex-col items-center justify-center h-full text-center px-4">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                      <LayoutGrid className="text-gray-300" size={32} />
                    </div>
                    <p className="text-gray-500 font-medium max-w-xs">Selecciona otro producto de la tienda para compararlos lado a lado.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
