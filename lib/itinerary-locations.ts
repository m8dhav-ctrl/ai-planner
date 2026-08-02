export type ItineraryActivity = {
    day: number;
    title: string;
    time: string;
    activity: string;
    description: string;
};

type Itinerary = {
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

export function extractItineraryActivities(
    itinerary: Itinerary | null
): ItineraryActivity[] {
    if (!itinerary?.days) {
        return [];
    }

    return itinerary.days.flatMap((day) =>
        day.activities.map((activity) => ({
            day: day.day,
            title: day.title,
            time: activity.time,
            activity: activity.activity,
            description: activity.description,
        }))
    );
}