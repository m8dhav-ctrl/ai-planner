import {
    CalendarDays,
    CheckCircle2,
    Hotel,
    MapPin,
    Utensils,
    Wallet,
} from "lucide-react";

export function DashboardMockup() {
    return (
        <div className="relative mx-auto w-full max-w-lg">

            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />

            {/* Dashboard */}
            <div className="relative rounded-3xl border border-border/50 bg-background/80 p-6 shadow-2xl backdrop-blur-xl">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Destination
                        </p>

                        <h2 className="text-2xl font-bold">
                            🇯🇵 Tokyo, Japan
                        </h2>
                    </div>

                    <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                        AI Ready
                    </div>

                </div>

                {/* Trip Details */}
                <div className="mt-8 grid grid-cols-2 gap-4">

                    <div className="rounded-xl bg-muted p-4">
                        <CalendarDays className="mb-2 h-5 w-5 text-primary" />

                        <p className="text-sm text-muted-foreground">
                            Duration
                        </p>

                        <h3 className="font-semibold">
                            7 Days
                        </h3>
                    </div>

                    <div className="rounded-xl bg-muted p-4">
                        <Wallet className="mb-2 h-5 w-5 text-primary" />

                        <p className="text-sm text-muted-foreground">
                            Budget
                        </p>

                        <h3 className="font-semibold">
                            ₹75,000
                        </h3>
                    </div>

                    <div className="rounded-xl bg-muted p-4">
                        <Hotel className="mb-2 h-5 w-5 text-primary" />

                        <p className="text-sm text-muted-foreground">
                            Hotel
                        </p>

                        <h3 className="font-semibold">
                            Sakura Hotel
                        </h3>
                    </div>

                    <div className="rounded-xl bg-muted p-4">
                        <Utensils className="mb-2 h-5 w-5 text-primary" />

                        <p className="text-sm text-muted-foreground">
                            Restaurants
                        </p>

                        <h3 className="font-semibold">
                            15 Nearby
                        </h3>
                    </div>

                </div>

                {/* Divider */}

                <div className="my-8 border-t" />

                {/* Day Plan */}

                <div>

                    <div className="flex items-center justify-between">

                        <h3 className="text-lg font-bold">
                            Day 1
                        </h3>

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            AI Generated
                        </span>

                    </div>

                    <div className="mt-6 space-y-4">

                        <div className="flex items-center gap-3 rounded-xl border p-4">

                            <CheckCircle2 className="h-5 w-5 text-green-500" />

                            <div>

                                <h4 className="font-medium">
                                    Visit Tokyo Tower
                                </h4>

                                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

                                    <MapPin className="h-4 w-4" />

                                    Minato City

                                </div>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-xl border p-4">

                            <CheckCircle2 className="h-5 w-5 text-green-500" />

                            <div>

                                <h4 className="font-medium">
                                    Explore Shibuya Crossing
                                </h4>

                                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

                                    <MapPin className="h-4 w-4" />

                                    Shibuya

                                </div>

                            </div>

                        </div>

                        <div className="flex items-center gap-3 rounded-xl border p-4">

                            <CheckCircle2 className="h-5 w-5 text-green-500" />

                            <div>

                                <h4 className="font-medium">
                                    Authentic Sushi Dinner
                                </h4>

                                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">

                                    <MapPin className="h-4 w-4" />

                                    Ginza

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}