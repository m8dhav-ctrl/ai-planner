import {
    MapPinned,
    Sparkles,
    PlaneTakeoff,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Tell Us About Your Trip",
        description:
            "Choose your destination, travel dates, budget, number of travelers and interests.",
        icon: MapPinned,
    },
    {
        number: "02",
        title: "AI Builds Your Itinerary",
        description:
            "Gemini AI creates a complete travel plan with hotels, restaurants, attractions and daily activities.",
        icon: Sparkles,
    },
    {
        number: "03",
        title: "Save & Explore",
        description:
            "Save your itinerary, revisit it anytime and start your adventure with confidence.",
        icon: PlaneTakeoff,
    },
];

export function HowItWorks() {
    return (
        <section className="bg-muted/30 py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="text-center">

                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        How It Works
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        Plan Your Trip in Three Simple Steps
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        AI Planner makes travel planning simple, fast and personalized.
                    </p>

                </div>

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                className="group relative rounded-3xl border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >

                                {/* Step Number */}
                                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-lg">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                                    <Icon className="h-8 w-8" />
                                </div>

                                {/* Content */}
                                <h3 className="mt-8 text-2xl font-semibold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-muted-foreground">
                                    {step.description}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}