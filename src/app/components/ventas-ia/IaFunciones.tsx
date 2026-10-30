import {
  BarChart3,
  BookOpenText,
  Clock,
  CreditCard,
  Filter,
  Flame,
  Hand,
  ImageIcon,
  Package,
  RefreshCw,
  Truck,
  type LucideIcon,
} from 'lucide-react';

// Las mismas funciones que lista la sección de planes, agrupadas por lo que resuelven.
const funciones: { Icon: LucideIcon; titulo: string; texto: string }[] = [
  { Icon: Clock, titulo: 'Atiende 24/7', texto: 'WhatsApp, Instagram y Messenger, de día, de noche y en feriados.' },
  { Icon: Package, titulo: 'Tu catálogo real', texto: 'Responde con tu stock y tus precios del sistema. Nunca ofrece lo que no tienes.' },
  { Icon: Truck, titulo: 'Cotiza con envío', texto: 'Calcula el delivery por zona o agencia y aplica tus descuentos.' },
  { Icon: ImageIcon, titulo: 'Fotos, voz y brochure', texto: 'Manda la foto del producto, entiende notas de voz y comparte tu brochure.' },
  { Icon: BookOpenText, titulo: 'Aprende de tus documentos', texto: 'Súbele tu lista de precios o tus políticas y responde con esa información.' },
  { Icon: Flame, titulo: 'Leads calientes', texto: 'Califica a cada prospecto y te avisa quién está listo para comprar.' },
  { Icon: RefreshCw, titulo: 'Seguimiento automático', texto: 'Cotizaciones sin cerrar, recompra del mes y reactivación de clientes.' },
  { Icon: CreditCard, titulo: 'Pedidos y pagos', texto: 'Toma el pedido, comparte tu Yape o link de pago y revisa el voucher.' },
  { Icon: Hand, titulo: 'Tú tomas el control', texto: 'Pausa el bot en cualquier chat y responde tú desde la bandeja.' },
  { Icon: Filter, titulo: 'Embudo de ventas', texto: 'Cada cliente por etapa, del primer mensaje a la entrega.' },
  { Icon: BarChart3, titulo: 'Métricas y reporte diario', texto: 'Lo que te piden y no tienes, conversión y un resumen diario por WhatsApp.' },
];

const IaFunciones = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
          Funciones
        </span>
        <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
          Todo lo que hace tu vendedor IA
        </h2>
        <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
          Incluido en todos los planes. Sin funciones bloqueadas ni cobros por mensaje.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {funciones.map((f, i) => (
          <div
            key={f.titulo}
            style={{ animationDelay: `${(i % 3) * 0.06}s` }}
            className="kz-reveal group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#6c5ce7]/30 hover:shadow-lg hover:shadow-[#6c5ce7]/10"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1eefe] text-[#6c5ce7] transition-colors group-hover:bg-[#6c5ce7] group-hover:text-white">
              <f.Icon size={20} />
            </span>
            <div>
              <h3 className="text-[15px] font-bold text-slate-900">{f.titulo}</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-slate-500">{f.texto}</p>
            </div>
          </div>
        ))}
        {/* Cierre de la grilla: lleva a los planes */}
        <a
          href="#planes-ia"
          className="kz-reveal flex flex-col justify-center rounded-2xl bg-gradient-to-br from-[#7b6af2] to-[#5b4bd6] p-5 text-white shadow-lg shadow-[#6c5ce7]/25 transition-transform hover:-translate-y-0.5"
          style={{ animationDelay: '0.12s' }}
        >
          <span className="text-[15px] font-bold">Desde S/ 199 al mes</span>
          <span className="mt-1 text-[13.5px] text-white/80">Con facturación SUNAT incluida. Ver planes →</span>
        </a>
      </div>
    </div>
  </section>
);

export default IaFunciones;
