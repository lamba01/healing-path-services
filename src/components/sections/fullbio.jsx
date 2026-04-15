import Image from "next/image";

export default function FullBio() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative w-75 h-100 md:w-95 md:h-120">
            {/* BACK IMAGE */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%]">
              <Image
                src="/images/founder.JPG"
                alt="Morenike Orubuloye"
                fill
                className="object-cover rounded"
              />
            </div>

            {/* FRONT IMAGE */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[70%] border-4 border-white">
              <Image
                src="/images/founder.JPG"
                alt="Morenike Orubuloye in session"
                fill
                sizes="10"
                className="object-cover rounded"
              />
            </div>

            {/* ACCENT */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-coral-500/30 rounded-full z-[-1]" />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-2">
          {/* <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            About Morenike
          </p> */}
          <h2 className="text-olive-500 text-3xl sm:text-4xl font-bold leading-snug">
            About Me
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />

          <p className="text-gray-500 text-base leading-relaxed">
            Morenike Orubuloye is a Registered Psychotherapist (qualifying) RPQ
            with 8 years of experience in the field of social services. She has
            been providing counselling services through a collaborative approach
            and solid therapeutic foundation. She provides a strong base for
            individuals and families. She is passionate about supporting clients
            to give quality services and improve their lives.
          </p>

          <p className="text-gray-500 text-base leading-relaxed">
            She is a survivor of mental health challenges, and she integrates
            the approach she utilizes in those turbulence times. Her personal
            experience with mental health places her at a pedestal to understand
            and follow through with her clients. Psychotherapy for Morenike
            focuses on identifying and supporting clients to transition towards
            success and enriching meaningful life.
          </p>

          <p className="text-gray-500 text-base leading-relaxed">
            With her background in Public Relations, she also understands how
            SWOT (Strength, Weakness, Opportunity, Threat) analysis can play a
            vital role in navigating healing. Morenike understands that healing
            takes courage, and she is willing to provide psychotherapy in a
            gentle space.
          </p>

          <p className="text-gray-500 text-base leading-relaxed">
            Her non-judgmental and non-blaming will help clients to disseminate
            information on their struggles and share their pain and suffering.
            She is culturally responsive and willing to learn from clients about
            how culture influences their behavior and the healing path they will
            take. Her psychotherapy services are sustainable and well-grounded.
            Morenike understands that seeking support is a journey toward change
            and healing process.
          </p>

          {/* CREDENTIALS STRIP */}
          <div className="flex flex-wrap gap-3 pt-2">
            {["RP (Qualifying)", "MACP", "MAIPR", "BSc Sociology"].map(
              (cred) => (
                <span
                  key={cred}
                  className="px-4 py-2 bg-olive-500/10 text-olive text-sm font-semibold rounded"
                >
                  {cred}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
