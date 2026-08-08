"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { generateItinerary } from "@/lib/generate-itinerary";

export async function createTrip(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    const destination =
        formData.get("destination")?.toString().trim();

    const startDate =
        formData.get("startDate")?.toString();

    const endDate =
        formData.get("endDate")?.toString();

    const budget =
        formData.get("budget")?.toString();

    const travelers =
        Number(formData.get("travelers"));

    const preferences =
        formData.get("preferences")?.toString().trim() || null;

    if (
        !destination ||
        !startDate ||
        !endDate ||
        !budget ||
        Number.isNaN(travelers)
    ) {
        throw new Error(
            "Please complete all required fields."
        );
    }

    // Generate the AI itinerary first.
    //
    // generateItinerary already converts Gemini's JSON
    // response into a JavaScript object.
    const itinerary = await generateItinerary({
        destination,
        startDate,
        endDate,
        budget,
        travelers,
        preferences,
    });

    // Only create the database record after the AI
    // itinerary has been generated successfully.
    const trip = await prisma.trip.create({
        data: {
            clerkUserId: userId,
            destination,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            budget,
            travelers,
            preferences,
            itinerary,
        },
    });

    // Open the newly-created trip directly.
    redirect(`/dashboard/trips/${trip.id}`);
}
