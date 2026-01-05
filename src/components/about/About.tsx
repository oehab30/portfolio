import React from 'react';
import { motion } from 'framer-motion';
import { FaSuitcase } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiMedalFill } from "react-icons/pi";

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-background/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 md:mb-24"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-mono tracking-widest uppercase text-sm">About Me</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                Architecting <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">Digital Reality</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Bio */}
            <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="prose prose-invert prose-lg text-muted-foreground/80 font-light leading-relaxed">
                    <p className="mb-6">
                        <span className="text-white font-medium text-xl block mb-2">Hello, I'm Asmaa Samir Abdullah.</span>
                        A passionate Frontend Developer dedicated to building responsive, user-centric web applications. My journey is defined by a relentless pursuit of clean code and pixel-perfect aesthetics.
                    </p>
                    <p className="mb-6">
                        I specialize in modern frontend technologies like <span className="text-primary">React.js</span>, <span className="text-primary">TypeScript</span>, and <span className="text-primary">Next.js</span>. I blend technical prowess with a keen eye for UI/UX to create seamless digital experiences.
                    </p>
                    <p>
                        With a Bachelor's in Management Information Systems, I bridge the gap between business logic and technical implementation, ensuring every line of code adds real value.
                    </p>
                </div>
                
                {/* Signature or subtle visual element could go here */}
                <div className="mt-12 opacity-50 font-handwriting text-2xl -rotate-2">
                    Asmaa Samir
                </div>
            </motion.div>

            {/* Right Column: Timeline Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* Experience Card */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-[#0f0720]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/30 transition-colors duration-300"
                >
                    <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <FaSuitcase size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 font-heading">Experience</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Frontend Developer with hands-on experience in building scalable web applications. contributing to high-impact projects within dynamic, agile teams.
                        </p>
                    </div>
                </motion.div>

                {/* Education Card */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-[#0f0720]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/30 transition-colors duration-300"
                >
                    <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <RiGraduationCapFill size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 font-heading">Education</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                            Bachelor's in Management Information Systems
                        </p>
                        <p className="text-primary/60 text-xs tracking-wider uppercase">Thebes Academy</p>
                    </div>
                </motion.div>

                {/* Training Card */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="group flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-[#0f0720]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:border-primary/30 transition-colors duration-300"
                >
                    <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <PiMedalFill size={26} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 font-heading">Certifications</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-1">
                            Advanced Frontend Development Track
                        </p>
                        <div className="flex gap-3 text-xs text-primary/60 uppercase tracking-wider">
                            <span>Route Academy</span>
                            <span>•</span>
                            <span>Upskilling Program</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default About;