const services = [
  {
    title: "Psychometrist",
    description:
      "We provide a Psychometric test to measure client's behavior or mental attributes. These attributes may include attitudes, emotional functioning, cognitive abilities, values, interests, personality characteristics, and more. Psychometrist tests we provide are also used to evaluate client's mental health and guiding treatment decisions. This is an evidence-based approach for individuals going through anxiety, depression, low self-esteem, trauma, grief, addiction, and many more.",
  },
  {
    title: "Evaluation and assessment",
    description:
      "The comprehensive evaluation and assessment we provide are used to meet the needs of newcomers, refugee claimants, and asylum seekers. The evaluation and assessment are tailored to understand their plight and the effect on their mental health. The approach is to understand various culturally sensitive and the hardship new immigrant face.",
  },
  {
    title: "Individual counselling",
    description:
      "With Individual counselling we create therapeutic space for a one-on-one conversation. We implement a collaborative approach to ensure you reach goals whether you are facing anxiety, depression, abuse, insomnia, financial struggle, anger issues, addiction, trauma, grief, and many more. The therapist works with clients to learn skills to handle stressful situations and supports clients towards an enriching meaningful life.",
  },
  {
    title: "Couples/ Relationship counselling",
    description:
      "Our Couples counselling is a co-joined session with a professional couple therapist. Weather is marriage or individual in pre-marital relationships. The therapist uses a collaborative approach to identify the problems and adopt modalities that are appropriate for the situation. An open discussion will enable the counselor to understand the challenges, and counsellor will work with clients to implement a coping mechanism that aligns with their goals. Counsellor incorporates approaches to improve couple bonds and make their connection stronger.",
  },
  {
    title: "Family counselling",
    description:
      "Our Family counselling services ensure you achieve the change you desire. Our family therapy is tailored to support families with adolescents, teens, and children to help them stay connected. Family therapy identifies the challenges and explores family dynamics and tailoring them with appropriate modalities. Through a structured approach, we explore healthier ways to unite and strengthen family relationships.",
  },
  {
    title: "Career counselling",
    description:
      "With Career counselling, our counsellor helps you explore your strengths, interests, values, and personality to identify a realistic career path that best fits your unique needs. The career expert will guide you on resume writing, interview preparation, mentorship, and networking opportunities. The use of psychometric assessments and one on one with career counsellor will support you to gain clarity and confidence in your career. The career counselling service supports at all stages of career, including newcomers, graduates, and those transitioning careers. Scheduling a consultation with us will be a path toward success.",
  },
  {
    title: "Geriatric counselling",
    description:
      "Our Geriatric counselling is a special therapy designed to provide quality care and support for older adults, whether older adults on substance use, chronic illnesses, loss of a partner, social isolation, transitioning to retirement or assisted living facilities. Our therapy recognizes aging as a psychological task and gives them autonomy on their treatment goals. The tactics support older adults in coping with the emotional, social, and cognitive challenges of aging.",
  },
  {
    title: "School Support Counselling",
    description:
      "Our school counseling support provides mental health services, helping them navigate emotional challenges and improve their total wellbeing. The services include group therapy, individual counselling, and workshops. The aim of our services is to address issues such as anxiety, depression, peer pressure, behavioral challenges, ADHD, substance use, and hopelessness.",
  },
  {
    title: "Pastoral counselling",
    description:
      "The pastoral counseling we offer is typically a combination of therapy with spiritual care. The client is given autonomy over their treatment goals. Pastoral counselling is not limited to feelings or mental health but also how faith or belief play a vital role in the challenges clients are facing. During the therapeutic process, we can explore your relationship with God, your purpose, your values, and spiritual struggles. Our pastoral counselling services are not limited to clinical methods, but guidance that aligns your spiritual views or beliefs. During the session, the pastoral counsellor can implement prayer and scripture collaboratively with the clients. Pastoral counselling is typically offered to clients who request the services and with a religious background. The services are provided with clinical techniques to foster healing, personal growth, and transformation.",
  },
];

export default function ServicesList() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="max-w-2xl mb-14 space-y-4">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            What We Offer
          </p>
          <h2 className="text-olive-500 text-3xl sm:text-4xl font-bold leading-snug">
            Services tailored to your needs
          </h2>
          <div className="w-12 h-1 bg-coral-500 rounded" />
        </div>

        {/* SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group border border-stone-200 rounded p-6 space-y-4 hover:border-coral-500 transition-all duration-300 hover:-translate-y-1"
            >
              {/* NUMBER */}
              <span className="text-coral-500 font-bold font-serif text-3xl leading-none">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* TITLE */}
              <h3 className="text-olive-500 font-semibold text-lg">
                {service.title}
              </h3>

              {/* DIVIDER */}
              <div className="w-8 h-0.5 bg-coral-500/40 rounded" />

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
