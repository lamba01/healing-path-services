"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What can I expect in my first session?",
    answer:
      "Your first session is a chance for us to get to know each other. We will talk about what brought you to therapy, your goals and what you hope to achieve. It is a relaxed, judgement-free conversation — there is no pressure to share more than you are comfortable with.",
  },
  {
    question: "How long does each therapy session last?",
    answer:
      "Each session typically lasts 50 minutes. Depending on your needs and the type of therapy, some sessions may be longer. We will discuss what works best for you during your initial consultation.",
  },
  {
    question: "How often will I need to attend sessions?",
    answer:
      "This depends on your individual needs and goals. Most clients start with weekly sessions and gradually move to bi-weekly as they progress. We will work together to find a frequency that feels right for you.",
  },
  {
    question: "Is everything I share kept confidential?",
    answer:
      "Yes, absolutely. Everything discussed in therapy is strictly confidential. The only exceptions are situations where there is a risk of harm to yourself or others, as required by law. Your privacy and safety are our top priorities.",
  },
  {
    question: "Do you offer virtual or online therapy sessions?",
    answer:
      "Yes, we offer secure virtual therapy sessions for clients who prefer to attend from the comfort of their own space. Online sessions are just as effective as in-person and offer greater flexibility for busy schedules.",
  },
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "If you are feeling stuck, overwhelmed, or simply want a safe space to explore your thoughts and emotions, therapy can help. You do not need to be in crisis to benefit — many people use therapy as a tool for personal growth and self-discovery.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT */}
        <div className="space-y-5 md:sticky md:top-28" data-aos="fade-right">
          <p className="text-coral text-sm font-semibold uppercase tracking-widest">
            FAQ
          </p>
          <h2 className="text-olive-500 text-3xl sm:text-4xl font-bold leading-snug">
            Frequently asked questions
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />
          <div className="w-12 h-1 bg-coral rounded" />
          <p className="text-gray-500 text-base leading-relaxed">
            Have questions about therapy or how it works? We have answered some
            of the most common ones below. If you don&apos;t see your question
            here, feel free to reach out — we are happy to help.
          </p>
        </div>

        {/* RIGHT — ACCORDION */}
        <div className="space-y-4" data-aos="fade-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-stone-200 rounded overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-stone-50 transition-colors duration-200"
              >
                <span className="text-olive font-semibold text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-coral text-xl font-light transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-60" : "max-h-0"}`}
              >
                <p className="px-6 py-4 text-gray-500 text-sm leading-relaxed border-t border-stone-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
