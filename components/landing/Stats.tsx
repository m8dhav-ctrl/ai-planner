const stats = [
    {
        value: "10K+",
        label: "Trips Planned",
    },
    {
        value: "95%",
        label: "Happy Travelers",
    },
    {
        value: "120+",
        label: "Destinations",
    },
    {
        value: "24/7",
        label: "AI Assistance",
    },
];

export function Stats() {
    return (
        <section className="mx-auto max-w-6xl px-6 pb-24">
            <div className="grid gap-6 rounded-3xl border bg-card p-8 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="text-center"
                    >
                        <h3 className="text-4xl font-bold text-primary">
                            {stat.value}
                        </h3>

                        <p className="mt-2 text-muted-foreground">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}