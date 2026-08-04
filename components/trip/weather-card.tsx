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
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold">
                🌤 Current Weather
            </h2>

            <div className="grid gap-6 md:grid-cols-3">

                <div className="flex items-center gap-4">
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

                <div className="flex items-center gap-4">
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

                <div className="flex items-center gap-4">
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
        </div>
    );
}