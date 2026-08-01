import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const { userId } = await auth();

  return (
    <main className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-bold">
              AI Planner ✈️
            </h1>

            <p className="text-sm text-muted-foreground">
              Welcome back!
            </p>
          </div>

          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Your Trips
            </h2>

            <p className="mt-2 text-muted-foreground">
              Plan, manage and revisit all of your AI-generated journeys.
            </p>
          </div>

          <Link href="/dashboard/create-trip">
            <Button size="lg">
              + New Trip
            </Button>
          </Link>
        </div>

        {/* Empty State */}
        <div className="mt-10 rounded-2xl border bg-background p-12 text-center">
          <div className="text-6xl">
            🌍
          </div>

          <h3 className="mt-6 text-2xl font-semibold">
            No trips yet
          </h3>

          <p className="mt-3 text-muted-foreground">
            Create your first AI-powered itinerary and it will appear here.
          </p>

          <Link href="/dashboard/create-trip">
            <Button className="mt-8">
              Create Your First Trip
            </Button>
          </Link>
        </div>

        {/* Debug Information */}
        <div className="mt-10 rounded-xl border bg-background p-6">
          <h3 className="font-semibold">
            Debug Information
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Clerk User ID:
          </p>

          <code className="text-sm">
            {userId}
          </code>
        </div>
      </section>
    </main>
  );
}