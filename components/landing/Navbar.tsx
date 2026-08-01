import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export function Navbar() {
    return (
        <header className="fixed top-6 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
            <nav className="flex h-16 items-center justify-between rounded-2xl border border-border/50 bg-background/80 px-6 shadow-lg backdrop-blur-xl">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Plane className="h-5 w-5 rotate-45" />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold">AI Planner</h1>
                        <p className="text-xs text-muted-foreground">
                            Smart Travel Planning
                        </p>
                    </div>
                </div>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#features"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        Features
                    </a>

                    <a
                        href="#pricing"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        Pricing
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                        Contact
                    </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost">
                        Sign In
                    </Button>

                    <Button>
                        Start Planning
                    </Button>
                </div>
            </nav>
        </header>
    );
}