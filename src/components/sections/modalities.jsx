const modalities = [
  "Cognitive Behavior Therapy",
  "Internal Family System",
  "Solution Focused Therapy",
  "Gottman Therapy",
  "Dialectical Behavior Therapy",
  "Structural Family Therapy",
  "Trauma Focused Psychotherapy",
  "Emotionally Focused Therapy",
  "Acceptance Commitment Therapy",
  "Bowenian Therapy",
];

const expertise = [
  "Parenting",
  "New immigrants",
  "Refugees",
  "Grief/Trauma",
  "Financial struggle",
  "Self Esteem",
  "Stress",
  "Substance Use",
  "Addiction",
  "Teen Violence",
  "Neurodivergence exceptionalities",
  "Divorce",
  "Domestic Abuse/Violence",
  "Couple's conflict",
  "Family Conflict",
  "Autism / ADHD",
  "Social Anxiety",
  "Career Guidance",
  "Coping Mechanism",
];

export default function ModalitiesExpertise() {
  return (
    <section className="bg-olive-500 py-30 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* MODALITIES */}
          <div className="space-y-6">
            <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
              Modalities
            </p>
            <h2 className="text-white text-3xl font-bold leading-snug">
              Modalities
            </h2>
            <div className="w-12 h-1 bg-coral-500 rounded" />
            <div className="flex flex-col gap-3">
              {modalities.map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-3 border-b border-white/10 pb-3"
                >
                  <span className="w-2 h-2 rounded-full bg-coral-500 shrink-0" />
                  <p className="text-white/80 text-sm">{m}</p>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERTISE */}
          <div className="space-y-6">
            <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
              Specializations
            </p>
            <h2 className="text-white text-3xl font-bold leading-snug">
              Areas of Expertise
            </h2>
            <div className="w-12 h-1 bg-coral-500 rounded" />
            <div className="flex flex-wrap gap-3">
              {expertise.map((e) => (
                <span
                  key={e}
                  className="px-4 py-2 border border-white/20 text-white/80 text-sm rounded hover:border-coral hover:text-white transition-all duration-200"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
