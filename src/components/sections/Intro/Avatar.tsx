"use client";

import Image from "next/image";
import MyAvatar from "@/../public/headshot.png";
import { motion } from "framer-motion";

const Avatar = () => {
    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
            >
                <Image
                    src={MyAvatar}
                    alt="Ricardo portrait"
                    quality="95"
                    priority={true}
                    className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                />
            </motion.div>

            <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.7,
                }}
            >
                👋
            </motion.span>
        </div>
    );
};

export default Avatar;
