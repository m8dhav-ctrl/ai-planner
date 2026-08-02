import Link from "next/link";

import {
    Calendar,
    MapPin,
    Users,
    Wallet,
    Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { deleteTrip } from "@/app/actions/delete-trip";

type TripSummary = {
    destination: string;
    budget: string;
    travelers: number;
    totalDays: number;
};

type TripCardProps = {
    trip: {
        id: string;
        destination: string;
        budget: string;
        travelers: number;
        startDate: Date;
        endDate: Date;
        itinerary: unknown;
    };
};

export default function TripCard({
    trip,
}: TripCardProps) {
    let summary: TripSummary | null = null;

    if (trip.itinerary) {
        try {
            const itinerary =
                typeof trip.itinerary === "string"
                    ? JSON.parse(trip.itinerary)
                    : trip.itinerary;

            summary =
                (itinerary as {
                    tripSummary?: TripSummary;
                }).tripSummary ?? null;
        } catch {
            summary = null;
        }
    }

    return (
        <div className="rounded-3xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Header */}

            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-blue-600" />

                        <h2 className="text-2xl font-bold">
                            {summary?.destination ?? trip.destination}
                        </h2>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />

                        <span>
                            {trip.startDate.toLocaleDateString()} →{" "}
                            {trip.endDate.toLocaleDateString()}
                        </span>
                    </div>
                </div>

                <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    <Sparkles className="h-4 w-4" />
                    AI Ready
                </span>
            </div>

            {/* Details */}

            <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Duration</span>
                    </div>

                    <strong>
                        {summary?.totalDays ?? "-"} Days
                    </strong>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Travelers</span>
                    </div>

                    <strong>{trip.travelers}</strong>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-muted-foreground" />
                        <span>Budget</span>
                    </div>

                    <strong>{trip.budget}</strong>
                </div>
            </div>

            {/* Actions */}

            <div className="mt-8 grid gap-3">
                <Link href={`/dashboard/trips/${trip.id}`}>
                    <Button className="w-full">
                        View Trip
                    </Button>
                </Link>

                <form action={deleteTrip}>
                    <input
                        type="hidden"
                        name="tripId"
                        value={trip.id}
                    />

                    <Button
                        type="submit"
                        variant="destructive"
                        className="w-full"
                    >
                        Delete Trip
                    </Button>
                </form>
            </div>
        </div>
    );
}