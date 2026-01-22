import React, { memo } from 'react';

interface StageNumberProps {
    stageNumber: string
}

const StageNumber = memo(({stageNumber}: StageNumberProps) => {
  return (
    <div 
        className="absolute top-0 right-10 text-[25vw] md:text-[25vw] font-bold text-foreground/5 leading-none pointer-events-none select-none"
        aria-hidden="true"
    >
        {stageNumber}
    </div>
  );
});

StageNumber.displayName = "StageNumber";

export default StageNumber;