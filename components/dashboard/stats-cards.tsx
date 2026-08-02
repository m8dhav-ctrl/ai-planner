import {
    Plane,
    CalendarDays,
    Globe2,
    Sparkles,
} from "lucide-react";

type StatsCardsProps = {
    totalTrips: number;
    upcomingTrips: number;
    uniqueDestinations: number;
    aiTrips: number;
};

export default function StatsCards({
    totalTrips,
    upcomingTrips,
    uniqueDestinations,
    aiTrips,
}: StatsCardsProps) {
    const cards = [
        {
            title: "Total Trips",
            value: totalTrips,
            icon: Plane,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            title: "Upcoming Trips",
            value: upcomingTrips,
            icon: CalendarDays,
            color: "text-green-600",
            bg: "bg-green-100",
        },
        {
            title: "Destinations",
            value: uniqueDestinations,
            icon: Globe2,
            color: "text-orange-600",
            bg: "bg-orange-100",
        },
        {
            title: "AI Itineraries",
            value: aiTrips,
            icon: Sparkles,
            color: "text-purple-600",
            bg: "bg-purple-100",
        },
    ];

    return (
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.bg}`}
                        >
                            <Icon
                                className={`h-6 w-6 ${card.color}`}
                            />
                        </div>

                        <h2 className="mt-5 text-3xl font-bold">
                            {card.value}
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            {card.title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}