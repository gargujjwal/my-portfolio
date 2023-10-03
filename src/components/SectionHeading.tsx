import React from "react";

type Props = {
    children: React.ReactNode;
};

const SectionHeading = ({ children }: Props) => {
    return (
        <h2 className="mb-8 text-center text-3xl font-medium capitalize">
            {children}
        </h2>
    );
};

export default SectionHeading;
