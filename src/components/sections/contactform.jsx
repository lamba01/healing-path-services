import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactForm() {
  return (
    <section className="bg-olive-500 py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT — INFO */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug">
              Reach out at
            </h2>
            <div className="w-12 h-1 bg-coral-500 rounded" />
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-coral-500 shrink-0">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-coral-500 mb-1">
                  Phone
                </p>
                <a
                  href="tel:+16477603880"
                  className="text-white/80 text-base hover:text-white transition-colors duration-200"
                >
                  (647) 760-3880
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-coral-500 shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-coral-500 mb-1">
                  Email
                </p>
                <a
                  href="mailto:Morenike@healingpathpsychotherapy.com"
                  className="text-white/80 text-base hover:text-white transition-colors duration-200"
                >
                  Morenike@healingpathpsychotherapy.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-coral-500 shrink-0">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-coral-500 mb-1">
                  Location
                </p>
                <p className="text-white/80 text-base">
                  Virtual psychotherapy available across Ontario
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="bg-white rounded p-8 space-y-5">
          <h3 className="text-olive-500 text-xl font-bold">
            Send us a message
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                First Name
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="w-full border border-stone-200 rounded px-4 py-3 text-sm text-gray-700 outline-none focus:border-olive-500 transition-colors duration-200"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border border-stone-200 rounded px-4 py-3 text-sm text-gray-700 outline-none focus:border-olive-500 transition-colors duration-200"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full border border-stone-200 rounded px-4 py-3 text-sm text-gray-700 outline-none focus:border-olive-500 transition-colors duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Phone
            </label>
            <input
              type="tel"
              placeholder="(647) 000-0000"
              className="w-full border border-stone-200 rounded px-4 py-3 text-sm text-gray-700 outline-none focus:border-olive-500 transition-colors duration-200"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell us briefly what you are looking for..."
              className="w-full border border-stone-200 rounded px-4 py-3 text-sm text-gray-700 outline-none focus:border-olive-500 transition-colors duration-200 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-coral-500 text-white text-sm font-semibold uppercase tracking-widest py-3 rounded hover:bg-coral-500/90 transition-all duration-200 hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
