import { motion } from "framer-motion";
import SectionTitle from "../projects/SectionTitle";
import StageNumber from "../common/Stage-number";

// We set the base color to #000000 (Black) for icons that should toggle.
// The "dark:invert" class in the JSX will handle turning them white.
const technologies = [
  { name: "React", color: "#61DAFB", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", color: "#3178C6", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", color: "#000000", icon: "https://cdn.simpleicons.org/nextdotjs/000000" }, 
  { name: "Tailwind", color: "#06B6D4", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Three.js", color: "#000000", icon: "https://cdn.simpleicons.org/three.js/000000" },
  { name: "Framer Motion", color: "#0055FF", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "JavaScript", color: "#F7DF1E", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "HTML5", color: "#E34F26", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Node.js", color: "#339933", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Vite", color: "#646CFF", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Git", color: "#F05032", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", color: "#000000", icon: "https://cdn.simpleicons.org/github/000000" },
];

export default function Stack() {
  return (
    <section className="overflow-hidden relative py-24 mt-24 mb-24" id="stack">
      {/* Background Decoration */}
       <StageNumber  stageNumber={"03"}/>
    

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-16 text-center">
          <SectionTitle title="Front End Skills" subtitle="Tech Arsenal" className="text-center" />
        </div>

        <div className="grid grid-cols-2 gap-8 mx-auto max-w-6xl md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col gap-4 justify-center items-center p-6 rounded-2xl border transition-all duration-300 group bg-secondary/50 border-border hover:border-primary/50 hover:bg-secondary"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="flex relative justify-center items-center w-16 h-16"
              >
                {/* Glow effect behind icon */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ 
                    backgroundColor: tech.color === "#000000" ? "var(--foreground)" : tech.color 
                  }}
                />
                
                {/* THE TRICK: 
                   1. We use 'dark:invert' to turn black icons white in dark mode.
                   2. We use 'brightness-0 dark:brightness-100' for monochrome icons 
                      if you want them to strictly follow text color.
                */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-12 h-12 relative z-10 transition-all duration-300 
                    ${tech.color === "#000000" ? "dark:invert" : ""}`}
                />
              </motion.div>

              <span className="text-sm font-bold tracking-wide transition-colors text-muted-foreground group-hover:text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}