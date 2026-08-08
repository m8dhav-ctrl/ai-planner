import { ai } from "@/lib/gemini";
import { buildTripPrompt } from "@/lib/prompts";

type GenerateTripInput = {
    destination: string;
    startDate: string;
    endDate: string;
    budget: string;
    travelers: number;
    preferences: string | null;
};

export type Itinerary = {
    tripSummary: {
        destination: string;
        budget: string;
        travelers: number;
        totalDays: number;
    };
    days: {
        day: number;
        title: string;
        activities: {
            time: string;
            activity: string;
            description: string;
        }[];
    }[];
};

const MODELS = [
    "models/gemini-3.6-flash",
    "models/gemini-3.5-flash",
    "models/gemini-flash-latest",
];

function parseGeminiResponse(text: string): Itinerary {
    let cleaned = text.trim();

    // Remove Markdown code fences.
    cleaned = cleaned
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim();

    // If Gemini added explanatory text around the JSON,
    // isolate the JSON object.
    const firstBrace = cleaned.indexOf("{");
    const lastBrace = cleaned.lastIndexOf("}");

    if (firstBrace !== -1 && lastBrace !== -1) {
        cleaned = cleaned.slice(firstBrace, lastBrace + 1);
    }

    let parsed: unknown;

    try {
        parsed = JSON.parse(cleaned);
    } catch (error) {
        console.error("Gemini returned invalid JSON.");
        console.error("Raw Gemini response:");
        console.error(text);

        throw new Error(
            "Gemini returned invalid JSON. Please try again."
        );
    }

    if (
        !parsed ||
        typeof parsed !== "object" ||
        Array.isArray(parsed)
    ) {
        throw new Error(
            "Gemini returned an invalid itinerary structure."
        );
    }

    const itinerary = parsed as Partial<Itinerary>;

    if (
        !itinerary.tripSummary ||
        typeof itinerary.tripSummary !== "object"
    ) {
        console.error("Missing tripSummary:", parsed);

        throw new Error(
            "Gemini returned an itinerary without a trip summary."
        );
    }

    if (!Array.isArray(itinerary.days)) {
        console.error("Missing days array:", parsed);

        throw new Error(
            "Gemini returned an itinerary without daily plans."
        );
    }

    return itinerary as Itinerary;
}

export async function generateItinerary(
    input: GenerateTripInput
): Promise<Itinerary> {
    const prompt = buildTripPrompt(input);

    let lastError: unknown;

    for (const model of MODELS) {
        try {
            console.log(`Trying Gemini model: ${model}`);

            const response = await ai.models.generateContent({
                model,
                contents: prompt,
            });

            const text = response.text ?? "";

            if (!text.trim()) {
                throw new Error(
                    "Gemini returned an empty response."
                );
            }

            const itinerary = parseGeminiResponse(text);

            console.log(
                `Successfully generated itinerary using ${model}`
            );

            return itinerary;
        } catch (error) {
            console.error(
                `Failed using Gemini model: ${model}`
            );

            console.error(error);

            lastError = error;
        }
    }

    console.error(
        "All Gemini models failed.",
        lastError
    );

    throw new Error(
        "Unable to generate your itinerary right now. Please try again."
    );
}