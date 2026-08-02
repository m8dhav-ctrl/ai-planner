import { Map } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    activity: string;
    destination: string;
};

export default function ActivityMapLink({
    activity,
    destination,
}: Props) {
    const query = encodeURIComponent(
        `${activity}, ${destination}`
    );

    const url =
        `https://www.google.com/maps/search/?api=1&query=${query}`;

    return (
        <Button
            asChild
            variant="outline"
            className="mt-5"
        >
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Map className="mr-2 h-4 w-4" />
                Open in Google Maps
            </a>
        </Button>
    );
}