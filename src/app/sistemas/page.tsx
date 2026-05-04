'use client';

import Questions from '../ui/questions';
import Banner from '../ui/banner';
// import Projects from '../ui/projects';
import Contact from '../ui/contact';
import Wellcome from '../ui/wellcome';
import WhatWeDo from '../ui/whatwedo';
import AllModules from '../ui/all-modules';
import WeTools from '../ui/wetools';
import Analytics from '../ui/analitycs';
import Pricing from '../ui/pricing';
import Testimonials from '../ui/testimonials';
import Industries from '../ui/industries';
import Advisors from '../ui/advisors';
import AnimatedSection from '../ui/animated-section';
import { ScrollProgressBar } from '../ui/background-effects';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function SistemasPage() {
  // Dynamic Layout for Light/Dark
  const containerClassName = 'relative overflow-hidden min-h-screen text-gray-900 dark:text-[#ffffff] transition-colors duration-300';
  const sectionBackgroundClassName = 'bg-transparent';

  return (
    <>
      <ScrollProgressBar />
      {/* Background Ambience - Global */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-white dark:bg-[#0E0E0E] transition-colors duration-300">
        <div className="absolute inset-0 bg-transparent dark:bg-[#0E0E0E]/20 -z-10" />
      </div>

      <motion.div
        className={`${containerClassName} pt-24`}
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <AnimatedSection direction="fade">
          <Banner />
        </AnimatedSection>

        <div className={sectionBackgroundClassName}>
          <AnimatedSection delay={0.1} direction="up">
            <WhatWeDo />
          </AnimatedSection>
        </div>

        <div className={sectionBackgroundClassName}>
          <AnimatedSection delay={0.15} direction="up">
            <Industries />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2} direction="fade">
          <WeTools />
        </AnimatedSection>

        <div className={sectionBackgroundClassName}>
          <AnimatedSection delay={0.2} direction="up">
            <Analytics />
          </AnimatedSection>
        </div>

        <div className={sectionBackgroundClassName}>
          <AnimatedSection delay={0.22} direction="up">
            <AllModules />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15} direction="right">
          <Pricing />
        </AnimatedSection>

        <AnimatedSection delay={0.12} direction="up">
          <Advisors />
        </AnimatedSection>

        <AnimatedSection delay={0.12} direction="fade">
          <Testimonials />
        </AnimatedSection>

        <AnimatedSection delay={0.15} direction="up">
          <Questions />
        </AnimatedSection>

        <AnimatedSection delay={0.1} direction="fade">
          <Contact />
        </AnimatedSection>
      </motion.div>
    </>
  );
}
