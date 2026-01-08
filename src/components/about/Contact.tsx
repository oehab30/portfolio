import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send, MapPin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import TextType from '../ui/TextType';
import Animated_line from "../ui/Animated_line";

function InteractiveParticles() {
  const points = useRef(null!);
  const particlesCount = 2000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      points.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time + points.current.geometry.attributes.position.array[i3]) * 0.002;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.001;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        // This color will look good on both light/dark backgrounds
        color="#8b5cf6" 
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
    };

    const contactDetails = [
        { 
            icon: Mail, 
            label: "Email", 
            value: "oehab785@gmail.com", 
            link: "mailto:oehab785@gmail.com",
            color: "group-hover:text-blue-500 dark:group-hover:text-blue-400"
        },
        { 
            icon: FaWhatsapp, 
            label: "WhatsApp", 
            value: "+20 123 456 7890", 
            link: "https://wa.me/201234567890",
            color: "group-hover:text-green-600 dark:group-hover:text-green-500"
        },
        { 
            icon: MapPin, 
            label: "Location", 
            value: "Cairo, Egypt", 
            link: "#",
            color: "group-hover:text-red-500 dark:group-hover:text-red-400"
        }
    ];

    return (
        <section className="relative min-h-screen py-32 overflow-hidden flex items-center justify-center bg-background text-foreground transition-colors duration-500" id="contact">
            
            {/* Background Canvas - Lowered opacity in light mode for readability */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-50">
                <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <InteractiveParticles />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                        
                        {/* Left Side: Info & Details */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <Animated_line text="Contact" lines={1} textColor={"text-primary"} lineColor={"bg-primary/40"}/>
                                </div>
                                
                                <TextType 
                                    text={["Whether you have a question", "or just want to say hi", "my inbox is always open."]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    className="text-4xl md:text-8xl lg:text-5xl font-bold tracking-tighter leading-[0.9] mt-3"
                                />
                            </motion.div>

                            <div className="space-y-6">
                                {contactDetails.map((detail, i) => (
                                    <motion.a
                                        key={i}
                                        href={detail.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 dark:bg-foreground/5 border border-border hover:border-primary/50 transition-all duration-300"
                                    >
                                        <div className={`w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground transition-colors duration-300 ${detail.color}`}>
                                            <detail.icon size={22} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60 mb-1">{detail.label}</p>
                                            <p className="text-lg font-medium transition-colors">{detail.value}</p>
                                        </div>
                                        <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                                    </motion.a>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4">
                                {[Github, Linkedin, Twitter].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        href="#"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        className="w-12 h-12 rounded-xl bg-secondary/50 dark:bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                                    >
                                        <Icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
                            
                            <form 
                                onSubmit={handleSubmit}
                                className="relative bg-background/60 dark:bg-foreground/3 backdrop-blur-xl border border-border p-8 md:p-12 rounded-[2.5rem] space-y-8 shadow-2xl shadow-primary/5"
                            >
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 ml-1">Name</label>
                                            <input 
                                                required
                                                type="text"
                                                value={formState.name}
                                                onChange={(e) => setFormState({...formState, name: e.target.value})}
                                                className="w-full bg-secondary/50 dark:bg-foreground/5 border border-border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/40"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 ml-1">Email</label>
                                            <input 
                                                required
                                                type="email"
                                                value={formState.email}
                                                onChange={(e) => setFormState({...formState, email: e.target.value})}
                                                className="w-full bg-secondary/50 dark:bg-foreground/5 border border-border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all placeholder:text-muted-foreground/40"
                                                placeholder="Email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground/80 ml-1">Message</label>
                                        <textarea 
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                                            className="w-full bg-secondary/50 dark:bg-foreground/5 border border-border rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none placeholder:text-muted-foreground/40"
                                            placeholder="Tell me about your project..."
                                        />
                                    </div>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || isSent}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-5 rounded-2xl font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden relative
                                        ${isSent ? 'bg-green-500 text-white' : 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/25'}`}
                                >
                                    <AnimatePresence mode="wait">
                                        {isSubmitting ? (
                                            <motion.div key="loading" className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </motion.div>
                                        ) : isSent ? (
                                            <motion.div key="sent" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                                                Sent Successfully
                                            </motion.div>
                                        ) : (
                                            <motion.div key="normal" className="flex items-center gap-2">
                                                <Send size={16} />
                                                Send Message
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;