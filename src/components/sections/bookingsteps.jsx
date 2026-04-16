const steps = [
  {
    number: "01",
    title: "Book a Free 15 Minute Consultation Call.",
    description:
      "Email us and give a brief glimpse of what you are looking for Or book your free consult here with us",
  },
  {
    number: "02",
    title: "Complete Intake and Consent Form.",
    description:
      "Complete intake and consent form before your first session so we don't have to complete it in session (we want to be proactive!). This will let your therapist know more about you and what you are looking for.",
  },
  {
    number: "03",
    title: "Connect With Your Therapist Online or by Phone.",
    description: "An email with the Jane app meeting link will be sent to you.",
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-2xl mb-14 space-y-4">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            How It Works
          </p>
          <h2 className="text-olive-500 text-3xl sm:text-4xl font-bold leading-snug">
            Getting started is simple
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />
        </div>

        {/* STEPS */}
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t-2 border-coral-500 pt-8 space-y-4"
            >
              <span className="text-coral-500/50 text-5xl font-bold font-serif">
                {step.number}
              </span>
              <h3 className="text-olive-500 font-semibold text-lg leading-snug">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
