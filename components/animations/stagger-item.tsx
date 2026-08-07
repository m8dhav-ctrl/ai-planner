"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const item = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function StaggerItem({
    children,
    className,
}: Props) {
    return (
        <motion.div
            className={className}
            variants={item}
            transition={{
                duration: 0.35,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}