import Image from "next/image";

import { PexelsPhoto } from "@/lib/pexels";

type Props = {
    destination: string;
    images: PexelsPhoto[];
};

export default function DestinationGallery({
    destination,
    images,
}: Props) {
    return (
        <section className="mt-10">
            <h2 className="mb-6 text-3xl font-bold">
                📸 Destination Gallery
            </h2>

            {images.length === 0 ? (
                <div className="rounded-3xl border bg-background p-10 text-center shadow-sm">
                    <p className="text-muted-foreground">
                        No destination images available.
                    </p>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {images.map((image) => (
                        <div
                            key={image.id}
                            className="overflow-hidden rounded-2xl shadow-md"
                        >
                            <Image
                                src={image.src.large}
                                alt={image.alt || destination}
                                width={600}
                                height={400}
                                className="h-60 w-full object-cover transition duration-300 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}