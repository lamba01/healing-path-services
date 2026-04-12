import Hero from "@/components/sections/hero";
import Intro from "@/components/sections/intro";
import Founder from "@/components/sections/founder";
import Approach from "@/components/sections/approach";
import BookingCta from "@/components/sections/bookingCTA";
import FAQ from "@/components/sections/faqs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Founder />
      <Approach />
      <BookingCta />
      <FAQ />
    </div>
  );
}


