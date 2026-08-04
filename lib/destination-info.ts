export type DestinationInfo = {
    language: string;
    currency: string;
    currencyCode: string;
    timeZone: string;
    utcOffset: string;
    powerPlug: string;
    emergency: string;
    bestSeason: string;
};

const destinationData: Record<string, DestinationInfo> = {
    japan: {
        language: "Japanese",
        currency: "Japanese Yen",
        currencyCode: "JPY",
        timeZone: "Japan Standard Time",
        utcOffset: "UTC +9",
        powerPlug: "Type A / Type B",
        emergency: "110 (Police) • 119 (Fire & Ambulance)",
        bestSeason: "March–May • October–November",
    },

    france: {
        language: "French",
        currency: "Euro",
        currencyCode: "EUR",
        timeZone: "Central European Time",
        utcOffset: "UTC +1",
        powerPlug: "Type C / Type E",
        emergency: "112",
        bestSeason: "April–June • September–October",
    },

    italy: {
        language: "Italian",
        currency: "Euro",
        currencyCode: "EUR",
        timeZone: "Central European Time",
        utcOffset: "UTC +1",
        powerPlug: "Type C / Type F / Type L",
        emergency: "112",
        bestSeason: "April–June • September",
    },

    switzerland: {
        language: "German, French, Italian",
        currency: "Swiss Franc",
        currencyCode: "CHF",
        timeZone: "Central European Time",
        utcOffset: "UTC +1",
        powerPlug: "Type J",
        emergency: "112",
        bestSeason: "June–September • December–February",
    },

    india: {
        language: "Hindi, English",
        currency: "Indian Rupee",
        currencyCode: "INR",
        timeZone: "India Standard Time",
        utcOffset: "UTC +5:30",
        powerPlug: "Type C / D / M",
        emergency: "112",
        bestSeason: "October–March",
    },

    usa: {
        language: "English",
        currency: "US Dollar",
        currencyCode: "USD",
        timeZone: "Multiple Time Zones",
        utcOffset: "UTC -5 to UTC -10",
        powerPlug: "Type A / Type B",
        emergency: "911",
        bestSeason: "Varies by region",
    },
};

export function getDestinationInfo(
    destination: string
): DestinationInfo | null {
    const key = destination.trim().toLowerCase();

    return destinationData[key] ?? null;
}