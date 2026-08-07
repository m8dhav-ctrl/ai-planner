import FeatureCard from "@/components/ui/feature-card";
import SectionHeader from "@/components/ui/section-header";

import {
    Cloud,
    Thermometer,
    Wind,
} from "lucide-react";

import {
    WeatherData,
    getWeatherDescription,
} from "@/lib/weather";

type Props = {
    weather: WeatherData;
};

export default function WeatherCard({
    weather,
}: Props) {
    return (
        <FeatureCard>
            <SectionHeader
                icon={<Cloud className="h-6 w-6" />}
                title="Current Weather"
                description="Live weather conditions for your destination"
            />

            <div className="grid gap-6 md:grid-cols-3">

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Thermometer className="h-8 w-8 text-red-500" />

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Temperature
                        </p>

                        <p className="text-2xl font-bold">
                            {weather.temperature}°C
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Cloud className="h-8 w-8 text-blue-500" />

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Condition
                        </p>

                        <p className="text-lg font-semibold">
                            {getWeatherDescription(
                                weather.weatherCode
                            )}
                        </p>
                    </div>
                </div>

                <div className="rounded-2xl border bg-muted/20 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Wind className="h-8 w-8 text-cyan-500" />

                    <div>
                        <p className="text-sm text-muted-foreground">
                            Wind Speed
                        </p>

                        <p className="text-lg font-semibold">
                            {weather.windSpeed} km/h
                        </p>
                    </div>
                </div>

            </div>
        </FeatureCard>
    );
}