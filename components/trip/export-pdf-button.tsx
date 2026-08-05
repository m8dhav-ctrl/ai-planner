"use client";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { exportTripPDF } from "@/lib/pdf";

type Props = {
    tripSummary: {
        destination: string;
        budget: string;
        travelers: number;
        totalDays: number;
    };
    budget: {
        accommodation: number;
        food: number;
        transportation: number;
        activities: number;
        total: number;
    };
    packingList: string[];
    itinerary: {
        day: number;
        title: string;
        activities: {
            time: string;
            activity: string;
            description: string;
        }[];
    }[];
};

export default function ExportPdfButton(props: Props) {
    return (
        <Button
            onClick={() => exportTripPDF(props)}
        >
            <Download className="mr-2 h-4 w-4" />
            Export PDF
        </Button>
    );
}