import { ReactNode } from "react";

type TripActionsProps = {
    children: ReactNode;
};

export default function TripActions({
    children,
}: TripActionsProps) {
    return (
        <section className="mt-8 rounded-3xl border bg-background p-6 shadow-sm">

            <div className="mb-5">

                <h2 className="text-xl font-bold">
                    Trip Actions
                </h2>

                <p className="text-sm text-muted-foreground">
                    Export, print, regenerate and manage your itinerary.
                </p>

            </div>

            <div className="flex flex-wrap gap-3">
                {children}
            </div>

        </section>
    );
}