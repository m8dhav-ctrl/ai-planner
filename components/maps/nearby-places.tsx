import {
    Building2,
    Coffee,
    MapPinned,
    UtensilsCrossed,
} from "lucide-react";

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
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-bold">
                Nearby Places
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
                {places.map((place) => (
                    <div
                        key={place.id}
                        className="flex items-start gap-4 rounded-2xl border p-5 transition hover:shadow-md"
                    >
                        <div className="mt-1">
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
                ))}
            </div>
        </div>
    );
}