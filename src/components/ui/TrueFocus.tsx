import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const FocusCorner = ({ side }: { side: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const positions = {
    'top-left': 'top-[-4px] left-[-4px] border-r-0 border-b-0',
    'top-right': 'top-[-4px] right-[-4px] border-l-0 border-b-0',
    'bottom-left': 'bottom-[-4px] left-[-4px] border-r-0 border-t-0',
    'bottom-right': 'bottom-[-4px] right-[-4px] border-l-0 border-t-0',
  };

  return (
    <span
      className={`absolute w-3 h-3 border-2 rounded-[1px] ${positions[side]}`}
      style={{
        borderColor: 'var(--border-color)',
        filter: 'drop-shadow(0 0 4px var(--border-color))'
      }}
    />
  );
};

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'Omar Ehab',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = '#5714ff',
  glowColor = '#5714ff',
  animationDuration = 0.5,
  pauseBetweenAnimations = 2
}) => {
  const words = useMemo(() => sentence.split(separator), [sentence, separator]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  // Handle automatic index cycling
  useEffect(() => {
    if (manualMode) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  // Update focus rectangle position
  useEffect(() => {
    const activeElement = wordRefs.current[currentIndex];
    const containerElement = containerRef.current;
    if (!activeElement || !containerElement) return;

    const parentRect = containerElement.getBoundingClientRect();
    const activeRect = activeElement.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleInteractionStart = useCallback((index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  }, [manualMode]);

  const handleInteractionEnd = useCallback(() => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  }, [manualMode, lastActiveIndex]);

  return (
    <div
      className="relative flex gap-4 justify-center items-center flex-wrap"
      ref={containerRef}
      style={{ outline: 'none', userSelect: 'none' }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        
        return (
          <button
            key={`${word}-${index}`}
            ref={el => { wordRefs.current[index] = el; }}
            type="button"
            className="relative bg-transparent border-none p-0 text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-black  transition-all duration-300"
            style={{
              filter: `blur(${isActive ? 0 : blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
              outline: 'none',
              userSelect: 'none'
            }}
            onMouseEnter={() => handleInteractionStart(index)}
            onMouseLeave={handleInteractionEnd}
            onFocus={() => handleInteractionStart(index)}
            onBlur={handleInteractionEnd}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleInteractionStart(index);
              }
            }}
          >
            {word}
          </button>
        );
      })}

      <AnimatePresence>
        <motion.div
          className="absolute top-0 left-0 pointer-events-none box-border border-0"
          animate={{
            x: focusRect.x,
            y: focusRect.y,
            width: focusRect.width,
            height: focusRect.height,
            opacity: currentIndex >= 0 ? 1 : 0
          }}
          transition={{
            duration: animationDuration,
            ease: "easeInOut"
          }}
          style={{
            '--border-color': borderColor,
            '--glow-color': glowColor
          } as React.CSSProperties}
        >
          <FocusCorner side="top-left" />
          <FocusCorner side="top-right" />
          <FocusCorner side="bottom-left" />
          <FocusCorner side="bottom-right" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TrueFocus;

