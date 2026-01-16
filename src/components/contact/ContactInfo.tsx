import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Component: 
const ContactInfoCard = ({ icon: Icon, label, value, link, color, index }: any) => (
  <motion.a
    href={link} target="_blank" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
    className="group flex items-center gap-6 p-6 rounded-2xl bg-secondary/30 dark:bg-foreground/5 border border-border hover:border-primary/50 transition-all duration-300"
  >
    <div className={`w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground ${color}`}>
      <Icon size={22} />
    </div>
    <div>
      <p className="text-xs font-mono uppercase text-muted-foreground/60">{label}</p>
      <p className="text-lg font-medium">{value}</p>
    </div>
    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-40" />
  </motion.a>
);

// Component: ContactDetails info
export const ContactDetails = () => {
  const details = [
    { icon: Mail, label: "Email", value: "oehab785@gmail.com",        link: "mailto:oehab785@gmail.com",color: "group-hover:text-blue-500" },
    { icon: FaWhatsapp, label: "WhatsApp", value: "+20 111 009 8802", link: "https://wa.me/1110098802" ,color: "group-hover:text-green-500" },
    { icon: MapPin, label: "Location", value: "Cairo, Egypt",         link: "#"                        ,color: "group-hover:text-red-500" }
  ];

  return (
    <div className="space-y-6">
      {details.map((item, i) => <ContactInfoCard key={i} {...item} index={i} />)}
      <div className="flex gap-4 pt-4">
        {[Github, Linkedin ].map((Icon, i) => (
          <motion.a key={i} href="#" whileHover={{ y: -5 }} className=" ml-21 lg:ml-2 w-12 h-12 rounded-xl bg-secondary/50 dark:bg-foreground/5 border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </div>
  );
};