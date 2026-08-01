import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
            <span className="rounded-full border border-border bg-muted px-4 py-1 text-sm font-medium text-muted-foreground">
                ✈️ AI-Powered Travel Planner
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Plan Your Dream Trip with{" "}
                <span className="text-primary">AI Planner</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                Create personalized travel itineraries in seconds. Simply enter your
                destination, budget, travel preferences, and let AI generate your
                complete trip—including attractions, restaurants, hotels, maps, and
                day-by-day plans.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg">Get Started</Button>

                <Button variant="outline" size="lg">
                    Learn More
                </Button>
            </div>
        </section>
    );
}