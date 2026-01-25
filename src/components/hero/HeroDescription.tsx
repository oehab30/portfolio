import { motion } from 'framer-motion'

function HeroDescription() {
  return (
    <motion.p
      custom={2}
      initial="hidden"
      animate="visible"
      className="mx-auto mb-6 max-w-2xl font-body text-[11px] font-light leading-relaxed tracking-wide text-muted-foreground/90 sm:text-base md:mb-10 md:text-lg"
    >
      <span className="text-primary text-xl">"</span>
      Crafting immersive, high-performance web experiences with a focus on{' '}
      <span className="font-medium text-primary">precision</span>,{' '}
      <span className="font-medium text-primary">aesthetics</span>, and{' '}
      <span className="font-medium text-primary">user-centric design</span>{' '}
      <span className="text-primary text-xl">"</span>
    </motion.p>
  )
}

export default HeroDescription
