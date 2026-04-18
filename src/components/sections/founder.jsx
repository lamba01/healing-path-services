import Image from "next/image";
import Memberships from "@/components/sections/membership";

export default function Founder() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start gap-10 sm:gap-5">
          <div className="flex-1">
            <Image
              src="/images/founder.JPG"
              alt="Founder"
              width={400}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-olive-500 mb-4 capitalize">
              about me
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Morenike Orubuloye is a Registered Psychotherapist (qualifying)
              RPQ with 8 years of experience in the field of social services.
              She has been providing counselling services through a
              collaborative approach and solid therapeutic foundation. She
              provides a strong base for individuals and families. She is
              passionate about supporting clients to give quality services and
              improve their lives. She is a survivor of mental health
              challenges, and she integrates the approach she utilizes in those
              turbulence times. Her personal experience with mental health
              places her at a pedestal to understand and follow through with her
              clients. <br />
              <br />
              Psychotherapy for Morenike focuses on identifying and supporting
              clients to transition towards success and enriching meaningful
              life. With her background in Public Relations, she also
              understands how SWOT (Strength, Weakness, Opportunity, Threat)
              analysis can play a vital role in navigating healing. Morenike
              understands that healing takes courage, and she is willing to
              provide psychotherapy in a gentle space.
            </p>
          </div>
        </div>
        <Memberships />
      </div>
    </section>
  );
}
