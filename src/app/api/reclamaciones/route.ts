import { BRAND } from '@/lib/branding';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ReclamoBody = {
  codigo?: string;
  fecha?: string;
  // Consumidor
  nombre?: string;
  tipoDoc?: string;
  numeroDoc?: string;
  domicilio?: string;
  telefono?: string;
  email?: string;
  esMenor?: boolean;
  apoderado?: string;
  // Bien contratado
  tipoBien?: string; // Producto | Servicio
  montoReclamado?: string;
  descripcionBien?: string;
  // Reclamación
  tipoReclamo?: string; // Reclamo | Queja
  detalle?: string;
  pedido?: string;
};

const esc = (s: string) =>
  (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const row = (label: string, value?: string) =>
  value
    ? `<tr><td style="padding:6px 12px;color:#64748b;font-size:13px;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#0f172a;font-size:13px;font-weight:600">${esc(value)}</td></tr>`
    : '';

export async function POST(request: Request) {
  try {
    const body: ReclamoBody = await request.json();
    const {
      codigo,
      fecha,
      nombre,
      tipoDoc,
      numeroDoc,
      domicilio,
      telefono,
      email,
      esMenor,
      apoderado,
      tipoBien,
      montoReclamado,
      descripcionBien,
      tipoReclamo,
      detalle,
      pedido,
    } = body;

    // Validación mínima requerida por INDECOPI
    if (!nombre || !email || !numeroDoc || !detalle || !pedido) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios de la hoja de reclamación.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json({ error: 'Servicio de correo no configurado' }, { status: 500 });
    }

    const tipo = tipoReclamo || 'Reclamo';
    const cod = codigo || 'S/N';

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:auto;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
        <div style="background:#6c5ce7;color:#fff;padding:18px 20px">
          <div style="font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.85">Libro de Reclamaciones · ${esc(BRAND.name)}</div>
          <div style="font-size:20px;font-weight:800;margin-top:4px">${esc(tipo)} N° ${esc(cod)}</div>
        </div>
        <div style="padding:16px 8px">
          <table style="width:100%;border-collapse:collapse">
            ${row('Fecha', fecha)}
            <tr><td colspan="2" style="padding:10px 12px 4px;color:#6c5ce7;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em">Consumidor reclamante</td></tr>
            ${row('Nombre', nombre)}
            ${row('Documento', [tipoDoc, numeroDoc].filter(Boolean).join(': '))}
            ${row('Domicilio', domicilio)}
            ${row('Teléfono', telefono)}
            ${row('Correo', email)}
            ${esMenor ? row('Apoderado (menor de edad)', apoderado || 'No especificado') : ''}
            <tr><td colspan="2" style="padding:10px 12px 4px;color:#6c5ce7;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em">Bien contratado</td></tr>
            ${row('Tipo', tipoBien)}
            ${row('Monto reclamado', montoReclamado ? `S/ ${montoReclamado}` : '')}
            ${row('Descripción', descripcionBien)}
            <tr><td colspan="2" style="padding:10px 12px 4px;color:#6c5ce7;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em">Detalle de la ${esc(tipo.toLowerCase())}</td></tr>
            ${row('Tipo', tipo)}
            ${row('Detalle', detalle)}
            ${row('Pedido del consumidor', pedido)}
          </table>
          <div style="margin:14px 12px 4px;padding:12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;color:#475569;font-size:12px;line-height:1.6">
            <strong>Proveedor:</strong> ${esc(BRAND.legalName)} · RUC ${esc(BRAND.ruc)}<br/>
            ${esc(BRAND.address)}<br/>
            <em>El proveedor debe dar respuesta en un plazo no mayor a quince (15) días hábiles, improrrogable.</em>
          </div>
        </div>
      </div>`;

    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: `${BRAND.name} Reclamaciones <${BRAND.email}>`,
      to: [BRAND.email],
      replyTo: email,
      subject: `Libro de Reclamaciones – ${tipo} N° ${cod} – ${nombre}`,
      html,
    });

    if (error) {
      console.error('Resend error (reclamaciones):', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error (reclamaciones):', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
