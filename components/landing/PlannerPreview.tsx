import {
    CalendarDays,
    MapPin,
    Wallet,
    Users,
    CheckCircle2,
} from "lucide-react";

export function PlannerPreview() {
    return (
        <section className="mx-auto max-w-5xl px-6 pb-24">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-xl">

                {/* Header */}
                <div className="border-b p-6">
                    <h2 className="text-2xl font-bold">
                        ✈️ Trip to Japan
                    </h2>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>Tokyo</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-primary" />
                            <span>7 Days</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Wallet className="h-5 w-5 text-primary" />
                            <span>₹75,000</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-primary" />
                            <span>2 Travelers</span>
                        </div>
                    </div>
                </div>

                {/* Itinerary */}
                <div className="space-y-5 p-6">

                    <h3 className="font-semibold">
                        Day 1
                    </h3>

                    <div className="space-y-3">

                        <div className="flex items-center gap-3 rounded-xl bg-muted p-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Visit Tokyo Tower</span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-muted p-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Explore Shibuya Crossing</span>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl bg-muted p-3">
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                            <span>Authentic Sushi Dinner</span>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="border-t bg-muted/40 px-6 py-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                        <CheckCircle2 className="h-5 w-5" />
                        AI itinerary generated successfully
                    </div>
                </div>
            </div>
        </section>
    );
}