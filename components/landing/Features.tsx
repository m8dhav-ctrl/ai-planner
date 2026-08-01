import {
    Map,
    Hotel,
    Utensils,
    Sparkles,
} from "lucide-react";

const features = [
    {
        title: "AI Itineraries",
        description: "Personalized travel plans generated instantly.",
        icon: Sparkles,
    },
    {
        title: "Interactive Maps",
        description: "Explore destinations visually.",
        icon: Map,
    },
    {
        title: "Hotel Suggestions",
        description: "Stay within your budget.",
        icon: Hotel,
    },
    {
        title: "Restaurant Picks",
        description: "Discover local cuisines.",
        icon: Utensils,
    },
];

export function Features() {
    return (
        <section
            id="features"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            <h2 className="text-center text-4xl font-bold">
                Why Choose AI Planner?
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="rounded-xl border bg-card p-6 shadow-sm"
                        >
                            <Icon className="mb-4 h-10 w-10 text-primary" />

                            <h3 className="font-semibold">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}