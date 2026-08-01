import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardMockup } from "@/components/landing/DashboardMockup";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-40 pb-24 lg:grid-cols-2">

                {/* Left Side */}
                <div>

                    {/* Badge */}
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        ✈️ AI-Powered Travel Planning
                    </div>

                    {/* Heading */}
                    <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        Plan Smarter Trips
                        <br />

                        <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                            with AI Planner
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                        Generate personalized travel itineraries, discover the best
                        restaurants and hotels, explore maps, and plan unforgettable
                        adventures in seconds using the power of AI.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <Button
                            size="lg"
                            className="gap-2"
                        >
                            Start Planning for Free

                            <ArrowRight className="h-4 w-4" />

                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="gap-2"
                        >
                            <Play className="h-4 w-4" />

                            Watch Demo

                        </Button>

                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">

                        <div className="flex items-center gap-2">

                            <CheckCircle2 className="h-5 w-5 text-green-500" />

                            <span className="text-sm text-muted-foreground">
                                Trusted by 10,000+ Travelers
                            </span>

                        </div>

                        <div className="flex items-center gap-2">

                            <CheckCircle2 className="h-5 w-5 text-green-500" />

                            <span className="text-sm text-muted-foreground">
                                AI Itinerary in Under 30 Seconds
                            </span>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <DashboardMockup />

            </div>
        </section>
    );
}