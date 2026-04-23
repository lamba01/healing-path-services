import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-5 lg:gap-20">
        {/* TEXT */}
        <div
          className="flex-1 space-y-3 text-left md:text-left"
          data-aos="fade-left"
        >
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            Welcome To
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-500 leading-snug">
            Healing Path Psychotherapy Services
          </h2>
          <div className="w-12 h-1 bg-coral-500  md:mx-0 rounded" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At Healing Path Psychotherapy services, Morenike Orubuloye, MAIPR,
            MACP, RP (Q) provides a warm, accepting, culturally competent,
            collaborative approach and nonjudgmental space where you can learn
            to understand yourself. The services will help you identify and heal
            the patterns in your life that are holding you back.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Morenike Orubuloye, MAIPR, MACP, RP (Q) takes a holistic approach to
            recognize how these challenges impact daily life. Whether you are
            struggling with personal challenges, relationship struggle, identify
            as Autistic or as someone with ADHD, psychotherapy provides an
            empathy and compassionate space for healing. With my services, I am
            here to support and join you in the fight for understanding and
            acceptance.
          </p>
          <button className="mt-4 bg-coral text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wide hover:bg-coral/90 transition">
            Get Started
          </button>
        </div>
        {/* IMAGE */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-75 h-100 md:w-95 md:h-120">
            <div className="absolute top-0 right-10 sm:left-0 w-full h-1/2">
              <Image
                src="/images/hero2.jpg"
                alt="Therapy session"
                fill
                data-aos="fade-right"
                // sizes="10"
                className="object-cover rounded-lg"
              />
            </div>

            <div className="absolute bottom-15 left-10 sm:-right-25 w-full sm:w-full h-1/2 ">
              <Image
                src="/images/hero1.jpg"
                alt="Therapist"
                fill
                data-aos="fade-right"
                // sizes="10"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
