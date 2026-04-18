import ServiceBtn from "../ui/serviceBtn";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-olive flex items-center sm:mt-10 py-30 sm:py-10 mt-0 bg-olive-500">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* TEXT */}
        <div className="space-y-6 text-left md:text-left">
          <h1 className="text-white text-3xl lg:text-5xl font-bold leading-tight">
            Having the right support can create a
            <span className="text-coral-500"> positive path</span>
          </h1>
          <p className="text-white/80 text-sm font-medium sm:text-lg">
            Psychotherapy serves as a tool to navigate these challenges, gain
            clarity, and move forward. It offers a space to alleviate human
            suffering, pain, and create an enriching meaningful life.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-5 justify-start">
            <ServiceBtn />
            <Link href="/contact">
              <button
                className="py-3 px-7 w-full cursor-pointer capitalize border rounded border-ink text-ink text-sm font-medium
              hover:bg-ink text-white transition-all duration-200 hover:bg-olive-600 hover:scale-105"
              >
                contact us
              </button>
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/hero3.png"
            alt="Therapy illustration"
            width={520}
            height={560}
            className="object-contain w-full max-w-sm md:max-w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
