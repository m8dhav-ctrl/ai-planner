"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function StaggerContainer({
    children,
    className,
}: Props) {
    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            animate="show"
        >
            {children}
        </motion.div>
    );
}