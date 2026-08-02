export type Coordinates = {
    latitude: number;
    longitude: number;
};

export async function geocodeLocation(
    location: string
): Promise<Coordinates | null> {
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
                location
            )}`,
            {
                headers: {
                    "User-Agent": "AI-Travel-Planner",
                },
                cache: "force-cache",
            }
        );

        if (!response.ok) {
            return null;
        }

        const results = await response.json();

        if (!results.length) {
            return null;
        }

        return {
            latitude: Number(results[0].lat),
            longitude: Number(results[0].lon),
        };
    } catch {
        return null;
    }
}