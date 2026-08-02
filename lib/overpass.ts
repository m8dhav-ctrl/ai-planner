export type NearbyPlace = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    category: string;
};

export async function getNearbyPlaces(
    latitude: number,
    longitude: number,
    radius = 2000
): Promise<NearbyPlace[]> {
    const query = `
    [out:json];
    (
      node["tourism"="attraction"](around:${radius},${latitude},${longitude});
      node["amenity"="restaurant"](around:${radius},${latitude},${longitude});
      node["amenity"="cafe"](around:${radius},${latitude},${longitude});
      node["tourism"="hotel"](around:${radius},${latitude},${longitude});
    );
    out body;
  `;

    try {
        const response = await fetch(
            "https://overpass-api.de/api/interpreter",
            {
                method: "POST",
                body: query,
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!response.ok) {
            return [];
        }

        const data = await response.json();

        return data.elements.map((place: any) => ({
            id: place.id,
            name: place.tags?.name ?? "Unnamed Place",
            latitude: place.lat,
            longitude: place.lon,
            category:
                place.tags?.amenity ??
                place.tags?.tourism ??
                "place",
        }));
    } catch {
        return [];
    }
}