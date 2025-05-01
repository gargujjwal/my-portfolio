"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import useSectionInView from "@/hooks/useSectionInView";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project) => (
                    <React.Fragment key={project.id}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
