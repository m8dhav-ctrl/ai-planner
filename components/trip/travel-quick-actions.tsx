import FeatureCard from "@/components/ui/feature-card";
import SectionHeader from "@/components/ui/section-header";

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
        <FeatureCard>

            <SectionHeader
                icon={<ExternalLink className="h-6 w-6" />}
                title="Travel Quick Actions"
                description="Quick links to explore your destination"
            />

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

                <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>
                        <Map className="mr-2 h-4 w-4" />
                        Google Maps
                    </Button>
                </a>

                <a
                    href={`https://www.openstreetmap.org/search?query=${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">
                        <Globe className="mr-2 h-4 w-4" />
                        OpenStreetMap
                    </Button>
                </a>

                <a
                    href={`https://www.google.com/search?q=${encoded}+travel`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">
                        <Search className="mr-2 h-4 w-4" />
                        Google Search
                    </Button>
                </a>

                <a
                    href={`https://en.wikipedia.org/wiki/${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Wikipedia
                    </Button>
                </a>

            </div>

        </FeatureCard>
    );
}