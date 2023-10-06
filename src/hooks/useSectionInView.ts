import { useActiveSectionCtx } from "@/contexts/ActiveSectionContext";
import { SectionName } from "@/lib/types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionCtx();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000)
            setActiveSection(sectionName);
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
};
export default useSectionInView;
