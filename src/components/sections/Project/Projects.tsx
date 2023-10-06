"use client";

import Project from "./Project";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projectsData } from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
