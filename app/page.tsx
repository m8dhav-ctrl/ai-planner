import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const { userId } = await auth();

  // If a signed-in user visits the home page,
  // send them to their dashboard.
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">

        <h1 className="text-6xl font-extrabold tracking-tight">
          AI Travel Planner ✈️
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Plan amazing trips in seconds with the power of AI.
          Generate personalized itineraries, organize your travels,
          and explore the world effortlessly.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/sign-up">
            <Button size="lg">
              Get Started
            </Button>
          </Link>

          <Link href="/sign-in">
            <Button variant="outline" size="lg">
              Sign In
            </Button>
          </Link>
        </div>

      </section>
    </main>
  );
}