import { CircleHelp } from 'lucide-react';

const preguntas = [
  {
    p: '¿Puedo pasar mi tienda de Shopify a Krezka?',
    r: 'Sí. Te ayudamos a cargar tus productos, categorías y fotos, y a conectar tu dominio. La instalación de S/ 50 + IGV es un solo pago.',
  },
  {
    p: '¿Krezka cobra comisión por venta?',
    r: 'No. Pagas tu plan mensual y nada más. Lo que vendas en tu tienda es tuyo, sin porcentajes.',
  },
  {
    p: '¿La tienda emite boleta o factura?',
    r: 'Sí. Cada pedido de la tienda puede generar su comprobante SUNAT y descontar el stock del mismo inventario que usa tu local.',
  },
  {
    p: '¿Qué diferencia hay entre Empresarial y Plus?',
    r: 'Empresarial trae promociones, cupones, carritos recuperados, preventa y analítica. Plus suma precios B2B, puntos, gift cards, compras recurrentes, pago con tarjeta y usuarios y sedes ilimitados.',
  },
  {
    p: '¿Puedo empezar en Empresarial y subir a Plus después?',
    r: 'Sí. Cambias de plan cuando quieras y las funciones nuevas se activan en tu misma tienda, sin migrar nada.',
  },
  {
    p: '¿La IA de Ventas viene incluida?',
    r: 'Es un complemento que se suma a cualquier plan: un vendedor con IA que atiende tu WhatsApp con tu catálogo real.',
  },
];

const EmFaq = () => (
  <section className="bg-[#f6f6fe] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Preguntas frecuentes</h2>
        <p className="mt-4 text-base text-slate-500 md:text-lg">¿Te queda otra duda? Escríbenos por WhatsApp.</p>
      </div>
      <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {preguntas.map(({ p, r }) => (
          <div key={p} className="text-center">
            <CircleHelp size={22} className="mx-auto text-[#6c5ce7]" />
            <h3 className="mt-3 font-bold text-slate-900">{p}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{r}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EmFaq;
