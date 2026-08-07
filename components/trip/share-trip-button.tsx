"use client";

import { Share2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

type Props = {
    destination: string;
};

export default function ShareTripButton({
    destination,
}: Props) {
    async function handleShare() {
        const url = window.location.href;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: `My Trip to ${destination}`,
                    text: `Check out my AI-generated trip to ${destination}!`,
                    url,
                });

                return;
            } catch {
                // User cancelled sharing
                return;
            }
        }

        try {
            await navigator.clipboard.writeText(url);

            toast.success("Trip link copied to clipboard!");
        } catch {
            toast.error("Unable to copy the trip link.");
        }
    }

    return (
        <Button
            variant="outline"
            onClick={handleShare}
        >
            <Share2 className="mr-2 h-4 w-4" />
            Share
        </Button>
    );
}