"use client";

import dynamic from "next/dynamic";
import { Map } from "lucide-react";

import MapActions from "./map-actions";

const TripMap = dynamic(
    () => import("./trip-map"),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-[450px] items-center justify-center rounded-2xl bg-muted">
                Loading map...
            </div>
        ),
    }
);

type TripMapCardProps = {
    destination: string;
    latitude: number;
    longitude: number;
};

export default function TripMapCard({
    destination,
    latitude,
    longitude,
}: TripMapCardProps) {
    return (
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <Map className="h-7 w-7 text-blue-600" />

                <h2 className="text-3xl font-bold">
                    Destination Map
                </h2>
            </div>

            <TripMap
                destination={destination}
                latitude={latitude}
                longitude={longitude}
            />

            <MapActions destination={destination} />
        </div>
    );
}