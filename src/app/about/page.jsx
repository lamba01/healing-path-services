// import AboutHero from "@/sections/AboutHero"
import FullBio from "@/components/sections/fullbio";
import Qualifications from "@/components/sections/qualifications";
import Memberships from "@/components/sections/membership";
import Modalities from "@/components/sections/modalities";
// import Expertise from "@/sections/Expertise"
// import BookingCta from "@/sections/BookingCta"

export const metadata = {
  title: "About Morenike | Healing Path Psychotherapy Services",
  description:
    "Meet Morenike Orubuloye, a Registered Psychotherapist (Qualifying) with over 8 years of experience offering warm, culturally competent therapy across Ontario.",
};

export default function AboutPage() {
  return (
    <main>
      {/* <AboutHero /> */}
      <Modalities />
      <FullBio />
      <Qualifications />
      <Memberships />

      {/* 
      <Expertise />
      <BookingCta /> */}
    </main>
  );
}
