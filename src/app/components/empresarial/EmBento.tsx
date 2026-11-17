import { BarChart3, CalendarClock, LayoutTemplate, MessageCircle, Tag, Ticket } from 'lucide-react';

// Mini interfaces dibujadas en código: pesan casi nada y se ven nítidas en cualquier pantalla.

const MockPromo = () => (
  <div className="relative mx-auto w-full max-w-[260px] rounded-2xl border border-white/70 bg-white p-3 shadow-xl shadow-orange-900/10">
    <div className="relative flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-rose-100">
      <span className="absolute left-2 top-2 rounded-full bg-rose-500 px-2.5 py-1 text-[10px] font-extrabold uppercase text-white">2x1</span>
      <div className="h-16 w-12 rounded-lg bg-gradient-to-b from-orange-300 to-orange-500 shadow-md" />
      <div className="-ml-3 mt-4 h-14 w-10 rounded-lg bg-gradient-to-b from-rose-300 to-rose-500 shadow-md" />
    </div>
    <p className="mt-3 text-[13px] font-bold text-slate-800">Polo básico algodón</p>
    <div className="mt-1 flex items-center gap-2">
      <span className="text-[15px] font-extrabold text-slate-900">S/ 39.90</span>
      <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">Lleva 2, paga 1</span>
    </div>
  </div>
);

const MockCarrito = () => (
  <div className="mx-auto w-full max-w-[280px] space-y-2.5">
    <div className="rounded-2xl rounded-tl-sm bg-white p-3.5 text-[12.5px] leading-snug text-slate-700 shadow-lg shadow-emerald-900/10">
      Hola Ana, dejaste <b>2 productos</b> en tu carrito. Te guardamos el stock hasta hoy a las 8 p. m. 🛒
      <span className="mt-2 block rounded-lg bg-emerald-50 px-2.5 py-1.5 text-center text-[12px] font-bold text-emerald-700">
        Terminar mi compra
      </span>
    </div>
    <div className="ml-auto w-fit rounded-2xl rounded-tr-sm bg-emerald-500 px-3.5 py-2 text-[12.5px] font-medium text-white shadow-lg shadow-emerald-900/20">
      ¡Listo, ya pagué! 🙌
    </div>
  </div>
);

const MockCupon = () => (
  <div className="relative mx-auto flex w-full max-w-[260px] overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-400/20">
    <div className="flex w-20 shrink-0 flex-col items-center justify-center bg-[#6c5ce7] text-white">
      <span className="text-2xl font-extrabold">15%</span>
      <span className="text-[10px] font-semibold opacity-80">dscto.</span>
    </div>
    <div className="border-l-2 border-dashed border-slate-200 p-3.5">
      <p className="font-mono text-[13px] font-bold tracking-wider text-slate-800">VUELVE-7KQ2</p>
      <p className="mt-1 text-[11px] leading-snug text-slate-500">Código único por cliente · se combina con otro cupón</p>
    </div>
  </div>
);

const MockEmbudo = () => {
  const pasos = [
    { n: 'Visitas', v: 100, c: 'bg-[#c9c3fa]' },
    { n: 'Carrito', v: 38, c: 'bg-[#a99df8]' },
    { n: 'Pago', v: 21, c: 'bg-[#7c6bf0]' },
    { n: 'Venta', v: 14, c: 'bg-[#5b4bd6]' },
  ];
  return (
    <div className="mx-auto w-full max-w-[300px] space-y-2">
      {pasos.map((p) => (
        <div key={p.n} className="flex items-center gap-3">
          <span className="w-14 text-[11px] font-semibold text-slate-500">{p.n}</span>
          <div className="h-6 flex-1 rounded-md bg-slate-100">
            <div className={`h-6 rounded-md ${p.c}`} style={{ width: `${p.v}%` }} />
          </div>
          <span className="w-9 text-right text-[11px] font-bold text-slate-700">{p.v}%</span>
        </div>
      ))}
    </div>
  );
};

