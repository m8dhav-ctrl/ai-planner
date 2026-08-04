export type WeatherData = {
    temperature: number;
    windSpeed: number;
    weatherCode: number;
};

const weatherDescriptions: Record<number, string> = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime Fog",
    51: "Light Drizzle",
    53: "Moderate Drizzle",
    55: "Dense Drizzle",
    61: "Light Rain",
    63: "Moderate Rain",
    65: "Heavy Rain",
    71: "Light Snow",
    73: "Moderate Snow",
    75: "Heavy Snow",
    80: "Rain Showers",
    81: "Moderate Rain Showers",
    82: "Violent Rain Showers",
    95: "Thunderstorm",
};

export function getWeatherDescription(code: number) {
    return weatherDescriptions[code] ?? "Unknown";
}

export async function getWeather(
    latitude: number,
    longitude: number
): Promise<WeatherData | null> {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m`,
            {
                next: {
                    revalidate: 1800,
                },
            }
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();

        return {
            temperature: data.current.temperature_2m,
            weatherCode: data.current.weather_code,
            windSpeed: data.current.wind_speed_10m,
        };
    } catch {
        return null;
    }
}