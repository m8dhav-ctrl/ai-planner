import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
    children: ReactNode;
    className?: string;
};

export default function FeatureCard({
    children,
    className,
}: FeatureCardProps) {
    return (
        <section
            className={cn(
                "mt-10 rounded-3xl border bg-background p-8 shadow-md transition-all duration-300 hover:shadow-lg",
                className
            )}
        >
            {children}
        </section>
    );
}