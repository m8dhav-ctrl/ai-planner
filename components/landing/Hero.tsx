import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-40 pb-24 text-center">
            {/* Badge */}
            <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                ✈️ AI-Powered Travel Planning
            </div>

            {/* Heading */}
            <h1 className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Plan Smarter Trips
                <br />
                with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    AI Planner
                </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Generate personalized travel itineraries, discover hotels,
                restaurants, attractions, and build unforgettable journeys in
                seconds—all powered by AI.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                    Start Planning for Free
                    <ArrowRight className="h-4 w-4" />
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                >
                    <Play className="h-4 w-4" />
                    Watch Demo
                </Button>
            </div>
        </section>
    );
}