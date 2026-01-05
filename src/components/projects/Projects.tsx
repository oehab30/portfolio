import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neon Commerce",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Cyber Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  },
  {
    title: "Future Finance",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Recent Work</h2>
          </motion.div>
          
          <motion.a 
            href="/projects"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wider"
          >
            View All <ArrowUpRight size={16} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block relative overflow-hidden"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted relative">
                 {/* Image Overlay */}
                 <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                 
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <span className="text-sm text-muted-foreground font-mono">{project.category}</span>
                </div>
                <div className="p-2 border border-white/10 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest font-bold">
            View All Projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
