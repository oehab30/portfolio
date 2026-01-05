
import Magnetic from "@/components/layout/Magnetic Wrapper"; // each link will use this

export default function Navbar() {
  const links = [
    { href: "/#home", label: "HOME" },
    { href: "/#about", label: "ABOUT" },
    { href: "/#projects", label: "PROJECTS" },
    { href: "/#stack", label: "STACK" },
    { href: "/#contact", label: "CONTACT" },
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
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-100 hidden md:flex flex-col gap-6 p-4 rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3)] ">
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
                {/* Active Indicator Line */}
                <span
                  className="
                    absolute right-[-12px] top-1/2 -translate-y-1/2
                    w-[2px] h-0
                    bg-primary
                    transition-all duration-300
                    group-hover:h-full group-hover:shadow-[0_0_10px_#8b5cf6]
                  "
                />

                {/* Text */}
                <span className="uppercase relative z-10 py-2 group-hover:scale-110 transition-transform duration-300">
                  {item.label}
                </span>
                
                {/* Glow Dot behind text on hover */}
                <span className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>
            </Magnetic>
          </li>
        ))}
      </ul>
    </nav>
  );
}
