import { motion } from "framer-motion";
import SectionTitle from "../projects/SectionTitle";

// Tech stack data with SimpleIcons URLs
const technologies = [
  { name: "React", color: "#61DAFB", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", color: "#3178C6", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", color: "#FFFFFF", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" }, 
  { name: "Tailwind", color: "#06B6D4", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Three.js", color: "#FFFFFF", icon: "https://cdn.simpleicons.org/three.js/FFFFFF" },
  { name: "Framer Motion", color: "#0055FF", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML5", color: "#E34F26", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Node.js", color: "#339933", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Vite", color: "#646CFF", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Git", color: "#F05032", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", color: "#F05032", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
];

export default function Stack() {
  return (
    <section className=" mb-24 mt-24 py-24 relative overflow-hidden" id="stack">
        <div className="absolute top-0 right-10 text-[25vw] font-bold text-foreground/5 leading-none pointer-events-none select-none">
        03
      </div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-16 text-center">
            <SectionTitle title="Front End Skills" subtitle="Tech Arsenal" className="text-center" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
                 {technologies.map((tech, index) => (
                    <motion.div 
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-secondary"
                    >
                         <motion.div
                            animate={{ 
                                y: [0, -10, 0],
                            }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: index * 0.2 // Stagger the floating effect
                            }}
                            className="relative w-16 h-16 flex items-center justify-center"
                         >
                             {/* Glow effect behind icon */}
                             <div 
                                className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                style={{ backgroundColor: tech.color }}
                             />
                             <img src={tech.icon} alt={tech.name} className="w-12 h-12 relative z-10 drop-shadow-[0_0_15px_rgba(var(--foreground),0.1)]" />
                         </motion.div>
                         
                         <span className="font-bold text-sm tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                    </motion.div>
                 ))}
            </div>
        </div>
    </section>
  );
}
