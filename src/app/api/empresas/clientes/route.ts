import { NextResponse } from 'next/server';

type ClientePublico = { id: number; nombre: string; logo: string };

const API_URL = (
  process.env.API_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  'http://localhost:4001/api'
).replace(/\/$/, '');

export async function GET() {
  try {
    const url = `${API_URL}/empresa/public/clientes?brand=krezka&producto=facturacion`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return NextResponse.json({ code: 1, message: 'ok', data: [] });

    const payload = await res.json();
    const data: ClientePublico[] = Array.isArray(payload?.data) ? payload.data : [];
    return NextResponse.json({ code: 1, message: 'ok', data });
  } catch {
    // Nunca romper la landing si el backend no está disponible.
    return NextResponse.json({ code: 1, message: 'ok', data: [] });
  }
}
