import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export async function Navbar() {
    const { userId } = await auth();

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        ✈️
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">AI Planner</h1>
                        <p className="text-xs text-muted-foreground">
                            Smart Travel Planning
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="hidden gap-8 md:flex">
                    <a href="#features" className="text-sm hover:text-primary">
                        Features
                    </a>

                    <a href="#pricing" className="text-sm hover:text-primary">
                        Pricing
                    </a>

                    <a href="#contact" className="text-sm hover:text-primary">
                        Contact
                    </a>
                </div>

                {/* Authentication */}
                <div className="flex items-center gap-3">
                    {userId ? (
                        <>
                            <Link href="/dashboard">
                                <Button>Dashboard</Button>
                            </Link>

                            <UserButton afterSignOutUrl="/" />
                        </>
                    ) : (
                        <>
                            <Link href="/sign-in">
                                <Button variant="ghost">
                                    Sign In
                                </Button>
                            </Link>

                            <Link href="/sign-up">
                                <Button>
                                    Start Planning
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}