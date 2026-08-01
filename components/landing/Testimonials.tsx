import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Solo Traveler",
        review:
            "AI Planner saved me hours of research. The itinerary was incredibly well organized.",
    },
    {
        name: "Michael Chen",
        role: "Family Traveler",
        review:
            "Planning our family vacation became effortless. Hotels and attractions were perfect.",
    },
    {
        name: "Priya Sharma",
        role: "Food Explorer",
        review:
            "The restaurant recommendations were amazing. I discovered places I would never have found.",
    },
];

export function Testimonials() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Testimonials
                </p>

                <h2 className="mt-3 text-4xl font-bold">
                    Loved by Travelers Worldwide
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Here's what travelers say about using AI Planner.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.name}
                        className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                        <div className="mb-4 flex">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>

                        <p className="text-muted-foreground">
                            "{testimonial.review}"
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                                {testimonial.name.charAt(0)}
                            </div>

                            <div>
                                <h4 className="font-semibold">
                                    {testimonial.name}
                                </h4>

                                <p className="text-sm text-muted-foreground">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}