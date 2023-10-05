import { projectsData } from "@/lib/data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const Projects = () => {
    return (
        <section className="mb-28 scroll-mt-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((data, i) => (
                    <Project key={i} {...data} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
