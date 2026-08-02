import { ExternalLink, Map } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    destination: string;
};

export default function MapActions({
    destination,
}: Props) {
    const encoded = encodeURIComponent(destination);

    const googleMaps =
        `https://www.google.com/maps/search/?api=1&query=${encoded}`;

    const openStreetMap =
        `https://www.openstreetmap.org/search?query=${encoded}`;

    return (
        <div className="mt-6 flex flex-wrap gap-4">

            <Button asChild>

                <a
                    href={googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Map className="mr-2 h-4 w-4" />
                    Open in Google Maps
                </a>

            </Button>

            <Button
                variant="outline"
                asChild
            >

                <a
                    href={openStreetMap}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    OpenStreetMap
                </a>

            </Button>

        </div>
    );
}