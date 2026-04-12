export default function Approach() {
  const pillars = [
    {
      number: "01",
      title: "Body-Centred Healing",
      description:
        "Stress and trauma live not just in the mind but in the body. We bring gentle awareness to bodily sensations, guiding the nervous system toward balance so you can release stored tension and reconnect with your natural capacity for healing.",
    },
    {
      number: "02",
      title: "Trauma-Informed Care",
      description:
        "Healing unfolds at your pace. We prioritize safety, choice and nervous system regulation, creating a space where you can explore your experiences without feeling overwhelmed.",
    },
    {
      number: "03",
      title: "Empowerment Focused",
      description:
        "Our goal is not just to help you cope but to help you grow, building self-awareness, emotional balance and a lasting sense of empowerment in your healing journey.",
    },
  ]

  return (
    <section className="bg-olive py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Approach
          </p>
          <h2 className="text-black text-3xl sm:text-4xl font-bold leading-snug mb-5">
            Healing that honours your whole self
          </h2>
          <div className="w-12 h-1 bg-coral rounded" />
        </div>

        {/* PILLARS */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="border-t-2 border-coral pt-8 space-y-4"
            >
              <span className="text-coral/50 text-5xl font-bold font-serif">
                {pillar.number}
              </span>
              <h3 className="text-black text-xl font-semibold">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}