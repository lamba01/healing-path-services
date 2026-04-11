import Image from 'next/image'

export default function Founder() {
  return (
    <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <Image
              src="/images/founder.jfif"
              alt="Founder"
              width={400}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-olive mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              [Founder&apos;s Name] is a licensed psychotherapist with over [X] years of experience in providing compassionate and effective mental health support. [He/She] holds a degree in [Degree] from [University] and has completed specialized training in [Specialization].
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Founder&apos;s Name is dedicated to helping individuals navigate life&apos;s challenges and achieve lasting healing. [He/She] believes in the power of connection, understanding, and personalized care to facilitate meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
