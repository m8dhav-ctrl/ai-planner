import {
    Building2,
    Hotel,
    BedDouble,
    ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    destination: string;
};

export default function HotelSearchCard({
    destination,
}: Props) {
    const encoded = encodeURIComponent(destination);

    return (
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">

            <h2 className="mb-6 text-3xl font-bold">
                🏨 Hotel Booking
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

                <a
                    href={`https://www.booking.com/searchresults.html?ss=${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="w-full justify-start">
                        <Hotel className="mr-2 h-4 w-4" />
                        Booking.com
                    </Button>
                </a>

                <a
                    href={`https://www.agoda.com/search?city=${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="w-full justify-start">
                        <BedDouble className="mr-2 h-4 w-4" />
                        Agoda
                    </Button>
                </a>

                <a
                    href={`https://www.google.com/travel/hotels/${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        variant="outline"
                        className="w-full justify-start"
                    >
                        <Building2 className="mr-2 h-4 w-4" />
                        Google Hotels
                    </Button>
                </a>

                <a
                    href={`https://www.hotels.com/Hotel-Search?destination=${encoded}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        variant="outline"
                        className="w-full justify-start"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Hotels.com
                    </Button>
                </a>

            </div>

        </div>
    );
}