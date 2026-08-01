import { Button } from "@/components/ui/button";

export function CallToAction() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-4xl rounded-2xl bg-primary p-12 text-center text-primary-foreground">
                <h2 className="text-4xl font-bold">
                    Ready to Plan Your Next Adventure?
                </h2>

                <p className="mt-4">
                    Let AI build your perfect itinerary in seconds.
                </p>

                <Button
                    variant="secondary"
                    size="lg"
                    className="mt-8"
                >
                    Get Started
                </Button>
            </div>
        </section>
    );
}