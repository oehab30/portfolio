import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { itemVariants } from './AboutVariants';

interface AboutCardProps {
  icon: IconType;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
  tags?: string[];
  mainIcon?: boolean;
}

function AboutCard({ icon: Icon, title, subtitle, description, date, tags, mainIcon }: Readonly<AboutCardProps>) {
  return (
    <motion.div 
      variants={itemVariants}
      className="overflow-hidden relative p-10 rounded-3xl border transition-all duration-700 group bg-secondary/50 border-border hover:bg-secondary hover:border-primary/20"
    >
      {mainIcon && (
        <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity group-hover:opacity-10">
          <Icon size={120} />
        </div>
      )}
      <div className="flex relative z-10 flex-col gap-8 md:flex-row">
        <div className="flex justify-center items-center w-16 h-16 rounded-2xl transition-all duration-500 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-black">
          <Icon size={24} />
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold tracking-tight font-heading">{title}</h3>
            {date && (
              <span className="text-[9px] font-mono px-3 py-1 rounded-full border border-primary/20 text-primary">
                {date}
              </span>
            )}
            {subtitle && !date && (
              <span className="text-[9px] font-mono px-3 py-1 rounded-full border border-border text-foreground/40">
                {subtitle}
              </span>
            )}
          </div>
          <p className="font-light leading-relaxed text-muted-foreground/80">
            {description}
          </p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono py-1 px-4 rounded-lg bg-secondary border border-border text-foreground/30 group-hover:text-primary transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutCard;
