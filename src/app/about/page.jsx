// import AboutHero from "@/sections/AboutHero"
import FullBio from "@/components/sections/fullbio";
import Qualifications from "@/components/sections/qualifications";
import Memberships from "@/components/sections/membership";
import Modalities from "@/components/sections/modalities";
import BookingCta from "@/components/sections/bookingCTA";

export const metadata = {
  title: "About Our Specialist | Healing Path Psychotherapy Services",
  description:
    "Meet Morenike Orubuloye, a Registered Psychotherapist (Qualifying) with over 8 years of experience offering warm, culturally competent therapy across Ontario.",
};

export default function AboutPage() {
  return (
    <main>
      {/* <AboutHero /> */}
      <Modalities />
      <FullBio />
      <Memberships />
      <Qualifications />
      <BookingCta />
      {/* 
      <Expertise />
      */}
    </main>
  );
}
