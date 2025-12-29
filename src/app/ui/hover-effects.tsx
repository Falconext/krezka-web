'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverEffectProps {
  children: ReactNode;
  className?: string;
  effect?: 'scale' | 'lift' | 'glow' | 'rotate' | 'slide';
  intensity?: 'subtle' | 'medium' | 'strong';
}

const hoverEffects = {
  scale: {
    subtle: { scale: 1.02 },
    medium: { scale: 1.05 },
    strong: { scale: 1.1 }
  },
  lift: {
    subtle: { y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
    medium: { y: -5, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" },
    strong: { y: -10, boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }
  },
  glow: {
    subtle: { boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)" },
    medium: { boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" },
    strong: { boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)" }
  },
  rotate: {
    subtle: { rotate: 1 },
    medium: { rotate: 2 },
    strong: { rotate: 3 }
  },
  slide: {
    subtle: { x: 2 },
    medium: { x: 5 },
    strong: { x: 8 }
  }
};

export function HoverEffect({ 
  children, 
  className = '', 
  effect = 'scale',
  intensity = 'medium'
}: HoverEffectProps) {
  return (
    <motion.div
      className={className}
      whileHover={hoverEffects[effect][intensity]}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export function AnimatedButton({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary'
}: AnimatedButtonProps) {
  const baseClasses = {
    primary: "bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white",
    secondary: "bg-transparent text-[#6366F1] border-2 border-[#6366F1]",
    ghost: "bg-transparent text-white border border-white/20"
  };

  return (
    <motion.button
      className={`px-6 py-3 rounded-lg font-medium transition-all ${baseClasses[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {children}
    </motion.button>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  amplitude?: number;
}

export function FloatingElement({ 
  children, 
  className = '',
  duration = 3,
  amplitude = 10
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggeredContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1
}: StaggeredContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ 
  children, 
  className = ''
}: { 
  children: ReactNode; 
  className?: string; 
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
