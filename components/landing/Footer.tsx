import { Plane } from "lucide-react";

const footerSections = [
    {
        title: "Product",
        links: [
            "Features",
            "Pricing",
            "Roadmap",
        ],
    },
    {
        title: "Resources",
        links: [
            "Documentation",
            "GitHub",
            "Support",
        ],
    },
    {
        title: "Company",
        links: [
            "About",
            "Contact",
            "Privacy Policy",
        ],
    },
];

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-12 md:grid-cols-4">

                    {/* Brand */}

                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                                <Plane className="h-5 w-5 rotate-45" />
                            </div>

                            <h3 className="text-xl font-bold">
                                AI Planner
                            </h3>
                        </div>

                        <p className="mt-4 text-muted-foreground">
                            Plan smarter journeys with AI-powered travel
                            recommendations and personalized itineraries.
                        </p>
                    </div>

                    {/* Links */}

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-semibold">
                                {section.title}
                            </h4>

                            <ul className="mt-4 space-y-3">

                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-muted-foreground transition-colors hover:text-primary"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    ))}

                </div>

                <div className="mt-16 border-t pt-8 text-center text-sm text-muted-foreground">
                    © 2026 AI Planner. Built with Next.js, Gemini AI and ❤️.
                </div>

            </div>
        </footer>
    );
}