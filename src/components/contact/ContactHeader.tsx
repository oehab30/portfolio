import { motion } from "framer-motion";
import TextType from '../ui/TextType';
import AnimatedLine from "../common/AnimatedLine";

export const ContactHeader = () => (
  <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
    <div className="flex items-center gap-4 mb-6">
      <AnimatedLine text="Contact" lines={1} textColor="text-primary" lineColor="bg-primary/40"/>
    </div>
    {/* Text Header  */}
    <TextType 
      text={["Whether you have a question", "or just want to say hi", "my inbox is always open."]}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] mt-3"
    />
  </motion.div>
);