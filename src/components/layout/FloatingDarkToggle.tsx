import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function FloatingDarkToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        className="fixed top-8 right-8 z-100"
      >
        <div className="flex items-center p-1.5 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-colors duration-500">
          
          {/* Minimalist Switch Design */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative w-16 h-8 rounded-full bg-gray-200/50 dark:bg-zinc-800/50 border border-white/10 transition-colors duration-500 overflow-hidden cursor-pointer active:scale-95 group"
          >
            <motion.div
              animate={{ x: isDark ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-primary shadow-lg flex items-center justify-center z-10"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-3.5 h-3.5 text-white fill-current" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-3.5 h-3.5 text-orange-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Background Track Icons */}
            <div className="absolute inset-0 flex justify-between items-center px-2.5 pointer-events-none opacity-20 dark:opacity-40">
              <Sun className="w-3 h-3 text-orange-500" />
              <Moon className="w-3 h-3 text-white" />
            </div>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FloatingDarkToggle;
