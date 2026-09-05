'use client';

import {
  LayoutDashboard,
  ShoppingCart,
  Boxes,
  Wallet,
  Users,
  FileText,
  Store,
  Search,
  ArrowUpRight,
  TrendingDown,
  PiggyBank,
} from 'lucide-react';

/**
 * Light SaaS dashboard mockup — mirrors the reference "Wealthio" panel
 * (sidebar + KPI cards + charts) with Krezka data in soles.
 */
const HeroMockup = () => {
  const bars = [40, 62, 48, 80, 55, 72, 90, 60, 75];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-[0_40px_80px_-24px_rgba(76,63,190,0.35)]">
      <div className="flex">
        {/* ── Sidebar ── */}
        <aside className="hidden w-48 shrink-0 flex-col border-r border-slate-100 bg-[#faf9ff] p-4 sm:flex">
          <div className="flex items-center gap-2 px-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#6c5ce7] text-xs font-black text-white">K</span>
            <span className="text-sm font-bold text-slate-800">Krezka</span>
          </div>

          <p className="mt-5 px-1 text-[10px] font-bold uppercase tracking-widest text-slate-300">Menú</p>
          <nav className="mt-2 space-y-0.5">
            {[
              { icon: LayoutDashboard, label: 'Dashboard', active: true },
              { icon: ShoppingCart, label: 'Ventas' },
              { icon: Boxes, label: 'Inventario' },
              { icon: Wallet, label: 'Caja' },
              { icon: Users, label: 'Clientes' },
            ].map((it) => (
              <div
                key={it.label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium ${
                  it.active ? 'bg-[#6c5ce7] text-white shadow-sm' : 'text-slate-500'
                }`}
              >
                <it.icon size={15} />
                {it.label}
              </div>
            ))}
          </nav>

          <p className="mt-5 px-1 text-[10px] font-bold uppercase tracking-widest text-slate-300">Módulos</p>
          <nav className="mt-2 space-y-0.5">
            {[
              { icon: FileText, label: 'Comprobantes' },
              { icon: Store, label: 'Tienda' },
            ].map((it) => (
              <div key={it.label} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[12.5px] font-medium text-slate-500">
                <it.icon size={15} />
                {it.label}
              </div>
            ))}
          </nav>
        </aside>

        {/* ── Main ── */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {/* topbar */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-slate-800">Dashboard</h3>
            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-400 sm:flex">
                <Search size={13} />
                Buscar…
              </div>
              <span className="h-7 w-7 rounded-full bg-gradient-to-br from-[#7b6af2] to-[#6c5ce7]" />
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { label: 'Ingresos', value: 'S/ 5,567', sub: 'Mes ant.: S/ 4,545', icon: ArrowUpRight, tint: 'text-[#6c5ce7]', bg: 'bg-[#6c5ce7]/10' },
              { label: 'Gastos', value: 'S/ 3,533', sub: 'Mes ant.: S/ 3,243', icon: TrendingDown, tint: 'text-rose-500', bg: 'bg-rose-500/10' },
              { label: 'Utilidad', value: 'S/ 2,324', sub: 'Mes ant.: S/ 2,232', icon: PiggyBank, tint: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">{c.label}</span>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-md ${c.bg} ${c.tint}`}>
                    <c.icon size={13} />
                  </span>
                </div>
                <p className="mt-1.5 text-base font-bold text-slate-900">{c.value}</p>
                <p className="mt-0.5 text-[9.5px] text-slate-400">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* charts row */}
          <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-5">
            {/* bar chart */}
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:col-span-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium text-slate-400">Resumen de ventas</p>
                  <p className="text-sm font-bold text-slate-900">S/ 4,235.00</p>
                </div>
                <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[10px] font-medium text-slate-400">Este año</span>
              </div>
              <div className="mt-3 flex h-20 items-end gap-1.5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i === 6 ? 'bg-[#6c5ce7]' : 'bg-[#6c5ce7]/25'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* donut */}
            <div className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:col-span-2">
              <p className="text-[11px] font-medium text-slate-400">Gastos por categoría</p>
              <p className="text-sm font-bold text-slate-900">S/ 24,678</p>
              <div className="mt-2 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#eee7ff" strokeWidth="4" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#6c5ce7" strokeWidth="4" strokeDasharray="62 100" strokeLinecap="round" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#a99df8" strokeWidth="4" strokeDasharray="24 100" strokeDashoffset="-62" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMockup;
