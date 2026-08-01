import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";
import { Stats } from "@/components/landing/Stats";
import { PlannerPreview } from "@/components/landing/PlannerPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <PlannerPreview />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}