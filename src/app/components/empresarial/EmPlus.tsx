'use client';

import { useState } from 'react';
import { Building2, Coins, CreditCard, Gift, Globe2, RefreshCw, Undo2 } from 'lucide-react';

const MockB2B = () => (
  <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-slate-400/20">
    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Precio según quién compra</p>
    {[
      ['Público', 'S/ 28.50', 'bg-slate-100 text-slate-600'],
      ['Contratista', 'S/ 24.90', 'bg-[#eeecfd] text-[#5b4bd6]'],
      ['Mayorista', 'S/ 21.80', 'bg-emerald-50 text-emerald-700'],
    ].map(([q, p, c]) => (
      <div key={q} className="mt-3 flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3">
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${c}`}>{q}</span>
        <span className="text-[15px] font-extrabold text-slate-900">{p}</span>
      </div>
    ))}
    <p className="mt-3 text-[11.5px] text-slate-500">Cemento x 42.5 kg · cada cliente ve su lista al iniciar sesión</p>
  </div>
);

const MockPuntos = () => (
  <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#6d5ce8] to-[#4b3fbe] p-6 text-white shadow-xl shadow-[#6c5ce7]/30">
    <p className="text-sm font-semibold text-white/75">Hola, Rosa</p>
    <p className="mt-1 text-4xl font-extrabold">1 240 <span className="text-base font-semibold text-white/70">puntos</span></p>
    <div className="mt-5 h-2 rounded-full bg-white/20">
      <div className="h-2 w-3/4 rounded-full bg-white" />
    </div>
    <p className="mt-2 text-xs text-white/75">Te faltan 260 puntos para S/ 15 de descuento</p>
  </div>
);

const MockGift = () => (
  <div className="relative h-48 w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-rose-400 via-fuchsia-500 to-[#6c5ce7] p-6 text-white shadow-xl shadow-fuchsia-900/20">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15" />
    <p className="text-sm font-bold uppercase tracking-wider text-white/80">Gift card</p>
    <p className="mt-2 text-4xl font-extrabold">S/ 100.00</p>
    <p className="absolute bottom-6 left-6 font-mono text-sm tracking-[0.2em] text-white/85">KRZ-4F7A-92QD</p>
  </div>
);

const MockRecurrente = () => (
  <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-slate-400/20">
    <p className="text-[13px] font-bold text-slate-800">Café molido 1 kg</p>
    <p className="text-[11.5px] text-slate-500">Se repite cada 30 días</p>
    <div className="mt-4 grid grid-cols-3 gap-2">
      {['15 nov', '15 dic', '15 ene'].map((f, i) => (
        <div key={f} className={`rounded-xl py-3 text-center text-[12px] font-bold ${i === 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-50 text-slate-500'}`}>
          {f}
        </div>
      ))}
    </div>
  </div>
);

const MockDevolucion = () => (
  <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-slate-400/20">
    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Pedido #1043</p>
    {['Pedido recibido', 'Cambio solicitado', 'Cambio aprobado'].map((e, i) => (
      <div key={e} className="mt-3 flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${i < 2 ? 'bg-[#6c5ce7]' : 'bg-emerald-500'}`} />
        <span className="text-[13px] font-semibold text-slate-700">{e}</span>
      </div>
    ))}
  </div>
);

const MockMonedas = () => (
  <div className="flex w-full max-w-sm flex-wrap gap-2">
    {['S/ 89.90', 'US$ 23.90', '€ 22.00'].map((m) => (
      <span key={m} className="rounded-xl bg-white px-4 py-3 text-lg font-extrabold text-slate-900 shadow-lg shadow-slate-400/15">{m}</span>
    ))}
    <span className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white">ES · EN</span>
  </div>
);

const MockTarjeta = () => (
  <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-xl shadow-slate-400/20">
    <p className="text-[13px] font-bold text-slate-800">Pagar S/ 249.00</p>
    <div className="mt-3 rounded-xl border border-slate-200 px-4 py-3 font-mono text-[13px] tracking-widest text-slate-500">•••• •••• •••• 4242</div>
    <div className="mt-3 rounded-xl bg-[#6c5ce7] py-3 text-center text-[13px] font-bold text-white">Pagar con tarjeta</div>
  </div>
);

const funciones = [
  { Icon: Building2, titulo: 'Precios B2B por cliente', texto: 'Cada mayorista o contratista ve su propia lista o su porcentaje de descuento.', Mock: MockB2B },
  { Icon: Coins, titulo: 'Puntos de fidelidad', texto: 'Tus clientes ganan puntos con cada compra y los canjean. Vuelven a tu tienda, no a la de al lado.', Mock: MockPuntos },
  { Icon: Gift, titulo: 'Gift cards', texto: 'Vende saldo de regalo que el comprador usa como medio de pago.', Mock: MockGift },
  { Icon: RefreshCw, titulo: 'Compras recurrentes', texto: 'El cliente recibe el mismo producto cada cierto tiempo sin volver a pedirlo.', Mock: MockRecurrente },
  { Icon: Undo2, titulo: 'Devoluciones y cambios', texto: 'El comprador los pide desde el seguimiento de su pedido y tú los apruebas.', Mock: MockDevolucion },
  { Icon: Globe2, titulo: 'Idiomas y monedas', texto: 'Tienda en inglés y precios en dólares o euros, para vender fuera.', Mock: MockMonedas },
  { Icon: CreditCard, titulo: 'Pago con tarjeta', texto: 'Cobra con tarjeta en tu tienda. Además, módulo de producción y usuarios y sedes ilimitados.', Mock: MockTarjeta },
];

const EmPlus = () => {
  const [activa, setActiva] = useState(0);
  const { Mock } = funciones[activa];

  return (
    <section id="plus" className="scroll-mt-24 bg-[#f6f6fe] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex rounded-full border border-[#6c5ce7]/20 bg-white px-3 py-1 text-[11px] font-semibold text-[#5b4bd6]">Plan Empresarial Plus</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Clientes que vuelven y empresas que te compran
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 md:text-lg">
            Todo Empresarial, más fidelización y venta a empresas. Lo que en otras plataformas son cinco apps de pago
            mensual, aquí viene incluido.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div role="tablist" aria-label="Funciones del plan Plus" className="space-y-1">
            {funciones.map(({ Icon, titulo, texto }, i) => {
              const on = i === activa;
              return (
                <button
                  key={titulo}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiva(i)}
                  onMouseEnter={() => setActiva(i)}
                  className={`flex w-full gap-4 border-l-2 py-3 pl-5 pr-2 text-left transition-colors ${
                    on ? 'border-[#6c5ce7]' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon size={19} className={`mt-0.5 shrink-0 ${on ? 'text-[#6c5ce7]' : 'text-slate-400'}`} />
                  <span>
                    <span className={`block font-bold ${on ? 'text-slate-900' : 'text-slate-500'}`}>{titulo}</span>
                    {on && <span className="mt-1 block text-sm leading-relaxed text-slate-500">{texto}</span>}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#eeecfd] to-[#dcd7fc] p-8 md:min-h-[420px]">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#6c5ce7]/20 blur-3xl" />
            <div key={activa} className="kz-reveal-scale relative flex w-full justify-center">
              <Mock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmPlus;
