import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md pt-20 pb-10">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-0 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Let's Talk</h2>
                    <p className="text-muted-foreground max-w-md">
                        Open for new opportunities and collaborations. 
                        Feel free to reach out if you have a project in mind.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex gap-6"
                >
                    <a href="mailto:contact@example.com" className="p-4 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 group">
                        <Twitter className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground font-mono">
                <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
                <p>Designed & Built with passion.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
