import Link from "next/link";
import { PlaneTakeoff } from "lucide-react";

import { Button } from "@/components/ui/button";

type EmptyStateProps = {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
};

export default function EmptyState({
    title,
    description,
    buttonText,
    buttonHref,
}: EmptyStateProps) {
    return (
        <div className="rounded-3xl border bg-background p-16 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                <PlaneTakeoff className="h-12 w-12 text-blue-600" />
            </div>

            <h2 className="mt-8 text-3xl font-bold">
                {title}
            </h2>

            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                {description}
            </p>

            {buttonHref && buttonText && (
                <Link href={buttonHref}>
                    <Button className="mt-8">
                        {buttonText}
                    </Button>
                </Link>
            )}
        </div>
    );
}