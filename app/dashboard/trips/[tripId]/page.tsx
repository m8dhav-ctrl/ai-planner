import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import DestinationInfoCard from "@/components/trip/destination-info-card";
import { getDestinationInfo } from "@/lib/destination-info";
import DestinationGallery from "@/components/trip/destination-gallery";
import { getDestinationImages } from "@/lib/pexels";
import ActivityMapLink from "@/components/trip/activity-map-link";
import WeatherCard from "@/components/trip/weather-card";
import { getWeather } from "@/lib/weather";
import HotelSearchCard from "@/components/trip/hotel-search-card";
import BudgetCard from "@/components/trip/budget-card";
import { calculateBudget } from "@/lib/budget";
import PackingChecklist from "@/components/trip/packing-checklist";
import { generatePackingList } from "@/lib/packing";
import ExportPdfButton from "@/components/trip/export-pdf-button";
import PrintButton from "@/components/trip/print-button";
import TripActions from "@/components/trip/trip-actions";
import ShareTripButton from "@/components/trip/share-trip-button";

import {
    ArrowLeft,
    Calendar,
    Clock,
    MapPin,
    RefreshCw,
    Sparkles,
    Users,
    Wallet,
} from "lucide-react";

import NearbyPlaces from "@/components/maps/nearby-places";
import { getNearbyPlaces } from "@/lib/overpass";

import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { regenerateItinerary } from "@/app/actions/generate-itinerary";
import TripMapCard from "@/components/maps/trip-map-card";
import { geocodeLocation } from "@/lib/geocoding";
import TravelQuickActions from "@/components/trip/travel-quick-actions";

type Props = {
    params: Promise<{
        tripId: string;
    }>;
};

type Itinerary = {
    tripSummary?: {
        destination: string;
        budget: string;
        travelers: number;
        totalDays: number;
    };
    days?: {
        day: number;
        title: string;
        activities: {
            time: string;
            activity: string;
            description: string;
        }[];
    }[];
};

