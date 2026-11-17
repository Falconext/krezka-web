import { BRAND } from '@/lib/branding';

// Precios + IGV de los planes con tienda avanzada (mismos que la portada).
export const EMPRESARIAL = { nombre: 'Empresarial', mensual: 129.9 };
export const PLUS = { nombre: 'Empresarial Plus', mensual: 179.9 };
export const INSTALACION = 50;

export const waEmpresarial = (plan: string) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    `Hola, quiero el plan ${plan} de ${BRAND.name} con la tienda avanzada.`
  )}`;
