'use client';

import Contact from '../ui/contact';
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

export default function ContactoPage() {
  const containerClassName = 'relative overflow-hidden min-h-screen text-gray-900 dark:text-[#ffffff] transition-colors duration-300';

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
        <Contact />
      </motion.div>
    </>
  );
}
