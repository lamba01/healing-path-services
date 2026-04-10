// import Image from "next/image"

// export default function Intro() {
//   return (
//     <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 mx-auto px-6 lg:px-10 py-16">
//         <div className="">
//         <h2>Welcome to Healing Path Psychotherapy Services</h2>
//         <p>At Healing Path Psychotherapy Services, we believe that healing is not a destination but a journey 
//             — one you don&apos;t have to walk alone. Through a warm, client-centred approach, 
//             we work alongside you to uncover and transform the patterns that may be holding you back from 
//             living fully. We see mental health as deeply personal and interconnected — 
//             shaped by your mind, your body and your unique life experiences. 
//             Whether you are facing anxiety, relationship difficulties, unresolved trauma or simply 
//             feeling stuck, Healing Path offers a safe, nurturing space where real change becomes possible.
//         </p>
//         </div>
//         <div className="">
//             <Image
//                 src="/images/hero2.jpg"
//                 alt="Therapy illustration"
//                 width={520}
//                 height={560}
//                 className="object-contain w-full max-w-sm md:max-w-full"
//             />
//         </div>
//     </section>
//   )
// }


import Image from "next/image"

export default function Intro() {
  return (
    <section className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-5 lg:gap-20">

        {/* TEXT */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <p className="text-coral-500 text-sm font-semibold uppercase tracking-widest">
            Welcome To
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive leading-snug">
            Healing Path Psychotherapy Services
          </h2>
          <div className="w-12 h-1 bg-coral mx-auto md:mx-0 rounded" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            At Healing Path Psychotherapy Services, we believe that healing is not a destination but a journey, 
            one you don&apos;t have to walk alone. Through a warm, client-centred approach,
            we work alongside you to uncover and transform the patterns that may be holding you back from
            living fully.
          </p>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We see mental health as deeply personal and interconnected 
            shaped by your mind, your body and your unique life experiences.
            Whether you are facing anxiety, relationship difficulties, unresolved trauma or simply
            feeling stuck, Healing Path offers a safe, nurturing space where real change becomes possible.
          </p>
          <button className="mt-4 bg-coral text-white px-6 py-3 rounded text-sm font-semibold uppercase tracking-wide hover:bg-coral/90 transition">
            Get Started
          </button>
        </div>
        {/* IMAGE */}
<div className="flex-1 flex justify-center items-center">
  <div className="relative w-75 h-100 md:w-95 md:h-120">
    
    {/* BACK IMAGE */}
    <div className="absolute top-0 right-10 sm:left-0 w-full h-1/2">
      <Image
        src="/images/hero2.jpg"
        alt="Therapy session"
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* FRONT IMAGE */}
    <div className="absolute bottom-15 left-10 sm:-right-25 w-full sm:w-full h-1/2 ">
      <Image
        src="/images/hero1.jpg"
        alt="Therapist"
        fill
        className="object-cover rounded-lg"
      />
    </div>

  </div>
</div>

      </div>
    </section>
  )
}