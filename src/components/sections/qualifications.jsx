export default function Qualifications() {
  const qualifications = [
    { degree: "BSc Sociology" },
    { degree: "MA International Public Relations" },
    { degree: "MA Counselling Psychology" },
    { degree: "Registered Psychotherapist Qualifying RP (Q)" },
  ];

  return (
    <section className="bg-olive-500 py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-2xl mb-14 space-y-4">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            Education & Credentials
          </p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
            Qualifications
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {qualifications.map((q, index) => (
            <div
              key={q.degree}
              className="border border-white/20 rounded p-6 hover:border-coral-500 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-coral-500 font-bold font-serif text-3xl leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white font-semibold text-lg leading-snug">
                  {q.degree}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
