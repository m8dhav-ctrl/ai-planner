import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";
import { Stats } from "@/components/landing/Stats";
import { PlannerPreview } from "@/components/landing/PlannerPreview";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <PlannerPreview />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}