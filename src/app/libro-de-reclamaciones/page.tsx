'use client';

import { FormEvent, useMemo, useState } from 'react';
import { BookText, Building2, CheckCircle2, Loader2, ShieldCheck, Send, Info } from 'lucide-react';
import { BRAND } from '@/lib/branding';

type Form = {
  nombre: string;
  tipoDoc: string;
  numeroDoc: string;
  domicilio: string;
  telefono: string;
  email: string;
  esMenor: boolean;
  apoderado: string;
  tipoBien: string;
  montoReclamado: string;
  descripcionBien: string;
  tipoReclamo: string;
  detalle: string;
  pedido: string;
};

const initial: Form = {
  nombre: '',
  tipoDoc: 'DNI',
  numeroDoc: '',
  domicilio: '',
  telefono: '',
  email: '',
  esMenor: false,
  apoderado: '',
  tipoBien: 'Servicio',
  montoReclamado: '',
  descripcionBien: '',
  tipoReclamo: 'Reclamo',
  detalle: '',
  pedido: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-[#6c5ce7] focus:bg-white focus:ring-2 focus:ring-[#6c5ce7]/20';
const labelClass = 'mb-1.5 block text-[13px] font-semibold text-slate-700';

const genCodigo = () => {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `KZ-${ymd}-${rnd}`;
};

export default function LibroReclamacionesPage() {
  const [form, setForm] = useState<Form>(initial);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const codigo = useMemo(genCodigo, []);
  const fecha = useMemo(() => new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' }), []);

  const set = (name: keyof Form, value: string | boolean) => setForm((p) => ({ ...p, [name]: value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr(null);
    if (
      !form.nombre.trim() ||
      !form.numeroDoc.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ||
      !form.detalle.trim() ||
      !form.pedido.trim()
    ) {
      setErr('Completa los campos obligatorios (*): nombre, documento, correo válido, detalle y pedido.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/reclamaciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, codigo, fecha }),
      });
      if (res.ok) {
        setDone(codigo);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const r = await res.json().catch(() => ({}));
        setErr(typeof r?.error === 'string' ? r.error : 'Hubo un error al registrar tu hoja de reclamación. Intenta de nuevo.');
      }
    } catch {
      setErr('Error de conexión. Intenta de nuevo más tarde.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="font-inter-tight relative min-h-screen bg-gradient-to-b from-[#f6f4ff] to-white pb-20 pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#6c5ce7]/30 bg-white px-4 py-1.5 text-xs font-bold text-[#6c5ce7]">
            <BookText size={14} />
            Libro de Reclamaciones
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Hoja de Reclamación
          </h1>
          <p className="mt-3 text-[15px] text-slate-500">
            Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571) y el D.S. 011-2011-PCM.
          </p>
        </div>

        {/* Datos del proveedor */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6c5ce7]/10 text-[#6c5ce7]">
            <Building2 size={20} />
          </span>
          <div className="text-sm">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Proveedor</p>
            <p className="mt-1 font-bold text-slate-900">{BRAND.legalName}</p>
            <p className="text-slate-500">Nombre comercial: {BRAND.name} · RUC {BRAND.ruc}</p>
            <p className="text-slate-500">{BRAND.address}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-slate-500">
              <span>Hoja N°: <strong className="text-slate-800">{codigo}</strong></span>
              <span>Fecha: <strong className="text-slate-800">{fecha}</strong></span>
            </div>
          </div>
        </div>

        {done ? (
          <div className="mt-8 rounded-[2rem] border border-emerald-100 bg-white p-8 text-center shadow-sm">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={34} />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold text-slate-900">Hoja de reclamación registrada</h2>
            <p className="mt-2 text-[15px] text-slate-500">
              Tu {form.tipoReclamo.toLowerCase()} fue enviado con el código{' '}
              <strong className="text-[#6c5ce7]">{done}</strong>. Te responderemos al correo{' '}
              <strong className="text-slate-800">{form.email}</strong> en un plazo no mayor a{' '}
              <strong>15 días hábiles</strong>.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#6c5ce7] px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#5b4bd6]"
            >
              Volver al inicio
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-6">
            {err && (
              <div className="rounded-xl bg-rose-50 px-4 py-3 text-[13px] font-medium text-rose-600">{err}</div>
            )}

            {/* 1. Consumidor */}
            <section className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#6c5ce7]">1. Identificación del consumidor</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Nombre completo *</label>
                  <input value={form.nombre} onChange={(e) => set('nombre', e.target.value)} placeholder="Nombres y apellidos" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Tipo de documento *</label>
                  <select value={form.tipoDoc} onChange={(e) => set('tipoDoc', e.target.value)} className={inputClass}>
                    <option>DNI</option>
                    <option>Carné de Extranjería</option>
                    <option>Pasaporte</option>
                    <option>RUC</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>N° de documento *</label>
                  <input value={form.numeroDoc} onChange={(e) => set('numeroDoc', e.target.value)} placeholder="Número" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Domicilio</label>
                  <input value={form.domicilio} onChange={(e) => set('domicilio', e.target.value)} placeholder="Dirección" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Teléfono</label>
                  <input value={form.telefono} onChange={(e) => set('telefono', e.target.value)} placeholder="Celular / teléfono" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Correo electrónico *</label>
                  <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="tu@correo.com" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                    <input type="checkbox" checked={form.esMenor} onChange={(e) => set('esMenor', e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-[#6c5ce7] focus:ring-[#6c5ce7]" />
                    El consumidor es menor de edad
                  </label>
                  {form.esMenor && (
                    <input value={form.apoderado} onChange={(e) => set('apoderado', e.target.value)} placeholder="Nombre del padre, madre o apoderado" className={`${inputClass} mt-2`} />
                  )}
                </div>
              </div>
            </section>

            {/* 2. Bien contratado */}
            <section className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#6c5ce7]">2. Identificación del bien contratado</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Tipo</label>
                  <div className="flex gap-2">
                    {['Producto', 'Servicio'].map((t) => (
                      <button key={t} type="button" onClick={() => set('tipoBien', t)}
                        className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all ${form.tipoBien === t ? 'border-transparent bg-[#6c5ce7] text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-[#6c5ce7]/40'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Monto reclamado (S/)</label>
                  <input value={form.montoReclamado} onChange={(e) => set('montoReclamado', e.target.value)} placeholder="Opcional" inputMode="decimal" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Descripción del producto o servicio</label>
                  <input value={form.descripcionBien} onChange={(e) => set('descripcionBien', e.target.value)} placeholder="¿Qué contrataste?" className={inputClass} />
                </div>
              </div>
            </section>

            {/* 3. Reclamación */}
            <section className="rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-[#6c5ce7]">3. Detalle de la reclamación</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className={labelClass}>Tipo *</label>
                  <div className="flex gap-2">
                    {['Reclamo', 'Queja'].map((t) => (
                      <button key={t} type="button" onClick={() => set('tipoReclamo', t)}
                        className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-all ${form.tipoReclamo === t ? 'border-transparent bg-[#6c5ce7] text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-[#6c5ce7]/40'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Detalle *</label>
                  <textarea value={form.detalle} onChange={(e) => set('detalle', e.target.value)} rows={4} placeholder="Describe tu reclamo o queja…" className={`${inputClass} resize-none`} />
                </div>
                <div>
                  <label className={labelClass}>Pedido del consumidor *</label>
                  <textarea value={form.pedido} onChange={(e) => set('pedido', e.target.value)} rows={3} placeholder="¿Qué solución esperas?" className={`${inputClass} resize-none`} />
                </div>
              </div>
            </section>

            {/* Leyenda INDECOPI */}
            <div className="rounded-2xl border border-slate-100 bg-[#f8f7fe] p-5 text-[12.5px] leading-relaxed text-slate-600">
              <p className="flex items-start gap-2">
                <Info size={16} className="mt-0.5 shrink-0 text-[#6c5ce7]" />
                <span>
                  <strong>Reclamo:</strong> disconformidad relacionada a los productos o servicios.{' '}
                  <strong>Queja:</strong> disconformidad no relacionada a los productos o servicios; o malestar respecto a la atención al público.
                </span>
              </p>
              <p className="mt-3 flex items-start gap-2">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                <span>
                  La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito
                  previo para interponer una denuncia ante el INDECOPI. El proveedor debe dar respuesta en un plazo no
                  mayor a <strong>quince (15) días hábiles</strong>, improrrogable.
                </span>
              </p>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#6c5ce7]/25 transition-all hover:scale-[1.01] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
              {sending ? 'Enviando…' : 'Enviar hoja de reclamación'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
