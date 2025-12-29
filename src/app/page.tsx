'use client';

import Questions from './ui/questions';
import Banner from './ui/banner';
import Projects from './ui/projects';
import Contact from './ui/contact';
import Wellcome from './ui/wellcome';
import WhatWeDo from './ui/whatwedo';
import InformalSection from './ui/informal';
import WeTools from './ui/wetools';
import Analytics from './ui/analitycs';
import Pricing from './ui/pricing';
import Testimonials from './ui/testimonials';
import AnimatedSection from './ui/animated-section';
import { ScrollProgressBar, AnimatedBackground, GradientOrb, GeometricShapes } from './ui/background-effects';
import { motion } from 'framer-motion';
// import { IThemeState, useThemeStore } from './zustand/theme'; // Removed theme logic

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

export default function Home() {

  // Force Dark Mode Layout
  const containerClassName = 'relative bg-transparent overflow-hidden min-h-screen text-[#ffffff]';
  const sectionBackgroundClassName = 'bg-transparent'; // Transparent to show ambient background

  return (
    <>
      <ScrollProgressBar />
      {/* Background Ambience (Hotel System Style) - FIXED GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#0E0E0E]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#5A0EBB] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8A38F5] rounded-full mix-blend-screen filter blur-[100px] opacity-15" />
        {/* Dark Overlay for depth */}
        <div className="absolute inset-0 bg-[#0E0E0E]/20 -z-10" />
      </div>

      <motion.div
        className={containerClassName}
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
          <AnimatedSection delay={0.2} direction="up">
            <Analytics />
          </AnimatedSection>
        </div>

        <div className={sectionBackgroundClassName}>
          <AnimatedSection delay={0.22} direction="up">
            <InformalSection />
          </AnimatedSection>
        </div>

        {/* <AnimatedSection delay={0.1} direction="left">
          <Wellcome />
        </AnimatedSection> */}

        <AnimatedSection delay={0.15} direction="right">
          <Pricing />
        </AnimatedSection>

        <AnimatedSection delay={0.2} direction="fade">
          <WeTools />
        </AnimatedSection>

        <AnimatedSection delay={0.1} direction="left">
          <Projects />
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
