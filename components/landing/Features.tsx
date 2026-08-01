import {
    Map,
    Hotel,
    Utensils,
    Sparkles,
} from "lucide-react";

const features = [
    {
        title: "AI Itineraries",
        description:
            "Generate personalized travel plans in seconds.",
        icon: Sparkles,
    },
    {
        title: "Interactive Maps",
        description:
            "Explore attractions with integrated maps.",
        icon: Map,
    },
    {
        title: "Hotel Suggestions",
        description:
            "Find hotels that match your budget.",
        icon: Hotel,
    },
    {
        title: "Restaurant Picks",
        description:
            "Discover the best local food experiences.",
        icon: Utensils,
    },
];

export function Features() {
    return (
        <section
            id="features"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Features
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                    Everything You Need to Plan the Perfect Trip
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    AI Planner combines intelligent recommendations,
                    itinerary generation, maps, hotels, and restaurants
                    into one seamless experience.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="group rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <Icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-xl font-semibold">
                                {feature.title}
                            </h3>

                            <p className="mt-4 text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}