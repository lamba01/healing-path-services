import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Founder from "@/components/sections/founder";
import Approach from "@/components/sections/approach";
import BookingCta from "@/components/sections/bookingCTA";
import FAQ from "@/components/sections/faqs";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Intro />
      <Founder />
      <Services />
      <Approach />
      <BookingCta />
      <FAQ />
      <Contact />
    </main>
  );
}
