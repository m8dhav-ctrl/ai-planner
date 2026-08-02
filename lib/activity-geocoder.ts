import { geocodeLocation } from "./geocoding";
import { ItineraryActivity } from "./itinerary-locations";

export type ActivityLocation = ItineraryActivity & {
    latitude: number;
    longitude: number;
};

export async function geocodeActivities(
    activities: ItineraryActivity[],
    destination: string
): Promise<ActivityLocation[]> {
    const locations: ActivityLocation[] = [];

    for (const activity of activities) {
        const searchQuery = `${activity.activity}, ${destination}`;

        const coordinates = await geocodeLocation(searchQuery);

        if (!coordinates) {
            continue;
        }

        locations.push({
            ...activity,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
        });
    }

    return locations;
}