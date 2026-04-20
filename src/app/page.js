import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Founder from "@/components/sections/founder";
import Approach from "@/components/sections/approach";
import BookingCta from "@/components/sections/bookingCTA";
import FAQ from "@/components/sections/faqs";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";
import Modalities from "@/components/sections/modalities";

export const metadata = {
  title: "Healing Path Psychotherapy Services | Toronto, Ontario",
  description:
    "Healing Path Psychotherapy offers warm, culturally competent and collaborative psychotherapy services across Ontario. Book a free 15 minute consultation today.",
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Intro />
      <Founder />
      <Services />
      <Modalities />
      <Approach />
      <BookingCta />
      <FAQ />
      <Contact />
    </main>
  );
}
