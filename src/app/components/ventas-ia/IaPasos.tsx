import { BellRing, Bot, PlugZap, UserCog } from 'lucide-react';

// El recorrido real: registro → Mi vendedor → la IA atiende → el dueño cierra.
const pasos = [
  {
    Icon: PlugZap,
    titulo: 'Conecta tu WhatsApp',
    texto: 'Usas tu mismo número de siempre. También Instagram y Messenger si los tienes.',
  },
  {
    Icon: UserCog,
    titulo: 'Dale forma a tu vendedor',
    texto: 'Su nombre, cómo saluda, qué nunca debe decir, tus zonas de envío y medios de pago.',
  },
  {
    Icon: Bot,
    titulo: 'La IA atiende y cotiza',
    texto: 'Responde con tu catálogo y stock reales, manda fotos y precios, y toma el pedido.',
  },
  {
    Icon: BellRing,
    titulo: 'Tú cierras la venta',
    texto: 'Te avisa los clientes calientes. Pausas el bot cuando quieras y respondes tú.',
  },
];

const IaPasos = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="kz-reveal inline-flex items-center gap-2 rounded-full bg-[#f1eefe] px-4 py-1.5 text-xs font-semibold text-[#6c5ce7]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
          Cómo funciona
        </span>
        <h2 className="kz-reveal mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl" style={{ animationDelay: '0.06s' }}>
          Listo para vender en 4 pasos
        </h2>
        <p className="kz-reveal mt-3 text-[15px] text-slate-500" style={{ animationDelay: '0.12s' }}>
          Te acompañamos en la configuración inicial. No necesitas saber de tecnología.
        </p>
      </div>

      <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* línea que une los pasos en escritorio */}
        <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-[#6c5ce7]/0 via-[#6c5ce7]/30 to-[#6c5ce7]/0 lg:block" />
        {pasos.map((p, i) => (
          <li
            key={p.titulo}
            style={{ animationDelay: `${i * 0.08}s` }}
            className="kz-reveal relative rounded-3xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:border-[#6c5ce7]/30 hover:shadow-xl hover:shadow-[#6c5ce7]/10"
          >
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7b6af2] to-[#5b4bd6] text-white shadow-lg shadow-[#6c5ce7]/30">
              <p.Icon size={24} strokeWidth={2} />
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-black text-[#6c5ce7] shadow ring-1 ring-[#6c5ce7]/20">
                {i + 1}
              </span>
            </span>
            <h3 className="mt-5 text-[17px] font-bold text-slate-900">{p.titulo}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default IaPasos;
