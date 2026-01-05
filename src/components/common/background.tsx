import React, { ReactNode, useEffect, useState } from 'react';
import Antigravity from '@/components/ui/Antigravity';

interface BackgroundProps {
  children?: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground transition-colors duration-700 font-body">
      
      {/* 0. Cinematic Grain Overlay */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* 0.5 Spotlight Effect - Static */}
      <div className="fixed top-0 left-0 w-full h-full bg-linear-to-b from-black/20 via-transparent to-black/80 pointer-events-none z-40" />

      {/* 0.6 Active Mouse Spotlight */}
      <div 
        className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(229, 211, 179, 0.06), transparent 40%)`
        }}
      />


      {/* 1. The Animation Layer (Subtle Gold Dust) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Antigravity
          count={80} // Fewer particles for elegance
          magnetRadius={15}
          ringRadius={15}
          waveSpeed={0.05} // Very slow movement
          waveAmplitude={3}
          particleSize={1}
          lerpSpeed={0.02}
          color="#5434a3" // Champagne Gold
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
};

export default Background;