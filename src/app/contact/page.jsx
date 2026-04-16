import ContactHero from "@/components/sections/contacthero";
import BookingSteps from "@/components/sections/bookingsteps";
import ContactForm from "@/components/sections/contactform";

export const metadata = {
  title: "Contact | Healing Path Psychotherapy Services",
  description:
    "Get in touch with Healing Path Psychotherapy Services. Book a free 15 minute consultation call or send us a message. Virtual psychotherapy available across Ontario.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <BookingSteps />
      <ContactForm />
    </main>
  );
}
