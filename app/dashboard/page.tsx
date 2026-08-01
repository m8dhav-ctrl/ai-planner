import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
    const { userId } = await auth();

    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
                <div>
                    <h1 className="text-4xl font-bold">
                        Welcome to AI Planner 👋
                    </h1>

                    <p className="mt-2 text-muted-foreground">
                        You're successfully authenticated.
                    </p>

                    <p className="mt-4 text-sm">
                        User ID: {userId}
                    </p>
                </div>

                <UserButton
                    afterSignOutUrl="/"
                />
            </div>

            <div className="mx-auto mt-16 max-w-7xl rounded-2xl border p-10">
                <h2 className="text-2xl font-semibold">
                    Dashboard
                </h2>

                <p className="mt-4 text-muted-foreground">
                    In the next milestone, this is where users will:
                </p>

                <ul className="mt-6 list-disc space-y-2 pl-6 text-muted-foreground">
                    <li>Create AI-powered trips</li>
                    <li>View saved itineraries</li>
                    <li>Edit trips</li>
                    <li>Delete trips</li>
                    <li>Explore maps</li>
                </ul>
            </div>
        </main>
    );
}