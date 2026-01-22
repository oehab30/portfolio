import { memo } from "react";
import SectionTitle from "../projects/SectionTitle";
import StageNumber from "../common/Stage-number";
import { StackContainer } from "./stackcontainer";
import { ContactParticles } from "../contact/ContactParticles";

const Stack = memo(() => {
  return (
    <section className="overflow-hidden relative py-24 mt-24 mb-24" id="stack">
      {/* Background Decoration */}
         <ContactParticles />
      
      <StageNumber stageNumber={"03"} />

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-16 text-center">
          <SectionTitle title="Front End Skills" subtitle="Tech Arsenal" className="text-center" />
        </div>

        <StackContainer />
      </div>
    </section>
  );
});

Stack.displayName = "Stack";

export default Stack;