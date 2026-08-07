"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number;
    className?: string;
};

export default function FadeIn({
    children,
    delay = 0,
    className,
}: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.4,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}