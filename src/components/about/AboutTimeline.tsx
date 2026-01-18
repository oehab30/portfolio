import { motion } from 'framer-motion';
import { FaSuitcase } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import { PiMedalFill } from 'react-icons/pi';
import { containerVariants, lineVariants } from './AboutVariants';
import AboutCard from './AboutCard';

function AboutTimeline() {
  return (
    <motion.div 
      className="space-y-8 lg:col-span-7"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section Subtitle */}
      <div className="flex gap-4 items-center mb-4">
        <span className="text-[10px] font-mono uppercase tracking-[1em] text-foreground/20">Background</span>
        <motion.div variants={lineVariants} className="flex-1 h-px origin-left bg-foreground/5" />
      </div>
      
      <AboutCard 
        icon={FaSuitcase}
        title="Professional Path"
        subtitle=""
        description="Architecting fluid user experiences and robust frontend systems. Specializing in high-performance React architectures and component-driven design systems."
        date="2023 - PRESENT"
        mainIcon={true}
      />

      <AboutCard 
        icon={RiGraduationCapFill}
        title="Canadian International College"
        subtitle="BIS DEGREE"
        description="Bachelor's in Business Information Systems. Providing a unique bridge between complex business logic and creative technology solutions."
      />

      <AboutCard 
        icon={PiMedalFill}
        title="Specializations"
        subtitle="CERTIFIED"
        description="Focused training at coach Academy and Upskilling Program. Mastery of the modern JavaScript ecosystem and advanced React patterns."
        tags={['React', 'Next.js', 'Redux', 'System Design']}
      />
    </motion.div>
  );
}

export default AboutTimeline;
