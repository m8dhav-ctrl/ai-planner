import FeatureCard from "@/components/ui/feature-card";
import SectionHeader from "@/components/ui/section-header";

import {
    CalendarDays,
    Coins,
    Globe,
    Languages,
    Plug,
    ShieldAlert,
    Clock3,
    BadgeDollarSign,
} from "lucide-react";

import { DestinationInfo } from "@/lib/destination-info";

type DestinationInfoCardProps = {
    info: DestinationInfo;
};

export default function DestinationInfoCard({
    info,
}: DestinationInfoCardProps) {
    return (
        <FeatureCard>

            <SectionHeader
                icon={<Globe className="h-6 w-6" />}
                title="Destination Information"
                description="Essential travel information before your trip"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <BadgeDollarSign className="mt-1 h-5 w-5 text-emerald-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            Currency Code
                        </p>
                        <p className="font-semibold">
                            {info.currencyCode}
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Clock3 className="mt-1 h-5 w-5 text-indigo-600" />
                    <div>
                        <p className="text-sm text-muted-foreground">
                            UTC Offset
                        </p>
                        <p className="font-semibold">
                            {info.utcOffset}
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
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

        </FeatureCard>
    );
}