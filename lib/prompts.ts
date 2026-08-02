export function buildTripPrompt({
    destination,
    startDate,
    endDate,
    budget,
    travelers,
    preferences,
}: {
    destination: string;
    startDate: string;
    endDate: string;
    budget: string;
    travelers: number;
    preferences: string | null;
}) {
    return `
You are an expert travel planner.

Generate a detailed travel itinerary.

Trip Details:
- Destination: ${destination}
- Start Date: ${startDate}
- End Date: ${endDate}
- Budget: ${budget}
- Travelers: ${travelers}
- Preferences: ${preferences ?? "None"}

Return ONLY valid JSON.

The JSON must follow this structure exactly:

{
  "tripSummary": {
    "destination": "",
    "budget": "",
    "travelers": 0,
    "totalDays": 0
  },
  "days": [
    {
      "day": 1,
      "title": "",
      "activities": [
        {
          "time": "",
          "activity": "",
          "description": ""
        }
      ]
    }
  ]
}

Do not include markdown.

Do not wrap the JSON in triple backticks.

Return JSON only.
`;
}