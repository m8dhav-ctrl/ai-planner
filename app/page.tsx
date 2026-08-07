import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import {
  Plane,
  MapPinned,
  Sparkles,
  Wallet,
  CloudSun,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  const features = [
    {
      icon: Sparkles,
      title: "AI Itineraries",
      description:
        "Generate personalized travel plans in seconds.",
    },
    {
      icon: MapPinned,
      title: "Interactive Maps",
      description:
        "Explore destinations with integrated maps and nearby places.",
    },
    {
      icon: Wallet,
      title: "Budget Planning",
      description:
        "Estimate travel costs before your trip begins.",
    },
    {
      icon: CloudSun,
      title: "Live Weather",
      description:
        "Check weather forecasts for every destination.",
    },
    {
      icon: Download,
      title: "PDF Export",
      description:
        "Download and print your itinerary anytime.",
    },
    {
      icon: Plane,
      title: "Travel Resources",
      description:
        "Quick links for hotels, maps and travel information.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">

      {/* Hero */}

      <section className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium">
          ✈️ AI Powered Travel Planning
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Plan Your Perfect Trip
          <span className="block text-primary">
            with Artificial Intelligence
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Generate intelligent travel itineraries, estimate budgets,
          explore destinations, check live weather, discover nearby
          attractions and export everything as a beautiful PDF.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link href="/sign-up">
            <Button
              size="lg"
              className="w-full px-8 py-6 text-lg sm:w-auto"
            >
              Start Planning
            </Button>
          </Link>

          <Link href="/sign-in">
            <Button
              variant="outline"
              size="lg"
              className="w-full px-8 py-6 text-lg sm:w-auto"
            >
              Sign In
            </Button>
          </Link>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-muted-foreground">
            Build complete AI-powered travel plans in one place.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border bg-background p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </section>

    </main>
  );
}