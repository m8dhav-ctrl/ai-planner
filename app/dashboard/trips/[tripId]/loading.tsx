import { Loader2, MapPin } from "lucide-react";

export default function Loading() {
    return (
        <main className="min-h-screen bg-muted/30">
            <section className="mx-auto max-w-6xl px-6 py-10">

                <div className="flex flex-col gap-6">

                    {/* Header skeleton */}

                    <div className="flex items-center justify-between">

                        <div className="h-10 w-24 animate-pulse rounded-xl bg-muted" />

                        <div className="h-10 w-48 animate-pulse rounded-xl bg-muted" />

                    </div>

                    {/* Trip header skeleton */}

                    <div className="rounded-3xl border bg-background p-8 shadow-sm">

                        <div className="flex items-center gap-4">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">

                                <MapPin className="h-5 w-5 text-primary" />

                            </div>

                            <div className="h-10 w-72 animate-pulse rounded-xl bg-muted" />

                        </div>

                        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                            {Array.from({ length: 4 }).map(
                                (_, index) => (
                                    <div
                                        key={index}
                                        className="h-16 animate-pulse rounded-xl bg-muted"
                                    />
                                )
                            )}

                        </div>

                    </div>

                    {/* Main loading message */}

                    <div className="flex min-h-[300px] items-center justify-center rounded-3xl border bg-background shadow-sm">

                        <div className="text-center">

                            <Loader2 className="mx-auto h-10 w-10 animate-spin text-primary" />

                            <h2 className="mt-5 text-xl font-semibold">
                                Loading your trip
                            </h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Preparing your itinerary and destination details...
                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </main>
    );
}