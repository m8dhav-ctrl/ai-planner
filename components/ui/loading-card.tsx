"use client";

export default function LoadingCard() {
    return (
        <div className="mt-10 animate-pulse rounded-3xl border bg-background p-8 shadow-md">
            <div className="mb-6 h-8 w-56 rounded bg-muted" />

            <div className="grid gap-4 md:grid-cols-3">
                <div className="h-28 rounded-2xl bg-muted" />
                <div className="h-28 rounded-2xl bg-muted" />
                <div className="h-28 rounded-2xl bg-muted" />
            </div>
        </div>
    );
}