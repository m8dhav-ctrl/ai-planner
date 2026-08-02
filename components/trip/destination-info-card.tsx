import {
    CalendarDays,
    Coins,
    Globe,
    Plug,
    ShieldAlert,
    Languages,
} from "lucide-react";

import { DestinationInfo } from "@/lib/destination-info";

type DestinationInfoCardProps = {
    info: DestinationInfo;
};

export default function DestinationInfoCard({
    info,
}: DestinationInfoCardProps) {
    return (
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold">
                🌍 Destination Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex items-start gap-3">
                    <Languages className="mt-1 h-5 w-5 text-blue-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Language
                        </p>
                        <p className="font-semibold">
                            {info.language}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Coins className="mt-1 h-5 w-5 text-green-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Currency
                        </p>
                        <p className="font-semibold">
                            {info.currency}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Globe className="mt-1 h-5 w-5 text-purple-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Time Zone
                        </p>
                        <p className="font-semibold">
                            {info.timeZone}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Plug className="mt-1 h-5 w-5 text-orange-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Power Plug
                        </p>
                        <p className="font-semibold">
                            {info.powerPlug}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <ShieldAlert className="mt-1 h-5 w-5 text-red-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Emergency
                        </p>
                        <p className="font-semibold">
                            {info.emergency}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <CalendarDays className="mt-1 h-5 w-5 text-pink-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Best Season
                        </p>
                        <p className="font-semibold">
                            {info.bestSeason}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}