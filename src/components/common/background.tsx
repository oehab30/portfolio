import React, { ReactNode, useEffect, memo } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Antigravity from '@/components/ui/Antigravity';

interface BackgroundProps {
  children?: ReactNode;
}

const Background = memo(({ children }: BackgroundProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (undefined === globalThis.window) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    globalThis.window.addEventListener('mousemove', handleMouseMove);
    return () => {
      globalThis.window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground transition-colors duration-700 font-body">
      
      {/* 0. Cinematic Grain Overlay */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 'var(--film-grain-opacity)'
        }}
        aria-hidden="true"
      />
      
      {/* 0.5 Cinematic Vignette - Subtler and Theme Aware */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-linear-to-b from-background/10 via-transparent to-background/40 dark:from-black/10 dark:to-black/60" aria-hidden="true" />

      {/* 0.6 Active Mouse Spotlight - Theme Aware Color */}
      <motion.div 
        className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, var(--primary-deep), transparent 40%)`,
          opacity: 0.08
        }}
        aria-hidden="true"
      />

      {/* 1. The Animation Layer (Subtle Gold Dust) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true">
        <Antigravity
          count={80} // Fewer particles for elegance
          magnetRadius={15}
          ringRadius={15}
          waveSpeed={0.05} // Very slow movement
          waveAmplitude={3}
          particleSize={1}
          lerpSpeed={0.02}
          color="#5434a3" // primary color
          autoAnimate={true}
          particleVariance={5}
        />
      </div>

      {/* 2. The Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
});

Background.displayName = 'Background';

export default Background;