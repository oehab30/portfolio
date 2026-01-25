import Magnetic from '@/components/common/Magnetic Wrapper'
import { FaArrowRightLong } from 'react-icons/fa6'
function HeroViewWork() {
  return (
  <Magnetic strength={0.3}>
            <a 
                href="#projects"
                className="group relative px-5 py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 bg-transparent border border-primary/30 text-primary uppercase text-xs tracking-[0.2em] transition-all duration-500 
                hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden rounded-[2px]">
                <div className="absolute inset-0 w-full h-full bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="text-[10px] lg:text-[12px] relative flex items-center gap-3">
                    View Works <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </a>
 </Magnetic>  
          )
}

export default HeroViewWork



