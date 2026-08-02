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

const MODELS = [
    "models/gemini-3.6-flash",
    "models/gemini-3.5-flash",
    "models/gemini-flash-latest",
];

export async function generateItinerary(
    input: GenerateTripInput
) {
    const prompt = buildTripPrompt(input);

    let lastError: unknown;

    for (const model of MODELS) {
        try {
            console.log(`Trying model: ${model}`);

            const response = await ai.models.generateContent({
                model,
                contents: prompt,
            });

            console.log(`Success with ${model}`);

            const text = response.text ?? "";

            // Remove markdown code fences if Gemini returns them
            const cleaned = text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim();

            // Convert the JSON string into an object
            return JSON.parse(cleaned);
        } catch (error) {
            console.error(`Failed using ${model}`);
            lastError = error;
        }
    }

    throw lastError;
}