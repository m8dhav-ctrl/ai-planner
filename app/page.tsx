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
    <main className="relative min-h-screen overflow-hidden bg-background">

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-0 top-80 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

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