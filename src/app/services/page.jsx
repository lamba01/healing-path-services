import ServicesHero from "@/components/sections/serviceshero";
import ServicesList from "@/components/sections/serviceslist";
import BookingCta from "@/components/sections/bookingCTA";

export const metadata = {
  title: "Services | Healing Path Psychotherapy Services",
  description:
    "Explore the range of psychotherapy services offered at Healing Path including individual counselling, couples therapy, family counselling, career counselling and more across Ontario, Canada.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <BookingCta />
    </main>
  );
}
