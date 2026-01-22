import { memo } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './AboutVariants';
import AboutStats from './AboutStats';

const AboutNarrative = memo(() => {
  return (
    <div className="space-y-16 lg:col-span-5">
      <motion.div 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <p className="text-2xl font-light leading-snug md:text-3xl text-foreground/90">
          I am a developer who believes <span className="italic text-primary">complexity</span> should be beautiful and <span className="italic text-primary">simplicity</span> should be felt.
        </p>
        
        <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground/60">
          <p>
            My approach to engineering is rhythmic. I view code as a medium for artistic expression, where performance and aesthetics coexist in a delicate equilibrium.
          </p>
          <p>
            Based in Egypt, I bridge the gap between technical constraints and creative possibilities, building interfaces that resonate on a human level.
          </p>
        </div>

        <dl className="flex gap-8 items-center pt-4">
          <div>
            <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-1">Status</dt>
            <dd className="text-xs tracking-widest uppercase text-foreground/80">Available for hire</dd>
          </div>
          <div className="w-px h-10 bg-foreground/10" aria-hidden="true" />
          <div>
            <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary mb-1">Vibe</dt>
            <dd className="text-xs tracking-widest uppercase text-foreground/80">Boutique & Precise</dd>
          </div>
        </dl>
      </motion.div>

      <AboutStats />
    </div>
  );
});

AboutNarrative.displayName = 'AboutNarrative';

export default AboutNarrative;
