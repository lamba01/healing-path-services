import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-5">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </p>
          <h2 className="text-olive-500 text-3xl sm:text-4xl font-bold leading-snug">
            Have questions? We&apos;re here to help
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />
          <p className="text-gray-500 text-base leading-relaxed">
            Whether you are unsure about therapy or just want to learn more
            about our services, feel free to reach out. We are happy to answer
            any questions you may have before you take the next step.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-8 py-3 bg-coral-500 text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-coral-500``/90 transition-all duration-200 hover:scale-105"
          >
            Send Us a Message
          </Link>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-coral-500/10 flex items-center justify-center text-coral shrink-0">
              <FiPhone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-500 mb-1">
                Phone
              </p>
              <a
                href="tel:+16477603880"
                className="text-gray-500 text-base hover:text-coral-500 transition-colors duration-200"
              >
                (647) 760-3880
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-coral-500/10 flex items-center justify-center text-coral shrink-0">
              <FiMail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-500 mb-1">
                Email
              </p>
              <a
                href="mailto:Morenike@healingpathpsychotherapy.com"
                className="text-gray-500 text-base hover:text-coral-500 transition-colors duration-200"
              >
                Morenike@healingpathpsychotherapy.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-coral-500/10 flex items-center justify-center text-coralshrink-0">
              <FiMapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-olive-500 mb-1">
                Location
              </p>
              <p className="text-gray-500 text-base">
                Virtual psychotherapy available across Ontario
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
