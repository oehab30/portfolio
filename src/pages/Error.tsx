import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Link } from "react-router-dom";
import Magnetic from "@/components/layout/Magnetic Wrapper";

function DistortedObject() {
    const meshRef = useRef<THREE.Mesh>(null!);
    
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
        
        // Distort scale slightly to look "glitchy"
        const s = 1 + Math.sin(time * 2) * 0.05;
        meshRef.current.scale.set(s, s, s);
    });

    return (
        <mesh ref={meshRef}>
            <torusKnotGeometry args={[3, 0.8, 256, 32]} />
            <meshStandardMaterial 
                color="#8b5cf6" 
                wireframe 
                transparent 
                opacity={0.1}
                emissive="#8b5cf6"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}

const Error = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
                    <DistortedObject />
                </Canvas>
            </div>

            {/* Content Overflowing the background */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-primary font-mono tracking-[0.8em] uppercase text-[10px] block mb-6">
                        System Breach : Error 404
                    </span>
                    
                    <h1 className="text-[8rem] md:text-[12rem] font-black tracking-tighter leading-none text-white/90 relative">
                        <motion.span
                            animate={{ 
                                x: [-2, 2, -1, 0],
                                opacity: [0.8, 1, 0.9, 1]
                            }}
                            transition={{ 
                                duration: 0.2, 
                                repeat: Infinity, 
                                repeatType: "mirror",
                                repeatDelay: 3
                            }}
                            className="inline-block"
                        >
                            404
                        </motion.span>
                    </h1>

                    <div className="mt-8 space-y-4 max-w-lg">
                        <h2 className="text-2xl md:text-3xl font-heading font-medium text-white/80">
                            You've drifted into the void.
                        </h2>
                        <p className="text-muted-foreground/60 font-light leading-relaxed">
                            The requested coordinate doesn't exist in this perspective. 
                            Let's bring you back to the interface.
                        </p>
                    </div>

                    <div className="mt-12">
                        <Magnetic strength={0.2}>
                            <Link 
                                to="/" 
                                className="group relative px-10 py-4 bg-primary text-black rounded-full font-bold text-xs tracking-[0.2em] uppercase transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] inline-flex items-center gap-2"
                            >
                                Back to Reality
                            </Link>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Tagline */}
            <div className="absolute bottom-12 flex flex-col items-center gap-6 opacity-20 pointer-events-none">
                <div className="w-8 h-px bg-primary" />
                <span className="text-[9px] font-mono tracking-[0.4em] uppercase text-white">
                    Coordinates Lost
                </span>
            </div>

            {/* Cinematic Overlay - Reduced to avoid double grain */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
        </section>
    );
};

export default Error;

