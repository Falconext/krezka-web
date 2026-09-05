'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  durationMs?: number;
  format?: (n: number) => string;
  className?: string;
};

/**
 * Contador que anima 0 → `to` al entrar en viewport. Es robusto:
 * inicia mostrando el valor final (nunca se queda en 0 si el JS/animación
 * no corre) y respeta prefers-reduced-motion.
 */
export default function CountUp({ to, durationMs = 1400, format, className }: Props) {
  const [val, setVal] = useState(to);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVal(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e.isIntersecting || started.current) return;
        started.current = true;
        if (document.visibilityState !== 'visible') {
          setVal(to);
          return;
        }
        const t0 = performance.now();
        setVal(0);
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / durationMs);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(tick);
          else setVal(to);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className}>
      {format ? format(val) : String(val)}
    </span>
  );
}
