import { memo } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface ContactInfoCardProps {
  icon: any;
  label: string;
  value: string;
  link: string;
  color: string;
  index: number;
}

// Component: 
const ContactInfoCard = memo(({ icon: Icon, label, value, link, color, index }: ContactInfoCardProps) => (
  <motion.a
    href={link} target="_blank" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
    className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-secondary/30 dark:bg-foreground/5 border border-border hover:border-primary/50 transition-all duration-300"
    aria-label={`${label}: ${value}`}
  >
    <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground ${color}`}>
      <Icon className="size-5 sm:size-6" aria-hidden="true" />
    </div>
     <div className="min-w-0 flex-1">
      <p className="text-[10px] font-mono uppercase text-muted-foreground/60">{label}</p>
      <p className="text-sm sm:text-base md:text-lg font-medium truncate">{value}</p>
    </div>
    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-40 shrink-0" aria-hidden="true" />
  </motion.a>
));

ContactInfoCard.displayName = "ContactInfoCard";

// Component: ContactDetails info
export const ContactDetails = memo(() => {
  const details = [
    { icon: Mail,       label: "Email",   id: "email", value: "oehab785@gmail.com",   link: "mailto:oehab785@gmail.com",color: "group-hover:text-blue-500" },
    { icon: FaWhatsapp, label: "WhatsApp", id: "whatsapp", value: "+20 111 009 8802", link: "https://wa.me/1110098802" ,color: "group-hover:text-green-500" },
    { icon: MapPin,     label: "Location", id: "location", value: "Cairo, Egypt",     link: "#"                        ,color: "group-hover:text-red-500" }
  ];

  const socialLinks = [
    { icon: Github,   label:"Github", href: "https://github.com", id: "github" },
    { icon: Linkedin, label:"Linkedin", href: "https://linkedin.com", id: "linkedin" }
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {details.map((item, i) => <ContactInfoCard key={item.id} {...item} index={i} />)}
      <div className="flex gap-4 pt-4 align-items-center " >
        {socialLinks.map((social) => (
          <motion.a 
            key={social.id} 
            href={social.href} 
            whileHover={{ y: -5 }} 
            className="w-70 h-12 rounded-xl bg-secondary/50 dark:bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all px-6"
            aria-label={social.label}
          >
            <social.icon size={20} aria-hidden="true" />
            <span className="ml-3">{social.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  );
});

ContactDetails.displayName = "ContactDetails";