"use client";

import dynamic from "next/dynamic";
import { Map } from "lucide-react";

import FeatureCard from "@/components/ui/feature-card";
import SectionHeader from "@/components/ui/section-header";

import MapActions from "./map-actions";

const TripMap = dynamic(
    () => import("./trip-map"),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-[450px] items-center justify-center rounded-2xl border bg-muted/20">
                <div className="text-center">
                    <Map className="mx-auto mb-3 h-8 w-8 animate-pulse text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                        Loading destination map...
                    </p>
                </div>
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
        <FeatureCard>

            <SectionHeader
                icon={<Map className="h-6 w-6" />}
                title="Destination Map"
                description="Explore your destination and nearby attractions"
            />

            <TripMap
                destination={destination}
                latitude={latitude}
                longitude={longitude}
            />

            <MapActions destination={destination} />

        </FeatureCard>
    );
}