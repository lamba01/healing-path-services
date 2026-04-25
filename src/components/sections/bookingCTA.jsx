import Image from "next/image";

export default function BookingCta() {
  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden">
      {/* BG IMAGE */}
      <Image
        src="/images/bookingcta.jpg"
        alt="Begin your healing journey"
        fill
        className="object-cover object-center"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-olive-500/60" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — TEXT */}
        <div className="space-y-6">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            Take The First Step
          </p>

          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
            You don&apos;t have to navigate this alone
          </h2>

          <div className="w-12 h-1 bg-coral-500 rounded" />

          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Taking the first step toward healing takes courage. We are here to
            support you. Book a session today and begin your journey toward a
            healthier, more balanced life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="/contact"
              className="px-8 py-3 bg-coral-500 text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-coral-500/90 transition-all duration-200 hover:scale-105"
            >
              Book a session today
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-white hover:text-olive-500 transition-all duration-200 hover:scale-105"
            >
              Book on Jane App
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
