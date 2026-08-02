import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createTrip } from "@/app/actions/trip";

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

                    <form action={createTrip} className="mt-8 space-y-6">
                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Destination
                            </label>

                            <input
                                name="destination"
                                type="text"
                                required
                                placeholder="e.g. Japan"
                                className="w-full rounded-lg border px-4 py-3"
                            />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Start Date
                                </label>

                                <input
                                    name="startDate"
                                    type="date"
                                    required
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    End Date
                                </label>

                                <input
                                    name="endDate"
                                    type="date"
                                    required
                                    className="w-full rounded-lg border px-4 py-3"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Budget
                            </label>

                            <select
                                name="budget"
                                required
                                className="w-full rounded-lg border px-4 py-3"
                            >
                                <option value="">Select Budget</option>
                                <option value="Budget">Budget</option>
                                <option value="Mid-range">Mid-range</option>
                                <option value="Luxury">Luxury</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Travelers
                            </label>

                            <input
                                name="travelers"
                                type="number"
                                min={1}
                                defaultValue={2}
                                required
                                className="w-full rounded-lg border px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium">
                                Preferences
                            </label>

                            <textarea
                                name="preferences"
                                rows={4}
                                className="w-full rounded-lg border px-4 py-3"
                                placeholder="Adventure, Food, Beaches..."
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            size="lg"
                        >
                            Create Trip
                        </Button>
                    </form>
                </div>
            </section>
        </main>
    );
}