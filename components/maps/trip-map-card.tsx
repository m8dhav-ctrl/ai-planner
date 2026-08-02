"use client";

import { Map } from "lucide-react";

import TripMap from "./trip-map";

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
                <Map className="h-6 w-6 text-blue-600" />

                <h2 className="text-3xl font-bold">
                    Destination Map
                </h2>
            </div>

            <TripMap
                destination={destination}
                latitude={latitude}
                longitude={longitude}
            />
        </div>
    );
}