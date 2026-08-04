"use client";

import { useMemo, useState } from "react";
import {
    Check,
    RotateCcw,
    PartyPopper,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
    items: string[];
};

export default function PackingChecklist({
    items,
}: Props) {
    const [checked, setChecked] = useState<number[]>([]);

    function toggle(index: number) {
        setChecked((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    }

    function reset() {
        setChecked([]);
    }

    const progress = useMemo(() => {
        if (items.length === 0) return 0;

        return Math.round(
            (checked.length / items.length) * 100
        );
    }, [checked, items]);

    const completed =
        checked.length === items.length &&
        items.length > 0;

    return (
        <div className="mt-10 rounded-3xl border bg-background p-8 shadow-sm">

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>

                    <h2 className="text-3xl font-bold">
                        🎒 Packing Checklist
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        {checked.length} / {items.length} packed
                    </p>

                </div>

                <Button
                    variant="outline"
                    onClick={reset}
                >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                </Button>

            </div>

            <div className="mb-8">

                <div className="h-3 overflow-hidden rounded-full bg-muted">

                    <div
                        className="h-full rounded-full bg-green-600 transition-all duration-500"
                        style={{
                            width: `${progress}%`,
                        }}
                    />

                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                    {progress}% complete
                </p>

            </div>

            {completed && (

                <div className="mb-8 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-700">

                    <PartyPopper className="h-6 w-6" />

                    <span className="font-semibold">
                        Great job! You're ready for your trip!
                    </span>

                </div>

            )}

            <div className="space-y-3">

                {items.map((item, index) => {

                    const done = checked.includes(index);

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => toggle(index)}
                            className={`flex w-full items-center gap-3 rounded-xl border p-4 transition ${done
                                    ? "border-green-500 bg-green-50"
                                    : "hover:bg-muted"
                                }`}
                        >

                            <div
                                className={`flex h-6 w-6 items-center justify-center rounded-full border ${done
                                        ? "border-green-600 bg-green-600 text-white"
                                        : ""
                                    }`}
                            >
                                {done && (
                                    <Check className="h-4 w-4" />
                                )}
                            </div>

                            <span
                                className={
                                    done
                                        ? "font-medium line-through"
                                        : "font-medium"
                                }
                            >
                                {item}
                            </span>

                        </button>
                    );

                })}

            </div>

        </div>
    );
}