import type { Metadata } from 'next';
import { ScrollProgressBar } from '../ui/background-effects';
import IaHero from '../components/ventas-ia/IaHero';
import IaPasos from '../components/ventas-ia/IaPasos';
import IaPorDentro from '../components/ventas-ia/IaPorDentro';
import IaFunciones from '../components/ventas-ia/IaFunciones';
import VentasIA from '../components/home/VentasIA';
import IaFaq from '../components/ventas-ia/IaFaq';
import IaCta from '../components/ventas-ia/IaCta';

export const metadata: Metadata = {
  title: 'IA de Ventas por WhatsApp',
  description:
    'Un vendedor con IA que atiende tu WhatsApp 24/7 con tu catálogo real, cotiza, toma pedidos y te avisa los leads calientes. Facturación SUNAT incluida, desde S/ 199 al mes.',
  alternates: { canonical: '/ventas-ia' },
};

export default function VentasIaPage() {
  return (
    <>
      <ScrollProgressBar />
      <main className="font-inter-tight relative overflow-hidden bg-white text-slate-900">
        <IaHero />
        <IaPasos />
        <IaPorDentro />
        <IaFunciones />
        {/* Los mismos planes de la portada, para que precio y textos no se separen. */}
        <div id="planes-ia" className="scroll-mt-24">
          <VentasIA conFunciones={false} />
        </div>
        <IaFaq />
        <IaCta />
      </main>
    </>
  );
}
