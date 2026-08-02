"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export async function deleteTrip(formData: FormData) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const tripId = formData.get("tripId") as string;

    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId,
        },
    });

    if (!trip) {
        return;
    }

    if (trip.clerkUserId !== userId) {
        throw new Error("Unauthorized");
    }

    await prisma.trip.delete({
        where: {
            id: tripId,
        },
    });

    redirect("/dashboard");
}