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

    const destination = formData.get("destination")?.toString().trim();
    const startDate = formData.get("startDate")?.toString();
    const endDate = formData.get("endDate")?.toString();
    const budget = formData.get("budget")?.toString();
    const travelers = Number(formData.get("travelers"));
    const preferences =
        formData.get("preferences")?.toString().trim() || null;

    if (
        !destination ||
        !startDate ||
        !endDate ||
        !budget ||
        Number.isNaN(travelers)
    ) {
        throw new Error("Please complete all required fields.");
    }

    // Step 1: Save the trip
    const trip = await prisma.trip.create({
        data: {
            clerkUserId: userId,
            destination,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            budget,
            travelers,
            preferences,
        },
    });

    // Step 2: Generate itinerary with Gemini
    const aiResponse = await generateItinerary({
        destination,
        startDate,
        endDate,
        budget,
        travelers,
        preferences,
    });

    // Step 3: Parse the returned JSON
    let itinerary;

    try {
        itinerary = JSON.parse(aiResponse);
    } catch (error) {
        console.error("Gemini returned invalid JSON:");
        console.error(aiResponse);

        throw new Error("Gemini returned an invalid itinerary.");
    }

    // Step 4: Save itinerary
    await prisma.trip.update({
        where: {
            id: trip.id,
        },
        data: {
            itinerary,
        },
    });

    redirect("/dashboard");
}