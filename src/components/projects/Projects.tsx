import AnimatedLine from "../common/AnimatedLine";
import StageNumber from "../common/Stage-number";
import { ProjectsContainer } from "./ProjectsContainer";

const Projects = () => {
    return (
        <section className="relative z-10 px-6 py-24 border-t border-foreground/5" id="projects">
            <StageNumber stageNumber={"04"} />

            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex gap-2 items-center mb-10 md:mb-16">
                    <AnimatedLine text="Selected Projects" lines={1} textColor={"text-primary"} lineColor={"bg-primary/60"}/>
                </div>

                {/* Projects Content */}
                <ProjectsContainer />
            </div>
        </section>
    );
};

export default Projects;
