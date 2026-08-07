import { ReactNode } from "react";

type SectionHeaderProps = {
    icon: ReactNode;
    title: string;
    description?: string;
};

export default function SectionHeader({
    icon,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="mb-6 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {icon}
            </div>

            <div>
                <h2 className="text-2xl font-bold tracking-tight">
                    {title}
                </h2>

                {description && (
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>

        </div>
    );
}