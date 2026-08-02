export default function LoadingDashboard() {
    return (
        <main className="min-h-screen bg-muted/30">
            <section className="mx-auto max-w-7xl px-6 py-10">

                {/* Header */}

                <div className="mb-12 flex items-center justify-between">

                    <div>
                        <div className="h-10 w-72 animate-pulse rounded bg-muted" />

                        <div className="mt-3 h-5 w-96 animate-pulse rounded bg-muted" />
                    </div>

                    <div className="h-10 w-36 animate-pulse rounded bg-muted" />

                </div>

                {/* Statistics */}

                <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {Array.from({ length: 4 }).map((_, index) => (

                        <div
                            key={index}
                            className="rounded-2xl border bg-background p-6 shadow-sm"
                        >

                            <div className="h-8 w-8 animate-pulse rounded bg-muted" />

                            <div className="mt-5 h-8 w-16 animate-pulse rounded bg-muted" />

                            <div className="mt-3 h-4 w-28 animate-pulse rounded bg-muted" />

                        </div>

                    ))}

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {Array.from({ length: 6 }).map((_, index) => (

                        <div
                            key={index}
                            className="rounded-3xl border bg-background p-7 shadow-sm"
                        >

                            <div className="h-8 w-48 animate-pulse rounded bg-muted" />

                            <div className="mt-4 h-4 w-36 animate-pulse rounded bg-muted" />

                            <div className="mt-8 space-y-4">

                                <div className="h-4 w-full animate-pulse rounded bg-muted" />

                                <div className="h-4 w-full animate-pulse rounded bg-muted" />

                                <div className="h-4 w-full animate-pulse rounded bg-muted" />

                            </div>

                            <div className="mt-8 h-10 w-full animate-pulse rounded bg-muted" />

                            <div className="mt-3 h-10 w-full animate-pulse rounded bg-muted" />

                        </div>

                    ))}

                </div>

            </section>
        </main>
    );
}