import React from 'react'

interface StageNumberProps {
    stageNumber: string
}
function StageNumber({stageNumber}) {
  return (
 <div className="absolute top-0 right-10 text-[25vw] md:text-[25vw] font-bold text-foreground/5 leading-none pointer-events-none select-none">
        {stageNumber}
  </div>  )
}

export default StageNumber