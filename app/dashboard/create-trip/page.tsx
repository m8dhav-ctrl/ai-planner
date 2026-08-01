import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CreateTripPage() {
    return (
        <main className="min-h-screen bg-muted/30">
            <section className="mx-auto max-w-3xl px-6 py-12">
                <Link href="/dashboard">
                    <Button variant="outline">
                        ← Back to Dashboard
                    </Button>
                </Link>

                <div className="mt-8 rounded-2xl border bg-background p-8 shadow-sm">
                    <h1 className="text-3xl font-bold">
                        Create a New Trip ✈️
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        Tell us about your trip and AI Planner will build a personalized itinerary.
                    </p>

                    <form className="mt-8 space-y-6">
                        {/* Destination */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Destination
                            </label>

                            <input
                                type="text"
                                placeholder="e.g. Japan"
                                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-primary"
                            />
                        </div>

                        {/* Dates */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Start Date
                                </label>

                                <input
                                    type="date"
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    End Date
                                </label>

                                <input
                                    type="date"
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>
                        </div>

                        {/* Budget */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Budget
                            </label>

                            <select className="w-full rounded-lg border px-4 py-3">
                                <option>Budget</option>
                                <option>Mid-range</option>
                                <option>Luxury</option>
                            </select>
                        </div>

                        {/* Travelers */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Number of Travelers
                            </label>

                            <input
                                type="number"
                                min={1}
                                defaultValue={2}
                                className="w-full rounded-lg border px-4 py-3"
                            />
                        </div>

                        {/* Preferences */}
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Travel Preferences
                            </label>

                            <textarea
                                rows={4}
                                placeholder="Adventure, Food, Nature, Beaches..."
                                className="w-full rounded-lg border px-4 py-3"
                            />
                        </div>

                        <Button className="w-full" size="lg">
                            Create Trip
                        </Button>
                    </form>
                </div>
            </section>
        </main>
    );
}