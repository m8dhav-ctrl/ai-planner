import {
    ExternalLink,
    Globe,
    Map,
    Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    destination: string;
};

export default function TravelQuickActions({
    destination,
}: Props) {
    const encoded = encodeURIComponent(destination);

    return (
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">

            <h2 className="mb-6 text-3xl font-bold">
                ⚡ Travel Quick Actions
            </h2>

            <div className="flex flex-wrap gap-4">

                <Button asChild>

                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Map className="mr-2 h-4 w-4" />
                        Google Maps
                    </a>

                </Button>

                <Button
                    variant="outline"
                    asChild
                >

                    <a
                        href={`https://www.openstreetmap.org/search?query=${encoded}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Globe className="mr-2 h-4 w-4" />
                        OpenStreetMap
                    </a>

                </Button>

                <Button
                    variant="outline"
                    asChild
                >

                    <a
                        href={`https://www.google.com/search?q=${encoded}+travel`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Search className="mr-2 h-4 w-4" />
                        Google Search
                    </a>

                </Button>

                <Button
                    variant="outline"
                    asChild
                >

                    <a
                        href={`https://en.wikipedia.org/wiki/${encoded}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Wikipedia
                    </a>

                </Button>

            </div>

        </div>
    );
}