import type { Metadata } from 'next';
import { ScrollProgressBar } from '../ui/background-effects';
import EmHero from '../components/empresarial/EmHero';
import EmUnSolo from '../components/empresarial/EmUnSolo';
import EmBento from '../components/empresarial/EmBento';
import EmPlus from '../components/empresarial/EmPlus';
import EmTodoIncluido from '../components/empresarial/EmTodoIncluido';
import EmPlanes from '../components/empresarial/EmPlanes';
import EmFaq from '../components/empresarial/EmFaq';
import EmCta from '../components/empresarial/EmCta';

export const metadata: Metadata = {
  title: 'Tienda virtual + POS + SUNAT en un solo sistema',
  description:
    'Planes Empresarial y Empresarial Plus: tienda virtual al nivel de Shopify con promociones, cupones, carritos recuperados, puntos y precios B2B, más POS, inventario y facturación SUNAT. Sin comisión por venta, desde S/ 129.90 + IGV al mes.',
  alternates: { canonical: '/empresarial' },
};

export default function EmpresarialPage() {
  return (
    <>
      <ScrollProgressBar />
      <main className="font-inter-tight relative overflow-hidden bg-white text-slate-900">
        <EmHero />
        <EmUnSolo />
        <EmBento />
        <EmPlus />
        <EmTodoIncluido />
        <EmPlanes />
        <EmFaq />
        <EmCta />
      </main>
    </>
  );
}
