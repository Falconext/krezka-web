'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import { ArrowLeft, Minus, Plus, ShoppingCart, Zap, CheckCircle2, AlertTriangle, ShieldCheck, Truck } from 'lucide-react';
import Link from 'next/link';

type ProductDetail = {
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

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4001/api';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<ProductDetail[]>([]);
  
  const { addToCart, openCart } = useCartStore();

  useEffect(() => {
    if (!id) return;
    
    fetch(`${API_URL}/store-catalog/public/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then(data => {
        setProduct(data.data || data);
        
        // Fetch related products (using the public endpoint to get all and filtering)
        return fetch(`${API_URL}/store-catalog/public`);
      })
      .then(res => res.json())
      .then(data => {
        const allProducts: ProductDetail[] = Array.isArray(data) ? data : (data?.data ?? []);
        // Filter out current product and take up to 4
        setRelatedProducts(allProducts.filter(p => p.id !== Number(id)).slice(0, 4));
      })
      .catch(err => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-gray-100 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
        <div className="bg-gray-50 rounded-3xl p-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-500 mb-8">El producto que estás buscando no existe o ya no está disponible.</p>
          <Link href="/tienda" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
            <ArrowLeft size={18} /> Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  const price = parseFloat(product.price);
  const oldPrice = product.oldPrice ? parseFloat(product.oldPrice) : null;
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;
  
  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock !== null && product.stock > 0 && product.stock <= 5;
  
  const maxAvailable = product.stock !== null ? product.stock : 99;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price,
      imageUrl: product.imageUrl,
      stock: product.stock
    }, quantity);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/checkout');
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-900 transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/tienda" className="hover:text-gray-900 transition-colors">Tienda</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Gallery / Image (Left side) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="relative w-full aspect-square bg-[#f8fafc] rounded-3xl p-10 flex items-center justify-center border border-gray-100 group">
              {discount && (
                <span className="absolute top-6 left-6 px-3 py-1.5 bg-[#be185d] text-white text-xs font-bold tracking-wider rounded shadow-sm z-10">
                  AHORRA {discount}%
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
                  className="w-32 h-32 object-contain opacity-10" 
                />
              )}
            </div>
            
            {/* Beneficios estáticos debajo de imagen */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-500 shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-xs font-medium text-gray-600">Garantía oficial de marca</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-500 shrink-0">
                  <Truck size={20} />
                </div>
                <div className="text-xs font-medium text-gray-600">Envíos a todo el país</div>
              </div>
            </div>
          </motion.div>

          {/* Product Details (Right side) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  {product.category || 'Producto Oficial'}
                </span>
                {product.badge && (
                  <span className="text-xs font-bold text-white uppercase tracking-widest bg-gray-900 px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
                {product.name}
              </h1>
              
              <div className="flex flex-wrap items-end gap-4 mb-6">
                <span className="text-4xl font-black text-gray-900">S/. {price.toFixed(2)}</span>
                {oldPrice && (
                  <span className="text-xl font-medium text-gray-400 line-through mb-1">
                    S/. {oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-8"></div>

            {/* Descripción */}
            {product.description && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Descripción del equipo</h3>
                <div 
                  className="prose prose-sm text-gray-600 max-w-none leading-relaxed"
                  dangerouslySetInnerHTML={{__html: product.description}}
                ></div>
              </div>
            )}

            {/* Disponibilidad */}
            <div className="mb-8 p-4 rounded-2xl border border-gray-100 bg-gray-50/50 flex items-center gap-3">
              {isOutOfStock ? (
                <>
                  <AlertTriangle className="text-red-500" />
                  <span className="font-bold text-red-600">Agotado temporalmente</span>
                </>
              ) : isLowStock ? (
                <>
                  <AlertTriangle className="text-amber-500" />
                  <div>
                    <span className="font-bold text-amber-600 block">Pocas unidades disponibles</span>
                    <span className="text-xs text-amber-700/70">Solo quedan {product.stock} en stock. ¡Cómpralo pronto!</span>
                  </div>
                </>
              ) : (
                <>
                  <CheckCircle2 className="text-emerald-500" />
                  <div>
                    <span className="font-bold text-emerald-600 block">En stock y listo para enviar</span>
                    <span className="text-xs text-gray-500">Stock garantizado por Falconext.</span>
                  </div>
                </>
              )}
            </div>

            {/* Acciones */}
            <div className="mt-auto space-y-4">
              {!isOutOfStock && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-between w-32 bg-gray-50 rounded-xl border border-gray-200 p-1">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-gray-900">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(maxAvailable, quantity + 1))}
                      className="p-3 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingCart size={18} />
                    AÑADIR AL CARRITO
                  </button>
                </div>
              )}

              <button 
                onClick={handleBuyNow}
                disabled={isOutOfStock}
                className={`w-full py-4 rounded-xl font-bold tracking-wider flex items-center justify-center gap-2 transition-all ${
                  isOutOfStock 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-[#3b82f6] hover:bg-[#2563eb] text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5'
                }`}
              >
                <Zap size={18} className={isOutOfStock ? '' : 'fill-white'} />
                {isOutOfStock ? 'PRODUCTO AGOTADO' : 'COMPRAR AHORA'}
              </button>
            </div>

          </motion.div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-gray-100 pt-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8">También te podría interesar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => {
                const relPrice = parseFloat(relProduct.price);
                const relOldPrice = relProduct.oldPrice ? parseFloat(relProduct.oldPrice) : null;
                const relDiscount = relOldPrice ? Math.round(((relOldPrice - relPrice) / relOldPrice) * 100) : null;

                return (
                  <Link 
                    key={relProduct.id} 
                    href={`/tienda/${relProduct.id}`}
                    className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative w-full aspect-square bg-[#f8fafc] p-6 flex items-center justify-center">
                      {relDiscount && (
                        <span className="absolute top-4 left-4 px-2 py-1 bg-[#be185d] text-white text-[10px] font-bold rounded shadow-sm z-10">
                          {relDiscount}% desc.
                        </span>
                      )}
                      {relProduct.imageUrl ? (
                        <img 
                          src={relProduct.imageUrl} 
                          alt={relProduct.name} 
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <img src="/assets/logo.png" className="w-12 h-12 opacity-10" />
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1.5">{relProduct.category || 'Producto'}</span>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{relProduct.name}</h3>
                      <div className="mt-auto flex items-end gap-2">
                        <span className="text-lg font-black text-gray-900">S/. {relPrice.toFixed(2)}</span>
                        {relOldPrice && <span className="text-xs text-gray-400 line-through mb-1">S/. {relOldPrice.toFixed(2)}</span>}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
