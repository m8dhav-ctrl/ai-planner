import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";

import StatsCards from "@/components/dashboard/stats-cards";
import TripsGrid from "@/components/dashboard/trips-grid";
import EmptyState from "@/components/dashboard/empty-state";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const trips = await prisma.trip.findMany({
    where: {
      clerkUserId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const today = new Date();

  const totalTrips = trips.length;

  const upcomingTrips = trips.filter(
    (trip) => trip.startDate >= today
  ).length;

  const aiTrips = trips.filter(
    (trip) => Boolean(trip.itinerary)
  ).length;

  const uniqueDestinations = new Set(
    trips.map((trip) => trip.destination)
  ).size;

  return (
    <main className="min-h-screen bg-muted/30">
      <section className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              AI Travel Planner ✈️
            </h1>

            <p className="mt-2 text-muted-foreground">
              Welcome back! Manage all your AI-generated trips.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <Link href="/dashboard/create-trip">
              <Button>
                + Create Trip
              </Button>
            </Link>

            <UserButton afterSignOutUrl="/" />

          </div>

        </div>

        {/* Statistics */}

        <StatsCards
          totalTrips={totalTrips}
          upcomingTrips={upcomingTrips}
          uniqueDestinations={uniqueDestinations}
          aiTrips={aiTrips}
        />

        {/* Empty State */}

        {trips.length === 0 ? (

          <EmptyState
            title="No Trips Yet"
            description="Create your first AI-powered itinerary and start planning your next adventure."
            buttonText="Create Your First Trip"
            buttonHref="/dashboard/create-trip"
          />

        ) : (

          <TripsGrid trips={trips} />

        )}

      </section>
    </main>
  );
}