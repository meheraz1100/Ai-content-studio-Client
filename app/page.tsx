import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Statistics from "@/components/home/Statistics";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Statistics />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}