const MockPortada = () => (
  <div className="mx-auto w-full max-w-[250px] space-y-2">
    {[
      ['Banner principal', true],
      ['Más vendidos', true],
      ['Ofertas de la semana', true],
      ['Marcas', false],
    ].map(([n, on]) => (
      <div key={n as string} className="flex items-center justify-between rounded-xl bg-white px-3.5 py-2.5 shadow-sm">
        <span className="text-[12.5px] font-semibold text-slate-700">{n}</span>
        <span className={`flex h-5 w-9 items-center rounded-full p-0.5 ${on ? 'justify-end bg-[#6c5ce7]' : 'bg-slate-200'}`}>
          <span className="h-4 w-4 rounded-full bg-white shadow" />
        </span>
      </div>
    ))}
  </div>
);

const MockPreventa = () => (
  <div className="mx-auto w-full max-w-[250px] rounded-2xl bg-white p-4 shadow-lg shadow-slate-400/20">
    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase text-amber-700">Preventa</span>
    <p className="mt-3 text-[13px] font-bold text-slate-800">Llega el 5 de diciembre</p>
    <p className="mt-1 text-[11.5px] text-slate-500">Asegura el tuyo hoy. Te avisamos cuando haya stock.</p>
    <div className="mt-3 rounded-lg bg-slate-900 py-2 text-center text-[12px] font-bold text-white">Reservar</div>
  </div>
);

type Celda = {
  Icon: typeof Tag;
  titulo: string;
  texto: string;
  Mock: () => React.JSX.Element;
  clase: string;
  fondo: string;
};

const celdas: Celda[] = [
  {
    Icon: MessageCircle,
    titulo: 'Recupera los carritos abandonados',
    texto: 'Cuando alguien deja productos sin pagar, Krezka le escribe por WhatsApp o correo para que termine su compra.',
    Mock: MockCarrito,
    clase: 'lg:col-span-7',
    fondo: 'bg-gradient-to-br from-emerald-50 to-teal-100/70',
  },
  {
    Icon: Tag,
    titulo: 'Promociones que se aplican solas',
    texto: '2x1, lleva 3 paga 2 o descuento desde cierto monto, sin cambiar tus precios.',
    Mock: MockPromo,
    clase: 'lg:col-span-5',
    fondo: 'bg-gradient-to-br from-orange-50 to-rose-100/70',
  },
  {
    Icon: Ticket,
    titulo: 'Cupones avanzados',
    texto: 'Lotes de códigos únicos para campañas y hasta 2 cupones en un mismo pedido.',
    Mock: MockCupon,
    clase: 'lg:col-span-4',
    fondo: 'bg-[#eeecfd]',
  },
  {
    Icon: BarChart3,
    titulo: 'Analítica de conversión',
    texto: 'Ve en qué paso se te van los clientes y qué canal y qué productos venden más.',
    Mock: MockEmbudo,
    clase: 'lg:col-span-4',
    fondo: 'bg-slate-50',
  },
  {
    Icon: LayoutTemplate,
    titulo: 'Portada a tu medida',
    texto: 'Ordena, muestra u oculta las secciones de tu tienda en un clic.',
    Mock: MockPortada,
    clase: 'lg:col-span-4',
    fondo: 'bg-gradient-to-br from-sky-50 to-indigo-100/70',
  },
  {
    Icon: CalendarClock,
    titulo: 'Preventa y avisos de stock',
    texto: 'Vende lo que todavía no llega, con fecha de llegada, y avisa cuando vuelva el stock.',
    Mock: MockPreventa,
    clase: 'lg:col-span-12 lg:flex-row',
    fondo: 'bg-gradient-to-r from-amber-50 via-white to-amber-100/60',
  },
];

const EmBento = () => (
  <section id="empresarial" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 md:py-28 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-500">Plan Empresarial</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Una tienda que vende sola y recupera ventas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
          Todo lo de Corporativo, más las herramientas que en Shopify se pagan como apps. Con un solo carrito
          recuperado al mes, la diferencia se paga sola.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        {celdas.map(({ Icon, titulo, texto, Mock, clase, fondo }) => (
          <article
            key={titulo}
            className={`group flex flex-col gap-8 overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${fondo} ${clase}`}
          >
            <div className="lg:max-w-md">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#6c5ce7] shadow-sm">
                <Icon size={19} />
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{titulo}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{texto}</p>
            </div>
            <div className="flex flex-1 items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
              <Mock />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EmBento;
