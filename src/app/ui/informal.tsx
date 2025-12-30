"use client";

import { Icon } from "@iconify/react";

const InformalSection = () => {
  // Forced Dark / Glassmorphism Mode
  return (
    <section
      id="informal"
      className="bg-transparent py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6 space-y-5">
          <p className="uppercase text-[#B76AE0] text-[14px] md:text-[16px] tracking-wider font-semibold">PARA EMPRENDEDORES INFORMALES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white transition-colors">
            Sistemas también para
            <br />
            negocios informales
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-colors">
            Si vendes por redes sociales, ferias, delivery o punto fijo sin RUC, igual puedes llevar el control de tus ventas, stock y caja.
            Funciona en tu celular <span className="font-medium text-gray-900 dark:text-white">Android</span> o <span className="font-medium text-gray-900 dark:text-white">iOS</span> y puedes imprimir <span className="font-medium text-gray-900 dark:text-white">boletas internas en ticketera</span> si lo necesitas.
            Cuando quieras formalizarte, migramos tu información para emitir comprobantes electrónicos a SUNAT.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-white/10 backdrop-blur-md transition-colors">
              <Icon icon="mdi:android" width={16} height={16} /> Android
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-white/10 backdrop-blur-md transition-colors">
              <Icon icon="mdi:apple" width={16} height={16} /> iOS
            </span>
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs bg-[#f59e0b]/20 text-[#d97706] dark:text-[#fcd34d] border border-[#f59e0b]/20 backdrop-blur-md">
              <Icon icon="mdi:printer" width={16} height={16} /> Ticketera 58mm
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { color: "#22c55e", title: "Registro de ventas diarias y caja simple", desc: "Controla ventas y dinero en caja." },
              { color: "#facc15", title: "Control de productos y stock", desc: "Evita quedarte sin mercadería." },
              { color: "#6366f1", title: "Histórico de clientes y pedidos", desc: "Guarda clientes frecuentes." },
              { color: "#ec4899", title: "Tickets internos y facturación futura", desc: "Imprime hoy, factura mañana." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                <span className="mt-[6px] h-8 w-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="relative rounded-3xl p-6 md:p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-2xl transition-colors">
            {/* Blob decorativo interno */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A0EBB]/20 rounded-full blur-2xl pointer-events-none" />

            <p className="text-sm font-medium mb-3 text-gray-900 dark:text-white relative z-10 transition-colors">
              Ejemplos de negocios informales que pueden usar Falconext:
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm relative z-10">
              {[
                { icon: "mdi:home-outline", title: "Emprendimientos desde casa", desc: "Ropa, postres, manualidades." },
                { icon: "mdi:storefront-outline", title: "Puestos y ferias", desc: "Mercados, food trucks, stands." },
                { icon: "mdi:briefcase-outline", title: "Servicios independientes", desc: "Barbería, fotografía, clases." },
                { icon: "mdi:bike-fast", title: "Delivery por redes", desc: "Pedidos por WhatsApp/TikTok." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/5 rounded-2xl p-3 hover:bg-gray-100 dark:hover:bg-black/30 transition-colors">
                  <p className="font-semibold text-xs mb-1 flex items-center gap-2 text-gray-900 dark:text-white"><Icon icon={item.icon} /> {item.title}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl p-4 bg-[#22c55e]/10 border border-[#22c55e]/20 relative z-10">
              <p className="text-sm font-medium mb-1 text-[#16a34a] dark:text-[#4ade80]">Arranca rápido con ticketera</p>
              <p className="text-xs text-[#15803d] dark:text-[#bbf7d0]">
                Si eliges el plan con ticketera, te ayudamos a configurarla para imprimir tus tickets al instante. Más adelante podrás migrar a comprobantes electrónicos sin perder tu historial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformalSection;
