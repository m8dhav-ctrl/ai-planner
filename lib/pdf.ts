import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type TripSummary = {
    destination: string;
    budget: string;
    travelers: number;
    totalDays: number;
};

type Day = {
    day: number;
    title: string;
    activities: {
        time: string;
        activity: string;
        description: string;
    }[];
};

type BudgetBreakdown = {
    accommodation: number;
    food: number;
    transportation: number;
    activities: number;
    total: number;
};

type ExportTripPDFProps = {
    tripSummary: TripSummary;
    budget: BudgetBreakdown;
    packingList: string[];
    itinerary: Day[];
};

export function exportTripPDF({
    tripSummary,
    budget,
    packingList,
    itinerary,
}: ExportTripPDFProps) {
    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text("AI Travel Planner", 14, 18);

    pdf.setFontSize(15);
    pdf.text(
        `Trip to ${tripSummary.destination}`,
        14,
        30
    );

    autoTable(pdf, {
        startY: 40,
        head: [["Trip Summary", "Value"]],
        body: [
            ["Destination", tripSummary.destination],
            ["Budget", tripSummary.budget],
            ["Travelers", String(tripSummary.travelers)],
            ["Total Days", String(tripSummary.totalDays)],
        ],
    });

    autoTable(pdf, {
        head: [["Budget Breakdown", "Estimated"]],
        body: [
            ["Accommodation", `₹${budget.accommodation}`],
            ["Food", `₹${budget.food}`],
            ["Transportation", `₹${budget.transportation}`],
            ["Activities", `₹${budget.activities}`],
            ["TOTAL", `₹${budget.total}`],
        ],
    });

    autoTable(pdf, {
        head: [["Packing Checklist"]],
        body: packingList.map((item) => [item]),
    });

    itinerary.forEach((day) => {
        autoTable(pdf, {
            head: [[`Day ${day.day}`, day.title]],
            body: day.activities.map((activity) => [
                activity.time,
                activity.activity,
                activity.description,
            ]),
        });
    });

    pdf.save(
        `${tripSummary.destination.replace(/\s+/g, "-")}-trip.pdf`
    );
}