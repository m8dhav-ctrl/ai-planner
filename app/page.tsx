import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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

        <div className="mt-16 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">🌍 Smart Itineraries</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI generates personalized day-by-day travel plans.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">🍽️ Food Recommendations</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Discover restaurants and local cuisines worth trying.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">🏨 Hotel Suggestions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Find hotels that match your budget and travel style.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">🗺️ Interactive Maps</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore destinations visually with integrated maps.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}