import { motion } from "framer-motion";
import Magnetic from "@/components/layout/Magnetic Wrapper";
import { Home, User, Layers, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const links = [
    { href: "/#home", label: "HOME", icon: Home },
    { href: "/#about", label: "ABOUT", icon: User },
    { href: "/#stack", label: "STACK", icon: Layers },
    { href: "/#projects", label: "PROJECTS", icon: Briefcase },
    { href: "/#contact", label: "CONTACT", icon: Mail },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("/#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 p-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl">
        <ul className="flex flex-col gap-8 text-[10px] font-bold tracking-widest ">
          {links.map((item) => (
            <li key={item.href}>
              <Magnetic strength={0.20}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="
                    group relative flex items-center justify-center
                    text-muted-foreground
                    [writing-mode:vertical-rl]
                    transition-all duration-500 ease-out
                    hover:text-primary py-4
                  "
                >
                  <span className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-[2px] h-0 bg-primary transition-all duration-300 group-hover:h-full group-hover:shadow-[0_0_10px_#8b5cf6]" />
                  <span className="uppercase relative z-10 py-2 group-hover:scale-110 transition-transform duration-300">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Bottom Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex lg:hidden items-center gap-2 p-2 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-2xl w-[90%] max-w-sm">
        {links.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-xl transition-all duration-300 relative group"
          >
            <item.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-[10px] font-mono tracking-tighter text-muted-foreground/60 group-hover:text-white transition-colors">
              {item.label.slice(0, 3)}
            </span>
            <motion.div 
              layoutId="nav-glow"
              className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" 
            />
          </a>
        ))}
      </nav>
    </>
  );
}
