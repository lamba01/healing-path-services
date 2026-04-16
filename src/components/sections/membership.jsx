import Image from "next/image";

const memberships = [
  {
    name: "Ontario Association of Mental Health Professionals",
    logo: "/images/oamph.png",
  },
  {
    name: "College of Registered Psychotherapists of Ontario",
    logo: "/images/crpo.png",
  },
  {
    name: "Canadian Counselling and Psychotherapy Association",
    logo: "/images/ccpa.png",
  },
  {
    name: "Ontario Society of Registered Psychotherapists",
    logo: "/images/osr.png",
  },
];

export default function Memberships() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-2xl mb-14 space-y-4">
          {/* <p className="text-coral text-sm font-semibold uppercase tracking-widest">
            Professional Memberships
          </p> */}
          <h2 className="text-olive-500 text-3xl sm:text-4xl font-bold leading-snug">
            Professional Memberships
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap items-center justify-center gap-12">
          {memberships.map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-4">
              <div className="relative w-48 h-30">
                <Image
                  src={m.logo}
                  alt={m.name}
                  fill
                  sizes="10"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
