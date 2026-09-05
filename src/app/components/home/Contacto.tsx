'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/branding';

const INTERESES = ['Facturación SUNAT', 'Tienda virtual & POS', 'IA de Ventas', 'Otro'];

type Form = { fullName: string; company: string; email: string; phone: string; servicesSelect: string[]; message: string };
const initial: Form = { fullName: '', company: '', email: '', phone: '', servicesSelect: [], message: '' };

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-[#6c5ce7] focus:bg-white focus:ring-2 focus:ring-[#6c5ce7]/20';

const Contacto = () => {
  const [form, setForm] = useState<Form>(initial);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const toggleInteres = (v: string) =>
    setForm((p) => ({
      ...p,
      servicesSelect: p.servicesSelect.includes(v)
        ? p.servicesSelect.filter((s) => s !== v)
        : [...p.servicesSelect, v],
    }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg(null);
    if (!form.fullName.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || !form.message.trim()) {
      setMsg({ ok: false, text: 'Completa tu nombre, un correo válido y tu mensaje.' });
      return;
    }
    setSending(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setMsg({ ok: true, text: '¡Mensaje enviado! Te contactaremos muy pronto.' });
        setForm(initial);
      } else {
        const r = await res.json().catch(() => ({}));
        setMsg({ ok: false, text: r?.error || 'Hubo un error al enviar. Intenta de nuevo.' });
      }
    } catch {
      setMsg({ ok: false, text: 'Error de conexión. Intenta de nuevo más tarde.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-gradient-to-b from-white to-[#f6f4ff] py-16 md:py-24">
      <div className="pointer-events-none absolute -bottom-20 right-0 h-72 w-[520px] rounded-full bg-[#6c5ce7]/10 blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* ── Info ── */}
          <div className="kz-reveal-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#6c5ce7]/30 bg-white px-4 py-1.5 text-xs font-bold text-[#6c5ce7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#6c5ce7]" />
              Contacto
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
              Hablemos de tu negocio
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              Cuéntanos qué necesitas y te ayudamos a elegir el plan ideal. Te respondemos rápido,
              en español y sin compromiso.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">WhatsApp</p>
                  <p className="text-[13px] text-slate-500">{BRAND.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6c5ce7]/10 text-[#6c5ce7]">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">Correo</p>
                  <p className="text-[13px] text-slate-500">{BRAND.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">Perú</p>
                  <p className="text-[13px] text-slate-500">Atención a todo el país · 100% en la nube</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Formulario ── */}
          <div className="kz-reveal-right rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">Nombre completo *</label>
                  <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Tu nombre" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">Empresa</label>
                  <input name="company" value={form.company} onChange={onChange} placeholder="Nombre de tu negocio" className={inputClass} />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">Correo *</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="tu@correo.com" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">Teléfono</label>
                  <input name="phone" value={form.phone} onChange={onChange} placeholder="Tu número" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[13px] font-semibold text-slate-700">¿Qué te interesa?</label>
                <div className="flex flex-wrap gap-2">
                  {INTERESES.map((it) => {
                    const on = form.servicesSelect.includes(it);
                    return (
                      <button
                        key={it}
                        type="button"
                        onClick={() => toggleInteres(it)}
                        className={`rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-all ${
                          on
                            ? 'border-transparent bg-[#6c5ce7] text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-[#6c5ce7]/40'
                        }`}
                      >
                        {it}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-semibold text-slate-700">Mensaje *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="Cuéntanos sobre tu negocio y qué necesitas…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {msg && (
                <div
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-medium ${
                    msg.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {msg.ok && <CheckCircle2 size={16} />}
                  {msg.text}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7b6af2] to-[#6c5ce7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#6c5ce7]/25 transition-all hover:scale-[1.01] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
                {sending ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
