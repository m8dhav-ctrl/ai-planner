"use client";

import { useMemo, useState, useEffect } from "react";

import TripCard from "./trip-card";
import EmptyState from "./empty-state";
import Pagination from "./pagination";

type TripSummary = {
    destination?: string;
};

type Trip = {
    id: string;
    destination: string;
    budget: string;
    travelers: number;
    preferences: string | null;
    startDate: Date;
    endDate: Date;
    itinerary: unknown;
};

type TripsGridProps = {
    trips: Trip[];
};

type Filter =
    | "all"
    | "upcoming"
    | "past"
    | "ready";

type Sort =
    | "newest"
    | "oldest"
    | "destination-asc"
    | "destination-desc"
    | "start-date";

const TRIPS_PER_PAGE = 6;

export default function TripsGrid({
    trips,
}: TripsGridProps) {
    const [search, setSearch] = useState("");

    const [filter, setFilter] =
        useState<Filter>("all");

    const [sort, setSort] =
        useState<Sort>("newest");

    const [currentPage, setCurrentPage] =
        useState(1);

    const filteredTrips = useMemo(() => {
        const today = new Date();

        const result = trips.filter((trip) => {
            let aiDestination = "";

            if (trip.itinerary) {
                try {
                    const itinerary =
                        typeof trip.itinerary === "string"
                            ? JSON.parse(trip.itinerary)
                            : trip.itinerary;

                    aiDestination =
                        (itinerary as {
                            tripSummary?: TripSummary;
                        }).tripSummary?.destination ?? "";
                } catch {
                    aiDestination = "";
                }
            }

            const searchableText = [
                trip.destination,
                aiDestination,
                trip.preferences ?? "",
                trip.budget,
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                searchableText.includes(
                    search.toLowerCase()
                );

            let matchesFilter = true;

            switch (filter) {
                case "upcoming":
                    matchesFilter =
                        trip.startDate >= today;
                    break;

                case "past":
                    matchesFilter =
                        trip.endDate < today;
                    break;

                case "ready":
                    matchesFilter =
                        Boolean(trip.itinerary);
                    break;

                default:
                    matchesFilter = true;
            }

            return (
                matchesSearch &&
                matchesFilter
            );
        });

        switch (sort) {
            case "newest":
                result.sort(
                    (a, b) =>
                        b.startDate.getTime() -
                        a.startDate.getTime()
                );
                break;

            case "oldest":
                result.sort(
                    (a, b) =>
                        a.startDate.getTime() -
                        b.startDate.getTime()
                );
                break;

            case "destination-asc":
                result.sort((a, b) =>
                    a.destination.localeCompare(
                        b.destination
                    )
                );
                break;

            case "destination-desc":
                result.sort((a, b) =>
                    b.destination.localeCompare(
                        a.destination
                    )
                );
                break;

            case "start-date":
                result.sort(
                    (a, b) =>
                        a.startDate.getTime() -
                        b.startDate.getTime()
                );
                break;
        }

        return result;
    }, [trips, search, filter, sort]);

    // Reset to page 1 whenever search/filter/sort changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search, filter, sort]);

    const totalPages = Math.ceil(
        filteredTrips.length / TRIPS_PER_PAGE
    );

    const paginatedTrips =
        filteredTrips.slice(
            (currentPage - 1) *
            TRIPS_PER_PAGE,
            currentPage * TRIPS_PER_PAGE
        );

    return (
        <>
            {/* Filters + Sorting */}

            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div className="flex flex-wrap gap-3">

                    {[
                        ["all", "All"],
                        ["upcoming", "Upcoming"],
                        ["past", "Past"],
                        ["ready", "AI Ready"],
                    ].map(([value, label]) => (
                        <button
                            key={value}
                            onClick={() =>
                                setFilter(
                                    value as Filter
                                )
                            }
                            className={`rounded-full border px-4 py-2 transition ${filter === value
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted"
                                }`}
                        >
                            {label}
                        </button>
                    ))}

                </div>

                <select
                    value={sort}
                    onChange={(e) =>
                        setSort(
                            e.target.value as Sort
                        )
                    }
                    className="rounded-xl border bg-background px-4 py-2"
                >
                    <option value="newest">
                        Newest
                    </option>

                    <option value="oldest">
                        Oldest
                    </option>

                    <option value="destination-asc">
                        Destination A–Z
                    </option>

                    <option value="destination-desc">
                        Destination Z–A
                    </option>

                    <option value="start-date">
                        Start Date
                    </option>
                </select>

            </div>

            {/* Search */}

            <div className="mb-8">

                <input
                    type="text"
                    placeholder="🔍 Search destination, budget or preferences..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                    className="w-full rounded-xl border bg-background px-4 py-3 outline-none focus:border-primary"
                />

            </div>

            {/* Results */}

            {paginatedTrips.length ===
                0 ? (
                <EmptyState
                    title="No Trips Found"
                    description="Try changing your search keywords or filters to find matching trips."
                />
            ) : (
                <>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {paginatedTrips.map(
                            (trip) => (
                                <TripCard
                                    key={trip.id}
                                    trip={trip}
                                />
                            )
                        )}

                    </div>

                    <Pagination
                        currentPage={
                            currentPage
                        }
                        totalPages={
                            totalPages
                        }
                        onPageChange={
                            setCurrentPage
                        }
                    />
                </>
            )}
        </>
    );
}