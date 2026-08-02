"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";
import { generateItinerary } from "@/lib/generate-itinerary";

export async function regenerateItinerary(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const tripId = formData.get("tripId") as string;

    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId,
        },
    });

    if (!trip) {
        throw new Error("Trip not found");
    }

    if (trip.clerkUserId !== userId) {
        throw new Error("Unauthorized");
    }

    const itinerary = await generateItinerary({
        destination: trip.destination,
        startDate: trip.startDate.toISOString(),
        endDate: trip.endDate.toISOString(),
        budget: trip.budget,
        travelers: trip.travelers,
        preferences: trip.preferences ?? "",
    });

    await prisma.trip.update({
        where: {
            id: trip.id,
        },
        data: {
            itinerary,
        },
    });

    revalidatePath(`/dashboard/trips/${trip.id}`);
    revalidatePath("/dashboard");
}