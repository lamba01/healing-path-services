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
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Morenike Orubuloye",
  jobTitle: "Registered Psychotherapist (Qualifying)",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Healing Path Psychotherapy Services",
    url: "https://hppstherapy.com",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "RP (Qualifying)",
      recognizedBy: { "@type": "Organization", name: "CRPO" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "MACP",
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "MAIPR",
    },
  ],
  knowsAbout: [
    "Psychotherapy",
    "ADHD",
    "Autism",
    "Trauma",
    "Grief",
    "Couples Counselling",
    "Newcomer Support",
    "Pastoral Counselling",
  ],
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
