import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function LoadingObject({ progress }: Readonly<{ progress: number }>) {
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.5;
        meshRef.current.rotation.y = time * 0.8;
        meshRef.current.rotation.z = time * 0.3;
        
        // Pulse scale with progress
        const scale = 1 + (progress / 100) * 0.5;
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <mesh ref={meshRef}>
            <octahedronGeometry args={[2, 0]} />
            <meshStandardMaterial 
                color="#ffffff" 
                wireframe 
                transparent 
                opacity={0.1 + (progress / 100) * 0.4}
                emissive="#8b5cf6"
                emissiveIntensity={0.5}
            />
        </mesh>
    );
}

const Loader = memo(({ onFinished }: { onFinished?: () => void }) => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsVisible(false);
                        if (onFinished) onFinished();
                    }, 500);
                    return 100;
                }
                // Faster increment at the start, slower at the end for "loading" feel
                const increment = prev < 80 ? Math.floor(Math.random() * 10) + 5 : 2;
                return Math.min(prev + increment, 100);
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onFinished]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
                    className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
                >
                    {/* Smooth 3D Background */}
                    <div className="absolute inset-0 z-0 opacity-40">
                        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
                            <LoadingObject progress={counter} />
                        </Canvas>
                    </div>

                    <div className="relative z-10 flex flex-col items-center pointer-events-none px-6">
                        {/* Top Tagline */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.4, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mb-8 md:mb-12"
                        >
                            <span className="text-[8px] md:text-[10px] font-mono tracking-[0.5em] md:tracking-[0.8em] uppercase text-primary">
                                Architecture & Design
                            </span>
                        </motion.div>

                        {/* Counter with Motion Blur feel */}
                        <div className="overflow-hidden h-24 md:h-48 flex items-center">
                            <motion.h1 
                                key={counter}
                                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="text-7xl md:text-[14rem] font-bold tracking-tighter text-white/90"
                            >
                                {counter}
                            </motion.h1>
                        </div>

                        {/* Status */}
                        <div className="mt-6 md:mt-8 flex flex-col items-center gap-2">
                            <motion.div 
                                animate={{ opacity: [0.2, 0.6, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.5em] text-primary uppercase"
                            >
                                Synchronizing Systems
                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Brand */}
                    <div className="absolute bottom-12 flex flex-col items-center gap-6 z-10 w-full">
                        <div className="w-8 h-px bg-primary/20" />
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.2 }}
                            className="text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase"
                        >
                            Omar Ehab &copy; 2026
                        </motion.span>
                    </div>
                    
                    {/* Vignette */}
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]" />
                </motion.div>
            )}
        </AnimatePresence>
    );
});

Loader.displayName = "Loader";

export default Loader;
