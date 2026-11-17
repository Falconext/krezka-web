import { Boxes, Building, Calculator, MessageCircleHeart, MonitorSmartphone, ReceiptText, Store, Truck } from 'lucide-react';

const items = [
  { Icon: ReceiptText, titulo: 'Facturación SUNAT', texto: 'Boletas, facturas, notas y guías de remisión, ilimitadas.' },
  { Icon: MonitorSmartphone, titulo: 'Punto de venta', texto: 'Vende en tu local con caja, ticketera y código de barras.' },
  { Icon: Boxes, titulo: 'Inventario y kardex', texto: 'Un solo stock para la tienda y el local, con lotes y vencimientos.' },
  { Icon: Building, titulo: 'Varias sedes', texto: 'Traslados entre sucursales y reportes por sede.' },
  { Icon: Truck, titulo: 'Envíos', texto: 'Shalom, Olva y reparto propio con seguimiento.' },
  { Icon: Calculator, titulo: 'Contabilidad y SIRE', texto: 'Libros electrónicos y rentabilidad real de cada venta.' },
  { Icon: Store, titulo: 'Tienda con tu dominio', texto: 'Plantillas por rubro, banners, galería y tu propia marca.' },
  { Icon: MessageCircleHeart, titulo: 'IA de Ventas', texto: 'Un vendedor con IA en tu WhatsApp, como complemento.' },
];

const EmTodoIncluido = () => (
  <section className="bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-500">Y además</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Todo el sistema de tu negocio, no solo la tienda
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
          Lo que Shopify no tiene, porque no es un sistema para Perú: comprobantes SUNAT, caja, kardex y envíos
          nacionales.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
        {items.map(({ Icon, titulo, texto }) => (
          <div key={titulo} className="text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#6c5ce7] shadow-sm">
              <Icon size={20} />
            </span>
            <h3 className="mt-4 font-bold text-slate-900">{titulo}</h3>
            <p className="mx-auto mt-1.5 max-w-[240px] text-sm leading-relaxed text-slate-500">{texto}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EmTodoIncluido;
