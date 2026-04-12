export default function BookingCta() {
  return (
    <section className="bg-olive-500 py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">

        {/* LABEL */}
        <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
          Take The First Step
        </p>

        {/* HEADING */}
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug max-w-2xl">
          You don&apos;t have to navigate this alone
        </h2>

        {/* DIVIDER */}
        <div className="w-12 h-1 bg-coral rounded" />

        {/* SUBTEXT */}
        <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
          Taking the first step toward healing takes courage. We are here to support you 
          — book a session today and begin your journey toward a healthier, more balanced life.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-coral text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-coral/90 transition-all duration-200 hover:scale-105">
            Book on Psychology Today
          </a>
            <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-white text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-olive-600 transition-all duration-200 hover:scale-105">
            Book on Jane App
          </a>
        </div>

      </div>
    </section>
  )
}