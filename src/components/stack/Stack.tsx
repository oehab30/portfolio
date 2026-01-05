import { motion } from "framer-motion";
import { Code, Layers, Zap } from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Digital Products",
    description: "Engineering robust digital platforms, apps, and websites that drive business growth and user engagement."
  },
  {
    icon: <Layers size={32} />,
    title: "Brand Identity",
    description: "Crafting distinct visual narratives and brand strategies that resonate with your audience and stand the test of time."
  },
  {
    icon: <Zap size={32} />,
    title: "Growth Strategy",
    description: "Data-driven marketing campaigns and SEO optimization designed to scale your reach and maximize ROI."
  }
];

const Stack = () => {
  return (
    <section className="py-20 px-6 relative z-10 bg-background/50 backdrop-blur-sm border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono tracking-widest uppercase text-sm">Skills & Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">What I Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 border border-white/5 hover:border-primary/30 bg-card/40 transition-colors duration-500 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 text-muted-foreground group-hover:text-primary transition-colors duration-500 transform group-hover:scale-105 origin-left">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Corner Accents - Cinematic Gold */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
