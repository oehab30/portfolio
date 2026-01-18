import StageNumber from '../common/Stage-number';
import AboutHeader from './AboutHeader';
import AboutNarrative from './AboutNarrative';
import AboutTimeline from './AboutTimeline';

function About() {
  return (
    <section className="overflow-hidden relative z-10 px-6 py-32 border-t border-foreground/5" id="about">
      {/* Background Section Index */}
      <StageNumber stageNumber={"02"}/>

      <div className="relative z-10 mx-auto max-w-7xl">
       {/* About Header */}
        <AboutHeader />

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
         {/* Header description */}
            <AboutNarrative />
            {/* Background cards */}
            <AboutTimeline />
        </div>
      </div>
    </section>
  );
}

export default About;
