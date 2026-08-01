-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "clerkUserId" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "budget" TEXT NOT NULL,
    "travelers" INTEGER NOT NULL,
    "preferences" TEXT,
    "itinerary" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);
