import {
    BedDouble,
    Utensils,
    Bus,
    Ticket,
    Wallet,
} from "lucide-react";

import { BudgetBreakdown } from "@/lib/budget";

type Props = {
    budget: BudgetBreakdown;
};

function formatCurrency(amount: number) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
}

export default function BudgetCard({
    budget,
}: Props) {
    return (
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">

            <h2 className="mb-8 text-3xl font-bold">
                💰 Estimated Trip Budget
            </h2>

            <div className="space-y-5">

                <BudgetRow
                    icon={<BedDouble className="h-5 w-5 text-blue-600" />}
                    label="Accommodation"
                    value={formatCurrency(budget.accommodation)}
                />

                <BudgetRow
                    icon={<Utensils className="h-5 w-5 text-green-600" />}
                    label="Food"
                    value={formatCurrency(budget.food)}
                />

                <BudgetRow
                    icon={<Bus className="h-5 w-5 text-orange-600" />}
                    label="Transportation"
                    value={formatCurrency(budget.transportation)}
                />

                <BudgetRow
                    icon={<Ticket className="h-5 w-5 text-purple-600" />}
                    label="Activities"
                    value={formatCurrency(budget.activities)}
                />

                <div className="my-4 border-t" />

                <BudgetRow
                    icon={<Wallet className="h-6 w-6 text-red-600" />}
                    label="Estimated Total"
                    value={formatCurrency(budget.total)}
                    bold
                />

            </div>

        </div>
    );
}

type BudgetRowProps = {
    icon: React.ReactNode;
    label: string;
    value: string;
    bold?: boolean;
};

function BudgetRow({
    icon,
    label,
    value,
    bold = false,
}: BudgetRowProps) {
    return (
        <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
                {icon}

                <span
                    className={
                        bold
                            ? "text-lg font-bold"
                            : "font-medium"
                    }
                >
                    {label}
                </span>
            </div>

            <span
                className={
                    bold
                        ? "text-xl font-bold"
                        : "font-semibold"
                }
            >
                {value}
            </span>

        </div>
    );
}