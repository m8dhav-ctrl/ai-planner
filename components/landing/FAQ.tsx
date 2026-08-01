import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Is AI Planner free to use?",
        answer:
            "Yes. AI Planner offers a free version that lets you generate and save trips.",
    },
    {
        question: "Which destinations can I plan?",
        answer:
            "You can generate travel plans for almost any city or country supported by Gemini AI.",
    },
    {
        question: "Can I edit my itinerary later?",
        answer:
            "Yes. You'll be able to rename, update and manage all your saved trips.",
    },
    {
        question: "How does AI Planner work?",
        answer:
            "AI Planner uses Google's Gemini API to generate personalized travel itineraries from your destination, budget, interests and trip duration.",
    },
];

export function FAQ() {
    return (
        <section className="bg-muted/30 py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        FAQ
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                        Frequently Asked Questions
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Everything you need to know about AI Planner.
                    </p>
                </div>

                <Accordion className="mt-16">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.question}
                            value={faq.question}
                        >
                            <AccordionTrigger>
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}