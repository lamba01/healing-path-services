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
  title:
    "Virtual Psychotherapy Ontario | Registered Psychotherapist | Healing Path Psychotherapy Services",
  description:
    "Healing Path Psychotherapy offers warm, culturally competent and collaborative psychotherapy services across Ontario. Book a free 15 minute consultation today.",
  keywords: [
    "psychotherapy Ontario",
    "virtual therapy Ontario",
    "culturally competent therapist Toronto",
    "newcomers therapy Ontario",
    "ADHD therapy Ontario",
    "trauma therapy Ontario",
    "Black therapist Ontario",
  ],
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Healing Path Psychotherapy Services",
  url: "https://hppstherapy.com",
  telephone: "+16477603880",
  email: "morenike@hppstherapy.com",
  description:
    "Virtual psychotherapy across Ontario. Individual, couples, family, career and pastoral counselling. Specialising in ADHD, autism, newcomers, refugees, and trauma.",
  areaServed: {
    "@type": "State",
    name: "Ontario",
    addressCountry: "CA",
  },
  priceRange: "$$",
  medicalSpecialty: "Psychiatry",
  availableService: [
    { "@type": "MedicalTherapy", name: "Individual Counselling" },
    { "@type": "MedicalTherapy", name: "Couples Counselling" },
    { "@type": "MedicalTherapy", name: "Family Counselling" },
    { "@type": "MedicalTherapy", name: "Pastoral Counselling" },
    { "@type": "MedicalTherapy", name: "Career Counselling" },
    { "@type": "MedicalTherapy", name: "Geriatric Counselling" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What can I expect in my first session?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your first session is a chance for us to get to know each other. We will talk about what brought you to therapy, your goals and what you hope to achieve. It is a relaxed, judgement-free conversation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer virtual or online therapy sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer secure virtual therapy sessions for clients across Ontario who prefer to attend from the comfort of their own space.",
      },
    },
    {
      "@type": "Question",
      name: "Is everything I share kept confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. Everything discussed in therapy is strictly confidential, with the only exceptions being situations where there is a risk of harm as required by law.",
      },
    },
    {
      "@type": "Question",
      name: "How often will I need to attend sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients start with weekly sessions and gradually move to bi-weekly as they progress. We work together to find a frequency that feels right for you.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
