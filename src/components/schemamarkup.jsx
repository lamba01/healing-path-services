export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Healing Path Psychotherapy Services",
    description: "Culturally competent virtual psychotherapy across Ontario",
    url: "https://hppstherapy.com",
    telephone: "+16477603880",
    email: "morenike@hppstherapy.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    areaServed: {
      "@type": "State",
      name: "Ontario",
    },
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Morenike Orubuloye",
      jobTitle: "Registered Psychotherapist (Qualifying)",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