export default async function TripDetailsPage({
    params,
}: Props) {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    const { tripId } = await params;

    const trip = await prisma.trip.findUnique({
        where: {
            id: tripId,
        },
    });

    if (!trip) {
        notFound();
    }

    if (trip.clerkUserId !== userId) {
        redirect("/dashboard");
    }

    let itinerary: Itinerary | null = null;

    if (trip.itinerary) {
        itinerary =
            typeof trip.itinerary === "string"
                ? JSON.parse(trip.itinerary)
                : (trip.itinerary as Itinerary);
    }
    const coordinates = await geocodeLocation(trip.destination);
    const weather =
        coordinates
            ? await getWeather(
                coordinates.latitude,
                coordinates.longitude
            )
            : null;
    const destinationInfo = getDestinationInfo(trip.destination);
    const destinationImages =
        await getDestinationImages(trip.destination);
    const nearbyPlaces = coordinates
        ? await getNearbyPlaces(
            coordinates.latitude,
            coordinates.longitude
        )
        : [];
    const budgetBreakdown = calculateBudget(
        trip.budget,
        itinerary?.tripSummary?.totalDays ??
        Math.ceil(
            (trip.endDate.getTime() - trip.startDate.getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1,
        trip.travelers
    );
    const packingList = generatePackingList(
        trip.destination,
        itinerary?.tripSummary?.totalDays ??
        Math.ceil(
            (trip.endDate.getTime() - trip.startDate.getTime()) /
            (1000 * 60 * 60 * 24)
        ) + 1,
        weather?.temperature ?? null
    );

    return (
        <main className="min-h-screen bg-muted/30">
            <section className="mx-auto max-w-6xl px-6 py-10">

                {/* Header */}

                <div className="flex flex-wrap items-center gap-3">

                    {itinerary && (
                        <>
                            <ExportPdfButton
                                tripSummary={{
                                    destination:
                                        itinerary.tripSummary?.destination ??
                                        trip.destination,
                                    budget:
                                        itinerary.tripSummary?.budget ??
                                        trip.budget,
                                    travelers:
                                        itinerary.tripSummary?.travelers ??
                                        trip.travelers,
                                    totalDays:
                                        itinerary.tripSummary?.totalDays ??
                                        Math.ceil(
                                            (trip.endDate.getTime() -
                                                trip.startDate.getTime()) /
                                            (1000 * 60 * 60 * 24)
                                        ) + 1,
                                }}
                                budget={budgetBreakdown}
                                packingList={packingList}
                                itinerary={itinerary.days ?? []}
                            />

                            <PrintButton />

                            <ShareTripButton
                                destination={trip.destination}
                            />
                        </>
                    )}

                    <form action={regenerateItinerary}>
                        <input
                            type="hidden"
                            name="tripId"
                            value={trip.id}
                        />

                        <Button type="submit">
                            <RefreshCw className="mr-2 h-4 w-4" />

                            {itinerary
                                ? "Regenerate AI Itinerary"
                                : "Generate AI Itinerary"}
                        </Button>
                    </form>

                </div>

                {/* Trip Card */}

                <div className="mt-8 overflow-hidden rounded-3xl border bg-gradient-to-br from-sky-50 via-white to-blue-50 p-10 shadow-lg dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">

                                <MapPin className="h-7 w-7 text-blue-600" />

                            </div>

                            <div>

                                <h1 className="text-5xl font-extrabold tracking-tight">
                                    {trip.destination}
                                </h1>

                                <p className="mt-2 text-lg text-muted-foreground">
                                    Plan your perfect AI-powered journey ✨
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                        <div className="flex items-center gap-3">

                            <Calendar className="h-5 w-5 text-blue-600" />

                            <div>

                                <p className="text-xs uppercase text-muted-foreground">
                                    Start
                                </p>

                                <p className="font-semibold">
                                    {trip.startDate.toLocaleDateString()}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <Calendar className="h-5 w-5 text-green-600" />

                            <div>

                                <p className="text-xs uppercase text-muted-foreground">
                                    End
                                </p>

                                <p className="font-semibold">
                                    {trip.endDate.toLocaleDateString()}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <Wallet className="h-5 w-5 text-yellow-600" />

                            <div>

                                <p className="text-xs uppercase text-muted-foreground">
                                    Budget
                                </p>

                                <p className="font-semibold">
                                    {trip.budget}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <Users className="h-5 w-5 text-purple-600" />

                            <div>

                                <p className="text-xs uppercase text-muted-foreground">
                                    Travelers
                                </p>

                                <p className="font-semibold">
                                    {trip.travelers}
                                </p>

                            </div>

                        </div>

                    </div>

                    {trip.preferences && (

                        <div className="mt-8">

                            <h2 className="font-semibold">
                                Preferences
                            </h2>

                            <p className="mt-3 whitespace-pre-line text-muted-foreground">
                                {trip.preferences}
                            </p>

                        </div>

                    )}

                </div>

                {!itinerary ? (

                    <div className="mt-10 rounded-3xl border bg-background p-12 text-center shadow-sm">

                        <Sparkles className="mx-auto h-12 w-12 text-blue-600" />

                        <h2 className="mt-6 text-2xl font-bold">
                            No AI Itinerary Yet
                        </h2>

                        <p className="mt-3 text-muted-foreground">
                            Generate an itinerary to see your personalized day-by-day travel plan.
                        </p>

                    </div>

                ) : (

                    <>
                        <DestinationGallery
                            destination={trip.destination}
                            images={destinationImages}
                        />
                        {/* Summary */}

                        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">

                            <div className="flex items-center gap-3">

                                <Sparkles className="h-6 w-6 text-blue-600" />

                                <h2 className="text-3xl font-bold">
                                    Trip Summary
                                </h2>

                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">

                                <div>
                                    <strong>Destination:</strong>{" "}
                                    {itinerary.tripSummary?.destination}
                                </div>

                                <div>
                                    <strong>Total Days:</strong>{" "}
                                    {itinerary.tripSummary?.totalDays}
                                </div>

                                <div>
                                    <strong>Budget:</strong>{" "}
                                    {itinerary.tripSummary?.budget}
                                </div>

                                <div>
                                    <strong>Travelers:</strong>{" "}
                                    {itinerary.tripSummary?.travelers}
                                </div>

                            </div>

                        </div>

                        {coordinates && (
                            <TripMapCard
                                destination={trip.destination}
                                latitude={coordinates.latitude}
                                longitude={coordinates.longitude}
                            />
                        )}
                        {destinationInfo && (
                            <DestinationInfoCard
                                info={destinationInfo}
                            />
                        )}
                        {weather && (
                            <WeatherCard
                                weather={weather}
                            />
                        )}
                        <TravelQuickActions
                            destination={trip.destination}
                        />
                        <HotelSearchCard
                            destination={trip.destination}
                        />
                        <BudgetCard
                            budget={budgetBreakdown}
                        />

                        <PackingChecklist
                            items={packingList}
                        />

                        <NearbyPlaces places={nearbyPlaces} />

                        {/* Days */}

                        <div className="mt-10 space-y-8">

                            {itinerary.days?.map((day) => (

                                <div
                                    key={day.day}
                                    className="rounded-3xl border bg-background p-8 shadow-sm"
                                >

                                    <h2 className="text-3xl font-bold">
                                        Day {day.day}
                                    </h2>

                                    <p className="mt-2 text-xl font-semibold text-blue-600">
                                        {day.title}
                                    </p>

                                    <div className="mt-8 space-y-5">

                                        {day.activities.map((activity, index) => (

                                            <div
                                                key={index}
                                                className="rounded-2xl border p-6 transition hover:shadow-md"
                                            >

                                                <div className="flex items-center gap-2">

                                                    <Clock className="h-4 w-4 text-blue-600" />

                                                    <span className="font-semibold">
                                                        {activity.time}
                                                    </span>

                                                </div>

                                                <h3 className="mt-4 text-lg font-semibold">
                                                    {activity.activity}
                                                </h3>

                                                <p className="mt-3 text-muted-foreground">
                                                    {activity.description}
                                                </p>
                                                <ActivityMapLink
                                                    activity={activity.activity}
                                                    destination={trip.destination}
                                                />

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            ))}

                        </div>

                    </>

                )}

            </section>
        </main>
    );
}