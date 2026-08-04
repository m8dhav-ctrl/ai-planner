export type BudgetBreakdown = {
    accommodation: number;
    food: number;
    transportation: number;
    activities: number;
    total: number;
};

const DAILY_COST = {
    Budget: {
        accommodation: 2500,
        food: 800,
        transportation: 500,
        activities: 700,
    },

    Moderate: {
        accommodation: 5000,
        food: 1800,
        transportation: 1000,
        activities: 1500,
    },

    Luxury: {
        accommodation: 12000,
        food: 4000,
        transportation: 2500,
        activities: 3500,
    },
};

export function calculateBudget(
    budget: string,
    totalDays: number,
    travelers: number
): BudgetBreakdown {

    const costs =
        DAILY_COST[
        budget as keyof typeof DAILY_COST
        ] ?? DAILY_COST.Moderate;

    const accommodation =
        costs.accommodation * totalDays;

    const food =
        costs.food * totalDays * travelers;

    const transportation =
        costs.transportation * totalDays * travelers;

    const activities =
        costs.activities * totalDays * travelers;

    const total =
        accommodation +
        food +
        transportation +
        activities;

    return {
        accommodation,
        food,
        transportation,
        activities,
        total,
    };
}