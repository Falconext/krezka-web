import { ScrollProgressBar } from './ui/background-effects';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import ComoFunciona from './components/home/ComoFunciona';
import Features from './components/home/Features';
import ProductTour from './components/home/ProductTour';
import BentoGrid from './components/home/BentoGrid';
import Comparativa from './components/home/Comparativa';
import Testimonios from './components/home/Testimonios';
import HomePricing from './components/home/HomePricing';
import Faq from './components/home/Faq';
import FinalCta from './components/home/FinalCta';

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <main className="font-inter-tight relative overflow-hidden bg-white text-slate-900">
        <Hero />
        <TrustBar />
        <ComoFunciona />
        <Features />
        <ProductTour />
        <BentoGrid />
        <Comparativa />
        <Testimonios />
        <HomePricing />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
