import {
    Building2,
    Coffee,
    MapPinned,
    UtensilsCrossed,
} from "lucide-react";

import FeatureCard from "@/components/ui/feature-card";
import SectionHeader from "@/components/ui/section-header";

import { NearbyPlace } from "@/lib/overpass";

type NearbyPlacesProps = {
    places: NearbyPlace[];
};

const categoryIcons = {
    restaurant: <UtensilsCrossed className="h-5 w-5 text-orange-500" />,
    cafe: <Coffee className="h-5 w-5 text-amber-600" />,
    hotel: <Building2 className="h-5 w-5 text-blue-600" />,
    attraction: <MapPinned className="h-5 w-5 text-green-600" />,
};

export default function NearbyPlaces({
    places,
}: NearbyPlacesProps) {
    if (places.length === 0) {
        return null;
    }

    return (
        <FeatureCard>
            <SectionHeader
                icon={<MapPinned className="h-6 w-6" />}
                title="Nearby Places"
                description="Explore restaurants, cafés, hotels and attractions nearby"
            />

            <div className="grid gap-4 md:grid-cols-2">
                {places.map((place) => (
                    <div
                        key={place.id}
                        className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                        <div className="flex items-center gap-4">
                            <div>
                                {categoryIcons[
                                    place.category as keyof typeof categoryIcons
                                ] ?? (
                                        <MapPinned className="h-5 w-5 text-gray-500" />
                                    )}
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    {place.name}
                                </h3>

                                <p className="mt-1 text-sm capitalize text-muted-foreground">
                                    {place.category}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </FeatureCard>
    );
}