export type PexelsPhoto = {
    id: number;
    src: {
        large: string;
        medium: string;
        landscape: string;
    };
    alt: string;
};

export async function getDestinationImages(
    destination: string
): Promise<PexelsPhoto[]> {
    try {
        const response = await fetch(
            `https://api.pexels.com/v1/search?query=${encodeURIComponent(
                destination
            )}&per_page=4`,
            {
                headers: {
                    Authorization: process.env.PEXELS_API_KEY!,
                },
                next: {
                    revalidate: 86400, // Cache for 24 hours
                },
            }
        );

        if (!response.ok) {
            return [];
        }

        const data = await response.json();

        return data.photos ?? [];
    } catch {
        return [];
    }
}