"use client";
import useSectionInView from "@/hooks/useSectionInView";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    // Group skills by category for better organization

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>Technical Proficiencies</SectionHeading>

            {skillsData.map((skillCategory, skillCategoryIdx) => (
                <div key={skillCategory.id} className="mb-8">
                    <h3 className="mb-3 text-xl font-medium text-gray-800 dark:text-white/80">
                        {skillCategory.title}
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                        {skillCategory.skills.map((skill, skillIdx) => (
                            <motion.li
                                className="borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
                                key={skill.id}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={skillIdx + skillCategoryIdx * 5}
                            >
                                {skill.name}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
